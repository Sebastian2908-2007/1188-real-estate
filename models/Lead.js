const {DataTypes, Model} = require('sequelize');
const sequelize = require('../config/connection');

class Lead extends Model {};

Lead.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true 
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        address:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        walk_through_video: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, 
    {
        sequelize,
        freezeTableName: true,
        timestamps: true,
        underscored: true,
        modelName: 'lead'

    }
);

module.exports = Lead;