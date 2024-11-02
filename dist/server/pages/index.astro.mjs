/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_CzykWKfA.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BiG7qxt3.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full py-20" data-astro-cid-j7pv25f6> <div class="w-full grid grid-cols-2 px-12" data-astro-cid-j7pv25f6> <div class="w-full flex flex-col items-start" data-astro-cid-j7pv25f6> <h2 class="text-4xl  text-primary-white font-extrabold capitalize dark:text-primary-gray" data-astro-cid-j7pv25f6>
lift your business to new <br data-astro-cid-j7pv25f6> heights with our digital <br data-astro-cid-j7pv25f6> <span class="text-red-500 motion-preset-confetti" data-astro-cid-j7pv25f6>marketing services</span> </h2> <p id="text" class="font-thick text-md mt-4 text-primary-white text-left dark:text-primary-dark" data-astro-cid-j7pv25f6>
we offer a comprehensive suite of digital services designed to elevate
          your online presence and drive measurable results. Our expertise spans
          web development, digital marketing, and data analytics, ensuring
          seamless user experiences and impactful digital strategies. Whether
          you need a high-performance website, targeted marketing campaigns
</p> <a href="/login" class="btn mt-8 w-fit px-4 py-2 rounded-lg capitalize font-bold bg-primary-white text-primary-gray cursor-pointer dark:bg-primary-gray dark:text-primary-white" data-astro-cid-j7pv25f6>
get started
</a> </div> <div class="w-full flex" data-astro-cid-j7pv25f6> <img src="https://evilmartians.com/static/f792e42e6784c3a9d0f22b7992151a36/ccd24/cover.webp" alt="banner" class="w-[400px] m-auto h-auto object-contain rounded transform scale-125 origin-top-right rotate-12 mr-4" data-astro-cid-j7pv25f6> </div> </div> </div> ` })} `;
}, "C:/Users/DM/Desktop/auth-passport/src/pages/index.astro", void 0);

const $$file = "C:/Users/DM/Desktop/auth-passport/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
