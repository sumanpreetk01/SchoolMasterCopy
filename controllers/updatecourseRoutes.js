const router = require('express').Router();
const Courses = require('../SchoolMaster copy/models/courses');

router.get('/:id', async (req, res) => {
    try {
      const courseId = req.params.id;
      const courseData = await Courses.findByPk(courseId);
      if (!courseData) {
        res.status(404).json({ message: 'Course not found' });
        return;
      }
      const course = courseData.get({ plain: true });
      res.render('updatecourse', {
        course
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.put('/:id', async (req, res) => {
    try {
      const courseId = req.params.id;
      const updatedCourse = await Courses.update(
        {
          ...req.body,
        },
        {
          where: { id: courseId },
        }
      );
      res.status(200).json(updatedCourse);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;