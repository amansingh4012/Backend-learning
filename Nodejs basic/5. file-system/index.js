const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data")


if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log("data folder is created ");
}

// sync way of creating the file;

const filepath = path.join(dataFolder, 'example.txt')

fs.writeFileSync(filepath, 'hello from node js ')
console.log('file is created ')

const readFileContent = fs.readFileSync(filepath, "utf8")
console.log("content : ", readFileContent);

fs.appendFileSync(filepath, "\n this is new line added to that folder ");
console.log("new line added ");

// async way to create a file 

const asyncFilePath = path.join(dataFolder, 'async-file.txt');
fs.writeFile(asyncFilePath, 'hello, async node js', (err)=> {
    if(err) throw err;
    console.log("Async file created successfully ");

    fs.readFile(asyncFilePath, 'utf8', (err, data)=> {
        if(err) throw err;
        console.log("asyn file content ", data)

        fs.appendFile(asyncFilePath, "\n New line added to async file ", (err)=>{
            if(err) throw err;
            console.log('new line added');

            fs.readFile(asyncFilePath,'utf8', (err, data)=> {
                if(err) throw err;
                console.log('async file full content : ', data)
            } )
        })
    })
})

 