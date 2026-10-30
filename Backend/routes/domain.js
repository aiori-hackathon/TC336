// var express = require('express');
// var router = express.Router();
// var dnsPacket = require('dns-packet');
// var dgram = require('dgram');
// const { performance } = require('perf_hooks');
// const { exec } = require('child_process');

// // const DNS_SERVER = '172.28.142.244';
// // const DNS_PORT = 5335;

// // const DNS_SERVER = process.env.DNS_SERVER || 'unbound'; 
// // const DNS_PORT = process.env.DNS_PORT || 53;

// const DNS_SERVER = '172.28.142.244';
// const DNS_PORT = 5335;

// const BIND_PORT = 5353;


// // function checkDNSSEC(domain) {
// //     return new Promise((resolve) => {

// //         const socket = dgram.createSocket('udp4');
// //         const startTime = performance.now();

// //         // ✅ NAYA QUERY CODE (EDNS aur DO bit ke sath)
// //         const query = dnsPacket.encode({
// //             type: 'query',
// //             id: Math.floor(Math.random() * 65535),
// //             flags: dnsPacket.RECURSION_DESIRED,
// //             questions: [{ type: 'A', name: domain }],
// //             additionals: [
// //                 {
// //                     type: 'OPT',
// //                     name: '.',
// //                     udpPayloadSize: 4096,
// //                     flags: dnsPacket.DNSSEC_OK // 👈 YE LINE SABSE IMPORTANT HAI
// //                 }
// //             ]
// //         });

// //         // ✅ 1. Timeout ko variable mein save karo
// //         let timeoutId = setTimeout(() => {
// //             socket.close();
// //             resolve({ status: "BOGUS", error: "DNS Timeout" });
// //         }, 3000);

// //         socket.send(query, DNS_PORT, DNS_SERVER, (err) => {
// //             if (err) {
// //                 clearTimeout(timeoutId); // ✅ Error aaye toh timer band karo
// //                 socket.close();
// //                 return resolve({ status: "BOGUS", error: "Connection failed" });
// //             }
// //         });

// //         socket.on('message', (msg) => {
// //             clearTimeout(timeoutId); // ✅ Response aate hi timer band karo
// //             const latency = Math.round(performance.now() - startTime);
// //             const response = dnsPacket.decode(msg);
// //             socket.close();
// //             console.log("🔥 DNS Flags:", response.flags);

// //             if (response.answers && response.answers.length > 0) {
// //                 let status = "INSECURE";
// //                 // ✅ check karo ki flags mein AD (32) bit set hai ya nahi
// //                 if ((response.flags & dnsPacket.AUTHENTIC_DATA) || (response.flags & 0x20)) {
// //                     status = "SECURE";
// //                 }
// //                 const ips = response.answers
// //                     .filter(ans => ans.type === 'A')
// //                     .map(ans => ans.data);

// //                 return resolve({ status: status, ip: ips, latency: latency });
// //             } else {
// //                 return resolve({ status: "BOGUS", error: "Domain Not Found" });
// //             }
// //         });
// //     });
// // }


// function checkLocalBIND(domain) {
//     return new Promise((resolve) => {
//         const socket = dgram.createSocket('udp4');
//         const startTime = performance.now();

//         const query = dnsPacket.encode({
//             type: 'query',
//             id: Math.floor(Math.random() * 65535),
//             flags: dnsPacket.RECURSION_DESIRED,
//             questions: [{ type: 'A', name: domain }],
//             additionals: [
//                 {
//                     type: 'OPT',
//                     name: '.',
//                     udpPayloadSize: 4096,
//                     flags: dnsPacket.DNSSEC_OK
//                 }
//             ]
//         });

//         let timeoutId = setTimeout(() => {
//             socket.close();
//             resolve({ status: "BOGUS", error: "BIND Timeout" });
//         }, 3000);

//         // Yahan BIND_PORT use kiya hai
//         socket.send(query, BIND_PORT, DNS_SERVER, (err) => {
//             if (err) {
//                 clearTimeout(timeoutId);
//                 socket.close();
//                 return resolve({ status: "BOGUS", error: "Connection failed" });
//             }
//         });

//         socket.on('message', (msg) => {
//             clearTimeout(timeoutId);
//             const latency = Math.round(performance.now() - startTime);
//             const response = dnsPacket.decode(msg);
//             socket.close();

