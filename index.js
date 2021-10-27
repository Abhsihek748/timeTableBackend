const express = require("express");
const app = express();
const studentRouter = require('./Router/studentRouter'); // teacher router
const teacherRouter = require('./Router/teacherRouter'); // student router

app.use(express.json()); // to read req.body

app.use('/student',studentRouter);    // using app.use to link /student to studentRouter
app.use('/teacher', teacherRouter) ;  //using app.use to link /teacher to teacherRouter

app.listen(process.env.PORT||8081, function () { // listening port
    console.log("server started");
})
app.use(function (req, res) {     //default path
    // console.log("fullPath", fullPath);
    res.status(404).json({
        message: "page Not found"
    })
})