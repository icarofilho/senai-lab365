const router = require("express").Router();

// ? Classe que contem os métodos referentes aos usuários
const UserController = require("../../controller/UserController");

//? Middleware a ser utilizado na adição
const { isLeader } = require("../../middleware/isLeader");

//? Grupo de rotas
router.post("/add", UserController.store);
router.post("/add-lider", isLeader, UserController.store);
router.delete("/delete", UserController.delete);
router.get("/show", UserController.show);

module.exports = router;
