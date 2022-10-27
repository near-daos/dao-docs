// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AstroDAO',
  tagline: 'AstroDAO',
  url: 'https://astro-dao.com',
  baseUrl: '/dao-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'near-daos', // Usually your GitHub org/user name.
  projectName: 'dao-docs', // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: {
          showReadingTime: true,
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
      navbar: {
        title: 'AstroDAO',
        logo: {
          alt: 'AstroDAO Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/near-daos',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'NEAR Docs',
                to: 'https://docs.near.org/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/gqCfcfFw',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/astro_near',
              },              
              {
                label: 'Twitter',
                href: 'https://twitter.com/AstroDao',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Events Calendar',
                href: 'https://tockify.com/nearcommunity/',
              },              
              {
                label: 'GitHub',
                href: 'https://github.com/near-daos',
              },
            ],
          },
        ],
        copyright: `[Creative Commons By Attribution International License](https://creativecommons.org/licenses/by/4.0/) ${new Date().getFullYear()} AstroDAO. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
