/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_CzykWKfA.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BiG7qxt3.mjs';
import { $ as $$AuthForm } from '../chunks/AuthForm_Cy6ycoWD.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "login" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AuthForm", $$AuthForm, {})} ` })}`;
}, "C:/Users/DM/Desktop/auth-passport/src/pages/login/index.astro", void 0);

const $$file = "C:/Users/DM/Desktop/auth-passport/src/pages/login/index.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
   __proto__: null,
   default: $$Index,
   file: $$file,
   url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
