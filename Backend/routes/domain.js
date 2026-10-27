var express = require('express');
var router = express.Router();
var dnsPacket = require('dns-packet');
var dgram = require('dgram');
const { performance } = require('perf_hooks');

const DNS_SERVER = '172.28.142.244';
const DNS_PORT = 5335;

function checkDNSSEC(domain) {
    return new Promise((resolve) => {

        const socket = dgram.createSocket('udp4');
        const startTime = performance.now();

        // ✅ NAYA QUERY CODE (EDNS aur DO bit ke sath)
        const query = dnsPacket.encode({
            type: 'query',
            id: Math.floor(Math.random() * 65535),
            flags: dnsPacket.RECURSION_DESIRED,
            questions: [{ type: 'A', name: domain }],
            additionals: [
                {
                    type: 'OPT',
                    name: '.',
                    udpPayloadSize: 4096,
                    flags: dnsPacket.DNSSEC_OK // 👈 YE LINE SABSE IMPORTANT HAI
                }
            ]
        });

        // ✅ 1. Timeout ko variable mein save karo
        let timeoutId = setTimeout(() => {
            socket.close();
            resolve({ status: "BOGUS", error: "DNS Timeout" });
        }, 3000);

        socket.send(query, DNS_PORT, DNS_SERVER, (err) => {
            if (err) {
                clearTimeout(timeoutId); // ✅ Error aaye toh timer band karo
                socket.close();
                return resolve({ status: "BOGUS", error: "Connection failed" });
            }
        });

        socket.on('message', (msg) => {
            clearTimeout(timeoutId); // ✅ Response aate hi timer band karo
            const latency = Math.round(performance.now() - startTime);
            const response = dnsPacket.decode(msg);
            socket.close();
            console.log("🔥 DNS Flags:", response.flags);

            if (response.answers && response.answers.length > 0) {
                let status = "INSECURE";
                // ✅ check karo ki flags mein AD (32) bit set hai ya nahi
                if ((response.flags & dnsPacket.AUTHENTIC_DATA) || (response.flags & 0x20)) {
                    status = "SECURE";
                }
                const ips = response.answers
                    .filter(ans => ans.type === 'A')
                    .map(ans => ans.data);

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

        const result = await checkDNSSEC(domainName);

        const cpuDiff = process.cpuUsage(startUsage);
        const cpuUsedMs = ((cpuDiff.user + cpuDiff.system) / 1000).toFixed(2); // Decimal dikhane ke liye
        const memoryUserMB = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);

        if (result.status === "BOGUS") {
            return res.status(400).json({
                status: "BOGUS",
                message: result.error || "DNSSEC Validation Failed or Domain Not Found!"
            });
        }

        return res.status(202).json({
            domain: domainName,
            status: result.status,
            message: "IP Get SuccessFully",
            ip: result.ip,
            latency: result.latency,
            cpuUsed: cpuUsedMs,
            memoryUsed: memoryUserMB
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            status: "BOGUS",
            message: "Internal Server Error"
        });
    }
});

module.exports = router;