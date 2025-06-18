const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  lastName: {
    type: String,
    default: "lastName",
  },
  location: {
    type: String,
    default: "new city",
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
 
});
const User = mongoose.model("auths", UserSchema);
module.exports = User;
