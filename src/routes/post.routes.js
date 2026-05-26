const { Router } = require("express");
const postController = require("../controllers/postController");
const validateSchema = require("../middlewares/validateSchema");
const { postSchema, postUpdateSchema } = require("../schemas/postSchema");
const { postImageSchema } = require("../schemas/postImageSchema");
const tagSchema = require("../schemas/tagSchema");

router.get("/", postController.getAll);
router.get("/:id", postController.getById);
router.post("/", validateSchema(postSchema), postController.create);
router.put("/:id", validateSchema(postUpdateSchema), postController.update);
router.delete("/:id", postController.remove);

// Imágenes
router.post("/:id/images", validateSchema(postImageSchema), postController.addImage);
router.delete("/:id/images/:imageId", postController.removeImage);

// Tags
router.post("/:id/tags", postController.addTag);
router.delete("/:id/tags/:tagId", postController.removeTag);

module.exports = router;
