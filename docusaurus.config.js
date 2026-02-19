// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("./src/themes/wisteria");
const darkCodeTheme = require("./src/themes/wisteria");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "james.codes",
  tagline: "James' Software Development Notebook",
  url: "https://james.codes/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "James-D-Wood", // Usually your GitHub org/user name.
  projectName: "James-D-Wood.github.io", // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: "gh-pages",
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          id: "projects",
          path: "docs/projects",
          routeBasePath: "projects",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "career",
        path: "docs/career",
        routeBasePath: "career",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "learning",
        path: "docs/learning",
        routeBasePath: "learning",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "My Site Logo",
          src: "img/jw.png",
          href: "/projects/overview",
        },
        items: [
          {
            type: "doc",
            docId: "overview",
            docsPluginId: "projects",
            position: "left",
            label: "Projects",
          },
          {
            type: "doc",
            docId: "overview",
            docsPluginId: "career",
            position: "left",
            label: "@ Work",
          },
          {
            type: "doc",
            docId: "overview",
            docsPluginId: "learning",
            position: "left",
            label: "Learning",
          },
          {
            href: "https://jameswood.dev/resume",
            position: "right",
            label: "Resume",
          },
          {
            href: "https://github.com/James-D-Wood",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [],
        copyright: `Developed (🪲🐞🐛's and all) by james.`,
      },
      prism: {
        additionalLanguages: ["swift"],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
      },
    }),
};

module.exports = config;
