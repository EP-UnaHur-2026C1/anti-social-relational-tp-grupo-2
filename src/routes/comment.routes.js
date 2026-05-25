const { Router } = require("express");
const commentController = require("../controllers/commentController");
const validateSchema = require("../middlewares/validateSchema");
const { commentSchema, commentUpdateSchema } = require("../schemas/commentSchema");

router.get("/", commentController.getAll);
router.get("/:id", commentController.getById);
router.post("/", validateSchema(commentSchema), commentController.create);
router.put("/:id", validateSchema(commentUpdateSchema), commentController.update);
router.delete("/:id", commentController.remove);

module.exports = router;
