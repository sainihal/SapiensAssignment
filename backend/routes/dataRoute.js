const express = require("express");
const UserInfo = require("../models/UserInfo");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user_data = await UserInfo.findOne({ email: req.body.email });
    if (user_data) {
      res
        .status(400)
        .json({
          error: true,
          message: "User with specified email already exists",
        });
    } else {
      const { first_name, last_name, email } = req.body;
      const user = new UserInfo({ first_name, last_name, email });
      await user.save();
      res
        .status(201)
        .send({ error: false, message: "new user added successfully" });
    }
  } catch (err) {
    res
      .status(500)
      .send({ error: true, message: "please try again after some time" });
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await UserInfo.find({});
    res.status(200).json({ error: false, data: users });
  } catch (err) {
    console.log("Err is ", err);
    res
      .status(400)
      .json({ error: true, message: "pls try again after some time" });
  }
});

module.exports = router;
