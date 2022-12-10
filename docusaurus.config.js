// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cozie',
  tagline: 'A framework to collect feedback from building occupants in real time',
  url: 'https://cozie.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  customFields: {
    contactMail: 'cozie.app@gmail.com',
  },

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cozie-app', // Usually your GitHub org/user name.
  projectName: 'cozie-website', // Usually your repo name.

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        title: 'Cozie',
        logo: {
          alt: 'My Site Logo',
          //src: 'img/logo_cozie_round.png',
          src: 'img/favicon.ico',
        },
        items: [
          {
            type: 'doc',
            docId: 'cozie/intro-cozie',
            position: 'left',
            label: 'Research',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/cozie-app',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Projects',
            items: [
              {
                label: 'Cozie for Apple',
                href: 'https://www.cozie-apple.app',
              },
              {
                label: 'Cozie for Fitbit',
                href: 'https://www.cozie-fitbit.app',
              },
              {
                label: 'About us',
                href: '/docs/about_us',
              },
              {
                label: 'Contact us',
                href: 'mailto:cozie.app@gmail.com'
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Cozie built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
