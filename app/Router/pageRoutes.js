const router = require("express").Router();
const { pageController } = require("../controllers");

router.get("/pages", pageController.find);
router.get("/pages/:id", pageController.findOne);
router.post("/pages", pageController.save);
router.delete("/pages/:id", pageController.delete);
router.put("/pages/:id", pageController.update);

module.exports = router;