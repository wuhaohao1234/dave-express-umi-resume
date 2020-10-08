
    /**
         * @api {post} /skill/add skill新增
         * @apiDescription ""
         * @apiName addskill
         * @apiGroup skill
         
                     * @apiParam {string} skill_description 技能描述
                 
                     * @apiParam {string} skill_name 技能名称
                 
    
    
         * @apiSuccess {json} code
         * @apiSampleRequest /skill/add
         * @apiVersion 0.0.0
        */
    /**
         * @api {post} /skill/query skill查询详情
         * @apiDescription ""
         * @apiName queryskill
         * @apiGroup skill
         
                     * @apiParam {string} skill_description 技能描述
                 
                     * @apiParam {string} skill_name 技能名称
                 
    
    
    * @apiParam {string} page 分页，如果不需要可不发
    * @apiParam {string} pageSize 分页数量
         * @apiSuccess {json} code
         * @apiSampleRequest /skill/query
         * @apiVersion 0.0.0
        */
    /**
         * @api {post} /skill/queryList skill查询列表
         * @apiDescription ""
         * @apiName queryListskill
         * @apiGroup skill
         
    
    
    * @apiParam {string} page 分页，如果不需要可不发
    * @apiParam {string} pageSize 分页数量
         * @apiSuccess {json} code
         * @apiSampleRequest /skill/queryList
         * @apiVersion 0.0.0
        */
    /**
         * @api {post} /skill/update skill更新
         * @apiDescription ""
         * @apiName updateskill
         * @apiGroup skill
         
                     * @apiParam {string} skill_description 技能描述
                 
                     * @apiParam {string} skill_name 技能名称
                 
    
    
         * @apiSuccess {json} code
         * @apiSampleRequest /skill/update
         * @apiVersion 0.0.0
        */
    /**
         * @api {post} /skill/delete skill删除
         * @apiDescription ""
         * @apiName deleteskill
         * @apiGroup skill
         
    
    
         * @apiSuccess {json} code
         * @apiSampleRequest /skill/delete
         * @apiVersion 0.0.0
        */