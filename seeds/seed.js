console.log("running")
const sequelize = require('../config/connection');

const { Academic_Semester, Courses, Student, User, Faculty } = require('../models');

const userData = require('./userData.json');
const semesterData = require('./semesters.json');
const facultyData = require('./facultyprofile.json');

const coursesData = require('./courses.json');
const studentsData = require('./students.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Academic_Semester.bulkCreate(semesterData, {
    individualHooks: true,
    returning: true,
  });

  console.log('++++++++++++++++++++++++++++++++++++++++++');
  console.log(semesterData)

  await Student.bulkCreate(studentsData, {
    individualHooks: true,
    returning: true,
  });

  await Courses.bulkCreate(coursesData, {
    individualHooks: true,
    returning: true,
  });

  const faculties = await Faculty.bulkCreate(facultyData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();