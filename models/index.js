
const {Sequelize,DataTypes} = require('sequelize');


const sequelize = new Sequelize(process.env.DATABASE,process.env.USER,process.env.PASSWORD,{
    host:process.env.HOST,
    dialect:'mysql',
    logging:false
});
sequelize.authenticate().then(()=>{
    console.log('Database is connected');
}).catch(err=>{
    console.log('Error'+err);
});
const db = {};
db.sequelize=sequelize;
db.Sequelize=Sequelize;
db.users=require('./users')(sequelize,DataTypes);
db.projDetails = require('./projDetails')(sequelize,DataTypes);
db.researchDetails=require('./researchDetails')(sequelize,DataTypes);

// CREATE


//Commented this for some time period

//  db.sequelize.sync({
//    // force:true
//     alter: true
// }).then((req, res)=>{
//     console.log('table created');
// });


module.exports = db;