---
# Docusaurus settings
title: Production build of your email
sidebar_label: Production build
slug: production-build-email
---

Once you've finished editing your email, create a production-ready copy, e.g.
with an email named "special_offer" and a design named "postmodern", you'd use:

```sh
premail build -e special_offer -d postmodern --prod
```

This will render `index.html`
[in minified form](https://github.com/mjmlio/mjml/blob/master/packages/mjml-cli/README.md#minify-and-beautify-the-output-html)
in the `dist` subdirectory, and (if you've chosen to have one created),
`index.txt`.

Once the production email is rendered, you can:

- Copy the code from `index.html` into your emailer of choice; all the code and
  styles are included!
- Copy the `index.txt` plain-text version, if you've chosen to have one created,
  into the appropriate place provided by your emailer.
- Share these files with colleagues.
- Upload the files as part of a repo and use something like
  [GitHub Pages](https://pages.github.com/) to view/share it in a browser -- for
  instance
  [here's the rendered file](https://refined-github-html-preview.kidonng.workers.dev/premail/premail/raw/main/src/example/designs/_default/dist/index.html)
  from the sample templates.
