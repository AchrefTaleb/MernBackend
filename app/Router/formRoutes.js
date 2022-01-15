const router = require("express").Router();
const { formController } = require("../controllers");

router.get("/forms", formController.find);
router.get("/forms/:id", formController.findOne);
router.post("/forms", formController.save);
router.delete("/forms/:id", formController.delete);
router.put("/forms/:id", formController.update);

module.exports = router;