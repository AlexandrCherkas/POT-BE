require("dotenv").config();

const Admin = require("../models/User");
const Employer = require("../models/Employer");
const Consumer = require("../models/Consumer");

const jwt = require("jsonwebtoken");
const {
  UNPROCESSABLE_ENTRY_STATUS,
  FORBIDDEN_STATUS,
  SUCCESS_STATUS,
} = require("../assets/variables");

exports.register = async function (req, res) {
  const { loginName, password, role } = req.body;

  if (!loginName || !password || !role) {
    return res
      .status(UNPROCESSABLE_ENTRY_STATUS)
      .json({ error: "Please provide username and password" });
  }

  try {
    const user = await User.findOne({ username });

    if (user) {
      return res
        .status(UNPROCESSABLE_ENTRY_STATUS)
        .json({ error: "User already exists" });
    }

    const newUser = new User({
      loginName,
      password,
      role,
    });

    const saveUser = await newUser.save();

    if (!saveUser) {
      return res
        .status(UNPROCESSABLE_ENTRY_STATUS)
        .json({ error: "Oops! Something went wrong" });
    }
  } catch {
    return res
      .status(UNPROCESSABLE_ENTRY_STATUS)
      .json({ error: "Oops! Something went Wrong" });
  }

  return res.status(SUCCESS_STATUS).json({ registered: true });
};

exports.login = async function (req, res) {
  const { loginName, password } = req.body;

  if (!loginName || !password) {
    return res
      .status(UNPROCESSABLE_ENTRY_STATUS)
      .json({ error: "Please provide username or password" });
  }

  const admin = await Admin.findOne({ loginName });
  const employer = await Employer.findOne({ loginName });
  const consumer = await Consumer.findOne({ loginName });

  if (!admin && !employer && !consumer  ) {
    return res
      .status(UNPROCESSABLE_ENTRY_STATUS)
      .json({ error: "Invalid user" });
  }

  try{

   
  if (admin) {
    if (admin.hasSamePassword(password)) {
      json_token = jwt.sign(
        {
          userId: admin.id,
          username: admin.loginName,
          userRole: "admin"
        },
        process.env.SECRET_KEY,
        { expiresIn: "1h" }
      );

      return res.json(json_token);
    }
  }
  if (employer) {
    if (employer.hasSamePassword(password)) {
      json_token = jwt.sign(
        {
          userId: employer.id,
          username: employer.loginName,
          userRole: 'employer'
        },
        process.env.SECRET_KEY,
        { expiresIn: "1h" }
      );
      return res.json(json_token);
    }
  } 
  if (consumer) {
    if (consumer.hasSamePassword(password)) {
      json_token = jwt.sign(
        {
          userId: consumer.id,
          username: consumer.loginName,
          userRole: "consumer"
        },
        process.env.SECRET_KEY,
        { expiresIn: "1h" }
      );

      return res.json(json_token);
    }
  } else {
    return res
      .status(UNPROCESSABLE_ENTRY_STATUS)
      .json({ error: "Wrong username or password" });
  }
} catch {
  return res
    .status(UNPROCESSABLE_ENTRY_STATUS)
    .json({ error: "Oops! Something went Wrong" });
}

return res.status(SUCCESS_STATUS).json({ registered: true });
};


exports.authMiddleware = async function (req, res, next) {
  const json_token = req.headers.authorization;

  try {
    if (json_token) {
      const userTokenInfo = parseToken(json_token);
      const user = await User.findById(userTokenInfo.userId);
      if (user) {
        res.locals.user = user;
        next();
      } else {
        return res
          .status(UNPROCESSABLE_ENTRY_STATUS)
          .json({ error: "Not authorized user" });
      }
    } else {
      return res
        .status(UNPROCESSABLE_ENTRY_STATUS)
        .json({ error: "Not authorized user" });
    }
  } catch {
    res.status(FORBIDDEN_STATUS).json({ error: "Jwt Token is Invalid" });
  }
};

function parseToken(token) {
  return jwt.verify(token.split(" ")[1], process.env.SECRET_KEY);
}

exports.getEmployers = async function (req, res) {
  const page_size = req.query.page;
  const page_num = req.query.num;
  const results = req.query.results; // sort
  const order = req.query.order;
  const skips = page_size * page_num;

  const searchName = req.query.name;
  const searchCode = req.query.code;

  try {
    if (results) {
      const employers = await User.find({
        username: new RegExp(searchName, "i"),
        role: new RegExp(searchCode, "i"),
      })
        .sort({ [results]: order })
        .skip(skips)
        .limit(page_size);

      return res.status(SUCCESS_STATUS).json(employers);
    } else {
      const employers = await User.find().sort().skip(skips).limit(page_size);
      return res.status(SUCCESS_STATUS).json(employers);
    }
  } catch {
    return res
      .status(UNPROCESSABLE_ENTRY_STATUS)
      .json({ error: "Oops! Something went Wrong" });
  }
};

exports.searchEmployers = async function (req, res) {
  const searchName = req.body.name;
  const searchCode = req.body.code;

  if (searchName && searchCode) {
    try {
      const employers = await User.find({
        username: new RegExp(searchName, "i"),
        role: new RegExp(searchCode, "i"),
      })
        .skip()
        .limit();
      return res.status(SUCCESS_STATUS).json(employers);
    } catch {
      return res
        .status(UNPROCESSABLE_ENTRY_STATUS)
        .json({ error: "Oops! Something went Wrong" });
    }
  }

  if (searchName || searchCode) {
    if (searchName) {
      try {
        const employers = await User.find({
          username: new RegExp(searchName, "i"),
        })
          .sort({ date: 1 })
          .skip(0)
          .limit(1000);
        return res.status(SUCCESS_STATUS).json(employers);
      } catch {
        return res
          .status(UNPROCESSABLE_ENTRY_STATUS)
          .json({ error: "Oops! Something went Wrong" });
      }
    }

    if (searchCode) {
      try {
        const employers = await User.find({
          role: new RegExp(searchCode, "i"),
        });
        return res.status(SUCCESS_STATUS).json(employers);
      } catch {
        return res
          .status(UNPROCESSABLE_ENTRY_STATUS)
          .json({ error: "Oops! Something went Wrong" });
      }
    }
  }
};
