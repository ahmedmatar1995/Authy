import { c as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, a as addAttribute, e as renderSlot, b as createAstro, d as renderComponent, f as renderHead } from './astro/server_CzykWKfA.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro$2 = createAstro();
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$;
  const size = Astro2.props.size;
  const cls = Astro2.props.class;
  const name = Astro2.props.iconName;
  delete Astro2.props.size;
  delete Astro2.props.class;
  delete Astro2.props.iconName;
  const props = Object.assign({
    "xmlns": "http://www.w3.org/2000/svg",
    "stroke-width": 2,
    "width": size ?? 24,
    "height": size ?? 24,
    "stroke": "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "fill": "none",
    "viewBox": "0 0 24 24"
  }, Astro2.props);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(["lucide", { [`lucide-${name}`]: name }, cls], "class:list")}> ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "C:/Users/DM/Desktop/auth-passport/node_modules/lucide-astro/dist/.Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Sun = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Sun;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "sun", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<circle cx="12" cy="12" r="4"></circle> <path d="M12 2v2"></path> <path d="M12 20v2"></path> <path d="m4.93 4.93 1.41 1.41"></path> <path d="m17.66 17.66 1.41 1.41"></path> <path d="M2 12h2"></path> <path d="M20 12h2"></path> <path d="m6.34 17.66-1.41 1.41"></path> <path d="m19.07 4.93-1.41 1.41"></path> ` })}`;
}, "C:/Users/DM/Desktop/auth-passport/node_modules/lucide-astro/dist/Sun.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<div class="w-full h-[80px]"> <div class="navbar w-full h-full px-12"> <div class="navbar-start"> <h1 class="text-2xl dark:text-primary-dark font-extrabold capitalize text-primary-white motion-preset-flomoji-\u{1F680}">QuickCode</h1> </div> <div class="navbar-end"> <button id="toggleMode" class="btn btn-ghost text-primary-white dark:text-primary-dark"> ', ` </button> </div> </div> </div> <script>
    toggleMode.addEventListener("click", () => document.documentElement.classList.toggle('dark'))
<\/script>`])), maybeRenderHead(), renderComponent($$result, "Sun", $$Sun, {}));
}, "C:/Users/DM/Desktop/auth-passport/src/components/Navbar.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> <div class="max-w-screen min-h-screen bg-primary-dark dark:bg-primary-white"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> </div> </body></html>`;
}, "C:/Users/DM/Desktop/auth-passport/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
