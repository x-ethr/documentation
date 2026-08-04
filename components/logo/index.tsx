import { CSSProperties } from "react";

/**
 * Heir wordmark: the crown mark rendered as a CSS mask so it inherits the
 * current text color (works in both themes), followed by heir.gg with the
 * TLD in the brand orange.
 */
export default function Logo(props: {size?: number; style?: CSSProperties}) {
	const height = props.size ?? 22;

	return (
		<span
			className="heir-logo"
			style={{display: "inline-flex", alignItems: "center", gap: "0.6rem", ...props.style}}
		>
			<span
				aria-hidden
				className="heir-crown"
				style={{
					display: "inline-block",
					height,
					width: height * 1.6,
					background: "currentColor",
					WebkitMaskImage: "url(/crown.png)",
					WebkitMaskSize: "contain",
					WebkitMaskRepeat: "no-repeat",
					WebkitMaskPosition: "center",
					maskImage: "url(/crown.png)",
					maskSize: "contain",
					maskRepeat: "no-repeat",
					maskPosition: "center"
				}}
			/>
			<span style={{fontWeight: 800, letterSpacing: "-0.02em", fontSize: "1.05rem"}}>
				heir<span className="heir-tld">.gg</span>
			</span>
		</span>
	);
}
