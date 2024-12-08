import db from '../database/init.js';

export class Department {
  static getAll() {
    return db.prepare('SELECT * FROM departments').all();
  }

  static create(name, description) {
    return db.prepare(
      'INSERT INTO departments (name, description) VALUES (?, ?)'
    ).run(name, description);
  }
}