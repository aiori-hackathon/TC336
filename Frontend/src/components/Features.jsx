import React from 'react'
import { useState } from 'react'
import FeaturesBox from './FeaturesBox'
import { Lock, Cpu , ChartColumnDecreasing  } from 'lucide-react';

const Features = () => {

    const [featuresData, setFeaturesData] = useState([
        {
            icon: Lock,
            heading: "TLS/ DTLS Secure Channel",
            para: "End-to-end encrypted communication between IoT clients and the gateway using TLS/DTLS protocols, protecting DNS queries from interception and tampering.",
        },
        {
            icon: Cpu,
            heading: "Resource-Constrained Friendly",
            para: "Offloads complex DNSSEC validation to the gateway, reducing CPU, memory, and processing requirements on resource-constrained IoT devices.",
        },
        {
            icon: ChartColumnDecreasing,
            heading: "Real-time Telemetry",
            para: "Monitor DNS queries, validation results, latency, and system performance with real-time telemetry and detailed analytics.",
        }
    ])

    return (
        <div className="w-full bg-[#060B19]">
            <h1 className="text-white text-3xl font-bold mt-10 mx-16">Powerful Features</h1>
            <p className="text-white text-[16px] font-normal mx-16">Built For Security Designed For IoT. Engineered For the Future.</p>

            <div className="w-full">
                <FeaturesBox data={featuresData} />
            </div>
        </div>
    )
}

export default Features