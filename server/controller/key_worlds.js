let express = require('express');
let router = express.Router();
let serviceKey_worlds = require('../service/key_worlds.js')
serviceKey_worlds = new serviceKey_worlds()

/**
 * @api {post} /key_worlds/add key_worlds新增
 * @apiDescription ""
*/
router.post('/add', async function (req, res, next) {
    let data = await serviceKey_worlds.add(req,res)
    res.send(data)
});

/**
 * @api {post} /key_worlds/query key_worlds查询
 * @apiDescription ""
*/
router.post('/query', async function (req, res, next) {
    let data = await serviceKey_worlds.query(req,res)
    res.send(data)
});

/**
 * @api {post} /key_worlds/queryList key_worlds所有数据
 * @apiDescription ""
*/
router.post('/queryList', async function (req, res, next) {
    let data = await serviceKey_worlds.queryList(req,res)
    res.send(data)
});

/**
 * @api {post} /key_worlds/update key_worlds更新
 * @apiDescription ""
*/
router.post('/update', async function (req, res, next) {
    let data = await serviceKey_worlds.update(req,res)
    res.send(data)
});

/**
 * @api {post} /key_worlds/delete key_worlds删除数据-慎用delete语法
 * @apiDescription ""
*/
router.post('/delete', async function (req, res, next) {
    let data = await serviceKey_worlds.delete(req,res)
    res.send(data)
});
module.exports = router
    