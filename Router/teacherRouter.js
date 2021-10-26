const express = require("express");
const teacherRouter = express.Router();

const { teacherData  , teacherDataUpdated ,idleTeacher , ExtraTeacher} = require('../processData');

teacherRouter.route('/idleTeacher')
.get(function (req, res){
    console.log(idleTeacher);
    res.json({idleTeacher});
})

teacherRouter.route('/ExtraTeacher')
.get(function (req, res){
    console.log("dd");
    res.json({ExtraTeacher});
})

teacherRouter.route('/:id')
.get( function(req, res) {
    let Class = req.params.id ;
    let data = teacherData[Class];
    res.json({ data})
})

teacherRouter.route('/updated/:id')
.get( function(req, res) {
    let Class = req.params.id ;
    let data = teacherDataUpdated[Class];
    res.json({ data})
})

module.exports = teacherRouter ;