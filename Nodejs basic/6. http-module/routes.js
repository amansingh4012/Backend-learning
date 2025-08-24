const http = require('http')

const server = http.createServer((req, res)=> {
    const url = req.url;
    if(url === '/'){
        res.writeHead(200, {"Content-type": "text/plain"})
        res.end("Home page")
    }
    else if(url === '/projects'){
        res.writeHead(200, {"Content-type": "text/plain"})
        res.end("projects")
    }
    else{
        res.writeHead(404, {"Content-type": "text/plain"})
        res.end("page can not be found ")
    }

})

const port = 3000;

server.listen(port, ()=>{
   console.log(`server is now listening the request to port ${port}`)
})