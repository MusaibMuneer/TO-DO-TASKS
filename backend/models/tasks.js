const mongoose = require('mongoose')
const tasks = mongoose.Schema({
   name : String,
})

module.exports = mongoose.model('tasks',tasks)