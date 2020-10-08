let express = require("express");
let router = express.Router();
let serviceOccupation = require("../service/occupation.js");
serviceOccupation = new serviceOccupation();

/**
 * @api {post} /occupation/add occupation新增
 * @apiDescription ""
 */
router.post("/account", async function (req, res, next) {
  const { password, userName, type } = req.body;
  if (password === "123456" && userName === "admin") {
    res.send({
      status: "ok",
      type,
      currentAuthority: "admin",
    });
  }
});

module.exports = router;
