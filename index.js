const express = require("express");
const app = express();
const studentRouter = require('./Router/studentRouter');
const teacherRouter = require('./Router/teacherRouter');

app.use(express.json());

app.use('/student',studentRouter);
app.use('/teacher', teacherRouter) ;

app.listen(process.env.PORT||8081, function () {
    console.log("server started");
})
app.use(function (req, res) {
    // console.log("fullPath", fullPath);
    res.status(404).json({
        message: "page Not found"
    })
})