define({ "api": [
  {
    "type": "post",
    "url": "/key_worlds/add",
    "title": "key_worlds新增",
    "description": "<p>&quot;&quot;</p>",
    "name": "addkey_worlds",
    "group": "key_worlds",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>关键词名称</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/key_worlds/add"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/key_worlds.js",
    "groupTitle": "key_worlds"
  },
  {
    "type": "post",
    "url": "/key_worlds/delete",
    "title": "key_worlds删除",
    "description": "<p>&quot;&quot;</p>",
    "name": "deletekey_worlds",
    "group": "key_worlds",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/key_worlds/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/key_worlds.js",
    "groupTitle": "key_worlds"
  },
  {
    "type": "post",
    "url": "/key_worlds/queryList",
    "title": "key_worlds查询列表",
    "description": "<p>&quot;&quot;</p>",
    "name": "queryListkey_worlds",
    "group": "key_worlds",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>分页，如果不需要可不发</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pageSize",
            "description": "<p>分页数量</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/key_worlds/queryList"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/key_worlds.js",
    "groupTitle": "key_worlds"
  },
  {
    "type": "post",
    "url": "/key_worlds/query",
    "title": "key_worlds查询详情",
    "description": "<p>&quot;&quot;</p>",
    "name": "querykey_worlds",
    "group": "key_worlds",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>关键词名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>分页，如果不需要可不发</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pageSize",
            "description": "<p>分页数量</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/key_worlds/query"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/key_worlds.js",
    "groupTitle": "key_worlds"
  },
  {
    "type": "post",
    "url": "/key_worlds/update",
    "title": "key_worlds更新",
    "description": "<p>&quot;&quot;</p>",
    "name": "updatekey_worlds",
    "group": "key_worlds",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>关键词名称</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/key_worlds/update"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/key_worlds.js",
    "groupTitle": "key_worlds"
  },
  {
    "type": "post",
    "url": "/occupation/add",
    "title": "occupation新增",
    "description": "<p>&quot;&quot;</p>",
    "name": "addoccupation",
    "group": "occupation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>职业名称</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/occupation/add"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/occupation.js",
    "groupTitle": "occupation"
  },
  {
    "type": "post",
    "url": "/occupation/delete",
    "title": "occupation删除",
    "description": "<p>&quot;&quot;</p>",
    "name": "deleteoccupation",
    "group": "occupation",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/occupation/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/occupation.js",
    "groupTitle": "occupation"
  },
  {
    "type": "post",
    "url": "/occupation/queryList",
    "title": "occupation查询列表",
    "description": "<p>&quot;&quot;</p>",
    "name": "queryListoccupation",
    "group": "occupation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>分页，如果不需要可不发</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pageSize",
            "description": "<p>分页数量</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/occupation/queryList"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/occupation.js",
    "groupTitle": "occupation"
  },
  {
    "type": "post",
    "url": "/occupation/query",
    "title": "occupation查询详情",
    "description": "<p>&quot;&quot;</p>",
    "name": "queryoccupation",
    "group": "occupation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>职业名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>分页，如果不需要可不发</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pageSize",
            "description": "<p>分页数量</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/occupation/query"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/occupation.js",
    "groupTitle": "occupation"
  },
  {
    "type": "post",
    "url": "/occupation/update",
    "title": "occupation更新",
    "description": "<p>&quot;&quot;</p>",
    "name": "updateoccupation",
    "group": "occupation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>职业名称</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/occupation/update"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/occupation.js",
    "groupTitle": "occupation"
  },
  {
    "type": "post",
    "url": "/skill/add",
    "title": "skill新增",
    "description": "<p>&quot;&quot;</p>",
    "name": "addskill",
    "group": "skill",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "skill_description",
            "description": "<p>技能描述</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "skill_name",
            "description": "<p>技能名称</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/skill/add"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/skill.js",
    "groupTitle": "skill"
  },
  {
    "type": "post",
    "url": "/skill/delete",
    "title": "skill删除",
    "description": "<p>&quot;&quot;</p>",
    "name": "deleteskill",
    "group": "skill",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/skill/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/skill.js",
    "groupTitle": "skill"
  },
  {
    "type": "post",
    "url": "/skill/queryList",
    "title": "skill查询列表",
    "description": "<p>&quot;&quot;</p>",
    "name": "queryListskill",
    "group": "skill",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>分页，如果不需要可不发</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pageSize",
            "description": "<p>分页数量</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/skill/queryList"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/skill.js",
    "groupTitle": "skill"
  },
  {
    "type": "post",
    "url": "/skill/query",
    "title": "skill查询详情",
    "description": "<p>&quot;&quot;</p>",
    "name": "queryskill",
    "group": "skill",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "skill_description",
            "description": "<p>技能描述</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "skill_name",
            "description": "<p>技能名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>分页，如果不需要可不发</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pageSize",
            "description": "<p>分页数量</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/skill/query"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/skill.js",
    "groupTitle": "skill"
  },
  {
    "type": "post",
    "url": "/skill/update",
    "title": "skill更新",
    "description": "<p>&quot;&quot;</p>",
    "name": "updateskill",
    "group": "skill",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "skill_description",
            "description": "<p>技能描述</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "skill_name",
            "description": "<p>技能名称</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/skill/update"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/skill.js",
    "groupTitle": "skill"
  },
  {
    "type": "post",
    "url": "/user_info_extend/add",
    "title": "user_info_extend新增",
    "description": "<p>&quot;&quot;</p>",
    "name": "adduser_info_extend",
    "group": "user_info_extend",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "git_address",
            "description": "<p>git地址</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone_address",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>地址</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "keywords",
            "description": "<p>关键词</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "skill",
            "description": "<p>技能</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "occupation",
            "description": "<p>职业id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "work_expreience",
            "description": "<p>工作经历id数组</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/user_info_extend/add"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/user_info_extend.js",
    "groupTitle": "user_info_extend"
  },
  {
    "type": "post",
    "url": "/user_info_extend/delete",
    "title": "user_info_extend删除",
    "description": "<p>&quot;&quot;</p>",
    "name": "deleteuser_info_extend",
    "group": "user_info_extend",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/user_info_extend/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/user_info_extend.js",
    "groupTitle": "user_info_extend"
  },
  {
    "type": "post",
    "url": "/user_info_extend/queryList",
    "title": "user_info_extend查询列表",
    "description": "<p>&quot;&quot;</p>",
    "name": "queryListuser_info_extend",
    "group": "user_info_extend",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>分页，如果不需要可不发</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pageSize",
            "description": "<p>分页数量</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/user_info_extend/queryList"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/user_info_extend.js",
    "groupTitle": "user_info_extend"
  },
  {
    "type": "post",
    "url": "/user_info_extend/query",
    "title": "user_info_extend查询详情",
    "description": "<p>&quot;&quot;</p>",
    "name": "queryuser_info_extend",
    "group": "user_info_extend",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "git_address",
            "description": "<p>git地址</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone_address",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>地址</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "keywords",
            "description": "<p>关键词</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "skill",
            "description": "<p>技能</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "occupation",
            "description": "<p>职业id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "work_expreience",
            "description": "<p>工作经历id数组</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>分页，如果不需要可不发</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pageSize",
            "description": "<p>分页数量</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/user_info_extend/query"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/user_info_extend.js",
    "groupTitle": "user_info_extend"
  },
  {
    "type": "post",
    "url": "/user_info_extend/update",
    "title": "user_info_extend更新",
    "description": "<p>&quot;&quot;</p>",
    "name": "updateuser_info_extend",
    "group": "user_info_extend",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "git_address",
            "description": "<p>git地址</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone_address",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>地址</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "keywords",
            "description": "<p>关键词</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "skill",
            "description": "<p>技能</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "occupation",
            "description": "<p>职业id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "work_expreience",
            "description": "<p>工作经历id数组</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/user_info_extend/update"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/user_info_extend.js",
    "groupTitle": "user_info_extend"
  },
  {
    "type": "post",
    "url": "/user_info/add",
    "title": "user_info新增",
    "description": "<p>&quot;&quot;</p>",
    "name": "adduser_info",
    "group": "user_info",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "age",
            "description": "<p>年龄</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sex",
            "description": "<p>性别(0为女，1为男)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/user_info/add"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/user_info.js",
    "groupTitle": "user_info"
  },
  {
    "type": "post",
    "url": "/user_info/delete",
    "title": "user_info删除",
    "description": "<p>&quot;&quot;</p>",
    "name": "deleteuser_info",
    "group": "user_info",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/user_info/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/user_info.js",
    "groupTitle": "user_info"
  },
  {
    "type": "post",
    "url": "/user_info/queryList",
    "title": "user_info查询列表",
    "description": "<p>&quot;&quot;</p>",
    "name": "queryListuser_info",
    "group": "user_info",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>分页，如果不需要可不发</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pageSize",
            "description": "<p>分页数量</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/user_info/queryList"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/user_info.js",
    "groupTitle": "user_info"
  },
  {
    "type": "post",
    "url": "/user_info/query",
    "title": "user_info查询详情",
    "description": "<p>&quot;&quot;</p>",
    "name": "queryuser_info",
    "group": "user_info",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "age",
            "description": "<p>年龄</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sex",
            "description": "<p>性别(0为女，1为男)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>分页，如果不需要可不发</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pageSize",
            "description": "<p>分页数量</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/user_info/query"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/user_info.js",
    "groupTitle": "user_info"
  },
  {
    "type": "post",
    "url": "/user_info/update",
    "title": "user_info更新",
    "description": "<p>&quot;&quot;</p>",
    "name": "updateuser_info",
    "group": "user_info",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "age",
            "description": "<p>年龄</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sex",
            "description": "<p>性别(0为女，1为男)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/user_info/update"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/user_info.js",
    "groupTitle": "user_info"
  },
  {
    "type": "post",
    "url": "/work_expreience/add",
    "title": "work_expreience新增",
    "description": "<p>&quot;&quot;</p>",
    "name": "addwork_expreience",
    "group": "work_expreience",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>公司名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>工作内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "keywords",
            "description": "<p>关键词id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/work_expreience/add"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/work_expreience.js",
    "groupTitle": "work_expreience"
  },
  {
    "type": "post",
    "url": "/work_expreience/delete",
    "title": "work_expreience删除",
    "description": "<p>&quot;&quot;</p>",
    "name": "deletework_expreience",
    "group": "work_expreience",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/work_expreience/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/work_expreience.js",
    "groupTitle": "work_expreience"
  },
  {
    "type": "post",
    "url": "/work_expreience/queryList",
    "title": "work_expreience查询列表",
    "description": "<p>&quot;&quot;</p>",
    "name": "queryListwork_expreience",
    "group": "work_expreience",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>分页，如果不需要可不发</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pageSize",
            "description": "<p>分页数量</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/work_expreience/queryList"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/work_expreience.js",
    "groupTitle": "work_expreience"
  },
  {
    "type": "post",
    "url": "/work_expreience/query",
    "title": "work_expreience查询详情",
    "description": "<p>&quot;&quot;</p>",
    "name": "querywork_expreience",
    "group": "work_expreience",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>公司名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>工作内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "keywords",
            "description": "<p>关键词id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>分页，如果不需要可不发</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pageSize",
            "description": "<p>分页数量</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/work_expreience/query"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/work_expreience.js",
    "groupTitle": "work_expreience"
  },
  {
    "type": "post",
    "url": "/work_expreience/update",
    "title": "work_expreience更新",
    "description": "<p>&quot;&quot;</p>",
    "name": "updatework_expreience",
    "group": "work_expreience",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>公司名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>工作内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "keywords",
            "description": "<p>关键词id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/work_expreience/update"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/work_expreience.js",
    "groupTitle": "work_expreience"
  },
  {
    "type": "post",
    "url": "/work_keywords/add",
    "title": "work_keywords新增",
    "description": "<p>&quot;&quot;</p>",
    "name": "addwork_keywords",
    "group": "work_keywords",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>工作关键词名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>描述</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/work_keywords/add"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/work_keywords.js",
    "groupTitle": "work_keywords"
  },
  {
    "type": "post",
    "url": "/work_keywords/delete",
    "title": "work_keywords删除",
    "description": "<p>&quot;&quot;</p>",
    "name": "deletework_keywords",
    "group": "work_keywords",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/work_keywords/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/work_keywords.js",
    "groupTitle": "work_keywords"
  },
  {
    "type": "post",
    "url": "/work_keywords/queryList",
    "title": "work_keywords查询列表",
    "description": "<p>&quot;&quot;</p>",
    "name": "queryListwork_keywords",
    "group": "work_keywords",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>分页，如果不需要可不发</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pageSize",
            "description": "<p>分页数量</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/work_keywords/queryList"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/work_keywords.js",
    "groupTitle": "work_keywords"
  },
  {
    "type": "post",
    "url": "/work_keywords/query",
    "title": "work_keywords查询详情",
    "description": "<p>&quot;&quot;</p>",
    "name": "querywork_keywords",
    "group": "work_keywords",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>工作关键词名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>描述</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>分页，如果不需要可不发</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pageSize",
            "description": "<p>分页数量</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/work_keywords/query"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/work_keywords.js",
    "groupTitle": "work_keywords"
  },
  {
    "type": "post",
    "url": "/work_keywords/update",
    "title": "work_keywords更新",
    "description": "<p>&quot;&quot;</p>",
    "name": "updatework_keywords",
    "group": "work_keywords",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>工作关键词名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>描述</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/work_keywords/update"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/work_keywords.js",
    "groupTitle": "work_keywords"
  }
] });
