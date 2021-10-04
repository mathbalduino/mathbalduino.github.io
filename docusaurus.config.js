const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Matheus Leonel Balduino',
  tagline: 'Everywhere, under @mathbalduino',
  url: 'https://mathbalduino.com.br',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'mathbalduino', // Usually your GitHub org/user name.
  projectName: 'mathbalduino.github.io', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
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
        title: '@mathbalduino',
        logo: {
          alt: '@mathbalduino logo',
          src: 'img/mathbalduino_logoM.png',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/about', label: 'About', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Open-source Libraries',
            items: [
              {
                label: 'go-log',
                href: 'https://mathbalduino.com.br/go-log',
              },
            ],
          },
          {
            title: 'Social media',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/mathbalduino',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/mathbalduino',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/mathbalduino',
              },
            ],
          },
        ],
        copyright: '@mathbalduino (Built with Docusaurus)',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
