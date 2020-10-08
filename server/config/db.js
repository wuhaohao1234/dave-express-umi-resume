
var Sequelize = require("sequelize");
const sequelize = new Sequelize('project_work', 'abu0418', 'abu0418', {
  host: '106.13.166.47',
  port:3306,
  dialect: 'mysql',
  timezone: '+08:00',
  dialectOptions:{
    dateStrings:true,
    typeCast:true
  },
  define: {
    timestamps: false
  }
}); 

module.exports = sequelize;
    