
let http = require("http");

const PORT = 7000

function handleRequest(request, response){
    var url = request.url;
    response.end(`You are awesome!!`)
}

let server = http.createServer(handleRequest)

server.listen(PORT, function(){
    console.log(`The server is running on port ${PORT}`);
    
})