---
layout: page
title: Adaptive Scheduling and Resource Management for Real-Time Embedded GPU Systems
importance: 1
category: PhD
related_publications: true
---

Embedded GPUs support computationally intensive applications in autonomous vehicles, drones, robotics, and
virtual reality. These applications must meet timing requirements despite changing inputs, interference from
concurrent tasks, and limited computing resources.

Traditional GPU scheduling relies heavily on offline execution-time estimates and fixed resource allocations.
These approaches can miss deadlines when workloads change or leave GPU resources underutilized when estimates
are overly conservative.

This research develops adaptive scheduling and resource management techniques for soft real-time embedded GPU
workloads. The work investigates three complementary directions:

- **Feedback-controlled task-rate adaptation.** Dynamically adjusting task invocation rates regulates the
  response time ratio (RTR), defined as a task’s response time divided by its period. A multi-input multi-
  output (MIMO) controller accounts for interference among concurrent tasks.
- **Coordinated rate adaptation and frequency scaling.** Combining task-rate control with GPU frequency
  scaling addresses the limitations of bounded task rates and reduces unnecessary power consumption.
- **Dynamic GPU resource allocation.** Adjusting streaming multiprocessor (SM) allocations among concurrent
  tasks enables spatially shared GPUs to respond to workload changes.

Evaluations on physical GPU platforms demonstrate improvements in runtime adaptability, task timeliness,
resource utilization, and power efficiency. Together, these contributions reduce dependence on fixed
scheduling decisions and support more efficient GPU execution under changing workloads.

---

## Publications from this project

1. **FC-GPU (TECS ’25)** {% cite 10.1145/3761812 %}

   Developed **FC-GPU**, a feedback-control scheduling framework that dynamically adjusts the invocation
   rates of periodic GPU tasks. Its MIMO controller captures interference among tasks and regulates their
   RTRs, reducing deadline violations under runtime workload changes.

2. **PowerGPU (ICCD ’26)** {% cite PowerGPU %}

   Developed **PowerGPU**, a two-tier control framework that coordinates task-rate adaptation with GPU
   frequency scaling. The inner loop regulates individual task RTRs, while the outer loop adjusts frequency
   to regulate average RTR. In the reported comparison, PowerGPU reduces average GPU power consumption by
   **29.4%** relative to FC-GPU while maintaining zero deadline misses.

3. **DySM (ECRTS ’26)** {% cite DySM %}

   Developed **DySM**, a feedback-control framework that dynamically adjusts SM allocations among concurrent
   tasks on spatially shared GPUs. Its MIMO controller coordinates resource allocation using measured task
   response times, reducing deadline violations compared with static allocation approaches under changing
   workloads.
