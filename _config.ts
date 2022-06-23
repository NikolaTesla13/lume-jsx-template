import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import sass from "lume/plugins/sass.ts";

const site = lume();

site.use(jsx());
site.use(sass());

export default site;
