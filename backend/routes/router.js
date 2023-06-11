const Router = require('express').Router()
const {addtask,showalltasks,deletetask,updatetask} = require('../controllers/getalltasks')

Router.post('/add',addtask)

Router.get('/show',showalltasks)

Router.delete('/delete/:name',deletetask)

Router.patch('/update/:name',updatetask)
module.exports = Router