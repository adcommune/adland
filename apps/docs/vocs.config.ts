import { defineConfig } from "vocs";

const prodBaseURL = "https://app.adland.space";
const localBaseURL = "http://localhost:3001";
const baseURL =
  process.env.NODE_ENV === "production" ? prodBaseURL : localBaseURL;

export default async () => {
  const spaces = [16, 17, 18, 19, 20];

  const items = await Promise.all(
    spaces.map((id) => {
      return {
        name: `AdLand ${id}`,
        link: `${baseURL}/api/ad/${id}/link`,
        image: `${baseURL}/api/ad/${id}/image`,
      };
    })
  );

  return defineConfig({
    title: "AdLand",
    font: {
      google: "Montserrat",
    },
    logoUrl: "https://i.imgur.com/LYRIycZ.png",
    ogImageUrl: "https://i.imgur.com/6oeTt1J.jpg",
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
    sponsors: [
      {
        name: "AdLand Sponsors",
        height: 120,
        items: [items.slice(0, 2), items.slice(2)],
      },
    ],
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
        text: "App Guides",
        collapsed: false,
        items: [
          {
            text: "Sign in",
            link: "/tutorials/sign-in",
          },
          {
            text: "Acquire an ad space",
            link: "/tutorials/acquire",
          },
          {
            text: "Put up an ad",
            link: "/tutorials/put-ad",
          },
        ],
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
    ],
  });
};
