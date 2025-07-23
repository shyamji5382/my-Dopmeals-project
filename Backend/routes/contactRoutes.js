import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

// POST /api/contact - Save Contact Form Message
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Your message has been received!' });
  } catch (error) {
    res.status(500).json({ error: 'Server Error. Please try again later.' });
  }
});

export default router;
