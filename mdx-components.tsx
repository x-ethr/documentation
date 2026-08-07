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

export function getMDXComponents(components?: MDXComponents): MDXComponents {
	return {
		...defaultMdxComponents,
		Callout,
		Card,
		Cards,
		Steps,
		...components
	};
}
