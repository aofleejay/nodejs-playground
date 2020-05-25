import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

router.get("/hello", (ctx) => {
  ctx.response.body = "world";
});

app.use(router.routes());

await app.listen("127.0.0.1:8000");
