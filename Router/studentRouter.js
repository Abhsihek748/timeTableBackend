const express = require("express");
const studentRouter = express.Router();

const { studentData  , studentDataUpdated } = require('../processData'); // get data from processdata file

studentRouter.route('/:id') // this will route to the /student to get a timetable for specific student
.get( function(req, res) {
    let Class = req.params.id ;
    let data = studentData[Class];
    res.json({ data})
})

// get updated data
studentRouter.route('/updated/:id') // this will route to the /student to get a timetable for specific student with updated timetable
.get( function(req, res) {
    let Class = req.params.id ;
    let data = studentDataUpdated[Class];
    res.json({ data})
})

module.exports = studentRouter ; // export studentRouter

