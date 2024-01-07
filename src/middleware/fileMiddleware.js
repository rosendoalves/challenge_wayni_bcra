const multer = require('multer');
const { processContent } = require('../utils');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const fileMiddleware = (req, res, next) => {
  upload.single('file')(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: 'Error uploading file.' });
    } else if (err) {
      return res.status(500).json({ error: 'Internal server error.' });
    }

    const data = req.file.buffer.toString('utf-8');
    req.register = processContent(data);
    next();
  });
};

module.exports = fileMiddleware;
