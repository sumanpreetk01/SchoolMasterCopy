//display faulty dashboard page

const router = require('express').Router();
router.get('/',(req,res)=>{
  res.render('./');
})

module.exports = router;