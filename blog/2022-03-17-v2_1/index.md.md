---
slug: premail-2.1.0-released
title: Premail 2.1.0 released ☘
authors: [ivan]
---

🍀 Premail version 2.1.0 has been released with a pot o' gold full of new
features!

**Get Premail from [npm](https://www.npmjs.com/package/premail) or
[GitHub](https://github.com/premail/premail)**

### New features:

- An **22%** reduction in package size thanks to many fewer dependencies and a
  slimmer file structure!
- [`premail new design`](/docs/overview/usage/create-a-new-design)
- [`premail new email`](/docs/overview/usage/create-a-new-email)
- A more reliable `premail watch` -- with integrated
  [Browsersync](https://browsersync.io/)!
- Many more design settings are now configurable from within Premail without
  having to crack open Handlebars partials, MJML attributes or Sass files
  (unless you want to!)

### Fixed bugs:

- Support for design or email names consisting only of numbers (like "2022").
- Ensuring MJML is picking up all design configuration.
- Fixing some design regressions in 2.0.4 and 2.0.5.
- Fixing a bug with `premail clean`.

### Notable dependency updates:

- MJML from 4.10.3 to
  [4.12.0](https://github.com/mjmlio/mjml/releases/tag/v4.12.0)
- Sass from 1.48.0 to
  [1.49.9](https://github.com/sass/dart-sass/releases/tag/1.49.9)
- Prettier from 2.5.1 to [2.6.0](https://prettier.io/blog/2022/03/16/2.6.0.html)
- mjml-bullet-list from 1.1.7 to
  [1.2.2](https://github.com/premail/mjml-bullet-list/releases/tag/v1.2.2)
- mjml-signoff from 1.1.5 to
  [1.2.3](https://github.com/premail/mjml-signoff/releases/tag/v1.2.3)

### Backwards-compatibility

As this is a minor release, there are no breaking changes, and any designs or
emails you created with prior versions will continue to work.

That said, there are many more theming features in the Premail's newest example
design and email, so be sure to upgrade before you start your next one!

### How to upgrade Premail

```sh
npm update premail -g
```

Happy Premailing!

---

**Full list of changes available on the [changelog](/changelog/).**

---
