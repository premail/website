---
title: Destroy a project
sidebar_label: Destroy a project
slug: destroy-project
---

This is generally only useful during testing, but there is a command to destroy all Premail-related directories and files within a project.

At the top-level of your project, run `premail destroy` and after confirmation, it will remove everything [`premail init`](/docs/overview/usage/create-new-premail-project/) created.

`premail destroy --yes` will skip the confirmation step and destroy the project immediately. Use with care.
