Backend deployment  : https://floating-ridge-60992.herokuapp.com/student/updated/6th
 
 this deployment is buggy and would give bad data .  So i would request for you all to use it in local machine for testing .

this is the backend for the timetable project 
the data here is given in the csv files which is the teachers timetable and we have to convert it into students time table .

the server is set up in a way which makes getting data easier for all

server setup on local server -> just clone the repo and use node index.js to start the server

the server should listen to http://localhost:8081/

get request on 

/student/'classNme' -> gives the time table for className
eg : /student/6th -> 6th class

get request on
/teacher/'teacher' -> gives the time table for teacher
eg : /teacher/hindi -> hindi teacher


 // for updated after removing teachers idle time
 
get request on
/student/updated/'classNme' -> gives the time table for className
eg : /student/6th -> 6th class

get request on
/teacher/updated/'teacher' -> gives the time table for teacher
eg : /teacher/hindi -> hindi teacher

get request on
/teacher/idleTeacher -> gives the no of idleTeachers remaining after updaing timetable

get request on 
/teacher/ExtraTeacher -> gives the no of extraTeacher remaining after updaing timetable

// this is new branch

