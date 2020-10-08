
let express = require('express');
let router = express.Router();
let serviceSkill = require('../service/skill.js')
serviceSkill = new serviceSkill()

/**
 * @api {post} /skill/add skill新增
 * @apiDescription ""
*/
router.post('/add', async function (req, res, next) {
    let data = await serviceSkill.add(req,res)
    res.send(data)
});

/**
 * @api {post} /skill/query skill查询
 * @apiDescription ""
*/
router.post('/query', async function (req, res, next) {
    let data = await serviceSkill.query(req,res)
    res.send(data)
});

/**
 * @api {post} /skill/queryList skill所有数据
 * @apiDescription ""
*/
router.post('/queryList', async function (req, res, next) {
    let data = await serviceSkill.queryList(req,res)
    res.send(data)
});

/**
 * @api {post} /skill/update skill更新
 * @apiDescription ""
*/
router.post('/update', async function (req, res, next) {
    let data = await serviceSkill.update(req,res)
    res.send(data)
});

/**
 * @api {post} /skill/delete skill删除数据-慎用delete语法
 * @apiDescription ""
*/
router.post('/delete', async function (req, res, next) {
    let data = await serviceSkill.delete(req,res)
    res.send(data)
});
module.exports = router
    