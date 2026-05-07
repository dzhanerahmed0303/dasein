import { m as maybeRenderHead, c as addAttribute, b as renderTemplate, s as spreadAttributes, r as renderComponent, d as renderSlot } from './entrypoint_Dm7pvM2q.mjs';
import { $ as $$Image } from './_astro_assets_BPwKqc9d.mjs';
import { c as createComponent } from './consts_BhKcTm52.mjs';
import 'piccolore';
import 'clsx';

const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date, pubDate, updatedDate } = Astro2.props;
  const raw = date ?? pubDate ?? updatedDate;
  const d = raw ? new Date(raw) : null;
  return renderTemplate`${d ? renderTemplate`${maybeRenderHead()}<time${addAttribute(d.toISOString(), "datetime")}>${d.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })}</time>` : renderTemplate`<time>Unknown date</time>`}`;
}, "C:/Users/dzhan/Desktop/AP24-25/PersonalPortfolio/dzhaner/src/components/FormattedDate.astro", void 0);

const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Card;
  const { title, href, description, date, image, imageAlt = "", eyebrow } = Astro2.props;
  const baseDate = typeof date === "string" ? new Date(date) : date;
  const articleClass = "group relative grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-start p-5 transition duration-300 ease-in-out hover:-translate-y-1 focus-within:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-border";
  const isExternal = /^https?:\/\//.test(href) || href.startsWith("//");
  const aProps = { href, "aria-label": `Ver ${title}`, ...isExternal ? { rel: "noopener noreferrer" } : {} };
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(articleClass, "class")}${addAttribute(href, "data-href")} role="link" tabindex="0" onclick="if(!event.target.closest('a,button,input,textarea,select,details,[role=button]')){location.href=this.dataset.href}" onkeydown="if((event.key==='Enter'||event.key===' ')&&!event.target.closest('a,button,input,textarea,select,details,[role=button]')){location.href=this.dataset.href}"> <a class="sr-only"${spreadAttributes(aProps)}>Ver ${title}</a> ${image && renderTemplate`<figure class="lg:col-span-full relative overflow-hidden bg-[color-mix(in_oklab,var(--color-ink)_4%,var(--color-surface))]"> ${typeof image === "string" ? renderTemplate`<img${addAttribute(image, "src")}${addAttribute(imageAlt, "alt")} loading="lazy" class="lg:col-span-full aspect-12/7 object-cover object-top w-full transition duration-400 group-hover:scale-[1.02]">` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": image, "alt": imageAlt, "loading": "lazy", "class": "lg:col-span-full aspect-12/7 object-cover object-top w-full transition duration-400 group-hover:scale-[1.02]" })}`} </figure>`} <div class="lg:col-span-2"> ${eyebrow && renderTemplate`<p class="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">${eyebrow}</p>`} <h3 class="text-sm 2xl:text-xl text-[color:var(--color-primary)] font-bold uppercase"> <span class="relative z-10">${title}</span> </h3> ${description && renderTemplate`<p class="text-xs 2xl:text-lg mt-1 text-[color-mix(in_srgb,var(--color-primary)_70%,var(--color-text-light)_30%)]">${description}</p>`} </div> ${baseDate && renderTemplate`<p class="text-xs 2xl:text-lg text-base-600 lg:ml-auto"> <time${addAttribute(baseDate.toISOString(), "datetime")}> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": baseDate })} </time> </p>`} <div class="relative z-10 mt-2 lg:col-span-full mt-auto pt-2 text-[0.95rem] text-[color-mix(in_srgb,var(--color-primary)_70%,var(--color-text-light)_30%)]"> ${renderSlot($$result, $$slots["default"])} </div> </article>`;
}, "C:/Users/dzhan/Desktop/AP24-25/PersonalPortfolio/dzhaner/src/components/Card.astro", void 0);

export { $$Card as $ };
