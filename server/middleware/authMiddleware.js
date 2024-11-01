const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.header('Authorization');
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token provided or token format is invalid' });
  }

  const token = authHeader.replace('Bearer ', '');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;  // เพิ่ม userId ลงใน req เพื่อใช้ใน endpoint ที่ต้องการ
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};
