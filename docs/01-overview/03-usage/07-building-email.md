---
# Docusaurus settings
title: Building your email
sidebar_label: Building your email
slug: building-your-email
---

Run `premail watch` using the `-e` (or `--email`) option to specify the name of
your email, and the `-d` (or `--design`) option to specify the name of your
design:

```sh
premail watch -e special_offer -d postmodern
```

You can quickly test out what the same email looks like using a different
design:

```sh
premail watch -e special_offer -d premodern
```

The `premail watch` command will watch for any changes in any configuration
files, template files (including any MJML partials referenced with
`<mj-include>`) or Sass files, and re-render the `dist` subdirectory of your
email. You can open the `index.html` file in a web browser and it will update
automatically.

If you don't want to continuously watch your files, use `premail build`. Again,
using the "postmodern" example, that would be:

```sh
premail build -e special_offer -d postmodern
```

This will render the design and then stop.

:::caution Email images

Images can be included locally while you're drafting the email, but MJML doesn't
do anything magical in terms of hosting these images -- you'll still have to
upload them somewhere and use the full URLs as references to the hosted images.

:::

If you need to troubleshoot the rendered email template (that is, after the
Handlebars data has been inserted, but before the MJML-to-HTML transpiling)
append `--temp` to a command and it will include an `index.mjml` file in the
output.
