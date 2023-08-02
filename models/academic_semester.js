const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class Academic_Semester extends Model {}

Academic_Semester.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        semester:{
          type: DataTypes.STRING
        },
        course: {
          type: DataTypes.INTEGER,
          references: {
            model: "courses",
            key: "id",
          },
        },
      student:{
          type: DataTypes.INTEGER,
          references:{
           model:"student",
           key:"id",
          }
        },
      faculty:{
          type: DataTypes.INTEGER,
          references:{
           model:"faculty",
           key:"id",
          }
        },

       },{
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'academic_semester',
      } 
    
);
module.exports=Academic_Semester