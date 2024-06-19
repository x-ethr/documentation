import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Logo from "./components/logo";

const config: DocsThemeConfig = {
    useNextSeoProps() {
        return {
            titleTemplate: '%s · ETHR'
        }
    },
  logo: <Logo size={75} style={{color: "#FFFFFF"}}/>,
  project: {
    link: 'https://github.com/x-ethr',
  },
  chat: {
    link: 'https://discord.gg/ethr',
  },
  docsRepositoryBase: 'https://github.com/x-ethr/documentation',
  footer: {
    text: 'X-ETHR, LLC',
  },
  head: (
      <>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta property="og:title" content="ETHR Docs"/>
          <meta property="og:description" content="ETHR Documentation"/>
          <meta content="dark" name="color-scheme"/>
          <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png"/>
          <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png"/>
          <link color="#1d1d27" href="/safari-pinned-tab.svg" rel="mask-icon"/>
          <meta content="#000000" name="msapplication-TileColor"/>
          <meta content="#000000" name="theme-color"/>
      </>
  )
}

export default config
