var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require('dotenv');
// Import the files //
require('dotenv').config();
require('./models/index')
const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
const bodyParser = require('body-parser')
require('dotenv').config();
var {projDetails:ProjDetails} = require('./models');
const jsonParser = bodyParser.json()
var {researchDetails:ResearchDetails} = require('./models');
//const ProjDetails =require('./models/projDetails');

//const projDetails = require('./models/projDetails');

// app.get('/addproject',function(req,resp){
//     ProjDetails.findAll().then(projDetails=>resp.json(projDetails))
// })
//CREATING API
app.use(bodyParser.json());
// app.post('/pform',function(req,res){
//     ProjDetails.create({name:req.body.name}).then(function(projDetails){
// res.json(projDetails);});
// })

app.post('/pform', async (req,res) => {
    try
    {
        let request_data = {
            name: req.body.name ,
            college: req.body.college,
            email: req.body.email,
            mobile: req.body.mobile,
            github: req.body.github,
            domain: req.body.domain,
            proj_desc: req.body.proj_desc,
            college_year: req.body.college_year,        
            proj_title: req.body.proj_title,
        }; 
       
        let fields_data = ['name','college','email','mobile','domain','github','college_year', 'proj_desc', 'proj_title', 'created_at', 'updated_at']
        console.log(request_data);
        let insert_user = await ProjDetails.create(request_data,{fields:fields_data});
        res.status(201).redirect("/home");
    
    }

    
    catch (error) {
      res.status(422).send("error")
    }
    
  })



 //POST RESEARCH FORM DATA 


 app.post('/rform', async (req,res) => {
    try
    {
        let request_data = {
            name: req.body.name ,
            college: req.body.college,
            email: req.body.email,
            mobile: req.body.mobile,
            research_area_desc: req.body.research_area_desc,
            domain: req.body.domain,
            prev_research_exp: req.body.prev_research_exp,
            college_year: req.body.college_year,        
            research_title: req.body.research_title,
            google_scholar:req.body.google_scholar,
        }; 
       
        let fields_data = ['name','college','email','mobile','domain','research_area_desc','college_year', 'research_title', 'prev_research_exp', 'google_scholar', 'created_at', 'updated_at'];
        console.log(request_data);
        let insert_user = await ResearchDetails.create(request_data,{fields:fields_data});
        res.status(201).redirect("/home");
    
    }

    
    catch (error) {
      res.status(422).send("error")
    }
    
  })




  
  app.set('vie engine','hbs');
  app.set('vie engine','ejs');

app.get("/",(req,resp)=>{
    resp.send("Home page");
})



app.use('/',require('./routes/index'));


app.listen(process.env.APP_PORT,(res,req)=>{
    
    console.log("Appilcation server is up",process.env.APP_PORT);
  });
  module.exports = app;