const {Model, DataTypes} = require('sequelize');
const sequelize = require('../../config/connection');

class Student extends Model {}

Student.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        full_name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: true,
            },
          },
          address:{
            type: DataTypes.STRING,
          },
          parent_name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          course:{
            type: DataTypes.INTEGER,
            references:{
                model:'courses',
                key:'id'
            }
          },
          session:{
            type: DataTypes.INTEGER,
            references:{
                model: 'academic_semester',
                key:'id'
            }
          },
          grades:{
            type: DataTypes.STRING,
          },
          classes_missed:{
            type: DataTypes.INTEGER,
          }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'student',
      }
);

module.exports = Student;