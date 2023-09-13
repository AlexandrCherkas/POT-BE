const bcrypt = require("bcryptjs");

const { Schema, model } = require("mongoose");

const employerSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  companyName: {
    type: String,
    required: "Name is required",
  },
  loginName: {
    type: String,
    required: "Name is required",
  },
  password: {
    type: String,
    min: [4, "Too short, min 4 characters are required"],
    max: [32, "Too long, max 16 characters are required"],
    required: "Password is required!",
  },
  countryCode: {
    type: String,
    required: "Code is required!",
  },
  logo: {
    type: String,
  },
  address: {
    street: {
      type: String,
      required: "Street is required!",
    },
    city: {
      type: String,
      required: "City is required!",
    },
    state: {
      type: String,
      required: "State is required!",
    },
    zipCode: {
      type: String,
      required: "Zip code is required!",
    },
    phone: {
      type: Number,
      required: "Phone is required!",
    },
  },
  permissions: {
    canFillClaims: {
      type: Boolean,
    },
    canAddConsumers: {
      type: Boolean,
    },
  },
  plans: [{
    type: Schema.Types.ObjectId,
    ref: 'Plan'
  }],
  consumers: {
    type: Array,
  }
 
});

employerSchema.pre("save", function (next) {
  const employer = this;

  if (!employer.isModified('password')) return next();

  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return res.status(UNPROCESSABLE_ENTRY_STATUS).json({
        error: "There is an error while gensalt hash",
      });
    }
    bcrypt.hash(employer.password, salt, function (err, hash) {
      if (err) {
        return res.status(UNPROCESSABLE_ENTRY_STATUS).json({
          error: "There is an error while password hash",
        });
      }
      employer.password = hash;
      next();
    });
  });
});

employerSchema.pre('findOneAndUpdate', async function (next) {
  try {
      if (this._update.password) {
          const hashed = await bcrypt.hash(this._update.password, 10)
          this._update.password = hashed;
      }
      next();
  } catch (err) {
      return next(err);
  }
});

employerSchema.methods.hasSamePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = model("Employer", employerSchema);
