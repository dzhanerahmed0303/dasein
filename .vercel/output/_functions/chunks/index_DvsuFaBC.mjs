import { c as createComponent } from './consts_BhKcTm52.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from './entrypoint_Dm7pvM2q.mjs';
import { g as getCollection, a as getSite } from './consts_BTEIQhKL.mjs';
import { $ as $$PageLayout } from './PageLayout_Bv0N5DnR.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog");
  const site = await getSite();
  const slugify = (value) => value.toLowerCase().replace(/\s+/g, "-");
  const tagCounts = /* @__PURE__ */ new Map();
  posts.forEach((post) => {
    (post.data.tags ?? []).forEach((tag) => {
      tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1);
    });
  });
  const tags = Array.from(tagCounts.entries()).sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1];
    return a[0].localeCompare(b[0]);
  });
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": `Tags · ${site.title}`, "description": "Explora las entradas por etiqueta" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="content-shell py-12 space-y-6"> <header class="space-y-2"> <p class="text-sm uppercase tracking-[0.3em] text-muted">Etiquetas</p> <h1 class="text-3xl font-semibold text-ink">Busca por tema</h1> <p class="text-muted">Explora todas las etiquetas disponibles y las entradas asociadas.</p> </header> ${tags.length === 0 ? renderTemplate`<p class="text-muted">Aún no hay etiquetas.</p>` : renderTemplate`<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"> ${tags.map(([tag, count]) => renderTemplate`<li> <a class="flex items-center justify-between rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-4 py-3 hover:-translate-y-[1px] hover:border-[color-mix(in_oklab,var(--color-ink)_25%,transparent)] transition duration-150"${addAttribute(`/tags/${slugify(tag)}/`, "href")}> <span class="font-medium text-ink">${tag}</span> <span class="text-sm text-muted">${count}</span> </a> </li>`)} </ul>`} </section> ` })}`;
}, "C:/Users/dzhan/Desktop/AP24-25/PersonalPortfolio/dzhaner/src/pages/tags/index.astro", void 0);

const $$file = "C:/Users/dzhan/Desktop/AP24-25/PersonalPortfolio/dzhaner/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
