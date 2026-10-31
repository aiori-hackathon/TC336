const dgram = require('dgram');
const dnsPacket = require('dns-packet');

const server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
    try {
        const query = dnsPacket.decode(msg);
        const domain = query.questions[0].name;
        
        console.log(`Query: ${domain}`);

        if (domain.includes('device.test')) {
            const response = dnsPacket.encode({
                type: 'response',
                id: query.id,
                flags: dnsPacket.AUTHORITATIVE_ANSWER,
                questions: query.questions,
                answers: [{
                    type: 'A',
                    class: 'IN',
                    name: domain,
                    ttl: 300,
                    data: '192.168.1.100'
                }]
            });
            
            server.send(response, rinfo.port, rinfo.address);
            console.log(`✅ IP : 192.168.1.100`);
        } else {
            const response = dnsPacket.encode({
                type: 'response',
                id: query.id,
                flags: dnsPacket.RECURSION_AVAILABLE,
                rcode: dnsPacket.NXDOMAIN,
                questions: query.questions
            });
            server.send(response, rinfo.port, rinfo.address);
            console.log(`❌ Send NXDOMAIN `);
        }
    } catch (err) {
        console.log("Error:", err.message);
    }
});

server.bind(53, '0.0.0.0', () => {
    console.log('✅ Local DNS Server is running on port 53');
});