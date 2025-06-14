// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

const config: Config = {
  title: "My Site",
  tagline: "Dinosaurs are cool",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.ts"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          onInlineAuthors: "ignore",
          onUntruncatedBlogPosts: "ignore",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: "My Site",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          position: "left",
          label: "Guides",
          to: "/docs/guides/checkout_integration",
        },
        {
          label: "API Requests",
          position: "left",
          to: "/docs/category/requests",
        },


         {
      type: 'dropdown',
      label: 'English',
      position: 'right',
      items: [
        {
          label: 'English',
          to: '/',
        },
        {
          label: 'Español',
          href: 'https://another-website.com', // Replace with your target Spanish site
        },
      ],
    },
        // {
        //   to: "/blog",
        //   label: "Blog",
        //   position: "left",
        // },
        // {
        //   href: "https://github.com/facebook/docusaurus",
        //   label: "GitHub",
        //   position: "right",
        // },
      ],
    },
    // footer: {
    //   style: "dark",
    //   links: [
    //     {
    //       title: "Docs",
    //       items: [
    //         {
    //           label: "Guides",
    //           to: "/docs/guides/checkout_integration",
    //         },
    //       ],
    //     },
        // {
        //   title: "Community",
        //   items: [
        //     {
        //       label: "Stack Overflow",
        //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
        //     },
        //     {
        //       label: "Discord",
        //       href: "https://discordapp.com/invite/docusaurus",
        //     },
        //     {
        //       label: "Twitter",
        //       href: "https://twitter.com/docusaurus",
        //     },
        //   ],
        // },
        // {
        //   title: "More",
        //   items: [
        //     {
        //       label: "Blog",
        //       to: "/blog",
        //     },
        //     {
        //       label: "GitHub",
        //       href: "https://github.com/facebook/docusaurus",
        //     },
        //   ],
        // },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()}`,
    // },
    
    prism: {
      additionalLanguages: [
        "ruby",
        "csharp",
        "php",
        "java",
        "powershell",
        "json",
        "bash",
        "dart",
        "objectivec",
        "r",
      ],
    },
    languageTabs: [
      { highlight: "python", language: "python", logoClass: "python" },
      { highlight: "bash", language: "curl", logoClass: "curl" },
      { highlight: "csharp", language: "csharp", logoClass: "csharp" },
      { highlight: "go", language: "go", logoClass: "go" },
      { highlight: "javascript", language: "nodejs", logoClass: "nodejs" },
      { highlight: "ruby", language: "ruby", logoClass: "ruby" },
      { highlight: "php", language: "php", logoClass: "php" },
      { highlight: "java", language: "java", logoClass: "java", variant: "unirest" },
      { highlight: "powershell", language: "powershell", logoClass: "powershell" },
      { highlight: "dart", language: "dart", logoClass: "dart" },
      { highlight: "javascript", language: "javascript", logoClass: "javascript" },
      { highlight: "c", language: "c", logoClass: "c" },
      { highlight: "objective-c", language: "objective-c", logoClass: "objective-c" },
      { highlight: "ocaml", language: "ocaml", logoClass: "ocaml" },
      { highlight: "r", language: "r", logoClass: "r" },
      { highlight: "swift", language: "swift", logoClass: "swift" },
      { highlight: "kotlin", language: "kotlin", logoClass: "kotlin" },
      { highlight: "rust", language: "rust", logoClass: "rust" },
    ],
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          s2s_card_sale: {
            specPath: "examples/s2s_card/s2s_card_sale.yaml",
            outputDir: "docs/requests/s2s_card",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          s2s_card_capture: {
            specPath: "examples/s2s_card/s2s_card_capture.yaml",
            outputDir: "docs/requests/s2s_card",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          s2s_card_creditvoid: {
            specPath: "examples/s2s_card/s2s_card_creditvoid.yaml",
            outputDir: "docs/requests/s2s_card",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          s2s_card_void: {
            specPath: "examples/s2s_card/s2s_card_void.yaml",
            outputDir: "docs/requests/s2s_card",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          s2s_card_debit: {
            specPath: "examples/s2s_card/s2s_card_debit.yaml",
            outputDir: "docs/requests/s2s_card",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          s2s_card_credit2card: {
            specPath: "examples/s2s_card/s2s_card_credit2card.yaml",
            outputDir: "docs/requests/s2s_card",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          s2s_card_card2card: {
            specPath: "examples/s2s_card/s2s_card_card2card.yaml",
            outputDir: "docs/requests/s2s_card",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          s2s_card_get_trans_status: {
            specPath: "examples/s2s_card/s2s_card_get_trans_status.yaml",
            outputDir: "docs/requests/s2s_card",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          s2s_card_get_trans_details: {
            specPath: "examples/s2s_card/s2s_card_get_trans_details.yaml",
            outputDir: "docs/requests/s2s_card",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            }
          },
             s2s_card_get_trans_status_by_order_id: {
            specPath: "examples/s2s_card/s2s_card_get_trans_status_by_order_id.yaml",
            outputDir: "docs/requests/s2s_card",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
               s2s_card_recurring_sale: {
            specPath: "examples/s2s_card/s2s_card_recurring_sale.yaml",
            outputDir: "docs/requests/s2s_card",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
               s2s_card_retry: {
            specPath: "examples/s2s_card/s2s_card_retry.yaml",
            outputDir: "docs/requests/s2s_card",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
                s2s_card_recurring_create_schedule: {
            specPath: "examples/s2s_card/s2s_card_recurring_create_schedule.yaml",
            outputDir: "docs/requests/s2s_card",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
                 s2s_card_recurring_delete_schedule: {
            specPath: "examples/s2s_card/s2s_card_recurring_delete_schedule.yaml",
            outputDir: "docs/requests/s2s_card",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
                 s2s_card_recurring_deschedule: {
            specPath: "examples/s2s_card/s2s_card_recurring_deschedule.yaml",
            outputDir: "docs/requests/s2s_card",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
                 s2s_card_recurring_info_schedule: {
            specPath: "examples/s2s_card/s2s_card_recurring_info_schedule.yaml",
            outputDir: "docs/requests/s2s_card",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
                s2s_card_recurring_pause_schedule: {
            specPath: "examples/s2s_card/s2s_card_recurring_pause_schedule.yaml",
            outputDir: "docs/requests/s2s_card",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
                 s2s_card_recurring_run_schedule: {
            specPath: "examples/s2s_card/s2s_card_recurring_run_schedule.yaml",
            outputDir: "docs/requests/s2s_card",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
           checkout_sale: {
            specPath: "examples/checkout/checkout_sale.yaml",
            outputDir: "docs/requests/checkout",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
             checkout_void: {
            specPath: "examples/checkout/checkout_void.yaml",
            outputDir: "docs/requests/checkout",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
              checkout_retry: {
            specPath: "examples/checkout/checkout_retry.yaml",
            outputDir: "docs/requests/checkout",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
                 checkout_refund: {
            specPath: "examples/checkout/checkout_refund.yaml",
            outputDir: "docs/requests/checkout",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
                 checkout_recurring: {
            specPath: "examples/checkout/checkout_recurring.yaml",
            outputDir: "docs/requests/checkout",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
                  checkout_get_trans_status_by_payment_id: {
            specPath: "examples/checkout/checkout_get_trans_status_by_payment_id.yaml",
            outputDir: "docs/requests/checkout",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
                       checkout_get_trans_status_by_order_id: {
            specPath: "examples/checkout/checkout_get_trans_status_by_order_id.yaml",
            outputDir: "docs/requests/checkout",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
                       s2s_apm_void: {
            specPath: "examples/s2s_apm/s2s_apm_void.yaml",
            outputDir: "docs/requests/s2s_apm",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
                      s2s_apm_sale: {
            specPath: "examples/s2s_apm/s2s_apm_sale.yaml",
            outputDir: "docs/requests/s2s_apm",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
                    s2s_apm_get_trans_status: {
            specPath: "examples/s2s_apm/s2s_apm_get_trans_status.yaml",
            outputDir: "docs/requests/s2s_apm",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
                      s2s_apm_debit2virtual: {
            specPath: "examples/s2s_apm/s2s_apm_debit2virtual.yaml",
            outputDir: "docs/requests/s2s_apm",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
                    s2s_apm_debit2virtual_complete: {
            specPath: "examples/s2s_apm/s2s_apm_debit2virtual_complete.yaml",
            outputDir: "docs/requests/s2s_apm",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
                    s2s_apm_debit2virtual_calc: {
            specPath: "examples/s2s_apm/s2s_apm_debit2virtual_calc.yaml",
            outputDir: "docs/requests/s2s_apm",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
                    s2s_apm_creditvoid: {
            specPath: "examples/s2s_apm/s2s_apm_creditvoid.yaml",
            outputDir: "docs/requests/s2s_apm",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
                    s2s_apm_credit2virtual: {
            specPath: "examples/s2s_apm/s2s_apm_credit2virtual.yaml",
            outputDir: "docs/requests/s2s_apm",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
                    s2s_apm_credit2crypto: {
            specPath: "examples/s2s_apm/s2s_apm_credit2crypto.yaml",
            outputDir: "docs/requests/s2s_apm",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
        },
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        // redirects: [
        //   {
        //     from: "/",
        //     to: "/docs/guides/checkout_integration",
        //   },
        // ],
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs"],
};

export default async function createConfig() {
  return config;
}
