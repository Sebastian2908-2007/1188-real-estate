const {DataTypes, Model} = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {};

Post.init(
    {
       id: {
           type: DataTypes.INTEGER,
           allowNull: false,
           autoIncrement: true,
           primaryKey: true
       } ,
       post_text: {
           type: DataTypes.Text,
           allowNull: false,
           validate: {
               len: [4]
           },
           user_id: {
               type: DataTypes.INTEGER,
               references: {
                   model: 'user',
                   key: 'id'
               }
           }

       }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        timestamps: true,
        modelName: 'post'
    }
);

module.exports = Post;