import { loader } from "fumadocs-core/source";
import { docs } from "@/.source/server";

/** Docs live at the site root — docs.heir.gg/<section>/<page>. */
export const source = loader({
	baseUrl: "/",
	source: docs.toFumadocsSource()
});
