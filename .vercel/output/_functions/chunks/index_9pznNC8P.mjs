import { c as createComponent } from './consts_BhKcTm52.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from './entrypoint_Dm7pvM2q.mjs';
import { $ as $$Image } from './_astro_assets_BPwKqc9d.mjs';
import { g as getCollection, a as getSite } from './consts_BTEIQhKL.mjs';
import { $ as $$PageLayout, w as withBase } from './PageLayout_Bv0N5DnR.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const projects = (await getCollection("projects")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const site = await getSite();
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": `Projects · ${site.title}`, "description": "Explore case studies and recent builds." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="content-shell py-12 space-y-10"> <header class="space-y-2"> <p class="text-sm uppercase tracking-[0.35em] text-muted">Projects</p> <h1 class="text-4xl font-semibold text-ink">Product stories and recent experiences</h1> <p class="text-muted max-w-3xl">
Sharing results, learnings, and design structures that power creative and technical teams.
</p> </header> ${projects.length === 0 ? renderTemplate`<p class="text-muted">No projects published yet.</p>` : renderTemplate`<div class="space-y-6"> ${projects.map((project) => renderTemplate`<a class="group block w-full overflow-hidden rounded-[28px] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5 shadow-none transition duration-200 hover:-translate-y-[2px] hover:shadow-[0_18px_45px_color-mix(in_oklab,var(--color-ink)_25%,transparent)] md:flex md:items-center md:gap-6"${addAttribute(withBase(`/projects/${project.id}/`), "href")}> <div class="flex flex-1 flex-col"> <p class="text-xs font-semibold uppercase tracking-[0.35em] text-muted">Project</p> <h3 class="mt-2 text-2xl font-semibold text-ink group-hover:text-ink">${project.data.title}</h3> <time class="mt-1 text-xs uppercase tracking-[0.4em] text-muted md:hidden"${addAttribute(project.data.pubDate.toISOString(), "datetime")}> ${project.data.pubDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric"
  })} </time> <p class="mt-3 text-lg text-muted">${project.data.description}</p> <div class="mt-3 hidden items-center gap-2 text-sm text-muted md:flex"> <time${addAttribute(project.data.pubDate.toISOString(), "datetime")}> ${project.data.pubDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric"
  })} </time> </div> </div> ${project.data.heroImage && renderTemplate`<figure class="mt-4 h-32 w-full overflow-hidden rounded-[18px] border border-[color:var(--color-border)] bg-[color-mix(in_oklab,var(--color-surface)_80%,transparent)] md:mt-0 md:h-24 md:w-32"> ${renderComponent($$result2, "Image", $$Image, { "src": project.data.heroImage, "alt": project.data.title, "width": 220, "height": 140, "class": "h-full w-full object-cover" })} </figure>`} <time class="sr-only"></time> </a>`)} </div>`} </section> ` })}`;
}, "C:/Users/dzhan/Desktop/AP24-25/PersonalPortfolio/dzhaner/src/pages/projects/index.astro", void 0);

const $$file = "C:/Users/dzhan/Desktop/AP24-25/PersonalPortfolio/dzhaner/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
