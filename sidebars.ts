/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
 guidesSidebar: [
    {
      type: "category",
      label: "CHECKOUT INTEGRATION",
      collapsed: true,
      items: [
         "guides/checkout_integration", // <-- this file exists, good!
        "guides/checkout_methods"
      ]
    },
     "guides/s2s_card",
        {
      type: "category",
      label: "S2S APM",
      collapsed: true,
      items: [
         "guides/s2s_apm", // <-- this file exists, good!
        "guides/s2s_apm_brands"
      ]
    },
     "guides/plugins",
    "guides/sdk_checkout"
   
  ],
  openApiSidebar: [
    {
      type: "category",
      label: "API Requests",
      link: {
        type: "generated-index",
        title: "Requests API",
        description:
          "Please choose a protocol and select the required API request",
        slug: "/category/requests"
      },
      items: require("./docs/requests/sidebar.js")
    }
  ]
};

export default sidebars;