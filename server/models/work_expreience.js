
var Sequelize = require("sequelize");
var sequelize = require("../config/db.js")

module.exports = sequelize.define('work_expreience',{"id":{"type":"INT","allowNull":false,"defaultValue":null,"primaryKey":true,"autoIncrement":true,"comment":null,"foreignKey":{"constraint_name":"PRIMARY","source_schema":"project_work","source_table":"work_expreience","source_column":"id","target_schema":null,"target_table":null,"target_column":null,"extra":"auto_increment","column_key":"PRI","isPrimaryKey":true,"isSerialKey":true}},"name":{"type":"VARCHAR(128)","allowNull":true,"defaultValue":null,"primaryKey":false,"autoIncrement":false,"comment":"公司名称"},"content":{"type":"VARCHAR(256)","allowNull":true,"defaultValue":null,"primaryKey":false,"autoIncrement":false,"comment":"工作内容"},"keywords":{"type":"VARCHAR(128)","allowNull":true,"defaultValue":null,"primaryKey":false,"autoIncrement":false,"comment":"关键词id"}},{
    freezeTableName: true,
    timestamps: false,
    
    
});