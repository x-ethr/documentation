import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/page";
import { source } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";

type Params = {params: Promise<{slug?: string[]}>};

export default async function Page(props: Params) {
	const {slug} = await props.params;
	const page = source.getPage(slug);
	if (!page) notFound();

	const Mdx = page.data.body;
	return (
		<DocsPage toc={page.data.toc} full={page.data.full}>
			<DocsTitle>{page.data.title}</DocsTitle>
			<DocsDescription>{page.data.description}</DocsDescription>
			<DocsBody>
				<Mdx components={getMDXComponents()} />
			</DocsBody>
		</DocsPage>
	);
}

export function generateStaticParams() {
	return source.generateParams();
}

export async function generateMetadata(props: Params): Promise<Metadata> {
	const {slug} = await props.params;
	const page = source.getPage(slug);
	if (!page) notFound();
	return {title: page.data.title, description: page.data.description};
}
