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
    // Direct list of docs without a wrapping category
    "guides/checkout_integration",
    "guides/s2s_card",
    "guides/s2s_apm",
    "guides/sdk_checkout",
    "guides/plugins"
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