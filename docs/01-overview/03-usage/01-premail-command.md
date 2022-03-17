---
# Docusaurus settings
title: The premail command
slug: premail-command
---

Run `premail -h` to see this full list of options:

<!-- prettier-ignore-start -->
<!-- markdown-exec(cmd:echo '<'!'-- '-'->\n```' && premail -h && echo '```\n<'!'-- '-'->') --><!-- -->
```
Usage: premail <command> [options]

Commands:
  premail new <email|design> <dest>  Create a new email or design in <dest>
  premail build                      Build an email
  premail watch                      Watch design and configuration files and
                                     rebuild as necessary
  premail clean                      Remove generated files from the current
                                     design or email
  premail paths                      List paths being used with the current
                                     configuration and command-line flags
  premail format                     Format templates with Prettier
  premail init                       Initialize a Premail project
  premail destroy                    Destroy this Premail project

Email development:
  -d, --design    Specify design directory to use [string] [default: "_default"]
  -e, --email     Specify email directory to use                        [string]
  -p, --prod      Render production files (minified, no comments)      [boolean]
  -s, --noserve   Disable serving rendered email via browserSync       [boolean]
  -f, --noformat  Disable auto-formatting of files using Prettier      [boolean]
      --debug     Append to any command to see verbose details         [boolean]

Design development:
      --temp  Include intermediate rendered template (post-Handlebars, pre-MJML)
              in output                                                [boolean]

New emails and designs:
  -d, --design  Specify design directory to use   [string] [default: "_default"]
  -e, --email   Specify email directory to use                          [string]

More information:
  -v, --version  Show version number                                   [boolean]
  -h, --help     Show help                                             [boolean]

Additional documentation: https://premail.dev
```
<!-- --><!-- /markdown-exec -->
<!-- prettier-ignore-end -->
