const {Router} = require("express");
const userController = require("../controllers/user.controllers");
const validateSchema = require("../middlewares/validateSchema");
const {userSchema, userUpdateSchema} = require("../schemas/userSchema");
const { idParamSchema, userFollowParamSchema } = require("../schemas/paramsSchema");
const router = Router();

router.get("/", userController.getAll);
router.get("/:id", validateSchema(idParamSchema, "params"), userController.getById);
router.post("/", validateSchema(userSchema), userController.create);
router.delete("/:id", validateSchema(idParamSchema, "params"), userController.remove);
router.put("/:id", validateSchema(idParamSchema, "params"), validateSchema(userUpdateSchema), userController.update);

// -- Rutas para followers --

// Obtener seguidores de un usuario
router.get("/:id/followers", validateSchema(idParamSchema, "params"), userController.getFollowers);

// Obtener seguidos por un usuario
router.get("/:id/following", validateSchema(idParamSchema, "params"), userController.getFollowing);

// Seguir a un usuario
router.post("/:id/following/:followedId", validateSchema(userFollowParamSchema, "params"), userController.follow);

// Dejar de seguir a un usuario.
router.delete("/:id/following/:followedId", validateSchema(userFollowParamSchema, "params"), userController.unfollow);

module.exports = router;
