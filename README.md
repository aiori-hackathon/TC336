# AIORI-3-HACKATHON-PROJECTS
This repository will contain the code and resources for the AIORI-3 hackathon that will be developed during the AIORI-3

Round 01 Youtube video link - https://youtube.com/shorts/iM8Qv0hhA-M?si=KfLXLMeDcNR0CIgv

## 🎥 Demonstration Video
Watch the complete project demonstration here:

**[Click here to watch the Demo Video](https://youtu.be/aunHo7mLz8Y?si=BNLIyGiUxHPFOLaQ)**



# SecureDNS: Authenticated Gateway-Assisted DNSSEC for IoT Clients

## 📌 Project Overview
SecureDNS is a Zero-Trust Architecture designed for IoT environments. Resource-constrained IoT devices lack the CPU and memory to validate complex DNSSEC cryptographic chains. This project offloads the heavy DNSSEC validation process to a trusted local Gateway. The Gateway handles the validation, checks the Authenticated Data (AD) flag, and classifies domains as **SECURE**, **INSECURE**, or **BOGUS**. All communication between the IoT client and the Gateway is secured using TLS.

## 🏗️ Architecture
The project is divided into multiple microservices containerized using Docker:
1. **React Frontend:** A dashboard to visualize DNS validation results, latency, CPU, memory usage, and query history.
2. **Node.js Backend Gateway:** The core logic. It sends raw UDP packets to the DNS resolvers, parses the binary flags, and serves the API.
3. **Unbound Resolver:** A validating recursive DNS server for public internet domains.
4. **Local DNS Server:** A lightweight custom Node.js server for the local controlled zone (`device.test`).
5. **MongoDB:** Stores the query history and performance metrics.
6. **IoT Client (Node.js):** Simulates a real IoT device with TLS Certificate Pinning for secure communication.

## 🚀 How to Run the Project (Docker)

**Prerequisites:** Ensure Docker Desktop is installed and running on your system.

**Step 1:** Clone the repository and navigate to the root directory.
```bash
git clone <repository-link>
cd AIORI-3-DNSSEC
