const router = require("express").Router();
const { messageController } = require("../controllers");

router.get("/messages", messageController.find);
router.get("/messages/:id", messageController.findOne);
router.post("/messages", messageController.save);
router.delete("/messages/:id", messageController.delete);

module.exports = router;