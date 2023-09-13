const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;
const { UNPROCESSABLE_ENTRY_STATUS } = require("../assets/variables");

const userSchema = new Schema({
  loginName: {
    type: String,
    min: [4, "Too short, min 4 characters are required"],
    max: [32, "Too long, max 16 characters are required"],
    required: "Username is required!",
  },
  password: {
    type: String,
    min: [4, "Too short, min 4 characters are required"],
    max: [32, "Too long, max 16 characters are required"],
    required: "Password is required!",
  }

});

userSchema.pre("save", function (next) {
  const user = this;

  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return res.status(UNPROCESSABLE_ENTRY_STATUS).json({
        error: "There is an error while gensalt hash",
      });
    }
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) {
        return res.status(UNPROCESSABLE_ENTRY_STATUS).json({
          error: "There is an error while password hash",
        });
      }
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.hasSamePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("User", userSchema);
