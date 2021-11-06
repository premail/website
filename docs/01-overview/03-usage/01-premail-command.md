---
title: The premail command
slug: premail-command
---

Run `premail -h` to see this full list of options:

<!-- prettier-ignore-start -->
<!-- markdown-exec(cmd:echo '<'!'-- '-'->\n```' && premail -h && echo '```\n<'!'-- '-'->') --><!-- -->
```
Usage: premail <command> [options]

Commands:
  premail build    Build your email                                    [default]
  premail watch    Watch design and configuration files and rebuild as necessary
  premail format   Format templates with Prettier
  premail clean    Remove generated files from the current design or email
  premail init     Initialize an email project
  premail destroy  Destroy an email project

Email project build and watch:
  -d, --design  Specify design directory to use   [string] [default: "_default"]
  -e, --email   Specify email directory to render                       [string]
  -p, --prod    Render production files (minified, no comments)        [boolean]
      --debug   Append to any command to see verbose details           [boolean]

Design development:
      --temp  Include intermediate rendered template (post-Handlebars, pre-MJML)
              in output                                                [boolean]

More information:
  -h, --help     Show help                                             [boolean]
  -v, --version  Show version number                                   [boolean]

Additional documentation: https://premail.dev
```
<!-- --><!-- /markdown-exec -->
<!-- prettier-ignore-end -->
