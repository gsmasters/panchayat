import express from 'express';
import { body, validationResult } from 'express-validator';
import db from '../database/init.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Get all active announcements
router.get('/', async (req, res) => {
  try {
    const announcements = db.prepare(`
      SELECT * FROM announcements 
      WHERE end_date >= date('now') 
      OR end_date IS NULL 
      ORDER BY created_at DESC
    `).all();
    res.json(announcements);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add new announcement (protected route)
router.post('/',
  authenticateToken,
  [
    body('title').notEmpty().trim(),
    body('content').notEmpty().trim(),
    body('type').isIn(['meeting', 'deadline', 'update', 'general']),
    body('start_date').isDate(),
    body('end_date').optional().isDate(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { title, content, type, start_date, end_date } = req.body;
      const result = db.prepare(`
        INSERT INTO announcements (title, content, type, start_date, end_date)
        VALUES (?, ?, ?, ?, ?)
      `).run(title, content, type, start_date, end_date);

      res.status(201).json({ id: result.lastInsertRowid });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

export const announcementRoutes = router;