var express = require('express');
var router = express.Router();
var dns = require('dns').promises;
var resolver = new dns.Resolver();
resolver.setServers(['172.28.142.244:5335']);

router.post('/finddomain', async (req, res) => {
    try {
        const domainObj = req.body;
        const domainName = domainObj.domain.toLowerCase();

        const startTime = Date.now();
        const startUsage = process.cpuUsage(); 

        const ip = await resolver.resolve4(domainObj.domain);

        let status = "SECURE";
        try{
            await resolver.resolve(domainName, 'DS');
        }catch(dsError){
            status = "INSECURE";
        }

        const latency = Date.now() - startTime;
        const cpuDiff = process.cpuUsage(startUsage);

        const cpuUsedMs = ((cpuDiff.user + cpuDiff.system) / 1000);
        const memoryUserMB = (process.memoryUsage().heapUsed/ 1024 / 1024).toFixed(2);


        return res.status(202).json({status: status, message: "IP Get SuccessFully", ip: ip, latency: latency, cpuUsed: cpuUsedMs, memoryUsed: memoryUserMB})
    }
    catch (err) {
        return res.status(400).json({ 
            status: "BOGUS", 
            message: "DNSSEC Validation Failed or Domain Not Found!" 
        })
    }
})

module.exports = router;