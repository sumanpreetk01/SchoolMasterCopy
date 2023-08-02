const router = require('express').Router();
const Courses = require('../SchoolMaster copy/models/courses');

// Route to render the add course page
router.get('/', async (req, res) => {
  try {
    const coursesData = await Courses.findAll();
    // Serialize data so the template can read it
    const course = coursesData.map((data) => data.get({ plain: true }));
    res.render('addcourse', {
      course
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to handle adding a new course
router.post('/', async (req, res) => {
  try {
    const newCourse = await Courses.create({
      ...req.body,
    });

    res.status(200).json(newCourse);
  } catch (err) {
    res.status(500).json(err);
  }
});
  

module.exports = router;