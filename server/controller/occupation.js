
let express = require('express');
let router = express.Router();
let serviceOccupation = require('../service/occupation.js')
serviceOccupation = new serviceOccupation()

/**
 * @api {post} /occupation/add occupation新增
 * @apiDescription ""
*/
router.post('/add', async function (req, res, next) {
    let data = await serviceOccupation.add(req,res)
    res.send(data)
});

/**
 * @api {post} /occupation/query occupation查询
 * @apiDescription ""
*/
router.post('/query', async function (req, res, next) {
    let data = await serviceOccupation.query(req,res)
    res.send(data)
});

/**
 * @api {post} /occupation/queryList occupation所有数据
 * @apiDescription ""
*/
router.post('/queryList', async function (req, res, next) {
    let data = await serviceOccupation.queryList(req,res)
    res.send(data)
});

/**
 * @api {post} /occupation/update occupation更新
 * @apiDescription ""
*/
router.post('/update', async function (req, res, next) {
    let data = await serviceOccupation.update(req,res)
    res.send(data)
});

/**
 * @api {post} /occupation/delete occupation删除数据-慎用delete语法
 * @apiDescription ""
*/
router.post('/delete', async function (req, res, next) {
    let data = await serviceOccupation.delete(req,res)
    res.send(data)
});
module.exports = router
    