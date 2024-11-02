import { c as createComponent, r as renderTemplate, a as addAttribute, m as maybeRenderHead, b as createAstro } from './astro/server_CzykWKfA.mjs';
import 'kleur/colors';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$AuthForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AuthForm;
  return renderTemplate(_a || (_a = __template(["", '<div class="w-full flex py-20"> <div class="w-[500px] m-auto"> <div class="card w-full rounded shadow-xl bg-primary-white"> <div class="card-body"> <h3 class="card-title capitalize font-extrabold text-primary-gray text-2xl motion-preset-fade-md"> ', ' </h3> <p class="mt-2 text-md capitalize text-primary-gray">\nlogin/signup and join our board\n</p> <div class="card-actions"> <form id="form"> <div class="form-group"> <div class="form-field"> <label class="input input-bordered flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70"> <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"></path> <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"></path> </svg> <input type="email" name="email" id="email" class="placeholder:capitalize" placeholder="email" autocomplete="username" required> </label> </div> <div class="form-field mt-2"> <label class="input input-bordered flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70"> <path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clip-rule="evenodd"></path> </svg> <input type="password" name="password" id="password" class="placeholder:capitalize" placeholder="password"', ' required> </label> </div> <button id="submitBtn" type="submit" class="btn w-full bg-primary-gray text-primary-white capitalize font-bold mt-2"> ', ' </button> </div> </form> <div class="w-full mt-4 h-1 bg-gray-200"></div> <div class="w-full mt-4 flex items-center justify-center"> <a', ' class="text-primary-gray font-thin text-sm"> ', ' </a> </div> </div> </div> </div> </div> </div> <script>\n  form.addEventListener("submit", async (e) => {\n    e.preventDefault();\n    submitBtn.disabled = true;\n    let email = form.email.value;\n    let password = form.password.value;\n\n    const data = { email, password };\n\n    if (location.pathname === "/register") {\n      const res = await fetch("/api/register", {\n        method: "POST",\n        headers: {\n          "Content-Type": "application/json",\n        },\n        body: JSON.stringify(data),\n      });\n      const result = await res.json();\n      submitBtn.disabled = false;\n      if (result.success) return location.assign("/login");\n    } else {\n      const res = await fetch("/api/login", {\n        method: "POST",\n        headers: {\n          "Content-Type": "application/json",\n        },\n        body: JSON.stringify(data),\n      });\n      const result = await res.json();\n      submitBtn.disabled = false;\n      if (result.success) return location.assign("/dashboard");\n    }\n  });\n<\/script>'])), maybeRenderHead(), Astro2.url.pathname.split("/")[1], addAttribute(Astro2.url.pathname === "/login" ? "current-password" : "new-password", "autocomplete"), Astro2.url.pathname.split("/")[1], addAttribute(Astro2.url.pathname === "/login" ? "/register" : "/login", "href"), Astro2.url.pathname === "/login" ? "create new account?" : "have an account, login");
}, "C:/Users/DM/Desktop/auth-passport/src/components/AuthForm.astro", void 0);

export { $$AuthForm as $ };