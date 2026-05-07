import { c as createComponent } from './consts_BhKcTm52.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './entrypoint_Dm7pvM2q.mjs';
import { $ as $$PageLayout } from './PageLayout_Bv0N5DnR.mjs';
import { $ as $$Image } from './_astro_assets_BPwKqc9d.mjs';
import { p as profilePhoto } from './Dzhaner_DxtzuIxt.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "About me", "description": "Who is Dzhaner?", "eyebrow": "Studio" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="content-shell py-12 space-y-8"> <div class="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start"> ${renderComponent($$result2, "Image", $$Image, { "src": profilePhoto, "alt": "Dzhaner", "width": 420, "height": 520, "quality": 100, "class": "rounded-2xl object-cover object-top w-full sm:w-80 lg:w-96 shrink-0 border border-[var(--color-border)]" })} <div class="space-y-3 max-w-3xl"> <p class="m-0 text-ink text-2xl font-semibold leading-tight">
I’m Dzhaner — a programming student who enjoys learning new things and working with people.
</p> <p class="m-0 text-muted">
I like clear communication, staying organized, and keeping a positive atmosphere in a team. I don’t give up easily; when things get difficult, I stay calm, look for solutions, and keep moving forward.
</p> <p class="m-0 text-muted">
I enjoy motivating the people around me, especially when the team needs a bit of energy or support. I’m curious, reliable, and always trying to grow, and I bring that mindset into everything I do.
</p> </div> </div> </section> ` })}`;
}, "C:/Users/dzhan/Desktop/AP24-25/PersonalPortfolio/dzhaner/src/pages/about.astro", void 0);

const $$file = "C:/Users/dzhan/Desktop/AP24-25/PersonalPortfolio/dzhaner/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
