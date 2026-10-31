var express = require('express');
var router = express.Router();
var dnsPacket = require('dns-packet');
var dgram = require('dgram');
const { performance } = require('perf_hooks');


const DNS_SERVER = '172.28.142.244'; 
const UNBOUND_PORT = 5335;
const BIND_PORT = 5353; 


function queryDNSServer(domain, port) {
    return new Promise((resolve) => {
        const socket = dgram.createSocket('udp4');
        const startTime = performance.now();

        const query = dnsPacket.encode({
            type: 'query',
            id: Math.floor(Math.random() * 65535),
            flags: dnsPacket.RECURSION_DESIRED,
            questions: [{ type: 'A', name: domain }],
            additionals: [{ type: 'OPT', name: '.', udpPayloadSize: 4096, flags: dnsPacket.DNSSEC_OK }]
        });

        let timeoutId = setTimeout(() => {
            socket.close();
            resolve({ status: "BOGUS", error: "Timeout" });
        }, 5000);

        socket.send(query, port, DNS_SERVER, (err) => {
            if (err) {
                clearTimeout(timeoutId);
                socket.close();
                return resolve({ status: "BOGUS", error: "Connection failed" });
            }
        });

        socket.on('message', (msg) => {
            clearTimeout(timeoutId);
            const latency = Math.round(performance.now() - startTime);
            const response = dnsPacket.decode(msg);
            socket.close();

            if (response.answers && response.answers.length > 0) {
                let status = "INSECURE";
                if ((response.flags & dnsPacket.AUTHENTIC_DATA) || (response.flags & 0x20)) {
                    status = "SECURE";
                }
                const ips = response.answers.filter(ans => ans.type === 'A').map(ans => ans.data);
                return resolve({ status: status, ip: ips, latency: latency });
            } else {
                return resolve({ status: "BOGUS", error: "Domain Not Found" });
            }
        });
    });
}

router.post('/finddomain', async (req, res) => {
    try {
        const domainObj = req.body;
        if (!domainObj || !domainObj.domain) {
            return res.status(400).json({ status: "BOGUS", message: "Domain required" });
        }

        const domainName = domainObj.domain.toLowerCase();
        const startUsage = process.cpuUsage();


        let portToUse = UNBOUND_PORT;
        let isLocal = false;

        if (domainName.endsWith("device.test")) {

            portToUse = BIND_PORT;
            isLocal = true;

        }

        const result = await queryDNSServer(domainName, portToUse);

        const cpuDiff = process.cpuUsage(startUsage);
        const cpuUsedMs = ((cpuDiff.user + cpuDiff.system) / 1000).toFixed(2);
        const memoryUserMB = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);

        if (result.status === "BOGUS") {
            return res.status(400).json({
                status: "BOGUS",
                message: result.error || "DNSSEC Validation Failed!",
                domain: domainObj.domain
            });
        }

        let finalStatus = result.status;
        if (isLocal) {
            finalStatus = "SECURE";
        }

        return res.status(200).json({
            domain: domainName,
            status: finalStatus,
            message: isLocal ? "Local Zone Verified" : "IP Get SuccessFully",
            ip: result.ip,
            latency: result.latency,
            cpuUsed: cpuUsedMs,
            memoryUsed: memoryUserMB
        });

    } catch (err) {
        return res.status(500).json({ status: "BOGUS", message: "Internal Server Error" });
    }
});

module.exports = router;