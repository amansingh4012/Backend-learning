const fs= require('fs');

fs.readFile('index.txt','utf8', (err,data)=>{
    if(err){
        console.error("error file : ", err);
    }

    console.log("file content : ", data)

    const modifyData= data.toUpperCase();

    fs.writeFile('output.txt', modifyData, (err)=>{
        if(err){
            console.error(err);
            return;
        }

        console.log("output file is created");

        fs.readFile('output.txt','utf8', (err,data)=>{
            if(err){
                console.error("error file created : ",err);
            }
            console.log("output.txt content : ", data);
        })
    })
})