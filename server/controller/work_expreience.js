
let express = require('express');
let router = express.Router();
let serviceWork_expreience = require('../service/work_expreience.js')
serviceWork_expreience = new serviceWork_expreience()

/**
 * @api {post} /work_expreience/add work_expreience新增
 * @apiDescription ""
*/
router.post('/add', async function (req, res, next) {
    let data = await serviceWork_expreience.add(req,res)
    res.send(data)
});

/**
 * @api {post} /work_expreience/query work_expreience查询
 * @apiDescription ""
*/
router.post('/query', async function (req, res, next) {
    let data = await serviceWork_expreience.query(req,res)
    res.send(data)
});

/**
 * @api {post} /work_expreience/queryList work_expreience所有数据
 * @apiDescription ""
*/
router.post('/queryList', async function (req, res, next) {
    let data = await serviceWork_expreience.queryList(req,res)
    res.send(data)
});

/**
 * @api {post} /work_expreience/update work_expreience更新
 * @apiDescription ""
*/
router.post('/update', async function (req, res, next) {
    let data = await serviceWork_expreience.update(req,res)
    res.send(data)
});

/**
 * @api {post} /work_expreience/delete work_expreience删除数据-慎用delete语法
 * @apiDescription ""
*/
router.post('/delete', async function (req, res, next) {
    let data = await serviceWork_expreience.delete(req,res)
    res.send(data)
});
module.exports = router
    