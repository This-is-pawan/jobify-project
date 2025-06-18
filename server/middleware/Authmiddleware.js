const jwt = require("jsonwebtoken");

exports.authenticateUser = async (req, res, next) => {
  // console.log('auth middleware');

  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ msg: "No token provided. Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({ msg: "Invalid or expired token" });
  }
};
