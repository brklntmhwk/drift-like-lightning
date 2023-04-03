import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import ThemeSwitcher from "@/components/themeSwitcher";
import LocalizedDate from "@/components/localizedDate";
import CustomHead from "@/components/head";

const config: DocsThemeConfig = {
  head: (
    <>
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/icon.png"></link>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </>
  ),
  useNextSeoProps() {
    return {
      defaultTitle: "Drift like lightning",
      titleTemplate: "%s | Drift like lightning",
      description: "This is a website run by Hikari",
    };
  },
  logo: <span>⛅Drift like lightning⚡</span>,
  project: {
    link: "https://github.com/bklthwnrkm",
  },
  docsRepositoryBase: "https://github.com/bklthwnrkm",
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a href="https://nextra.site" target="_blank">
          Drift Like Lightning
        </a>
        .
      </span>
    ),
  },
  feedback: {
    content: null,
  },
  editLink: {
    text: null,
  },
  gitTimestamp: <LocalizedDate />,
  toc: {
    title: "Table of Contents",
  },
  themeSwitch: {
    component: <ThemeSwitcher />,
  },
  primaryHue: 210,
  i18n: [
    { locale: "en", text: "English" },
    { locale: "ja", text: "日本語" },
  ],
};

export default config;
