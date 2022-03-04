---
# Docusaurus settings
title: Premail features
sidebar_label: Features
slug: premail-features
---

:::tip MJML: The email coding system

If you're here, you are probably already familiar with MJML, but if not you
should [read a little about it](https://documentation.mjml.io) first. It's a
component-based templating system that makes writing marketing or transactional
emails vastly easier, more compatible, and mobile-responsive. If you're
comfortable with HTML code, MJML will likely be much faster for you than any
drag-and-drop visual editor provided by an email service provider like
Mailchimp, Constant Contact, etc.

:::

Using Premail, you can create different email designs in MJML, then use your
library of designs to create individual emails. Premail will make creating and
managing the code for these emails vastly simpler.

When you're done, you'll have an `index.html` file (and plain-text `index.txt`
file, if you've chosen the text option) that is optimized to render correctly in
[the vast majority of email systems and clients](https://mjml.io/faq#email-clients).
Then drop the code from the file into your email service provider's system.

## Premail specialties

- MJMLv4-standard bulletproof code that will look its best across all email
  clients, reduced to the smallest possible size. CSS is inlined and HTML is
  minified as with all MJML, but we also add some extra checks, for instance, to
  make sure emojis are properly escaped and the file size doesn't hit Gmail's
  clipping limit.

- Component-based templates that allow you to separate out things that don't
  often change (navigation menus, social media links, unsubscribe text) and
  things that will usually change (a header or banner, preheader text, and the
  main body of the email).

- You can create multiple designs, and each time you create a new email you can
  choose from among your existing designs. This allows you to keep the structure
  of the design and the content of the email separate, and reduces errors.

- As you're creating a design or crafting a new email, you can use a `watch`
  task to automatically recompile the result.

- Within each design, the CSS (created in [Sass files](https://sass-lang.com/))
  is automatically inlined in the HTML, thanks to MJML. Additionally, stub files
  exist for including pseudo-CSS styles (such as hover states) for email clients
  that support them, as well as styles specifically targeting Gmail.

- A plain-text version of your email is optionally created, and Premail does a
  much better job than most email services at rendering it. While only a small
  number of your recipients will see the plain-text version,
  [they are important for email deliverability](https://www.litmus.com/blog/best-practices-for-plain-text-emails-a-look-at-why-theyre-important/).
  Within the plain-text version options, you can control whether certain
  elements like navigation or header/banner areas are included.

- Configuration files are written in [YAML](https://blog.stackpath.com/yaml/),
  making them easy to read, and comments -- with links to relevant resources --
  are included throughout.

- Perfectly structured for including in a git repo -- don't rely on your email
  service provider to keep an archive of your past emails! And
  [Prettier](https://prettier.io/) is included to automatically clean up
  template formatting for easier file-diffing.

When it comes to the content of your emails, optional enhancements can be
controlled per-email:

- Transforming quotes, apostrophes, and dashes to their correct typographical
  versions; optical character alignment; and true small-caps formatting with
  [Detergent](https://codsen.com/os/detergent) and
  [Typeset](https://github.com/davidmerfield/typeset#readme).
- Enforcing
  [proper image `alt` tags](https://help.siteimprove.com/support/solutions/articles/80000863904)
  and making sure the supplied text doesn't break email code parsers.
- [Padding preview/preheader text](https://www.goodemailcode.com/email-code/preheader)
  to prevent things like navigation menu items from being visible in a
  recipient's inbox.

Feel free to
[make suggestions for more enhancements!](https://github.com/premail/premail/issues/new?assignees=&labels=Type%3A+Feature&template=02_feature_request.yml)
