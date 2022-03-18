---
# Docusaurus settings
title: Explore the structure of an email
sidebar_label: Email structure
slug: explore-email-structure
---

Look in the `emails` subdirectory. This will hold each of the emails you create.

The `_example` directory holds an example email to show you how Premail emails
work. Settings for this email are defined in
[`emailConfig.yaml`](https://github.com/premail/premail/blob/main/src/scaffolding/project/emails/_example/emailConfig.yaml).

### An email's design

Each email is built on top of a design. The email inherits the design's
structure and theming, and adds its own content. More on that below.

How do you specify what design an email should use? You can do this in several
ways:

1. Specify the design when building the email using the `-e` or `--email` flag.
   This overrides any design defined in settings.

2. Specify the default design for an email in `emailConfig.yaml`. When you build
   this email, it will use this design unless it is overridden on the command
   line.

3. Specify the default design for _all_ emails in
   [`premail.yaml`](https://github.com/premail/premail/blob/main/src/scaffolding/project/premail.yaml).
   When you build an email, it will use this design unless it is overridden by
   an email's configuration file or on the command line.

### Content and structure

Premail separates email into common components, and further groups them by
whether they are likely to change from email to email within the same design.

:::tip Overriding files

Any file in an **email** will override the identical file in a **design**.

:::

In the `content` subdirectory of an email, you'll find the components that are
likely to change with each email:

- `title.hbs` is the HTML `<title>` of the email; some email clients will use it
  as a subject line.
- `preview.hbs` contains the preview or preheader text, which is shown in some
  email clients in truncated form just below the subject line.
- `banner.hbs` [optional] is a full-width image, sometimes known as a hero
  image, that appears just after the top navigation in an email. Full-width
  images can also be used within the body, of course.
- `salutation.hbs` [optional] is the opening of the email, such as "Dear
  friend,"
- `body.hbs` is the main content of the email, in which you can use any
  [MJML body components](https://documentation.mjml.io/#standard-body-components)
  other than `<mj-wrapper>`, as it already wraps the body content. In most cases
  you'll need to use [`<mj-section>`](https://documentation.mjml.io/#mj-section)
  and [`<mj-column>`](https://documentation.mjml.io/#mj-column) components
  around individual content items, as demonstrated in the example file.
- `signoff.hbs` is the closing text of your email that could include a name,
  title, portrait image and other information.

In the `structure` subdirectory of this email, you'll find only those components
for which you want to _override_ the same component in the design itself. In the
[example email](https://github.com/premail/premail/tree/main/src/scaffolding/project/emails/_example),
`footer.hbs` is included, which overrides the footer from any design used to
build this email. To use the design's footer instead, delete
`structure/footer.hbs` from the example email.

In the `dist` subdirectory of an email is the rendered email, in HTML and
(optionally) plain-text formats.
