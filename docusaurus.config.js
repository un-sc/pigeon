// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/zh-CN/docs/using-plugins#using-presets

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '鸽子林',
  tagline: '停车坐爱鸽林晚，只因汤香二千家',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://viewcb.net',
  baseUrl: '/',

  organizationName: 'un-sc', // Usually your GitHub org/user name.
  projectName: '鸽子林官网', // Usually your repo name.

  trailingSlash: false, // 全局设置 URL 是否需要斜线

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
        gtag: {
          trackingID: 'G-70RMB2VDTC',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  // 只保留 Google Analytics 插件
  // plugins: [
  //   [
  //     '@docusaurus/plugin-google-analytics',
  //     {
  //       trackingID: 'UA-XXXXXX-X', // 替换为你的 Google Analytics 跟踪 ID
  //       anonymizeIP: true, // 开启IP匿名化
  //     },
  //   ],
  // ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '鸽子林',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Wiki文档',
          },
          { to: '/docs/map', label: '服务器在线地图', position: 'left' },
          { to: '/blog/', label: 'BLOG', position: 'left' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Wiki',
            items: [
              {
                label: '服务器简介',
                to: '/docs/intro',
              },
              {
                label: '酿酒系统',
                to: '/docs/brewery',
              },
              {
                label: '种植系统',
                to: '/docs/crops',
              },
              {
                label: '钓鱼拓展',
                to: '/docs/fishing',
              },
              {
                label: '食物系统',
                to: '/docs/foods',
              },
              {
                label: '服务器在线地图',
                to: '/docs/map',
              },
              {
                label: '服务器状态总览',
                to: '/docs/status',
              },
            ],
          },
          {
            title: '联系我们',
            items: [
              {
                label: 'QQ群',
                href: 'https://qm.qq.com/q/icTwImdYDC',
              },
              {
                label: 'KOOK',
                href: 'https://kook.vip/Kd6JH1',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'BiliBili - NEW66',
                to: 'https://space.bilibili.com/62071330?spm_id_from=333.337.search-card.all.click',
              },
            ],
          },
          {
            title: 'BLOG',
            items: [
              {
                label: '10月1日服务器硬件维护报告',
                to: '/blog/2024-10-01-server-hardware-maintenance',
              },
              {
                label: '开服仪式邀请函',
                to: '/blog/invitation-letter-for-server-opening-ceremony',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 鸽子林. <br />冀ICP备2022016585号<br />冀公网安备13108202000849号`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
