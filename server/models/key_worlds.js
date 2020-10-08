
var Sequelize = require("sequelize");
var sequelize = require("../config/db.js")

module.exports = sequelize.define('key_worlds',{"id":{"type":"INT","allowNull":false,"defaultValue":null,"primaryKey":true,"autoIncrement":true,"comment":null,"foreignKey":{"constraint_name":"PRIMARY","source_schema":"project_work","source_table":"key_worlds","source_column":"id","target_schema":null,"target_table":null,"target_column":null,"extra":"auto_increment","column_key":"PRI","isPrimaryKey":true,"isSerialKey":true}},"name":{"type":"VARCHAR(128)","allowNull":true,"defaultValue":null,"primaryKey":false,"autoIncrement":false,"comment":"关键词名称"}},{
    freezeTableName: true,
    timestamps: false,
    
    
});