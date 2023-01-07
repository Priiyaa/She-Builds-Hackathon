const { DataTypes } = require('sequelize');
const { sequelize } = require('../models');
var db = require('../models');
const ResearchDetails = db.researchDetails;

var addResearch = async (req,resp,next)=>{
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
        res.status(201).send("added!");
    
    }

    
    catch (error) {
      res.status(422).send("error")
    }
}

module.exports={addResearch};