
// call back fn
const fs = require('fs');


function person(name, callbackfn){
    console.log(name);
    callbackfn();
}

function address(){
    console.log("india");

}

person("Aman kr Singh", address);

fs.readFile('index.txt', 'utf8', (err,data)=> {
    if(err){
        console.error("Error reading file ", err)
    }
    console.log(data);
})