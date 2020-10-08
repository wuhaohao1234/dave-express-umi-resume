
var Sequelize = require("sequelize");
var sequelize = require("../config/db.js")

module.exports = sequelize.define('user_info',{"id":{"type":"INT","allowNull":false,"defaultValue":null,"primaryKey":true,"autoIncrement":true,"comment":null,"foreignKey":{"constraint_name":"PRIMARY","source_schema":"project_work","source_table":"user_info","source_column":"id","target_schema":null,"target_table":null,"target_column":null,"extra":"auto_increment","column_key":"PRI","isPrimaryKey":true,"isSerialKey":true}},"username":{"type":"VARCHAR(64)","allowNull":true,"defaultValue":"undefined","primaryKey":false,"autoIncrement":false,"comment":"姓名"},"age":{"type":"INT","allowNull":true,"defaultValue":null,"primaryKey":false,"autoIncrement":false,"comment":"年龄"},"sex":{"type":"INT","allowNull":true,"defaultValue":"1","primaryKey":false,"autoIncrement":false,"comment":"性别(0为女，1为男)"}},{
    freezeTableName: true,
    timestamps: false,
    
    
});