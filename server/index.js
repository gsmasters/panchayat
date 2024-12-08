import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initializeDatabase } from './database/init.js';
import { staffRoutes } from './routes/staff.js';
import { authRoutes } from './routes/auth.js';
import { grievanceRoutes } from './routes/grievances.js';
import { departmentRoutes } from './routes/departments.js';
import { announcementRoutes } from './routes/announcements.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Initialize database before starting the server
initializeDatabase().then(() => {
  // Routes
  app.use('/api/staff', staffRoutes);
  app.use('/api/auth', authRoutes);
  app.use('/api/grievances', grievanceRoutes);
  app.use('/api/departments', departmentRoutes);
  app.use('/api/announcements', announcementRoutes);

  // Error handling middleware
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
  });

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Failed to initialize database:', err);
  process.exit(1);
});