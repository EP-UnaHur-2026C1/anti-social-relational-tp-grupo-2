const {Router} = require("express");
const userController = require("../controllers/user.controllers");
const router = Router();

router.get("/", userController.obtenerUsuarios);
router.get("/:id", userController.obtenerUsuario);
router.post("/", userController.crearUsuario);
router.delete("/:id", userController.eliminarUsuario);
router.put("/:id", userController.actualizarUsuario);

module.exports = router;