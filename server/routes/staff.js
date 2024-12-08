import express from 'express';
import { body, validationResult } from 'express-validator';
import db from '../database/init.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Get all staff members
router.get('/', async (req, res) => {
  try {
    const staff = db.prepare('SELECT * FROM staff').all();
    res.json(staff);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add new staff member (protected route)
router.post('/',
  authenticateToken,
  [
    body('name').notEmpty().trim(),
    body('position').notEmpty().trim(),
    body('mobile').notEmpty().trim(),
    body('email').optional().isEmail(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, position, mobile, email } = req.body;
      const result = db.prepare(
        'INSERT INTO staff (name, position, mobile, email) VALUES (?, ?, ?, ?)'
      ).run(name, position, mobile, email);

      res.status(201).json({ id: result.lastInsertRowid });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

export const staffRoutes = router;