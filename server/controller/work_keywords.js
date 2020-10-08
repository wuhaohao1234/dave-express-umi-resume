
let express = require('express');
let router = express.Router();
let serviceWork_keywords = require('../service/work_keywords.js')
serviceWork_keywords = new serviceWork_keywords()

/**
 * @api {post} /work_keywords/add work_keywords新增
 * @apiDescription ""
*/
router.post('/add', async function (req, res, next) {
    let data = await serviceWork_keywords.add(req,res)
    res.send(data)
});

/**
 * @api {post} /work_keywords/query work_keywords查询
 * @apiDescription ""
*/
router.post('/query', async function (req, res, next) {
    let data = await serviceWork_keywords.query(req,res)
    res.send(data)
});

/**
 * @api {post} /work_keywords/queryList work_keywords所有数据
 * @apiDescription ""
*/
router.post('/queryList', async function (req, res, next) {
    let data = await serviceWork_keywords.queryList(req,res)
    res.send(data)
});

/**
 * @api {post} /work_keywords/update work_keywords更新
 * @apiDescription ""
*/
router.post('/update', async function (req, res, next) {
    let data = await serviceWork_keywords.update(req,res)
    res.send(data)
});

/**
 * @api {post} /work_keywords/delete work_keywords删除数据-慎用delete语法
 * @apiDescription ""
*/
router.post('/delete', async function (req, res, next) {
    let data = await serviceWork_keywords.delete(req,res)
    res.send(data)
});
module.exports = router
    