---
title: KiriminAja Rollout Manager
description: A platform that manages the rollout of new features and updates for KiriminAja, ensuring smooth transitions and minimal disruptions.
color: rgb(125, 62, 185)
collaborators: ['sofyan48', 'mrayhan19']
stacks: ['kubernetes', 'nuxt', 'javascript']
image: /images/project/rollout-manager.png
---

Releasing a new version of an application is often a challenging process for Product teams. One of the main pain points is ensuring that new features and updates are rolled out smoothly, without causing disruptions to users or introducing unexpected issues. Traditional deployment tools, while powerful, often lack the fine-grained control needed by Product teams to manage who can trigger, pause, or approve rollouts.

During the development of KiriminAja Rollout Manager, we identified a significant gap in existing solutions like Argo Rollouts: the absence of an Access Control List (ACL) mechanism. Argo Rollouts provides robust deployment strategies, but it does not natively support restricting rollout actions based on user roles or permissions. This limitation can lead to operational risks, as anyone with access could potentially trigger or modify a rollout, regardless of their responsibility or expertise.

To address this, we built a custom ACL system on top of the rollout process. Our ACL allows us to define specific roles—such as Product Owner, QA, or Developer—and assign permissions for each stage of the rollout. For example, only Product Owners can approve a full rollout to all users, while QA can pause or resume canary deployments for testing purposes. This ensures that only authorized team members can perform sensitive actions, reducing the risk of accidental disruptions and improving accountability.

By integrating ACL with our rollout manager, we empower Product teams to have greater control and confidence during releases. This not only streamlines the deployment process but also aligns with organizational policies and compliance requirements. The result is a smoother, safer, and more collaborative release workflow for everyone involved.
