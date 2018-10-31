const Koa = require("koa");

const bodyParser = require("koa-bodyparser");

const app = new Koa();
const PORT = process.env.PORT || 3000;

const indexRoutes = require("./routes/index");
const usersRoutes = require("./routes/users");

// Parse request to context.request.body
app.use(bodyParser());

// Logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get("X-Response-Time");
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// Set x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set("X-Response-Time", `${ms}ms`);
});

// Router Middleware
app.use(indexRoutes.routes());
app.use(usersRoutes.routes());

app.listen(PORT, () => {
  console.log(`Koa server start at http://localhost:${PORT}`);
});
