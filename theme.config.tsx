import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Logo from "./components/logo";

const config: DocsThemeConfig = {
  logo: <Logo size={75} style={{color: "#FFFFFF"}}/>,
  project: {
    link: 'https://github.com/x-ethr/documentation',
  },
  chat: {
    link: 'https://discord.gg/ethr',
  },
  docsRepositoryBase: 'https://github.com/x-ethr/documentation',
  footer: {
    text: 'X-ETHR, LLC',
  },
}

export default config
