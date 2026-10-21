var express = require('express');
var router = express.Router();
var dns = require('dns').promises;
var resolver = new dns.Resolver();
resolver.setServers(['172.28.142.244:5335']);

router.post('/finddomain', async (req, res) => {
    try {
        const domainObj = req.body;
        const startTime = Date.now();
        const ip = await resolver.resolve4(domainObj.domain);

        const latency = Date.now() - startTime;

        return res.status(202).json({message: "IP Get SuccessFully", ip: ip, latency: latency})
    }
    catch (err) {
        return res.status(404).json({ message: "Wrong Domain!" })
    }
})

module.exports = router;