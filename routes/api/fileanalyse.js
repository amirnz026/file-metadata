const express = require('express');
const router = express.Router();
const upload = require('../../middleware/upload');

router.post('/', upload.single('upfile'), (req, res) => {
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size,
  });
  res.send('Single File upload success');
});

module.exports = router;
