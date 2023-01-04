var express = require('express');
var LoginCtrl = require('../controllers/loginController');
const authController=require('../controllers/auth')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/login',LoginCtrl.login);

//GET register page
router.get('/register',(req,res)=>{
  res.render('index.hbs');
});

//GET landing page
router.get('/home',(req,res)=>{
  res.render('landing.ejs');
});

//GET FIND PROJECT page

router.get('/findproject',(req,res)=>{
  res.render('findProj.ejs');
});

//GET FIND RESEARCH page

router.get('/findresearch',(req,res)=>{
  res.render('findResearch.ejs');
});

//ADD PROJECT FORM
router.get('/addproject',(req,res)=>{
  res.render('projForm.ejs');
});

//ADD RESEARCH FORM
router.get('/addresearch',(req,res)=>{
  res.render('researchForm.ejs');
});

router.post('/register',authController.register)

module.exports = router;