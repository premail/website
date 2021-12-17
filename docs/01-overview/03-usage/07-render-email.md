---
title: Render the email for production
sidebar_label: Render the email
slug: render-production-email
---

In your console, append `--prod`, e.g. with a design named "postmodern," you'd
use:

```sh
premail build -d postmodern --prod
```

This will render `index.html`
[in minified form](https://github.com/mjmlio/mjml/blob/master/packages/mjml-cli/README.md#minify-and-beautify-the-output-html)
in the `dist` subdirectory, and (if you've chosen to have one created),
`index.txt`.

:::caution Email images

Images can be included locally while you're drafting the email, but MJML doesn't
do anything magical in terms of hosting these images -- you'll still have to
upload them somewhere and use the full URLs as references to the hosted images.

:::

Once the production email is rendered, you can:

- Copy the code from `index.html` into your emailer of choice; all the code and
  styles are included!
- Copy the `index.txt` plain-text version, if you've chosen to have one created,
  into the appropriate place provided by your emailer.
- Share these files with colleagues.
- Upload the files as part of a repo and use something like
  [GitHub Pages](https://pages.github.com/) to view/share it in a browser -- for
  instance
  [here's the rendered file](https://github.com/premail/premail/blob/main/designs/_templates/dist/index.html)
  from the sample templates.
