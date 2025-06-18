const { body, param, validationResult } = require("express-validator");

const validateJobInput = [
  body("company").trim().notEmpty().withMessage("missing company"),
  body("jobPosition").trim().notEmpty().withMessage("missing position"),
  body("jobLocation").trim().notEmpty().withMessage("missing location"),
  body("jobStatus").trim().notEmpty().withMessage("missing status"),
  body("jobType").trim().notEmpty().withMessage("missing type"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array().map(err => ({ field: err.param, msg: err.msg }))
      });
    }
    next();
  },
];



const jobParamValidator = [
  param("id")
    .trim()
    .notEmpty()
    .withMessage("Job ID is required")
    .isMongoId()
    .withMessage("Invalid Job ID format"),
];



// register
const validateRegisterInput = [
  body("name").notEmpty().withMessage("Name is required"),
  body("lastName").notEmpty().withMessage("Last name is required"),
  body("location").notEmpty().withMessage("Location is required"),
  body("email").isEmail().withMessage("Must be a valid email"),
  body("password")
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];



const validateLoginInput = [
  body("email").isEmail().withMessage("invalid email"),
  body("password").notEmpty().withMessage("invalid password"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports ={ validateLoginInput,validateRegisterInput,jobParamValidator,validateJobInput};
