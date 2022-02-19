const {DataTypes,Model} = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {};

Review.init(
   {
       id:{  
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true 
    },
  
    review_text: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: [4]
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    }

   },
   {
       sequelize,
       freezeTableName: true,
       timestamps: true,
       underscored: true,
       modelName: 'review'
   } 
);

module.exports = Review;
