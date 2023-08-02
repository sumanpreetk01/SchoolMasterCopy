//display student dashboard page

// const router = require('express').Router();

// router.get('/',(req,res)=>{
//   res.render('student-dashboard');

// })



// module.exports = router;

const express = require('express');
const router = express.Router();

// Define the student dashboard route
router.get('/', (req, res) => {
  try {
    // Render the student dashboard view without passing any data
    res.render('student-dashboard');
  } catch (error) {
    // Handle errors here (e.g., render an error page)
    console.error(error);
    res.status(500).render('error', { message: 'Server error' });
  }
});

module.exports = router;
