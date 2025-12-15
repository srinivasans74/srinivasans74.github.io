---
layout: page
title: Latency-Controlled and Cost-Efficient GPU Scheduling for AI Workloads
#description: with background image
#img: assets/img/1.jpg
importance: 1
category: work
related_publications: true
---

Data centers often over-provision GPUs for online machine learning (ML) inference to handle bursty request arrivals. This over-provisioning leads to unnecessarily high capital expenses (CapEx).

This project aims to design a holistic management framework that handles bursty ML inference requests with strict latency guarantees while minimizing CapEx. The framework:

- **Co-locates ML inference and training workloads** on the same GPUs with latency guarantees, improving overall GPU utilization. During bursts, GPUs are used mostly for inference; afterwards, capacity is shifted back to training, reducing the number of GPUs required.
- **Schedules and consolidates negatively correlated ML tasks** onto shared GPUs to reduce resource contention and further lower CapEx.
- **Uses resource-aware partitioning, batching, and TPC masking** for GPUs in edge servers, where SLAs are strict and hardware resources are limited.
- **Applies power capping of ML servers** used for AI inference to improve throughput while respecting both power and latency constraints.

Beyond GPU-level scheduling, the project also targets **power and cooling CapEx**. Instead of relying solely on expensive power infrastructure upgrades to handle occasional worst-case bursts, the framework exploits **existing energy storage devices** (common in modern data centers) to supply additional power during bursts. This allows data centers to avoid or defer costly facility upgrades while still meeting latency and reliability targets.
. This enables data centers to safely handle large-scale ML inference bursts with explicit latency guarantees, while significantly reducing both compute and infrastructure CapEx.
As ML cloud services continue to grow, the ability to run GPUs and servers at **higher performance and lower cost** has direct impact on both large providers and smaller ML/AI companies that depend on the cloud. Lower data center CapEx can translate into lower cloud bills and a lower barrier to entry for start-ups.

---

## Publications from this project

This project has produced the following **papers**.

1. **SEEB-GPU** (SEC ’25) {% cite 10.1145/3769102.3772715 %}  
   Developed **SEEB-GPU**, an edge inference framework that jointly optimizes batching, early exits, and GPU partitioning to reduce latency by up to **15×** while ensuring SLA compliance.

2. **CorrGPU** (IPCCC ’25) {% cite CorrGPU %}
   Proposed **CorrGPU**, a correlation-aware GPU scheduler that dynamically pairs complementary workloads to reduce contention and lower CapEx by **≈20.9%** in large-scale ML traces. -->

3. **CapGPU** (ICPP ’25) {% cite CapGPU %}
   Implemented **CapGPU**, a coordinated CPU–GPU power-capping strategy that improves inference throughput by **8–20%** while maintaining latency SLOs under power constraints.

4. **GPUColo** (ICDCS ’24) {% cite gpucolo2024icdcs %}  
   Built **GPUColo**, a co-location framework that enables training and inference workloads to share GPUs, saving up to **74.9%** of GPUs and significantly reducing CapEx while meeting strict SLO requirements.

---
