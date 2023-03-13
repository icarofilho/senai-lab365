const router = require("express").Router();

//? Importador de rotas
const userRouter = require("./v1/user.routes");

//? Middleware de rota
router.use("/v1", [userRouter]);

module.exports = router;
