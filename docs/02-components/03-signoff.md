---
title: MJML Signoff
slug: mjml-signoff
---

:::info Included in Premail

MJML Signoff is included automatically in Premail. It is also available
separately via [GitHub](https://github.com/premail/mjml-signoff) and
[NPM](https://www.npmjs.com/package/mjml-signoff) for use in any MJML
project.

:::

---

## Why a custom component?

A common best practice in emails is to include a photo along side your
"signoff" (such as "Best, Tamara").

Getting images to "float" alongside text, even in mobile contexts, can be
tricky. **`<mj-signoff>`** simplifies this.

### Example use

An example of this can be found in the default design's
[`content/signoff.hbs`](https://github.com/premail/premail/tree/v2.0.0/src/example/designs/_default/content/signoff.hbs) template:

```html
<mj-signoff
  closing="Thank you,"
  name="John Q. Public"
  title="Wild and Crazy Guy"
  image-src="https://picsum.photos/75/100"
  image-width="75px"
  image-height="100px"
  image-alt=""
>
  <p><a href="https://example.com">Example, Inc.</a></p>
</mj-signoff>
```

Strings cannot contain HTML elements, however any content within the element
itself is placed in the text column below the optional strings, as demonstrated
above. Styling options are also provided in Premail's
[theme settings](/docs/overview/usage/explore-design-structure/#theme)

## <mj-signoff\> options

| option                | unit                      | details                                                                                                                                                                                                                                                                                                                                                                                                                                         | default value |
| --------------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `closing`             | string                    | Optional closing, e.g. `Thank you,`                                                                                                                                                                                                                                                                                                                                                                                                             | none          |
| `name`                | string                    | Optional name, e.g. `John Q. Public`                                                                                                                                                                                                                                                                                                                                                                                                            | none          |
| `title`               | string                    | Optional title, e.g. `Wild and Crazy Guy`                                                                                                                                                                                                                                                                                                                                                                                                       | none          |
| `title2`              | string                    | Optional title line two, e.g. `ACME Corp.`                                                                                                                                                                                                                                                                                                                                                                                                      | none          |
| `title3`              | string                    | Optional title line three, e.g. `(202) 555-1212`                                                                                                                                                                                                                                                                                                                                                                                                | none          |
| `section-padding`     | pixels                    | Applies to entire element                                                                                                                                                                                                                                                                                                                                                                                                                       | `10px 0`      |
| `section-align`       | `left`, `center`, `right` | Alignment of element as a whole                                                                                                                                                                                                                                                                                                                                                                                                                 | `left`        |
| `background-color`    | color                     | Applies to entire element                                                                                                                                                                                                                                                                                                                                                                                                                       | none          |
| `image-position`      | `left`, `right`           | Where the image should appear relative to the text                                                                                                                                                                                                                                                                                                                                                                                              | `left`        |
| `image-padding`       | pixels                    | Applies only to the image column                                                                                                                                                                                                                                                                                                                                                                                                                | none          |
| `image-src`           | URL                       | Location of image                                                                                                                                                                                                                                                                                                                                                                                                                               | none          |
| `image-width`         | pixels                    | Width of image                                                                                                                                                                                                                                                                                                                                                                                                                                  | none          |
| `image-height`        | pixels                    | Height of image                                                                                                                                                                                                                                                                                                                                                                                                                                 | none          |
| `image-alt`           | string                    | Alternative text for image (you may legitimately wish to leave this blank; see [the spec for graphical representation](https://html.spec.whatwg.org/multipage/images.html#a-graphical-representation-of-some-of-the-surrounding-text), [decorative images](https://html.spec.whatwg.org/multipage/images.html#a-purely-decorative-image-that-doesn't-add-any-information) and [example 2 here](https://webaim.org/techniques/alttext/#context)) | none          |
| `text-column-padding` | pixels                    | Applies only to the text column                                                                                                                                                                                                                                                                                                                                                                                                                 | `0 10px`      |

## Alternatives

Instead of using this component, you can use the
[`<mj-group>`](https://documentation.mjml.io/#mj-group) element, but note its
warning for iOS 9.

If you are not using an image in your sign-off, or intend for the image to be
on a line without text wrapping around it (such as an image of a signature), you
can simply use MJML's [`<mj-text>`](https://documentation.mjml.io/#mj-text)
element.
