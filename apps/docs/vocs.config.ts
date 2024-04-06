import { defineConfig } from "vocs";

export default defineConfig({
  title: "AdLand",
  font: {
    google: "Montserrat",
  },
  logoUrl: "https://i.imgur.com/JUyaIUO.png",
  theme: {
    accentColor: {
      backgroundAccent: { light: "#00429d", dark: "#77ae74" },
      backgroundAccentHover: { light: "#00429d", dark: "#77ae74" },
      backgroundAccentText: { light: "#f5f5f5", dark: "#f5f5f5" },
      textAccent: { light: "#00429d", dark: "#ffb165" },
      textAccentHover: { light: "#00429d", dark: "#ffb165" },
      borderAccent: { light: "#00429d", dark: "#77ae74" },
    },
  },
  socials: [
    {
      icon: "warpcast",
      link: "https://warpcast.com/~/channel/adland",
    },
    {
      icon: "github",
      link: "https://github.com/nezz0746/adland",
    },
  ],
  sidebar: [
    {
      text: "What is Adland ?",
      link: "/what-is-adland",
    },
    {
      text: "Use cases",
      collapsed: true,
      items: [
        {
          text: "Web Ads",
          link: "/use-cases/web-ads",
        },
        {
          text: "Social Media Ads",
          link: "/use-cases/social-media-ads",
        },
        {
          text: "Sponsored content",
          link: "/use-cases/sponsored-content",
        },
      ],
    },
    {
      text: "Reference",
      collapsed: true,
      items: [
        {
          text: "Endpoints",
          link: "/reference/endpoints",
        },
      ],
    },
  ],
});
