

module.exports=(sequelize,DataTypes)=>{
    const ProjDetails = sequelize.define( "projDetails",{
        name:{
            type:DataTypes.STRING,
            allowNull:false,
            validate : {
                notNull: {
                    msg: 'name is required'
                },
                notEmpty:
                {
                    args:true,
                    msg:'Please provide name'
                },
                is:{ 
                    args : /^[a-zA-Z ]*$/,
                    msg:'name must be allowed letters only'
                },
            }
        },

        college:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notNull: {
                    msg: 'college name is required'
                },
                notEmpty:
                {
                    args:true,
                    msg:'Please provide college name'
                }
            }
        },
        college_year:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notNull: {
                    msg: 'college_year is required'
                },
                notEmpty:
                {
                    args:true,
                    msg:'Please provide college_year '
                }
            }
        },
        domain:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notNull: {
                    msg: 'Department name is required'
                },
                notEmpty:
                {
                    args:true,
                    msg:'Please provide department name'
                }
            }
        },
        proj_desc:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notNull: {
                    msg: 'research area description is required'
                },
                notEmpty:
                {
                    args:true,
                    msg:'Please provide research area description'
                }
            }
        },
        github:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notNull: {
                    msg: 'google scholar link is required'
                },
                notEmpty:
                {
                    args:true,
                    msg:'Please provide google scholar link'
                }
            }

        },
        proj_title:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notNull: {
                    msg: 'current_research details are required'
                },
                notEmpty:
                {
                    args:true,
                    msg:'Please provide current_research details'
                }
            }

        },

        mobile:{
            type:DataTypes.INTEGER,
            allowNull:false,
            validate:{
                notNull:{
                    msg:'Mobile number is required'
                },
                notEmpty:
                {
                    args:true,
                    msg:'Please provide mobile number'
                }
            }
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:{
                args : true,
                msg:'Email is already exists'
            },
            validate : {
                notNull: {
                    msg: 'email is required'
                },
                notEmpty:
                {
                    args:true,
                    msg:'Please provide email'
                },
                isEmail:
                {
                    args:true,
                    msg:'Invalid email'
                }
            }
        }
    }     
    );
    return ProjDetails;

}