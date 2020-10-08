
var Sequelize = require("sequelize");
var sequelize = require("../config/db.js")

module.exports = sequelize.define('user_info_extend',{"id":{"type":"INT","allowNull":false,"defaultValue":null,"primaryKey":true,"autoIncrement":true,"comment":null,"foreignKey":{"constraint_name":"PRIMARY","source_schema":"project_work","source_table":"user_info_extend","source_column":"id","target_schema":null,"target_table":null,"target_column":null,"extra":"auto_increment","column_key":"PRI","isPrimaryKey":true,"isSerialKey":true}},"user_id":{"type":"INT","allowNull":true,"defaultValue":null,"primaryKey":false,"autoIncrement":false,"comment":"用户id"},"git_address":{"type":"VARCHAR(128)","allowNull":true,"defaultValue":null,"primaryKey":false,"autoIncrement":false,"comment":"git地址"},"phone_address":{"type":"VARCHAR(128)","allowNull":true,"defaultValue":null,"primaryKey":false,"autoIncrement":false,"comment":"手机号"},"address":{"type":"VARCHAR(128)","allowNull":true,"defaultValue":null,"primaryKey":false,"autoIncrement":false,"comment":"地址"},"keywords":{"type":"VARCHAR(128)","allowNull":true,"defaultValue":null,"primaryKey":false,"autoIncrement":false,"comment":"关键词"},"skill":{"type":"VARCHAR(128)","allowNull":true,"defaultValue":null,"primaryKey":false,"autoIncrement":false,"comment":"技能"},"occupation":{"type":"VARCHAR(128)","allowNull":true,"defaultValue":"undefined","primaryKey":false,"autoIncrement":false,"comment":"职业id"},"work_expreience":{"type":"VARCHAR(128)","allowNull":true,"defaultValue":null,"primaryKey":false,"autoIncrement":false,"comment":"工作经历id数组"}},{
    freezeTableName: true,
    timestamps: false,
    
    
});