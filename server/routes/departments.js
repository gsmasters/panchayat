import express from 'express';
import { body, validationResult } from 'express-validator';
import { Department } from '../models/Department.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Get all departments
router.get('/', async (req, res) => {
  try {
    const departments = Department.getAll();
    res.json(departments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add new department (protected route)
router.post('/',
  authenticateToken,
  [
    body('name').notEmpty().trim(),
    body('description').optional().trim(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, description } = req.body;
      const result = Department.create(name, description);
      res.status(201).json({ id: result.lastInsertRowid });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

export const departmentRoutes = router;