const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
console.log('JWT_SECRET in use:', process.env.JWT_SECRET);

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.log('❌ No auth header or malformed:', authHeader);
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  const token = authHeader.split(' ')[1];
  console.log('🔐 Token received:', token);

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log('✅ Token decoded successfully:', decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.error('❌ Token verification failed:', error.message);
    return res.status(401).json({ message: 'Unauthorized: Invalid or expired token' });
  }
};

module.exports = authMiddleware;
