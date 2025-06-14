import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "requests/s2s_card/payment-platform-sale-api",
    },
    {
      type: "category",
      label: "S2S Card",
      items: [
        {
          type: "doc",
          id: "requests/s2s_card/sale",
          label: "Sale / Authorization",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
