const router = require('express').Router();
const Student = require('../SchoolMaster copy/models/students');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    
    const studentData = await Student.findAll();
    console.log("..............",studentData)
    
    // Serialize data so the template can read it

    const studentprofile = studentData.map((data) => data.get({ plain: true }));
    console.log("xxxxxxxxxxxxxxxxxx", studentprofile)
   
    res.render('newstudentprofile', {
      studentprofile
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    
    const studentprofile = await Student.create({
      ...req.body,
    });
    res.render('newstudentprofile', {
      studentprofile,
     
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;