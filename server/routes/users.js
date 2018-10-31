const KoaRouter = require("koa-router");
const router = new KoaRouter();

const User = require("../database/user");

router.get("/users", async ctx => {
  try {
    const users = await User.findAll();
    ctx.body = {
      data: users,
      status: "success",
      message: "Get all users successfully"
    };
  } catch (err) {
    ctx.body = {
      status: "error",
      message: err
    };
  }
});

router.get("/users/:id", async ctx => {
  try {
    const user = await User.findByPk(ctx.params.id);
    if (user) {
      ctx.body = {
        data: user,
        status: "success",
        message: "Get one user successfully"
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: "error",
        message: "That user doesn't exist"
      };
    }
  } catch (err) {
    ctx.body = {
      status: "error",
      message: err
    };
  }
});

router.post("/users", ctx => {
  try {
    User.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = {
      status: "success",
      message: "Create user successfully"
    };
  } catch (err) {
    ctx.body = {
      status: "error",
      message: err
    };
  }
});

router.put("/users/:id", async ctx => {
  try {
    const user = await User.findByPk(ctx.params.id);
    if (user) {
      user.update(ctx.request.body);
      ctx.body = {
        status: "success",
        message: "Update user successfully"
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: "error",
        message: "That user doesn't exist"
      };
    }
  } catch (ex) {
    ctx.body = {
      status: "error",
      message: err
    };
  }
});

router.delete("/users/:id", async ctx => {
  try {
    const user = await User.findByPk(ctx.params.id);

    if (user) {
      user.destroy();
      ctx.body = {
        status: "success",
        message: "Delete user successfully"
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: "error",
        message: "That user doesn't exist"
      };
    }
  } catch (err) {
    ctx.body = {
      status: "error",
      message: err
    };
  }
});

module.exports = router;
