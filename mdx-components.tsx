import defaultMdxComponents from "fumadocs-ui/mdx";
import { Callout } from "fumadocs-ui/components/callout";
import { Card, Cards } from "fumadocs-ui/components/card";
import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";

/**
 * Numbered steps in the Nextra style: content keeps plain `### Heading`
 * sections and the wrapper numbers them via CSS counters (see globals.css) —
 * no per-page rewrites needed.
 */
function Steps({children}: {children: ReactNode}) {
	return <div className="heir-steps">{children}</div>;
}

/**
 * The changelog timeline: content stays plain markdown (## month, ### release
 * with an *italic* date) and the wrapper turns it into a gold rail — months as
 * glowing diamond nodes, releases as ringed dots with date chips, bullets in
 * soft cards. See globals.css .heir-changelog.
 */
function ChangelogTimeline({children}: {children: ReactNode}) {
	return <div className="heir-changelog">{children}</div>;
}

export function getMDXComponents(components?: MDXComponents): MDXComponents {
	return {
		...defaultMdxComponents,
		Callout,
		Card,
		Cards,
		Steps,
		ChangelogTimeline,
		...components
	};
}
