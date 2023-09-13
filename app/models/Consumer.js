const { Schema, model } = require('mongoose');
const bcrypt = require("bcryptjs");

const consumerSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    firstName: {
        type: String,
        required: 'First name is required'
    },
    lastName: {
        type: String,
        required: 'Last name is required'
    },
    loginName: {
        type: String,
        required: 'Name is required'
    },
    password: {
        type: String,
        min: [4, "Too short, min 4 characters are required"],
        max: [32, "Too long, max 16 characters are required"],
        required: "Password is required!"
    },
    email: {
        type: String,
        required: "Email is required!"
    },
    ssn: {
        type: String,
        required: "Social Security Number is required!"
    },
    balance: {
        type: Number,
        required: "Balance is required!"
    },
    employer: {
        type: Schema.Types.ObjectId,
        ref: 'Employer'
    },
    packages:[{
        type: Schema.Types.ObjectId,
        ref: 'Package'
    }],
    claims:[{
        type: Schema.Types.ObjectId,
        ref: 'Claim'
    }],
    permissions: {
      canFillClaims: {
        type: Boolean,
      }    
    }
});

consumerSchema.pre("save", function (next) {
    const consumer = this;

    if (!consumer.isModified('password')) return next();

    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return res.status(UNPROCESSABLE_ENTRY_STATUS).json({
          error: "There is an error while gensalt hash",
        });
      }
      bcrypt.hash(consumer.password, salt, function (err, hash) {
        if (err) {
          return res.status(UNPROCESSABLE_ENTRY_STATUS).json({
            error: "There is an error while password hash",
          });
        }
        consumer.password = hash;
        next();
      });
    });
  });

  consumerSchema.pre('findOneAndUpdate', async function (next) {
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
  
  consumerSchema.methods.hasSamePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

module.exports = model('Consumer', consumerSchema);
