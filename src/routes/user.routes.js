const {Router} = require("express");
const userController = require("../controllers/user.controllers");
const validateSchema = require("../middlewares/validateSchema");
const {userSchema, userUpdateSchema} = require("../schemas/userSchema");
const { idParamSchema } = require("../schemas/paramsSchema");
const router = Router();

router.get("/", userController.getAll);
router.get("/:id", validateSchema(idParamSchema, "params"), userController.getById);
router.post("/", validateSchema(userSchema), userController.create);
router.delete("/:id", validateSchema(idParamSchema, "params"), userController.remove);
router.put("/:id", validateSchema(idParamSchema, "params"), validateSchema(userUpdateSchema), userController.update);

module.exports = router;