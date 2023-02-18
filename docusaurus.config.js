// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Edafter',
  tagline: 'Where we build your dafter smart and efficient.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.edafter.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Edafter', // Usually your GitHub org/user name.
  projectName: 'edafter', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],


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
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        gtag: {
          trackingID: 'G-34H25KDR6E',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/sakilmurad/edafternew/',
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Edafter blog',
          blogDescription: 'Learn about GeM, Automation, and strategies to grow your business.',
          blogSidebarTitle: 'All Posts',
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/sakilmurad/edafternew/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    
    (
      
      {
      // Replace with your project's social card
      image: 'img/social-card.png',
      navbar: {
        hideOnScroll: true,
        
        logo: {
          alt: 'Edafter Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'GeM Portal Course',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/tools', label: 'Tools', position: 'left'},
          // {
          //   href: 'https://github.com/sakilmurad/edafternew',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      announcementBar: {
        id: 'tools',
        content:
          'We have created free tools for you, try <a href="/tools">these tools</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Edafter',
            items: [
              {
                label: 'About',
                to: '/about',
              },
              {
                label: 'Privacy Policy',
                to: '/privacy-policy',
              },
              {
                label: 'Terms and Conditions',
                to: '/terms-and-conditions',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'GeM Portal Course',
                to: '/docs/gem-portal-course',
              },
              {
                label: 'Tools',
                to: '/tools',
              },
            ],
          },
          {
            title: 'Connect',
            items: [
              {
                label: 'Contact',
                to: '/contact',
              },
              {
                label: "Telegram",
                href: "https://t.me/gemmarketplace",
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCROFxqRh6JkWtea-tlW4y0Q',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}. <a href="https://www.edafter.com">Edafter</a> All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
