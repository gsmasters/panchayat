import db from '../database/init.js';

export class Staff {
  static getAll() {
    return db.prepare('SELECT * FROM staff').all();
  }

  static getByDepartment(departmentId) {
    return db.prepare('SELECT * FROM staff WHERE department_id = ?').all(departmentId);
  }

  static create(data) {
    const { name, position, mobile, email, department_id } = data;
    return db.prepare(
      'INSERT INTO staff (name, position, mobile, email, department_id) VALUES (?, ?, ?, ?, ?)'
    ).run(name, position, mobile, email, department_id);
  }
}