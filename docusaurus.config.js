// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/nightOwl');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Premail',
  tagline: ' An easy-to-use component-based build system for MJML, the email templating language, with Handlebars templating, Sass styles, and extra options.',
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
          editUrl: 'https://github.com/premail/website/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/premail/website/tree/main/',
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
      defaultMode: 'light',
      respectPrefersColorScheme: true,
      image: 'img/logo_large.png',
      announcementBar: {
        id: 'support_us',
        content:
          '⭐️ If you like Premail, give it a star on <a href="https://github.com/premail/premail/" target="_blank">GitHub</a> and follow us on <a href="https://twitter.com/premaildev" target="_blank">Twitter</a> <svg style="fill: #1DA1F2; vertical-align: middle;" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>',
        backgroundColor: 'rgb(0, 119, 72)',
        textColor: '#fff',
        isCloseable: false,
      },
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
                label: 'Resources',
                to: '/docs/resources/'
              },
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
      algolia: {
        appId: 'BH4D9OD16A',

        // Public API key: it is safe to commit it
        apiKey: 'b66b35b94fe428fa43afc2032c61d3df',

        indexName: 'premail',

        // Optional for versioned sites
        // See https://docusaurus.io/docs/search#contextual-search
        // contextualSearch: true,

        // Optional: When Algolia crawls multiple domains
        // See additional comments in https://docusaurus.io/docs/search#connecting-algolia
        // externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Algolia search parameters
        searchParameters: { 'facetFilters': ["type:content, lvl1, lvl2, lvl3, lvl5"] },
      },
    }),
};

module.exports = config;
