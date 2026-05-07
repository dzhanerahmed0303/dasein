import { c as createComponent } from './consts_BhKcTm52.mjs';
import 'piccolore';
import { q as createRenderInstruction, c as addAttribute, b as renderTemplate, s as spreadAttributes, u as unescapeHTML, r as renderComponent, m as maybeRenderHead, d as renderSlot, v as renderHead } from './entrypoint_Dm7pvM2q.mjs';
import { a as getSite } from './consts_BTEIQhKL.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const FallbackImage = new Proxy({"src":"/_astro/blog-placeholder-about.pKLZWrxI.png","width":960,"height":480,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/dzhan/Desktop/AP24-25/PersonalPortfolio/dzhaner/src/assets/blog-placeholder-about.png";
							}
							
							return target[name];
						}
					});

const $$OpenGraphArticleTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "C:/Users/dzhan/Desktop/AP24-25/PersonalPortfolio/dzhaner/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$OpenGraphBasicTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "C:/Users/dzhan/Desktop/AP24-25/PersonalPortfolio/dzhaner/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$OpenGraphImageTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "C:/Users/dzhan/Desktop/AP24-25/PersonalPortfolio/dzhaner/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$OpenGraphOptionalTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "C:/Users/dzhan/Desktop/AP24-25/PersonalPortfolio/dzhaner/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$ExtendedTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(property, "property")}${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}>`)}`;
}, "C:/Users/dzhan/Desktop/AP24-25/PersonalPortfolio/dzhaner/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$TwitterTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "C:/Users/dzhan/Desktop/AP24-25/PersonalPortfolio/dzhaner/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$LanguageAlternatesTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "C:/Users/dzhan/Desktop/AP24-25/PersonalPortfolio/dzhaner/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is strongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  const baseUrl = Astro2.site ?? Astro2.url;
  const defaultCanonicalUrl = new URL(Astro2.url.pathname + Astro2.url.search, baseUrl);
  const shouldRemoveTrailingSlash = Astro2.props.removeTrailingSlashForRoot && Astro2.url.pathname === "/";
  const canonicalHref = shouldRemoveTrailingSlash ? defaultCanonicalUrl.origin + defaultCanonicalUrl.search : defaultCanonicalUrl.href;
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || canonicalHref, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}${Astro2.props.noarchive ? ", noarchive" : ""}${Astro2.props.nocache ? ", nocache" : ""}${Astro2.props.robotsExtras ? `, ${Astro2.props.robotsExtras}` : ""}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "C:/Users/dzhan/Desktop/AP24-25/PersonalPortfolio/dzhaner/node_modules/astro-seo/src/SEO.astro", void 0);

const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseHead;
  const site = await getSite();
  const { title, description, image = FallbackImage } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const imageURL = new URL(image.src, Astro2.site ?? Astro2.url);
  return renderTemplate`<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='12' fill='%23111111'/><text x='32' y='46' font-family='Georgia,serif' font-size='40' font-weight='bold' fill='white' text-anchor='middle'>D</text></svg>">${renderComponent($$result, "SEO", $$SEO, { "charset": "utf-8", "title": title, "description": description, "canonical": canonicalURL.toString(), "openGraph": {
    basic: {
      title,
      type: "website",
      image: imageURL.toString(),
      url: canonicalURL.toString()
    },
    optional: {
      description,
      siteName: site.author.name || "Dasein"
    }
  }, "twitter": {
    card: "summary_large_image",
    title,
    description,
    image: imageURL.toString(),
    imageAlt: title
  }, "extend": {
    link: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "sitemap", href: "/sitemap-index.xml" },
      { rel: "alternate", type: "application/rss+xml", title: site.author.name, href: new URL("rss.xml", Astro2.site).toString() }
    ],
    meta: [
      { name: "viewport", content: "width=device-width,initial-scale=1" },
      { name: "generator", content: Astro2.generator }
    ]
  } })}`;
}, "C:/Users/dzhan/Desktop/AP24-25/PersonalPortfolio/dzhaner/src/components/BaseHead.astro", void 0);

