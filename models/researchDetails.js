

module.exports=(sequelize,DataTypes)=>{
    const ResearchDetails = sequelize.define( "researchDetails",{
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
        research_title:{
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
        research_area_desc:{
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
 
        prev_research_exp:{
            type:DataTypes.STRING,
            defaultValue: "No previous research experience",
            allowNull:false,
            validate:{
                notNull: {
                    msg: 'prev_research_exp is required'
                },
                notEmpty:
                {
                    args:true,
                    msg:'Please provide prev_research_exp '
                }
            }
        },
        google_scholar:{
            type:DataTypes.STRING,
            allowNull:true,
  

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
    }  ,
    {
        createdAt:'created_at',
        updatedAt:'updated_at',
        hooks: {
            afterValidate: async (user) => {
                if (user.password) {
                    const salt = await bcrypt.genSaltSync(10, 'a');
                    user.password = bcrypt.hashSync(user.password, salt);
                }
            }
        },
    });
     

    return ResearchDetails;

}