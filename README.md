this is the backend for the timetable project 
the data here is given in the csv files which is the teachers timetable and we have to convert it into students time table .

the server is set up in a way which makes gettind data easier for all 

get request on
/student/'classNme' -> gives the time table for classNamw
eg : /student/6th -> 6th class

get request on
/student/'teacher' -> gives the time table for teacher
eg : /student/hindi -> hindi teacher


 // for updated after removing teachers idle time
 
get request on
/student/updated/'classNme' -> gives the time table for classNamw
eg : /student/6th -> 6th class

get request on
/teacher/updated/'teacher' -> gives the time table for teacher
eg : /student/hindi -> hindi teacher


/teacher/idleTeacher -> gives the no of idleTeachers remaining after updaing timetable


/teacher/ExtraTeacher -> gives the no of extraTeacher remaining after updaing timetable