const $$Clock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Clock;
  const {
    timeZone = "UTC",
    locale = "en-US",
    hour12 = true,
    showSeconds = false
  } = Astro2.props;
  const initialTime = new Intl.DateTimeFormat(locale, {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: showSeconds ? "2-digit" : void 0,
    hour12
  }).format(/* @__PURE__ */ new Date());
  return renderTemplate`${maybeRenderHead()}<span class="clock"${addAttribute(timeZone, "data-timezone")}${addAttribute(locale, "data-locale")}${addAttribute(hour12, "data-hour12")}${addAttribute(showSeconds, "data-showseconds")}> ${initialTime} </span> ${renderScript($$result, "C:/Users/dzhan/Desktop/AP24-25/PersonalPortfolio/dzhaner/src/components/Clock.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/dzhan/Desktop/AP24-25/PersonalPortfolio/dzhaner/src/components/Clock.astro", void 0);

const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const today = /* @__PURE__ */ new Date();
  const site = await getSite();
  site.social || [];
  return renderTemplate`${maybeRenderHead()}<footer class="py-8"> <div class="content-shell content-shell--flush"> <div class="grid gap-10 pb-10 md:grid-cols-2"> <div class="grid gap-8"></div> </div> <div class="grid gap-6 pt-8 pb-4 md:flex md:items-center md:justify-between"> <p class="text-sm text-muted m-0">${site.title} &copy; Dzhaner Shener ${today.getFullYear()} </p> <div class="md:text-right space-y-2 md:space-y-1"> <div class="flex flex-wrap items-center gap-3 md:justify-end"> <p class="text-2xl sm:text-3xl font-semibold tracking-tight text-ink m-0">Antwerp</p> ${renderComponent($$result, "Clock", $$Clock, { "timeZone": "Europe/Brussels", "locale": "en-US", "hour12": false, "showSeconds": false })} </div> </div> </div> </div> </footer>`;
}, "C:/Users/dzhan/Desktop/AP24-25/PersonalPortfolio/dzhaner/src/components/Footer.astro", void 0);

const slugify = (value) => value.toLowerCase().replace(/\s+/g, "-");
const base = "/"?.replace(/\/$/, "") ?? "";
const withBase = (path) => {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
};

const $$HeaderLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, activeClass = "text-ink underline", ...props } = Astro2.props;
  const pathname = Astro2.url.pathname;
  const newhref = href ? withBase(href) : withBase("/");
  const isActive = href ? pathname === newhref || pathname === `${newhref}/` : false;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(newhref, "href")}${addAttribute(["nav-link", className, isActive && activeClass], "class:list")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/dzhan/Desktop/AP24-25/PersonalPortfolio/dzhaner/src/components/HeaderLink.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ThemeToggle;
  const { class: className = "" } = Astro2.props;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<button type="button" data-theme-toggle aria-label="Toggle theme"', `> <span class="sr-only">Toggle theme</span> <span class="theme-toggle__icon inline-flex [html[data-theme='dark']_&]:hidden [html[data-theme='blue']_&]:hidden" aria-hidden="true">
Dark
</span> <span class="theme-toggle__icon hidden [html[data-theme='dark']_&]:inline-flex" aria-hidden="true">
Light
</span> </button> <script>
const STORAGE_KEY = 'theme';
const THEMES = ['light', 'dark'];

