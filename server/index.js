const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/users");
const cors = require("cors");

app.use(express.json());
app.use(cors());

const connectionData = require("./connect.json");

mongoose.connect(connectionData.mongodb_connection.uri);

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email: email });
  if (!user) {
    res.status(404).send("User not found");
  } else if (user.password !== password) {
    res.status(401).send("Invalid password");
  } else {
    res.json({ success: true, message: "Login successful", userId: user._id });
  }
});

app.post("/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const existingUser = await UserModel.findOne({ email: email });
  if (existingUser) {
    res
      .status(409)
      .send("Email address is already in use. Please choose a different one.");
  } else {
    const newUser = new UserModel({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });
    const savedUser = await newUser.save();
    res.json({
      success: true,
      message: "Account created successfully.",
      userId: savedUser._id,
    });
  }
});

app.get("/user/:id", async (req, res) => {
  const user = await UserModel.findById(req.params.id).select("-password -__v");
  res.json(user);
});

app.put("/update", async (req, res) => {
  const { userId, course, num } = req.body;
  const courseLower = course.toLowerCase();
  await UserModel.findByIdAndUpdate(
    userId,
    {
      $set: {
        [courseLower]: num,
      },
    },
    { new: true }
  );
  res.json({ success: true, message: `${courseLower} updated` });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
