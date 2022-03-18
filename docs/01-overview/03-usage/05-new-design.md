---
# Docusaurus settings
title: Create a new design
slug: create-a-new-design
---

If you're starting out for the first time and want to create a new design with
the name "postmodern", as an example, you'd do the following in your console:

```sh
premail new design postmodern
```

This will create a new subdirectory of `designs` (or the design directory
[specified in your `premail.yaml` file](/docs/overview/usage/project-settings)).
It will be based on the `_default` design (or, again, the default design
specified in `premail.yaml`).

Want to create a design based on an existing one? Just add the `-d` or
`--design` flag:

```sh
premail new design postmodern -d premodern
```

This creates a new design named `postmodern` with the content of the design
`premodern`.

## Working on your design

If you're creating a new design for an email, how do you see what it looks like
without creating an email itself? Run `premail watch` with the `-d` option
_without_ specifying the `-e` or `--email` option:

```sh
premail watch -d postmodern
```

This will watch for any changes in any configuration files, template files, or
Sass files, and re-render the `dist` subdirectory of your design, then open it
in your default web browser. (If you'd rather not have it open in your web
browser, you can append `-s` or `--noserve`.)

If you don't want to continuously watch your files, use `premail build`. Again,
using the "postmodern" example, that would be:

```sh
premail build -d postmodern
```

This will render the design, open it in a browser and then stop.

If you need to troubleshoot the rendered design template (that is, after the
Handlebars data has been inserted, but before the MJML-to-HTML transpiling)
append `--temp` to a command and it will include an `index.mjml` file in `dist`
subdirectory so you can see exactly what is being passed to MJML.
