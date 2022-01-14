---
title: Create a new design
slug: create-a-new-design
---

If you're starting out for the first time and want to create a new design with
the name "postmodern", as an example, you'd do the following in your console:

```sh
premail new design postmodern
```

Then run `premail watch` with the `-d` option, followed by the directory name of
your design. Using the example above with a design named "postmodern", you'd
run:

```sh
premail watch -d postmodern
```

This will watch for any changes in any configuration files, template files
(including any MJML partials referenced with `<mj-include>`) or Sass files, and
re-render the `dist` subdirectory of your design. You can leave a web browser
open to this page.

If you don't want to continuously watch your files, use `premail build`, or
`premail` by itself. Again, using the "postmodern" example, that would be:

```sh
premail build -d postmodern
```

This will render the email and then stop.

If you need to troubleshoot the rendered template (that is, after the Handlebars
data has been inserted, but before the MJML-to-HTML transpiling) append `--temp`
to a command and it will include an `index.mjml` file in the output.
