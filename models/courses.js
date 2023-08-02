const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class Courses extends Model{}

Courses.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    course: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    course_description: {
      type: DataTypes.STRING,
    },
    student_id:{
      type: DataTypes.INTEGER,
      references:{
       model:"student",
       key:"id",
      }
    },
    department_name:{
      type: DataTypes.INTEGER,
      references:{
       model:"department",
       key:"id",
      }
    },
    // semester: {
    //   type: DataTypes.INTEGER,
    //   references:{
    //    model:"academic_semester",
    //    key:"id",
    //   }
    //   },
   fees:{
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
},

{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'courses',
}
)

module.exports = Courses;