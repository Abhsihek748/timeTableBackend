const fs = require('fs');

const csvToData =  (csv)=>{
    let data = fs.readFileSync(csv);
    csv=data.toString();
    let lines=csv.split("\r\n");
    
    let result = [];
    
    let headers=lines[0].split(",");
    
    for(let i=1;i<lines.length;i++){
    
        let obj = {};
        let currentline=lines[i].split(",");
    
        for(let j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
        }
    
        result.push(obj);
    
    }
    return result ;
    }

    module.exports = csvToData ;