import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { RootProvider } from "fumadocs-ui/provider/next";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { source } from "@/lib/source";
import "./globals.css";

const geistSans = Geist({variable: "--font-sans", subsets: ["latin"]});
const geistMono = Geist_Mono({variable: "--font-geist-mono", subsets: ["latin"]});

export const metadata: Metadata = {
	title: {default: "Heir Docs", template: "%s • Heir Docs"},
	description: "Documentation for Heir — competitive league infrastructure run from your Discord.",
	openGraph: {siteName: "Heir Docs", type: "website"}
};

export const viewport: Viewport = {themeColor: "#f5b83d"};

/** The webapp's crown wordmark, linking back to the main site. */
function Wordmark() {
	return (
		<span className="group flex items-center gap-2.5">
			<span
				aria-hidden
				className="heir-crown h-[20px] w-[32px] bg-fd-foreground transition-colors duration-300 ease-out group-hover:bg-fd-primary"
				style={{
					maskImage: "url(/crown.png)",
					maskSize: "contain",
					maskRepeat: "no-repeat",
					maskPosition: "center",
					WebkitMaskImage: "url(/crown.png)",
					WebkitMaskSize: "contain",
					WebkitMaskRepeat: "no-repeat",
					WebkitMaskPosition: "center"
				}}
			/>
			<span className="rounded-full border border-fd-primary/40 bg-fd-primary/10 px-1.5 py-px text-[9px] font-semibold uppercase tracking-[0.12em] text-fd-primary">
				Docs
			</span>
		</span>
	);
}

export default function Layout({children}: {children: ReactNode}) {
	return (
		<html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
			<body className="heir-grain flex min-h-screen flex-col">
				<RootProvider theme={{forcedTheme: "dark", defaultTheme: "dark", enabled: false}}>
					<DocsLayout
						tree={source.pageTree}
						nav={{title: <Wordmark />}}
						// Full-bleed: the default caps the grid at 1400px with side
						// gutters; 100vw lets sidebar + content + toc span the window
						containerProps={{className: "[--fd-layout-width:100vw]"}}
						themeSwitch={{enabled: false}}
						links={[
							{text: "heir.gg", url: "https://heir.gg", external: true},
							{text: "Community", url: "https://discord.gg/u2n3dPK5un", external: true}
						]}
					>
						{children}
					</DocsLayout>
				</RootProvider>
			</body>
		</html>
	);
}
