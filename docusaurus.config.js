// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "afridho-api",
    tagline: "Dinosaurs are cool",
    url: "https://afridho-api.vercel.app",
    baseUrl: "/",
    favicon: "img/favicon.ico",
    onBrokenLinks: "ignore",
    onBrokenMarkdownLinks: "ignore",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "afridho", // Usually your GitHub org/user name.
    projectName: "afridho-api", // Usually your repo name.

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: "/",
                    sidebarPath: "./sidebars.js",
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                blog: false,
                // blog: {
                //     showReadingTime: true,
                //     // Please change this to your repo.
                //     // Remove this to remove the "edit this page" links.
                //     editUrl:
                //         "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                // },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            colorMode: {
                disableSwitch: true,
                respectPrefersColorScheme: true,
            },
            docs: {
                sidebar: {
                    hideable: false,
                },
            },
            image: "img/docusaurus-social-card.jpg",
            navbar: {
                title: "afridho-api",
                logo: {
                    alt: "afridho-api",
                    src: "img/logo.svg",
                },
                items: [
                    // {
                    //     type: "doc",
                    //     docId: "intro",
                    //     position: "left",
                    //     label: "Tutorial",
                    // },
                    // {to: baseUrlIgDownloader, label: 'Instagram Downloader', position: 'left'},
                    {
                        href: "https://github.com/afridho/afridho-api",
                        label: "GitHub Repository",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                // links: [
                //     {
                //         title: "Docs",
                //         items: [
                //             {
                //                 label: "Tutorial",
                //                 to: "/docs/intro",
                //             },
                //         ],
                //     },
                //     {
                //         title: "Community",
                //         items: [
                //             {
                //                 label: "Stack Overflow",
                //                 href: "https://stackoverflow.com/questions/tagged/docusaurus",
                //             },
                //             {
                //                 label: "Discord",
                //                 href: "https://discordapp.com/invite/docusaurus",
                //             },
                //             {
                //                 label: "Twitter",
                //                 href: "https://twitter.com/docusaurus",
                //             },
                //         ],
                //     },
                //     {
                //         title: "More",
                //         items: [
                //             {
                //                 label: "Blog",
                //                 to: "/blog",
                //             },
                //             {
                //                 label: "GitHub",
                //                 href: "https://github.com/facebook/docusaurus",
                //             },
                //         ],
                //     },
                // ],
                copyright: `Copyright © ${new Date().getFullYear()} afridho-api. All rights reserved.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
                additionalLanguages: ["bash", "diff", "json"],
            },
        }),
};

export default config;
