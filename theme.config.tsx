import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Logo from "./components/logo";

const config: DocsThemeConfig = {
    useNextSeoProps() {
        return {
            titleTemplate: '%s · Heir'
        }
    },
    // Brand orange (#d95926) expressed as the theme's hue/saturation
    primaryHue: {dark: 17, light: 17},
    primarySaturation: {dark: 70, light: 65},
    // heir.gg is dark-only; the docs match rather than offering a light theme
    darkMode: false,
    nextThemes: {defaultTheme: 'dark', forcedTheme: 'dark'},
    logo: <Logo size={22}/>,
    logoLink: 'https://heir.gg',
    project: {
        link: 'https://github.com/heirgg',
    },
    chat: {
        link: 'https://discord.gg/ethr',
    },
    docsRepositoryBase: 'https://github.com/x-ethr/documentation/tree/main',
    sidebar: {
        defaultMenuCollapseLevel: 1,
        toggleButton: true
    },
    toc: {
        title: 'On this page',
        backToTop: true
    },
    editLink: {
        text: 'Edit this page'
    },
    feedback: {
        content: 'Question? Ask in Discord →',
        labels: 'question'
    },
    footer: {
        text: (
            <span style={{fontSize: '0.85rem', opacity: 0.7}}>
                © {new Date().getFullYear()} Heir · Competition as a Service
            </span>
        )
    },
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta property="og:title" content="Heir Docs"/>
            <meta property="og:description" content="Competition as a Service — run your league's rosters, ratings, schedules, and live stat tracking from Discord."/>
            <meta name="description" content="Competition as a Service — run your league's rosters, ratings, schedules, and live stat tracking from Discord."/>
            <meta content="dark" name="color-scheme"/>
            <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png"/>
            <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png"/>
            <link href="/apple-touch-icon.png" rel="apple-touch-icon"/>
            <meta content="#d95926" name="msapplication-TileColor"/>
            <meta content="#d95926" name="theme-color"/>
        </>
    )
}

export default config
