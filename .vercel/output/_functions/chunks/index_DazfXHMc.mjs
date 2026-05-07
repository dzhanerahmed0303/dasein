import { c as createComponent } from './consts_BhKcTm52.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from './entrypoint_Dm7pvM2q.mjs';
import { g as getCollection, a as getSite } from './consts_BTEIQhKL.mjs';
import { $ as $$Card } from './Card_BDq7wGob.mjs';
import { $ as $$PageLayout, w as withBase, s as slugify } from './PageLayout_Bv0N5DnR.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const [featured, ...rest] = posts;
  const site = await getSite();
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": site.title, "description": "Blog" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="content-shell py-12 space-y-8"> ${featured && renderTemplate`<div class="grid grid-cols-1"> ${renderComponent($$result2, "Card", $$Card, { "title": featured.data.title, "href": withBase(`/blog/${featured.id}/`), "description": featured.data.description, "date": featured.data.pubDate, "image": featured.data.heroImage, "imageAlt": featured.data.title, "variant": "post" }, { "default": async ($$result3) => renderTemplate`${featured.data.tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2 pt-1 text-sm text-muted"> ${featured.data.tags.map((tag) => renderTemplate`<a class="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-3 py-1 hover:text-ink"${addAttribute(withBase(`/tags/${slugify(tag)}/`), "href")}> ${tag} </a>`)} </div>`}` })} </div>`} ${rest.length > 0 && renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"> ${rest.map((post) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "title": post.data.title, "href": withBase(`/blog/${post.id}/`), "description": post.data.description, "date": post.data.pubDate, "image": post.data.heroImage, "imageAlt": post.data.title, "variant": "post" }, { "default": async ($$result3) => renderTemplate`${post.data.tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2 pt-1 text-sm text-muted"> ${post.data.tags.map((tag) => renderTemplate`<a class="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-[color-mix(in_oklab,var(--color-surface)_95%,transparent)] px-3 py-1 hover:text-ink"${addAttribute(withBase(`/tags/${slugify(tag)}/`), "href")}> ${tag} </a>`)} </div>`}` })}`)} </div>`} </section> ` })}`;
}, "C:/Users/dzhan/Desktop/AP24-25/PersonalPortfolio/dzhaner/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/dzhan/Desktop/AP24-25/PersonalPortfolio/dzhaner/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
