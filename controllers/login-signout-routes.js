const express = require('express');
const router = express.Router();
const {User,Faculty, Student} = require('../SchoolMaster copy/models');
const bcrypt  = require("bcrypt");


router.get("/login",(req,res)=>{
  console.log("Inside login ***********");
    // if(req.session.user){
    //     return res.redirect("/")
    // }
    res.render("login");
})

router.get("/signup",(req,res)=>{
  console.log("Inside signup ***********");
    res.render("signup")
})

router.get("/", (req, res) => {
  console.log("Inside /////// ***********");
    User.findAll({
      include:[Faculty,Student]
    })
      .then(dbUsers => {
        res.json(dbUsers);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });

  // logout by hitting /users/logout
router.get("/logout",(req,res)=>{
    req.session.destroy();
    res.redirect('/');
})

router.get("/:id", (req, res) => {
    User.findByPk(req.params.id,{include:[ Faculty, Student]})
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
});

// sign up users/
router.post("/", (req, res) => {
  // run hooks to hash and salt password; create user
    User.create(req.body, {individualHooks: true} )
      .then(newUser => {
        // IMMEDIATE LOG IN = create new session for user with id and username (sessions set to 30 min)
        req.session.user = {
          id:newUser.id,
          username:newUser.username
        }
        res.json(newUser);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
});

// login /users/login
router.post("/login", (req, res) => {
  // find username name that matches request
    User.findOne({
      where:{ 
      email:req.body.email
    }
}).then(foundUser=>{
  // if username is not found, send message
      if(!foundUser){
        return res.status(400).json({msg:"wrong login credentials"})
      }
      // compare password with saved hash
      if(bcrypt.compareSync(req.body.password,foundUser.password)){
        // if pw matches, create session for user 
        req.session.user = {
          id:foundUser.id,
          username:foundUser.username
        }
        console.log("*******", foundUser.userType)
        return res.json(foundUser)
        // redirect page??
      } else {
        return res.status(400).json({msg:"wrong login credentials"})
      }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
});

router.post("/signup", (req, res) => {
  // run hooks to hash and salt password; create user
    User.create(req.body, {individualHooks: true} )
      .then(newUser => {
        // IMMEDIATE LOG IN = create new session for user with id and username (sessions set to 30 min)
        req.session.user = {
          id:newUser.id,
          username:newUser.username
        }
        res.json(newUser);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
});
  
router.put("/:id", (req, res) => {
    User.update(req.body, {
      where: {
        id: req.params.id
      },
      individualHooks: true
    }).then(updatedUser => {
      res.json(updatedUser);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});
  
router.delete("/:id", (req, res) => {
    User.destroy({
      where: {
        id: req.params.id
      }
    }).then(delUser => {
      res.json(delUser);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
  });

module.exports = router;