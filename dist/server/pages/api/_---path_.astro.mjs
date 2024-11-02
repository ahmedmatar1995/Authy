import { Hono } from 'hono';
import { createClient } from '@supabase/supabase-js';
import 'neotraverse/modern';
import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import '../../chunks/astro/server_CzykWKfA.mjs';
import 'clsx';
import { zValidator } from '@hono/zod-validator';
import * as z from 'zod';
export { renderers } from '../../renderers.mjs';

const supabaseUrl = "https://mqtbxxkqekeqmlghphjg.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xdGJ4eGtxZWtlcW1sZ2hwaGpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMwNTY4MDMsImV4cCI6MjAwODYzMjgwM30.q1bhF44OMlmPImSABvWNd5jfDc0BXdwoyX-lCd2eoYw";
const supabase = createClient(supabaseUrl, supabaseKey);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({});
createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

new Set(Object.keys(lookupMap));

const renderEntryGlob = /* #__PURE__ */ Object.assign({});
createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const userSchema = z.object({
  email: z.string().email().trim(),
  password: z.string().min(8).trim()
});
const app = new Hono().basePath("/api/");
app.post("/register", zValidator("json", userSchema), async (c) => {
  try {
    const data = await c.req.valid("json");
    const { error } = await supabase.auth.signUp({ ...data });
    if (error) throw new Error(error.message);
    c.status(201);
    return c.json({ success: true });
  } catch (err) {
    c.status(400);
    return c.json({ success: false, message: err.message });
  }
});
app.post("/login", zValidator("json", userSchema), async (c) => {
  try {
    const data = await c.req.valid("json");
    const { error } = await supabase.auth.signInWithPassword({ ...data });
    if (error) throw new Error(error.message);
    c.status(200);
    return c.json({ success: true });
  } catch (err) {
    c.status(400);
    return c.json({ success: false, message: err.message });
  }
});
const checkUser = async (c, next) => {
  try {
    const {
      data: { user }
    } = await supabase.auth.getUser();
    if (!user?.id) throw new Error("no allowed!");
    return next();
  } catch (err) {
    c.status(400);
    return c.json({ success: false });
  }
};
app.get("/auth", checkUser, async (c) => {
  c.status(200);
  return c.json({ success: true });
});
app.get("/logout", checkUser, async (c) => {
  try {
    await supabase.auth.signOut();
    return c.json({ success: true });
  } catch (err) {
    c.status(400);
    return c.json({ success: false });
  }
});
const ALL = async (c) => await app.fetch(c.request);

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ALL
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
