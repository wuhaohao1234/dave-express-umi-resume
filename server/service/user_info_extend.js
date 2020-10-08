
var model = require('../models/index.js')
class Service{
    constructor(){
    }
	 emptyData(msg){
		Object.keys(msg).map(s => {
			if (msg[s] === '' || msg[s] === undefined) {
				delete msg[s]
			}
		})
		return msg
	}
    verify(test, val) {
        for (var item in test) {
            if (!val[test[item].name]) {
                return test[item].name + "为空"
                break;
            }
        }
    }
    // 新增数据
    async add(req,res){
        var data = {}
        try {
                // 生成验证规则 name验证字段 test为正则 空验证匹配空数据
                var testList = []
                var verification = this.verify(testList,req.body)
                if(!verification){
                    var msg = { 
                        user_id:req.body.user_id,
                        git_address:req.body.git_address,
                        phone_address:req.body.phone_address,
                        address:req.body.address,
                        keywords:req.body.keywords,
                        skill:req.body.skill,
                        occupation:req.body.occupation,
                        work_expreience:req.body.work_expreience 
                    }
                    
                    msg = this.emptyData(msg)
                    
                    await model.user_info_extend.create(msg).then((s) => {
                        data = {
                            status: 200,
                            data: s[0]
                        }
                    })
                }else{
                    data = {
                        status: 201,
                        data: verification
                    }
                }
        } catch (error) {
			console.log(error)
            data = {
                status: 500,
                data: '未知错误'
            }
        }
        return data
    }
    // 查询表所有数据
    async queryList(req,res){
        var data = {}
        try {
            var {pageSize,page} = req.body
            var where = {}
            var item = ''
            
            if(pageSize && page){
                item = await model.user_info_extend.findAndCountAll({ where: where,limit:Number(pageSize), offset:(page - 1) * pageSize })
            }else{
                item = await model.user_info_extend.findAll({ where: where })
            }
            data = {
                status: 200,
                data: item
            }
            
        } catch (error) {
            data = {
                status: 500,
                data: '未知错误'
            }
        }
        return {
            data
        }
    }
    async update(req,res){
        var data = {}
        try {
           var update = { 
                user_id:req.body.user_id,
                git_address:req.body.git_address,
                phone_address:req.body.phone_address,
                address:req.body.address,
                keywords:req.body.keywords,
                skill:req.body.skill,
                occupation:req.body.occupation,
                work_expreience:req.body.work_expreience 
            }
           update = this.emptyData(update)
                
           
                var item = await model.user_info_extend.update(update,{
                    where: {
                        
                        
                    }
                })
                data = {
                    status: 200,
                    data: '修改成功'
                }
        } catch (error) {
			console.log(error)
            data = {
                status: 500,
                data: '未知错误'
            }
        }
        return data
    }
    async delete(req,res){
        var data = {}
        var deleteJson = { 
            user_id:req.body["user_id"],
            git_address:req.body["git_address"],
            phone_address:req.body["phone_address"],
            address:req.body["address"],
            keywords:req.body["keywords"],
            skill:req.body["skill"],
            occupation:req.body["occupation"],
            work_expreience:req.body["work_expreience"] 
        }
        try {
            
            deleteJson = this.emptyData(deleteJson)
            await model.user_info_extend.update({
                undefined:"undefined"
            },{
                where:deleteJson
            }).then((s) => {
                data = {
                    status: 200,
                    data: '删除成功'
                }
            })
        } catch (error) {
			console.log(error)
            data = {
                status: 500,
                data: '未知错误'
            }
        }
        return data
    }
    async query(req,res){
        var data = {}
        try {
            var where = { 
                user_id:req.body.user_id,
                git_address:req.body.git_address,
                phone_address:req.body.phone_address,
                address:req.body.address,
                keywords:req.body.keywords,
                skill:req.body.skill,
                occupation:req.body.occupation,
                work_expreience:req.body.work_expreience 
            }
            // 删除无用的数据
            where = this.emptyData(where)
            var item;
            
			var query_data = {
				where
                }
			if (req.body.page && req.body.pageSize) {
				query_data.limit = Number(req.body.pageSize);
				query_data.offset = (req.body.page - 1) * req.body.pageSize;
                item = await model.user_info_extend.findAndCountAll(query_data)
				item.page = req.body.page
				item.pageSize = req.body.pageSize
			}else{
                item = await model.user_info_extend.findAll(query_data)
            }
             
            data = {
                status: 200,
                data: item
            }
        } catch (error) {
			console.log(error)
            data = {
                status: 500,
                data: '未知错误'
            }
        }
        return  data
    }
}
module.exports = Service 
    