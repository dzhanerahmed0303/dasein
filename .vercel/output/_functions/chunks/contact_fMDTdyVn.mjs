import { c as createComponent } from './consts_BhKcTm52.mjs';
import 'piccolore';
import { b as renderTemplate, r as renderComponent, m as maybeRenderHead } from './entrypoint_Dm7pvM2q.mjs';
import { $ as $$PageLayout } from './PageLayout_Bv0N5DnR.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", " <script>\n  const form = document.getElementById('contact-form');\n  if (form) {\n    form.addEventListener('submit', function (e) {\n      e.preventDefault();\n      const name = document.getElementById('name').value.trim();\n      const email = document.getElementById('email').value.trim();\n      const message = document.getElementById('message').value.trim();\n      const subject = encodeURIComponent('Message from ' + name);\n      const body = encodeURIComponent('Name: ' + name + '\\nEmail: ' + email + '\\n\\n' + message);\n      window.location.href = 'mailto:dzhaner.ahmedd@gmail.com?subject=' + subject + '&body=' + body;\n    });\n  }\n<\/script>"], ["", " <script>\n  const form = document.getElementById('contact-form');\n  if (form) {\n    form.addEventListener('submit', function (e) {\n      e.preventDefault();\n      const name = document.getElementById('name').value.trim();\n      const email = document.getElementById('email').value.trim();\n      const message = document.getElementById('message').value.trim();\n      const subject = encodeURIComponent('Message from ' + name);\n      const body = encodeURIComponent('Name: ' + name + '\\\\nEmail: ' + email + '\\\\n\\\\n' + message);\n      window.location.href = 'mailto:dzhaner.ahmedd@gmail.com?subject=' + subject + '&body=' + body;\n    });\n  }\n<\/script>"])), renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Contact", "description": "Get in touch with Dzhaner" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="content-shell py-12"> <div class="max-w-2xl space-y-10"> <div class="space-y-3"> <p class="eyebrow">Contact</p> <h1 class="text-3xl font-extrabold uppercase text-ink leading-tight">Get in touch</h1> <p class="text-muted">
Have a project in mind or want to work together? Send me a message and I'll get back to you as soon as possible.
</p> </div> <form id="contact-form" class="space-y-5"> <div class="space-y-1"> <label for="name" class="text-xs font-bold uppercase tracking-widest text-ink">Name</label> <input id="name" name="name" type="text" required placeholder="Your name" class="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-ink placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors text-sm"> </div> <div class="space-y-1"> <label for="email" class="text-xs font-bold uppercase tracking-widest text-ink">Email</label> <input id="email" name="email" type="email" required placeholder="your@email.com" class="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-ink placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors text-sm"> </div> <div class="space-y-1"> <label for="message" class="text-xs font-bold uppercase tracking-widest text-ink">Message</label> <textarea id="message" name="message" required rows="5" placeholder="Tell me about your project..." class="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-ink placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors text-sm resize-none"></textarea> </div> <button type="submit" class="button primary w-full sm:w-auto">
Send Message
</button> </form> <div class="flex flex-wrap gap-3 pt-2"> <a href="mailto:dzhaner.ahmedd@gmail.com" class="button secondary">Email me directly</a> <a href="https://www.linkedin.com/in/dzhaner-ahmed-831671256/" target="_blank" rel="noopener noreferrer" class="button secondary">LinkedIn</a> <a href="https://github.com/dzhanerahmed0303" target="_blank" rel="noopener noreferrer" class="button secondary">GitHub</a> </div> </div> </section> ` }));
}, "C:/Users/dzhan/Desktop/AP24-25/PersonalPortfolio/dzhaner/src/pages/contact.astro", void 0);

const $$file = "C:/Users/dzhan/Desktop/AP24-25/PersonalPortfolio/dzhaner/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
