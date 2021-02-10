const jwt = require("jsonwebtoken");


function validateToken(req, res, next) {
  try {
    const user = jwt.verify(
      req.headers.authorization.split(" ")[1],
      "53node92"
    );
    req.user = user;
    next();
  } catch (err) {
    console.error(err);
    res.status(403).json({ msg: "Invalid Token" });
  }
}

async function isNotAdmin(req, res, next) {
  if (req.user.role !== "admin") {
    next();
  } else {
    res.status(403).json({ msg: "Valid For Admin Only" });
  }
}
async function isAdmin(req, res, next) {
  if (req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({ msg: "Valid For Admin Only" });
  }
}

module.exports = { validateToken, isNotAdmin, isAdmin };
