---
sidebar_label: An introduction to Premail
slug: introduction-to-premail
title: ''
---

![Premail](/img/logo_large.svg)

**Premail is an easy-to-use component-based build system for MJML, the email
templating language, with Handlebars templating, Sass styles, and extra
options.**

---

[MJML](https://mjml.io/) is a markup language for writing bulletproof HTML
emails. It consciously does not incorporate a build process. This is that build
process.

Premail is component-based, and uses Handlebars for templating. Settings are
defined in YAML configuration files, and theming happens in a theme
configuration file as well as (optionally) Sass files.

Email templates are all [valid](https://mjml.io/documentation/#validating-mjml)
under [MJML version 4](https://github.com/mjmlio/mjml/releases).

:::tip Results

One `index.html` file will be rendered, as well as (optionally) a plain-text
version, ready to import into your emailer of choice.
[See an example of the default layout.](https://github.com/premail/premail/blob/v2.0.0/src/example/designs/_default/dist/index.html)

:::
