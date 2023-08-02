const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class Faculty extends Model {}

Faculty.init(
  {
    id: {
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
    qualification: {
      type: DataTypes.STRING,
    },
    current_position: {
      type: DataTypes.STRING,
    },
    Bio:{
      type: DataTypes.TEXT,
    },
    imageSrc: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'faculty',
  }
);

module.exports = Faculty;
