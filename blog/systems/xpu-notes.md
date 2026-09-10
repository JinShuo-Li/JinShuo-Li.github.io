---
title: Running one model on CPU, XPU, and NPU
description: What changes when the same model is placed on different Intel devices, and why mixed execution helps throughput but not latency.
date: 2026-07-25
tags: [Systems, Hardware, Performance]
---

It is tempting to treat a CPU, an integrated XPU, and an NPU as three interchangeable sources of compute. They are not. The same model expresses the same mathematics on each, but the cost structure is different enough that the best device depends on the question being asked.

## Latency and throughput are different questions

A single request usually has a clear winner. In the measurements I have collected on one Intel machine, the XPU has the lowest latency for both a request-pool MLP and a stacked transformer encoder. The NPU is competitive on some shapes and slower on others, and the CPU is the slowest for the large models.

Concurrency changes the answer. When many independent requests arrive at once, running different requests on different devices can raise aggregate throughput even if each individual path is slower:

| Plan | Mean latency | Throughput |
| --- | ---: | ---: |
| cpu | 913.2 ms | 0.92 req/s |
| xpu | 126.2 ms | 7.98 req/s |
| xpu + npu | 183.7 ms | 8.86 req/s |
| cpu + xpu + npu | 255.3 ms | 8.54 req/s |

The mixed plan that wins on throughput is not the one that wins on latency. Reporting only one number hides the trade-off.

## The slowest lane sets the ceiling

Mixed execution measures transfer, queueing, and synchronization, not just arithmetic. A slow device in the plan drags down every request that touches it:

```text
mixed(xpu + npu)         8.86 req/s   xpu alone       7.98 req/s
mixed(cpu + xpu + npu)   8.54 req/s   xpu + npu       best plan
mixed(cpu + xpu)         6.16 req/s   cpu lane drags the plan down
```

This is the single most useful lesson from the exercise: adding a device can make things worse, and the reason is usually the weakest lane rather than the new one.

## A short measurement checklist

Before trusting a cross-device number:

1. Fix the dtype and layout, and record both.
2. Report latency and throughput separately, with the concurrency level.
3. Keep the raw output of the run, not just the summary.
4. State the machine. These results are specific to one Intel Core Ultra platform and are not a claim about Intel hardware in general.

> Performance is a property of a workload on a machine, not of a device in isolation. The honest unit of comparison is a reproducible run.

The broader point is that the runtime should make placement explicit rather than hiding it. A compiled target and a native eager device are different objects, and the API should let the caller say which one is intended.
