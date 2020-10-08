
    /**
         * @api {post} /user_info/add user_info新增
         * @apiDescription ""
         * @apiName adduser_info
         * @apiGroup user_info
         
                     * @apiParam {string} username 姓名
                 
                     * @apiParam {string} age 年龄
                 
                     * @apiParam {string} sex 性别(0为女，1为男)
                 
    
    
         * @apiSuccess {json} code
         * @apiSampleRequest /user_info/add
         * @apiVersion 0.0.0
        */
    /**
         * @api {post} /user_info/query user_info查询详情
         * @apiDescription ""
         * @apiName queryuser_info
         * @apiGroup user_info
         
                     * @apiParam {string} username 姓名
                 
                     * @apiParam {string} age 年龄
                 
                     * @apiParam {string} sex 性别(0为女，1为男)
                 
    
    
    * @apiParam {string} page 分页，如果不需要可不发
    * @apiParam {string} pageSize 分页数量
         * @apiSuccess {json} code
         * @apiSampleRequest /user_info/query
         * @apiVersion 0.0.0
        */
    /**
         * @api {post} /user_info/queryList user_info查询列表
         * @apiDescription ""
         * @apiName queryListuser_info
         * @apiGroup user_info
         
    
    
    * @apiParam {string} page 分页，如果不需要可不发
    * @apiParam {string} pageSize 分页数量
         * @apiSuccess {json} code
         * @apiSampleRequest /user_info/queryList
         * @apiVersion 0.0.0
        */
    /**
         * @api {post} /user_info/update user_info更新
         * @apiDescription ""
         * @apiName updateuser_info
         * @apiGroup user_info
         
                     * @apiParam {string} username 姓名
                 
                     * @apiParam {string} age 年龄
                 
                     * @apiParam {string} sex 性别(0为女，1为男)
                 
    
    
         * @apiSuccess {json} code
         * @apiSampleRequest /user_info/update
         * @apiVersion 0.0.0
        */
    /**
         * @api {post} /user_info/delete user_info删除
         * @apiDescription ""
         * @apiName deleteuser_info
         * @apiGroup user_info
         
    
    
         * @apiSuccess {json} code
         * @apiSampleRequest /user_info/delete
         * @apiVersion 0.0.0
        */