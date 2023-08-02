// const Sequelize = require('sequelize');
// const sequelize = require('../config/connection');
// // const Admin = require('./Admin');
// const Courses = require('./courses');
// const Department = require('./department');
// const Faculty = require('./Faculty');
// const Student = require('./students');
// const User = require('./user');
// const Academic_Semester = require('./academic_semester');


// Student.hasMany(Courses, {
//     foreignKey: 'student_id'
// });

// Faculty.hasOne(Courses, {
//     foreignKey: 'faculty_id'
// });

// Department.hasMany(Faculty, {
//     foreignKey: 'department_id'
// });

// Courses.hasMany(Academic_Semester, {
//     foreignKey: 'courses_id'
// });

// Student.hasOne(User);

// Faculty.hasOne(User);

// // Admin.belongsTo(User, {
// //     foreignKey: 'user_id',
// //   });

// module.exports = { Courses, Department, Faculty, Student, User, Academic_Semester };



const Sequelize = require('sequelize');
const sequelize = require('../../config/connection')
// Import all the models
// const Admin = require('./Admin');
const Courses = require('./courses');
const Department = require('./department');
const Faculty = require('./Faculty');
const Student = require('./students');
const User = require('./user');
const Academic_Semester = require('./academic_semester')
// Define the associations between the models
// Note: We'll assume that the associations mentioned in the previous snippets are correct.
// Association between Faculty and User (1:1)
User.hasOne(Faculty, { foreignKey: 'id', as: 'faculty' });
Faculty.belongsTo(User, { foreignKey: 'id', as: 'user' });
// Association between Student and User (1:1)
User.hasOne(Student, { foreignKey: 'id', as: 'student' });
Student.belongsTo(User, { foreignKey: 'id', as: 'user' });
// Association between Courses and Department (1:N)
Department.hasMany(Courses, { foreignKey: 'department_id', as: 'courses' });
Courses.belongsTo(Department, { foreignKey: 'department_id', as: 'department' });
// Association between Courses and Year (1:N)
Academic_Semester.hasMany(Courses, { foreignKey: 'academic_semester_id', as: 'courses' });
Courses.belongsTo(Academic_Semester, { foreignKey: 'academic_semester_id', as: 'semester' });
// Association between Student and Courses (N:M)
Student.belongsToMany(Courses, {
  through: 'StudentCourse', // Assuming you have a junction table named "StudentCourse" for the many-to-many relationship
  foreignKey: 'student_id',
  otherKey: 'course_id',
  as: 'courses',
});
Courses.belongsToMany(Student, {
  through: 'StudentCourse',
  foreignKey: 'course_id',
  otherKey: 'student_id',
  as: 'students',
});
// Association between Faculty and Courses (N:M)
Faculty.belongsToMany(Courses, {
  through: 'FacultyCourse', // Assuming you have a junction table named "FacultyCourse" for the many-to-many relationship
  foreignKey: 'faculty_id',
  otherKey: 'course_id',
  as: 'courses',
});
Courses.belongsToMany(Faculty, {
  through: 'FacultyCourse',
  foreignKey: 'course_id',
  otherKey: 'faculty_id',
  as: 'faculties',
});




