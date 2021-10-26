const express = require("express");
const studentRouter = express.Router();

const { studentData  , studentDataUpdated } = require('../processData');

studentRouter.route('/:id')
.get( function(req, res) {
    let Class = req.params.id ;
    let data = studentData[Class];
    res.json({ data})
})

studentRouter.route('/updated/:id')
.get( function(req, res) {
    let Class = req.params.id ;
    let data = studentDataUpdated[Class];
    res.json({ data})
})

module.exports = studentRouter ;

