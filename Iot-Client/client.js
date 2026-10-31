const axios = require('axios');
const https = require('https');
const crypto = require('crypto');

const PINNED_FINGERPRINT = '6F52A3CA02D53D5CE33A6E2B7937813BA35BF1DDE922BE4B6DD0EB6CF515CCF7';

const agent = new https.Agent({
    rejectUnauthorized: false,
    checkServerIdentity: (host, cert) => {

        const fingerprint = crypto
            .createHash('sha256')
            .update(cert.raw)
            .digest('hex')
            .toUpperCase();


        if (fingerprint !== PINNED_FINGERPRINT) {
            throw new Error('SECURITY ALERT: Certificate fingerprint mismatch! Possible MITM attack.');
        }
        return undefined;
    }
});

const GATEWAY_URL = 'https://localhost:3000/domain/finddomain';

async function simulateIoTDevice(domain) {
    console.log("\n==================================================");
    console.log("🤖 [IoT DEVICE] Booting up...");
    console.log(`🔍 Requesting DNSSEC validation for: ${domain}`);

    const startMemory = process.memoryUsage().heapUsed / 1024 / 1024;
    const startTime = Date.now();

    try {

        const response = await axios.post(GATEWAY_URL, { domain }, { httpsAgent: agent });

        const latency = Date.now() - startTime;
        const endMemory = process.memoryUsage().heapUsed / 1024 / 1024;
        const memoryUsed = (endMemory - startMemory).toFixed(2);

        console.log("✅ [IoT DEVICE] Response Received!");
        console.log(`🔒 TLS Secure Connection Verified (Pinned)`);
        console.log(`🛡️  Status: ${response.data.status}`);
        console.log(`🌐 Resolved IP: ${response.data.ip}`);
        console.log(`⚡ Client-Side Latency: ${latency} ms`);
        console.log(`🧠 Client Memory Used: ${memoryUsed} MB`);
        console.log("==================================================\n");

    } catch (error) {
        console.log("❌ [IoT DEVICE] Error!");
        console.log(`Status: ${error.response?.data?.status || "Network Error"}`);
        console.log(`Details: ${error.response?.data?.message || error.message}`);
        console.log("==================================================\n");
    }
}


async function runTests() {

    await simulateIoTDevice("cloudflare.com");


    await simulateIoTDevice("test.iot.device.test");


    await simulateIoTDevice("sigfail.verteiltesysteme.net");
}

runTests();