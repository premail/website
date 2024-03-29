---
# Docusaurus settings
title: Destroy a project
sidebar_label: Destroy a project
slug: destroy-project
---

This is generally only useful during testing, but there is a command to destroy
all Premail-related directories and files within a project.

At the top-level of your project, run `premail destroy` and after confirmation,
it will remove everything
[`premail init`](/docs/overview/usage/create-new-premail-project/) created.

There is a separate step to ask whether to remove `README.md` from the project,
as this may have been adapted for other purposes.

:::warning Destroy immediately

`premail destroy --yes --readme` will skip the confirmation steps and destroy
the project and `README.md` file immediately. Use with care.

:::
