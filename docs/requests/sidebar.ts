import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
     "S2S Card": [
        {
          type: "doc",
          id: "requests/s2s_card/payment-platform-sale-api",
          label: "Payment Platform Sale Info",
        },
        {
          type: "doc",
          id: "requests/s2s_card/sale",
          label: "Sale / Authorization",
          className: "api-method post",
        },
         {
          type: "doc",
          id: "requests/s2s_card/capture",
          label: "Capture",
          className: "api-method post",
        },
         {
          type: "doc",
          id: "requests/s2s_card/creditvoid",
          label: "Creditvoid",
          className: "api-method post",
        },
           {
          type: "doc",
          id: "requests/s2s_card/void",
          label: "Void",
          className: "api-method post",
        },
            {
          type: "doc",
          id: "requests/s2s_card/debit",
          label: "Debit",
          className: "api-method post",
        },
            {
          type: "doc",
          id: "requests/s2s_card/credit-2-card",
          label: "Credit2Card",
          className: "api-method post",
        },
            {
          type: "doc",
          id: "requests/s2s_card/card-2-card",
          label: "Card2Card",
          className: "api-method post",
        },
            {
          type: "doc",
          id: "requests/s2s_card/get-trans-status",
          label: "Get transaction status",
          className: "api-method post",
        },
             {
          type: "doc",
          id: "requests/s2s_card/get-trans-details",
          label: "Get transaction details",
          className: "api-method post",
        },
             {
          type: "doc",
          id: "requests/s2s_card/get-trans-status-by-order-id",
          label: "Get transaction status by order id",
          className: "api-method post",
        },
            {
          type: "doc",
          id: "requests/s2s_card/recurring-sale",
          label: "Recurring sale",
          className: "api-method post",
        },
             {
          type: "doc",
          id: "requests/s2s_card/retry",
          label: "Retry request",
          className: "api-method post",
        },
             {
          type: "doc",
          id: "requests/s2s_card/recurring-create-schedule",
          label: "Create Recurring Schedule",
          className: "api-method post",
        },
               {
          type: "doc",
          id: "requests/s2s_card/recurring-pause-schedule",
          label: "Pause Recurring Schedule",
          className: "api-method post",
        },
              {
          type: "doc",
          id: "requests/s2s_card/recurring-run-schedule",
          label: "Run Recurring Schedule",
          className: "api-method post",
        },
              {
          type: "doc",
          id: "requests/s2s_card/recurring-delete-schedule",
          label: "Delete Recurring Schedule",
          className: "api-method post",
        },
               {
          type: "doc",
          id: "requests/s2s_card/recurring-info-schedule",
          label: "Info Recurring Schedule",
          className: "api-method post",
        },
               {
          type: "doc",
          id: "requests/s2s_card/recurring-deschedule",
          label: "Deschedule Recurring",
          className: "api-method post",
        }
      ],
  "S2S APM": [
    {
          type: "doc",
          id: "requests/s2s_apm/payment-platform-api",
          label: "Payment Platform API Info",
        },
        {
          type: "doc",
          id: "requests/s2s_apm/sale",
          label: "Create a payment (SALE request)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "requests/s2s_apm/credit-2-virtual",
          label: "Credit to virtual",
          className: "api-method post",
        },
          {
          type: "doc",
          id: "requests/s2s_apm/credit-2-crypto",
          label: "Credit to crypto",
          className: "api-method post",
        },
           {
          type: "doc",
          id: "requests/s2s_apm/creditvoid",
          label: "Creditvoid",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "requests/s2s_apm/void",
          label: "Void",
          className: "api-method post",
        },
         {
          type: "doc",
          id: "requests/s2s_apm/debit-2-virtual",
          label: "Debit 2 Virtual",
          className: "api-method post",
        },
          {
          type: "doc",
          id: "requests/s2s_apm/debit-2-virtual-calc",
          label: "Debit 2 Virtual calc",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "requests/s2s_apm/debit-2-virtual-complete",
          label: "Debit 2 Virtual complete",
          className: "api-method post",
        },
       {
          type: "doc",
          id: "requests/s2s_apm/get-trans-status",
          label: "Get Transaction Status",
          className: "api-method post",
        }   
      ],
  "Checkout": [
       {
          type: "doc",
          id: "requests/checkout/sale",
          label: "Authentication request",
          className: "api-method post",
       },
         {
          type: "doc",
          id: "requests/checkout/recurring",
          label: "Recurring",
          className: "api-method post",
       },
         {
          type: "doc",
          id: "requests/checkout/retry",
          label: "Retry",
          className: "api-method post",
       },
         {
          type: "doc",
          id: "requests/checkout/get-trans-status-by-payment-id",
          label: "Get Transaction Status by Payment id",
          className: "api-method post",
       },
         {
          type: "doc",
          id: "requests/checkout/get-trans-status-by-order-id",
          label: "Get Transaction Status by Payment id",
          className: "api-method post",
       },
         {
          type: "doc",
          id: "requests/checkout/refund",
          label: "Refund",
          className: "api-method post",
       },
         {
          type: "doc",
          id: "requests/checkout/void",
          label: "Void",
          className: "api-method post",
       }
  ],
    };
 


export default sidebars;
