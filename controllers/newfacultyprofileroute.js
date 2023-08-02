const router = require('express').Router();
const Faculty = require('../SchoolMaster copy/models/Faculty');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    
    const facultyData = await Faculty.findAll();
    console.log("..............",facultyData)
    
    // Serialize data so the template can read it

    const profile = facultyData.map((data) => data.get({ plain: true }));
    console.log("xxxxxxxxxxxxxxxxxx", profile)
   
    res.render('newfacultyprofile', {
      profile
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    
    const profile = await Faculty.create({
      ...req.body,
    });
    res.render('newfacultyprofile', {
      profile,
     
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;