//display admin dashboard page

const router = require('express').Router();



router.get('/',(req,res)=>{
  res.render('admin-dashboard');

})





module.exports = router;