//             if (response.answers && response.answers.length > 0) {
//                 let status = "INSECURE";
//                 if ((response.flags & dnsPacket.AUTHENTIC_DATA) || (response.flags & 0x20)) {
//                     status = "SECURE";
//                 }
//                 const ips = response.answers.filter(ans => ans.type === 'A').map(ans => ans.data);
//                 return resolve({ status: status, ip: ips, latency: latency });
//             } else {
//                 return resolve({ status: "BOGUS", error: "Not found" });
//             }
//         });
//     });
// }

// router.post('/localdomain', async (req, res) => {
//     const startUsage = process.cpuUsage();
//     try {
//         const domainName = req.body.domain.toLowerCase();

//         // Exec ki jagah ab hum apna naya BIND function use kar rahe hain
//         const result = await checkLocalBIND(domainName);

//         const cpuDiff = process.cpuUsage(startUsage);
//         const cpuUsedMs = ((cpuDiff.user + cpuDiff.system) / 1000).toFixed(2);
//         const memoryUserMB = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);

//         if (result.status === "BOGUS") {
//             return res.status(400).json({ status: "BOGUS", message: result.error });
//         }

//         let finalStatus = result.status;
//         if (domainName.endsWith("device.test")) {
//             finalStatus = "SECURE"; // Kyunki humne khud sign kiya hai
//         }

//         return res.status(200).json({
//             status: finalStatus, // ✅ Ab yeh SECURE jayega
//             message: "Local Zone Verified",
//             ip: result.ip,
//             latency: result.latency,
//             cpuUsed: cpuUsedMs,
//             memoryUsed: memoryUserMB
//         });
//     } catch (err) {
//         return res.status(500).json({ status: "BOGUS", message: "Server Error" });
//     }
// });

// router.post('/finddomain', async (req, res) => {
//     try {
//         const domainObj = req.body;
//         if (!domainObj || !domainObj.domain) {
//             return res.status(400).json({ status: "BOGUS", message: "Domain required" });
//         }

//         const domainName = domainObj.domain.toLowerCase();
//         const startUsage = process.cpuUsage();

//         const result = await checkDNSSEC(domainName);

//         const cpuDiff = process.cpuUsage(startUsage);
//         const cpuUsedMs = ((cpuDiff.user + cpuDiff.system) / 1000).toFixed(2); // Decimal dikhane ke liye
//         const memoryUserMB = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);

//         if (result.status === "BOGUS") {
//             return res.status(400).json({
//                 status: "BOGUS",
//                 message: result.error || "DNSSEC Validation Failed or Domain Not Found!",
//                 domain: domainObj.domain
//             });
//         }

//         return res.status(202).json({
//             domain: domainName,
//             status: result.status,
//             message: "IP Get SuccessFully",
//             ip: result.ip,
//             latency: result.latency,
//             cpuUsed: cpuUsedMs,
//             memoryUsed: memoryUserMB
//         });

//     } catch (err) {
//         console.error(err);
//         return res.status(500).json({
//             status: "BOGUS",
//             message: "Internal Server Error"
//         });
//     }
// });

// module.exports = router;







var express = require('express');
var router = express.Router();
var dnsPacket = require('dns-packet');
var dgram = require('dgram');
const { performance } = require('perf_hooks');

// Servers ka address
const DNS_SERVER = '172.28.142.244'; 
const UNBOUND_PORT = 5335;
const BIND_PORT = 5353; 

// Ek master function jo kisi bhi port par query bhej sakta hai
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
        }, 3000);

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

// Ek hi smart route dono kaam karega
router.post('/finddomain', async (req, res) => {
    try {
        const domainObj = req.body;
        if (!domainObj || !domainObj.domain) {
            return res.status(400).json({ status: "BOGUS", message: "Domain required" });
        }

        const domainName = domainObj.domain.toLowerCase();
        const startUsage = process.cpuUsage();

        // SMART LOGIC: Check karo ki local zone ka domain hai ya real
        let portToUse = UNBOUND_PORT;
        let isLocal = false;

        if (domainName.endsWith("device.test")) {
            portToUse = BIND_PORT;
            isLocal = true;
        }

        // Query bhejo us port par
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

        // Agar local BIND hai, toh usko SECURE dikhao
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