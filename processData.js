const csvToData = require('./csvToData')
const {hours , days, classes, temp} = require('./helper');

let dataT = {} ,dataS = {} , dataSU = {}, dataTU = {} ;
let totalClasses = 270 ; // nof days(6) * totalClassesDaily(9) * noOfTeachers(5)
let totalAttended = 0 ; // total classes given to updateTeachers
let updatedClasses = 0 ; // new classes given to teacher
let idleTeacher = 0 ; 
let ExtraTeacher = 0 ;

dataS['6th'] = JSON.parse(JSON.stringify(temp)) ;
dataS['7th'] = JSON.parse(JSON.stringify(temp)) ;
dataS['8th'] = JSON.parse(JSON.stringify(temp));
dataS['9th'] = JSON.parse(JSON.stringify(temp));
dataS['10th'] = JSON.parse(JSON.stringify(temp));



const studentData = ()=>{
    for(let teacher in dataT) {
        let teacherData = dataT[ teacher ];
        for(let hour in teacherData) {
            let hourData = teacherData[ hour ];
            for(let day in hourData) {
                if(day != '--'){
                    if(hourData[day] != ''){
                        let Class = hourData[day];
                        dataS[Class][hour][day]  = teacher ;
                        totalAttended++;
                    }
                }
            }
        }
    }
}

const updateTeachersData = ()=>{
   dataTU = JSON.parse(JSON.stringify(dataT));
   dataSU = JSON.parse(JSON.stringify(dataS));
  for(let teacher in dataTU) {
    let teacherData = dataTU[ teacher ];
    for(hour in teacherData) {
        let hourData = teacherData[ hour ];
        for(day in hourData) {
            if(day != '--'){
                if(hourData[day] == ''){
                  let flag = true ;
                    for(let classes in dataSU){
                      if(dataSU[classes][hour][day] == '' && flag){
                        dataSU[classes][hour][day] = teacher ;
                        dataTU[teacher][hour][day]  = classes ;
                        updatedClasses++ ;
                        flag = false ;
                        break;
                      }
                    }
                }
            }
        }
    }
  }
}

const findMinExtraTeacher = ()=>{
    for(let day of days){
        for(let hour in hours){
            let maxEmptyClasses = 0 ;
            for(let Class of classes){
              if(dataSU[Class][hour][day] == '')
              maxEmptyClasses++;
            }  
            ExtraTeacher = Math.max(maxEmptyClasses,ExtraTeacher);
        }
    }
}

    dataT["english"] = csvToData('Teacher wise class timetable - English.csv');
    dataT["science"] = csvToData('Teacher wise class timetable - Science.csv');
    dataT["maths"] = csvToData('Teacher wise class timetable - Maths.csv');
    dataT["kannada"] = csvToData('Teacher wise class timetable - Kannada.csv');
    dataT["hindi"] = csvToData('Teacher wise class timetable - Hindi.csv');
    
studentData();

updateTeachersData();

idleTeacher = totalClasses -totalAttended - updatedClasses;

if(idleTeacher > 0) {
    findMinExtraTeacher();
}

console.log(idleTeacher);
module.exports.teacherData = dataT;
module.exports.studentData = dataS;
module.exports.teacherDataUpdated = dataTU;
module.exports.studentDataUpdated = dataSU;
module.exports.idleTeacher = idleTeacher;
module.exports.ExtraTeacher = ExtraTeacher;


