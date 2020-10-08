
let express = require('express');
let router = express.Router();
let serviceUser_info_extend = require('../service/user_info_extend.js')
serviceUser_info_extend = new serviceUser_info_extend()

/**
 * @api {post} /user_info_extend/add user_info_extend新增
 * @apiDescription ""
*/
router.post('/add', async function (req, res, next) {
    let data = await serviceUser_info_extend.add(req,res)
    res.send(data)
});

/**
 * @api {post} /user_info_extend/query user_info_extend查询
 * @apiDescription ""
*/
router.post('/query', async function (req, res, next) {
    let data = await serviceUser_info_extend.query(req,res)
    res.send(data)
});

/**
 * @api {post} /user_info_extend/queryList user_info_extend所有数据
 * @apiDescription ""
*/
router.post('/queryList', async function (req, res, next) {
    let data = await serviceUser_info_extend.queryList(req,res)
    res.send(data)
});

/**
 * @api {post} /user_info_extend/update user_info_extend更新
 * @apiDescription ""
*/
router.post('/update', async function (req, res, next) {
    let data = await serviceUser_info_extend.update(req,res)
    res.send(data)
});

/**
 * @api {post} /user_info_extend/delete user_info_extend删除数据-慎用delete语法
 * @apiDescription ""
*/
router.post('/delete', async function (req, res, next) {
    let data = await serviceUser_info_extend.delete(req,res)
    res.send(data)
});
module.exports = router
    