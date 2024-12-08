import express from 'express';
import { body, validationResult } from 'express-validator';
import db from '../database/init.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Get all grievances
router.get('/', authenticateToken, async (req, res) => {
  try {
    const grievances = db.prepare('SELECT * FROM grievances').all();
    res.json(grievances);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Submit new grievance
router.post('/',
  authenticateToken,
  [
    body('title').notEmpty().trim(),
    body('description').notEmpty().trim(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { title, description } = req.body;
      const result = db.prepare(
        'INSERT INTO grievances (title, description, status, user_id) VALUES (?, ?, ?, ?)'
      ).run(title, description, 'pending', req.user.id);

      res.status(201).json({ id: result.lastInsertRowid });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

export const grievanceRoutes = router;