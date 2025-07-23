import express from 'express';
import upload from '../uploads/middleware/upload.js';

const router = express.Router();

router.post('/image', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }
  res.status(200).json({
    message: 'File uploaded successfully',
    imageUrl: `/uploads/${req.file.filename}`
  });
});

export default router;
