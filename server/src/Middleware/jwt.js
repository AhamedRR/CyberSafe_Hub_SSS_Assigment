const jwt = require("jsonwebtoken")
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: 'Missing Authorization header' });
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, 'sdsawskkajfwsuehgwilflnibwergwsielfugwbjkchwuireyofgwibucnwioe', (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid or expired token' });
      }
      req.userId = decoded.userId; 
      next(); 
    });
  };

  module.exports = authMiddleware