const getPreferredTheme = () => {
	const stored = localStorage.getItem(STORAGE_KEY);
	if (THEMES.includes(stored ?? '')) return stored;
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const applyTheme = (theme) => {
	document.documentElement.dataset.theme = theme;
	const buttons = document.querySelectorAll('[data-theme-toggle]');
	buttons.forEach((b) => b.setAttribute('aria-label', \`Toggle theme (current: \${theme})\`));
};

const nextTheme = (current) => {
	const idx = THEMES.indexOf(current);
	const nextIdx = idx === -1 ? 0 : (idx + 1) % THEMES.length;
	return THEMES[nextIdx];
};

const toggleTheme = () => {
	const current = document.documentElement.dataset.theme || getPreferredTheme();
	const next = nextTheme(current);
	localStorage.setItem(STORAGE_KEY, next);
	applyTheme(next);
};

// init
applyTheme(getPreferredTheme());

// delegated listener: works for all existing and future instances (mobile, dynamic, etc.)
document.addEventListener('click', (e) => {
	const t = e.target;
	if (!(t instanceof Element)) return;
	const btn = t.closest('[data-theme-toggle]');
	if (!btn) return;
	e.preventDefault();
	toggleTheme();
});
<\/script>`], ["", '<button type="button" data-theme-toggle aria-label="Toggle theme"', `> <span class="sr-only">Toggle theme</span> <span class="theme-toggle__icon inline-flex [html[data-theme='dark']_&]:hidden [html[data-theme='blue']_&]:hidden" aria-hidden="true">
Dark
</span> <span class="theme-toggle__icon hidden [html[data-theme='dark']_&]:inline-flex" aria-hidden="true">
Light
</span> </button> <script>
const STORAGE_KEY = 'theme';
const THEMES = ['light', 'dark'];

const getPreferredTheme = () => {
	const stored = localStorage.getItem(STORAGE_KEY);
	if (THEMES.includes(stored ?? '')) return stored;
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const applyTheme = (theme) => {
	document.documentElement.dataset.theme = theme;
	const buttons = document.querySelectorAll('[data-theme-toggle]');
	buttons.forEach((b) => b.setAttribute('aria-label', \\\`Toggle theme (current: \\\${theme})\\\`));
};

const nextTheme = (current) => {
	const idx = THEMES.indexOf(current);
	const nextIdx = idx === -1 ? 0 : (idx + 1) % THEMES.length;
	return THEMES[nextIdx];
};

const toggleTheme = () => {
	const current = document.documentElement.dataset.theme || getPreferredTheme();
	const next = nextTheme(current);
	localStorage.setItem(STORAGE_KEY, next);
	applyTheme(next);
};

// init
applyTheme(getPreferredTheme());

// delegated listener: works for all existing and future instances (mobile, dynamic, etc.)
document.addEventListener('click', (e) => {
	const t = e.target;
	if (!(t instanceof Element)) return;
	const btn = t.closest('[data-theme-toggle]');
	if (!btn) return;
	e.preventDefault();
	toggleTheme();
});
<\/script>`])), maybeRenderHead(), addAttribute(className, "class"));
}, "C:/Users/dzhan/Desktop/AP24-25/PersonalPortfolio/dzhaner/src/components/ThemeToggle.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<header class="site-header"> <nav class="h-full w-full flex items-center justify-end"> <button id="nav-toggle" aria-label="Toggle navigation" aria-pressed="false" class="burger md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] rounded-lg border border-transparent hover:border-[var(--color-border)] transition-colors"> <span class="burger-line"></span> <span class="burger-line"></span> <span class="burger-line"></span> </button> <div class="hidden md:flex items-center gap-2 text-xs 2xl:text-lg text-base-900 hover:text-base-500 font-bold uppercase"> ', " ", " ", " ", " ", ' </div> <!-- Mobile modal menu (brutalist, simple) --> <div id="mobile-nav" role="dialog" aria-label="Mobile navigation" aria-hidden="true" style="display:none;" class="fixed inset-0 z-[1000] p-8 overflow-auto bg-[var(--color-paper)] text-[var(--color-ink)]"> <button id="mobile-close" aria-label="Close navigation" style="position:absolute;right:1rem;top:1rem;" class="text-xs 2xl:text-lg font-bold uppercase">Close</button> <div class="flex flex-col gap-2 items-start text-xs 2xl:text-lg hover:text-base-500 font-bold uppercase"> ', " ", " ", " ", " ", " </div> </div> </nav> </header> ", ` <script>
  const DEBUG_KEY = "debug-borders";

  // Cache selectors to avoid repeated DOM queries
  const navButton = document.getElementById("nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const mobileClose = document.getElementById("mobile-close");
  const debugButton = document.getElementById("debug-toggle");
  const mobileDebugButton = document.getElementById("mobile-debug");
  const navElement = document.querySelector("nav");

  const applyDebug = (state) => {
    const isOn = state === "on";
    document.documentElement.dataset.debug = isOn ? "on" : "off";
    if (debugButton) debugButton.setAttribute("aria-pressed", isOn ? "true" : "false");
    if (mobileDebugButton) mobileDebugButton.setAttribute("aria-pressed", isOn ? "true" : "false");
  };

  const getPreferredDebug = () => {
    const stored = localStorage.getItem(DEBUG_KEY);
    if (stored === "on" || stored === "off") return stored;
    return "off";
  };

  const toggleDebug = () => {
    const current = document.documentElement.dataset.debug === "on" ? "on" : "off";
    const next = current === "on" ? "off" : "on";
    localStorage.setItem(DEBUG_KEY, next);
    applyDebug(next);
  };

  const applyNav = (state) => {
    const isOpen = state === "open";
    document.documentElement.dataset.nav = isOpen ? "open" : "closed";
    if (navButton) navButton.setAttribute("aria-pressed", isOpen ? "true" : "false");

    if (mobileNav) {
      mobileNav.style.display = isOpen ? "block" : "none";
      mobileNav.setAttribute("aria-hidden", isOpen ? "false" : "true");

      if (isOpen) {
        // focus the first interactive element inside the mobile nav for accessibility
        const first = mobileNav.querySelector('a, button, [tabindex]:not([tabindex="-1"])');
        if (first instanceof HTMLElement) first.focus();
      } else {
        // restore focus to the toggle button
        if (navButton instanceof HTMLElement) navButton.focus();
      }
    }
  };

  const toggleNav = () => applyNav(document.documentElement.dataset.nav === "open" ? "closed" : "open");
  const closeNav = () => applyNav("closed");

  const on = (el, evt, handler) => { if (!el) return; el.addEventListener(evt, handler); };

  applyDebug(getPreferredDebug());
  applyNav("closed");

  on(debugButton, "click", toggleDebug);
  on(mobileDebugButton, "click", () => { toggleDebug(); closeNav(); });
  on(navButton, "click", () => toggleNav());
  on(mobileClose, "click", closeNav);

  // close nav with Escape
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && document.documentElement.dataset.nav === 'open') closeNav();
  });

  // delegate link clicks to the nav container (works for both desktop and mobile)
  if (navElement) {
    navElement.addEventListener('click', (e) => {
      const t = e.target;
      if (!(t instanceof Element)) return;
      if (t.closest && t.closest('a')) closeNav();
    });
  }

  // click-away closes the nav (keeps existing behavior)
  document.addEventListener("click", (event) => {
    if (document.documentElement.dataset.nav !== "open") return;
    const target = event.target;
    if (!(target instanceof Element)) return;
    const clickedToggle = navButton && navButton.contains(target);
    const clickedNav = navElement && navElement.contains(target);
    if (!clickedToggle && !clickedNav) closeNav();
  });
