/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_CzykWKfA.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BiG7qxt3.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const res = await fetch("http://localhost:4321/api/auth");
  const result = await res.json();
  if (!result.success) return Astro2.redirect("/login");
  return renderTemplate(_a || (_a = __template(["", ' <script>\n  logoutBtn.addEventListener("click", async () => {\n      const res = await fetch("/api/logout");\n      const result = await res.json();\n      if(result.success) return location.assign("/login")\n  })\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "dashboard" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full py-20 flex"> <div class="w-[400px] m-auto"> <div class="card w-full rounded shadow-xl"> <div class="card-body"> <figure> <img src="https://evilmartians.com/static/f792e42e6784c3a9d0f22b7992151a36/ccd24/cover.webp" alt="image" class="w-full h-[300px] object-contain transform scale-125 motion-preset-confetti"> </figure> <h3 class="card-title capitalize font-bold text-primary-white dark:text-primary-dark">
welcome again
</h3> <p class="mt-4 text-primary-white capitalize dark:text-primary-dark">
we glad that you are here , enjoy our empty area, it is yours
</p> <button id="logoutBtn" class="btn bg-red-500 w-fit mt-4 outline-none text-primary-white border-none px-4 py-2 cursor-pointer capitalize font-bold">
logout
</button> </div> </div> </div> </div> ` }));
}, "C:/Users/DM/Desktop/auth-passport/src/pages/dashboard/index.astro", void 0);

const $$file = "C:/Users/DM/Desktop/auth-passport/src/pages/dashboard/index.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
