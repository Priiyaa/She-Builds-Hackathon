require('dotenv').config();
var {researchDetails:ResearchDetails} = require('./models');

var addResearch = async(req,resp,next) =>{
    try
    {
        let request_data = {
            name:'Priya',
            college:'Galgotias University',
            email:'admin12@mfma.com',
            mobile:'9999999999',
            domain:"AI/ML ",
            research_area_desc:"AI/ML based research",
            college_year:'3',        
            research_title:"Prediction using AI/ML",
        }; 
        let fields_data = ['name','college','email','mobile','domain','research_area_desc','college_year', 'research_title', 'prev_research_exp', 'google_scholar', 'created_at', 'updated_at'];
        console.log(request_data);
        let insert_user = await ResearchDetails.create(request_data,{fields:fields_data});
        
        if(insert_user instanceof ResearchDetails)
        {
            console.log('research added is created');
        }
        else
        {
            console.log('research is not added due to invalid parameters passed.');
        } 
    }
    catch(err)
    {
        console.log(err.message);
    }
}


addResearch();



