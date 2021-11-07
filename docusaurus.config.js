// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Premail',
  tagline: ' An easy-to-use component-based build system for MJML, the email templating language, with Handlebars templating, Sass styles, and extra options!',
  url: 'https://premail.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'premail', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  trailingSlash: true,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/premail/premail/tree/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/premail/premail/tree/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: true,
      navbar: {
        title: 'Premail',
        logo: {
          alt: 'Premail.dev',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/contributing',
            position: 'left',
            label: 'Contributing',
          },
          {
            to: '/security',
            position: 'left',
            label: 'Security',
          },
          {
            to: '/code_of_conduct',
            position: 'left',
            label: 'Code of Conduct',
          },
          {
            to: '/sponsors',
            position: 'left',
            label: 'Sponsors',
          },
          {
            to: '/blog',
            position: 'right',
            label: 'Blog'
          },
          {
            href: 'https://github.com/premail/premail',
            position: 'right',
            label: 'GitHub',
          },
          {
            href: 'https://twitter.com/premaildev',
            position: 'right',
            label: 'Twitter',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Premail overview',
                to: '/docs/introduction-to-premail/',
              },
              {
                label: 'Custom MJML Components',
                to: '/docs/components/summary/',
              },
              {
                label: 'Premail development guide',
                to: '/docs/components/summary/',
              },
              {
                label: 'Thanks & appreciation',
                to: '/appreciation/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Support',
                to: '/docs/support-project-help/',
              },
              {
                label: 'Contribute!',
                to: '/contributing/',
              },
              {
                label: 'Sponsors',
                to: '/sponsors/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/premaildev',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/premail/premail',
              },
              {
                label: 'MJML documentation',
                href: 'https://documentation.mjml.io/',
              },
            ],
          },
        ],
        copyright: `<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank"><img alt="Creative Commons License" style="border-width:0; height:20px; vertical-align:text-top;" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a> Premail documentation is © ${new Date().getFullYear()} and licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank">Creative Commons BY-SA 4.0 International License</a>.<br /><a href="https://github.com/premail/premail/blob/main/LICENSE" target="_blank"><img src="https://img.shields.io/github/license/premail/premail?style=flat-square&color=blue" alt="AGPLv3 license" style="border-width:0; height:20px; vertical-align:text-top;" /></a> Premail itself is licensed as <a href="https://github.com/premail/premail/blob/main/LICENSE" target="_blank">AGPLv3</a><hr />Built with <a href="https://docusaurus.io/" target="_blank">Docusaurus</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
