---
# Docusaurus settings
title: Generating a production build of your email
sidebar_label: Production build
slug: production-build-email
---

Once you've finished editing your email, create a production-ready copy using
the `--prod` option. This minifies the output to create the smallest possible
file.

With an email named "welcome" and a design named "postmodern", you'd run:

```sh
premail build -e welcome -d postmodern --prod
```

This will render `index.html` and open it in your browser for inspection. (If
you'd rather not have it open in your web browser, for instance if you're
running it as part of a larger build process, you can append `-s` or
`--noserve`.)

:::info Plain-text email

By default, Premail includes a plain-text version of your email, which is
[important for deliverability](https://www.litmus.com/blog/best-practices-for-plain-text-emails-a-look-at-why-theyre-important/).
You can find `index.txt` in `dist` alongside the HTML version.

:::

## Next steps

Once the production email is rendered, you can:

- Copy the code from `index.html` into your emailer of choice. All the code and
  styles are included!
- Copy the `index.txt` plain-text version, if you've chosen to have one created,
  into the appropriate place provided by your emailer.
- Share these files with colleagues.
- Commit the files as part of a repo and use something like
  [GitHub Pages](https://pages.github.com/) to create an automatic archive of
  your emails. For instance,
  [here's the rendered file](https://refined-github-html-preview.kidonng.workers.dev/premail/premail/raw/main/src/scaffolding/project/designs/_default/dist/index.html)
  from the sample templates.
