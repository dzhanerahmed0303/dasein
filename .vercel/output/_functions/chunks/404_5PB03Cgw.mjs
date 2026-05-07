import { c as createComponent } from './consts_BhKcTm52.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from './entrypoint_Dm7pvM2q.mjs';
import { $ as $$PageLayout, w as withBase } from './PageLayout_Bv0N5DnR.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Page not found", "description": "The page you’re looking for doesn’t exist." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="content-shell py-12 md:py-16"> <div class="relative card overflow-hidden min-h-[80vh] w-full max-w-3xl mx-auto grid place-content-center gap-8 px-6 sm:px-10 py-14 md:py-16"> <div class="max-w-3xl mx-auto flex flex-col pt-10 items-center gap-6"> <div class="relative mx-auto flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-muted"> <span class="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_ oklab,_var(--color-ink)_16%,_transparent)] bg-[color-mix(in_ oklab,_var(--color-surface)_92%,_transparent)] px-3 py-1 uppercase tracking-[0.2em]">404</span> <span class="text-muted">Lost in the grid</span> </div> <div class="relative mx-auto max-w-3xl space-y-5 text-center"> <h1 class="m-0 text-3xl sm:text-4xl font-semibold leading-tight text-ink">We couldn’t find that page.</h1> <p class="m-0 text-muted max-w-2xl mx-auto">The link may be broken or the page might have moved. Pick a route below to keep moving.</p> </div> <div class="relative flex flex-wrap justify-center gap-4 pt-2"> <a class="button primary"${addAttribute(withBase("/"), "href")}>Back to home</a> <a class="button secondary"${addAttribute(withBase("/blog"), "href")}>View the blog</a> </div> </div> </div> </section> ` })}`;
}, "C:/Users/dzhan/Desktop/AP24-25/PersonalPortfolio/dzhaner/src/pages/404.astro", void 0);

const $$file = "C:/Users/dzhan/Desktop/AP24-25/PersonalPortfolio/dzhaner/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
