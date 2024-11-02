import type { APIContext, APIRoute } from "astro";
import { Hono } from "hono";
import { supabase } from "../../supabase";
import { z } from "astro:content";
import { zValidator } from "@hono/zod-validator";

const userSchema = z.object({
  email: z.string().email().trim(),
  password: z.string().min(8).trim(),
});

const app = new Hono().basePath("/api/");

app.post("/register", zValidator("json", userSchema), async (c) => {
  try {
    const data = await c.req.valid("json");
    const { error } = await supabase.auth.signUp({ ...data });
    if (error) throw new Error(error.message);
    c.status(201);
    return c.json({ success: true });
  } catch (err: any) {
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
  } catch (err: any) {
    c.status(400);
    return c.json({ success: false, message: err.message });
  }
});

const checkUser = async (c: any, next: any) => {
  try {
    const {
      data: { user },
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
  } catch (err: any) {
    c.status(400);
    return c.json({ success: false });
  }
});

export const ALL: APIRoute = async (c: APIContext) =>
  await app.fetch(c.request);
