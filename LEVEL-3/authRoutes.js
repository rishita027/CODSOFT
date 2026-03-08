const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {

try {

const { name, email, password } = req.body;

const user = new User({
name,
email,
password
});

await user.save();

res.json({ message: "Registration successful" });

} catch (error) {

console.log(error);
res.status(500).json({ message: "Registration failed" });

}

});

router.post("/login", async (req, res) => {

const { email, password } = req.body;

const user = await User.findOne({ email, password });

if (user) {
res.json({ message: "Login successful" });
} else {
res.json({ message: "Invalid credentials" });
}

});

module.exports = router;