<\/script>`])), maybeRenderHead(), renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/" }, { "default": ($$result2) => renderTemplate`Home` }), renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/blog" }, { "default": ($$result2) => renderTemplate`Blog` }), renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/projects" }, { "default": ($$result2) => renderTemplate`Projects` }), renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/about" }, { "default": ($$result2) => renderTemplate`About` }), renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "class": "text-xs 2xl:text-lg text-base-900 hover:text-base-500 font-bold uppercase" }), renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/" }, { "default": ($$result2) => renderTemplate`Home` }), renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/blog" }, { "default": ($$result2) => renderTemplate`Blog` }), renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/projects" }, { "default": ($$result2) => renderTemplate`Projects` }), renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/about" }, { "default": ($$result2) => renderTemplate`About` }), renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "class": "text-xs 2xl:text-lg hover:text-base-500 font-bold uppercase" }), renderScript($$result, "C:/Users/dzhan/Desktop/AP24-25/PersonalPortfolio/dzhaner/src/components/Header.astro?astro&type=script&index=0&lang.ts"));
}, "C:/Users/dzhan/Desktop/AP24-25/PersonalPortfolio/dzhaner/src/components/Header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const site = await getSite();
  const { title = site.author.name, description, image } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head>', "", '</head> <body> <div id="page-curtain" aria-hidden="true" style="position:fixed;inset:0;z-index:9998;background:#0d0d10;pointer-events:none;will-change:transform;"></div> <div class="blob-container" aria-hidden="true"> <div class="blob blob-1"></div> <div class="blob blob-2"></div> <div class="blob blob-3"></div> </div> <div style="position: relative; z-index: 1; display: contents;"> ', ' <main class="content-shell"> ', " </main> ", " </div> ", " <script>\n  const revealObserver = new IntersectionObserver((entries) => {\n    entries.forEach((entry) => {\n      if (entry.isIntersecting) {\n        entry.target.classList.add('revealed');\n        revealObserver.unobserve(entry.target);\n      }\n    });\n  }, { threshold: 0.12 });\n\n  document.querySelectorAll('[data-reveal]').forEach((el) => revealObserver.observe(el));\n<\/script></body></html>"])), renderComponent($$result, "BaseHead", $$BaseHead, { "title": title ?? "", "description": description ?? "", "image": image }), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderScript($$result, "C:/Users/dzhan/Desktop/AP24-25/PersonalPortfolio/dzhaner/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts"));
}, "C:/Users/dzhan/Desktop/AP24-25/PersonalPortfolio/dzhaner/src/layouts/BaseLayout.astro", void 0);

const $$PageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PageLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col pb-16 min-h-[calc(100vh-var(--grid-cell)*2)]"> ${renderSlot($$result2, $$slots["default"])} </div> ` })}`;
}, "C:/Users/dzhan/Desktop/AP24-25/PersonalPortfolio/dzhaner/src/layouts/PageLayout.astro", void 0);

export { $$PageLayout as $, renderScript as r, slugify as s, withBase as w };
