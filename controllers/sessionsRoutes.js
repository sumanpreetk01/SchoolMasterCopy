const router = require('express').Router();
const Academic_Semester = require('../SchoolMaster copy/models/academic_semester');
console.log('got the session model')
// const withAuth = require('../utils/auth')

router.get('/', async (req, res) => {
console.log('its me');
    try {
      const semesterData = await Academic_Semester.findAll({
        attributes: ['id', 'semester'],
      })
      console.log(semesterData)
      const semesters = semesterData.map((semester) => semester.get({ plain: true }));
    console.log(semesters)
    // Pass serialized data and session flag into template
    res.render('sessions', { 
      semesters, 
    });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });

  module.exports = router;