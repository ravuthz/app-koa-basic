const KoaRouter = require("koa-router");
const router = new KoaRouter();

router.get("/", async ctx => (ctx.body = "GET Hello World with koa-router"));

router.get("/test", ctx => {
  ctx.body = {
    query: ctx.request.query,
    params: ctx.params,
    request: ctx.request.body,
    status: "success",
    message: "GET Test"
  };
});

router.post("/test", ctx => {
  ctx.body = {
    query: ctx.request.query,
    params: ctx.params,
    request: ctx.request.body,
    status: "success",
    message: "POST Test"
  };
});

module.exports = router;
