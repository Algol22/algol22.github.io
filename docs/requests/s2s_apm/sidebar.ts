import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "requests/s2s_apm/void-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "requests/s2s_apm/void",
          label: "Void",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
