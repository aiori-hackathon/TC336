const axios = require('axios');
const https = require('https');

// 1. Kyunki humara backend self-signed certificate use kar raha hai (Local testing)
const agent = new https.Agent({  
  rejectUnauthorized: false
});

// 2. Tumhare Backend ka URL
// Dhyan rakhna: HTTPS use karna hai, HTTP nahi.
const GATEWAY_URL = 'https://localhost:3000/domain/finddomain';

async function simulateIoTDevice(domain) {
    console.log("\n==================================================");
    console.log("🤖 [IoT DEVICE] Booting up...");
    console.log(`🔍 Requesting DNSSEC validation for: ${domain}`);

    // ESP32 ki tarah, hum apna CPU aur Memory track karenge
    const startMemory = process.memoryUsage().heapUsed / 1024 / 1024;
    const startTime = Date.now();

    try {
        // Backend ko HTTPS (TLS) request bhejo
        const response = await axios.post(GATEWAY_URL, { domain }, { httpsAgent: agent });
        
        // Response aane ke baad metrics calculate karo
        const latency = Date.now() - startTime;
        const endMemory = process.memoryUsage().heapUsed / 1024 / 1024;
        const memoryUsed = (endMemory - startMemory).toFixed(2);

        console.log("✅ [IoT DEVICE] Response Received!");
        console.log(`🛡️  Status: ${response.data.status}`);
        console.log(`🌐 Resolved IP: ${response.data.ip}`);
        console.log(`⚡ Client-Side Latency: ${latency} ms`);
        console.log(`🧠 Client Memory Used: ${memoryUsed} MB`);
        console.log("==================================================\n");

    } catch (error) {
        console.log("❌ [IoT DEVICE] Error: Gateway rejected the request or Domain is BOGUS.");
        console.log(`Details: ${error.response?.data?.message || error.message}`);
        console.log("==================================================\n");
    }
}

// Yahan tum alag-alag test cases de sakte ho
async function runTests() {
    // 1. Secure Domain (Real Internet)
    await simulateIoTDevice("cloudflare.com");
    
    // 2. Local BIND Zone (Controlled DNSSEC)
    await simulateIoTDevice("test.iot.device.test");
    
    // 3. Bogus Domain (Fake)
    await simulateIoTDevice("sigfail.verteiltesysteme.net");
}

runTests();