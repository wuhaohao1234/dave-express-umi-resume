
let express = require('express');
let router = express.Router();
let serviceUser_info = require('../service/user_info.js')
serviceUser_info = new serviceUser_info()

/**
 * @api {post} /user_info/add user_info新增
 * @apiDescription ""
*/
router.post('/add', async function (req, res, next) {
    let data = await serviceUser_info.add(req,res)
    res.send(data)
});

/**
 * @api {post} /user_info/query user_info查询
 * @apiDescription ""
*/
router.post('/query', async function (req, res, next) {
    let data = await serviceUser_info.query(req,res)
    res.send(data)
});

/**
 * @api {post} /user_info/queryList user_info所有数据
 * @apiDescription ""
*/
router.post('/queryList', async function (req, res, next) {
    let data = await serviceUser_info.queryList(req,res)
    res.send(data)
});

/**
 * @api {post} /user_info/update user_info更新
 * @apiDescription ""
*/
router.post('/update', async function (req, res, next) {
    let data = await serviceUser_info.update(req,res)
    res.send(data)
});

/**
 * @api {post} /user_info/delete user_info删除数据-慎用delete语法
 * @apiDescription ""
*/
router.post('/delete', async function (req, res, next) {
    let data = await serviceUser_info.delete(req,res)
    res.send(data)
});
module.exports = router
    