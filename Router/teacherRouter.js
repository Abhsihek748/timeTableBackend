const express = require("express");
const teacherRouter = express.Router();

const { teacherData  , teacherDataUpdated ,idleTeacher , ExtraTeacher} = require('../processData');  // get data from processdata file

teacherRouter.route('/idleTeacher') // this route will send no idleteacher on get request on this route 
.get(function (req, res){
    console.log(idleTeacher);
    res.json({idleTeacher});
})

teacherRouter.route('/ExtraTeacher') // this route will send no extraTeacher needed on get request on this route 
.get(function (req, res){
    console.log("dd");
    res.json({ExtraTeacher});
})

teacherRouter.route('/:id')  // this will route to the /teacher to get a timetable for specific teacher
.get( function(req, res) {
    let Class = req.params.id ;
    let data = teacherData[Class];
    res.json({ data})
})

// updated data 

teacherRouter.route('/updated/:id') // this will route to the /teacher to get a timetable for specific teacher with updated timetable
.get( function(req, res) {
    let Class = req.params.id ;
    let data = teacherDataUpdated[Class];
    res.json({ data})
})

module.exports = teacherRouter ; // exports teacherRouter