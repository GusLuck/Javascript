const http = require("http"); 
//create a server object: 
http 
.createServer(function (req, res) { 
res.write("<h1>Docker Nodejs</h1>");
res.write("TechBox");
//write a response to the client 
res.end();  
 //end the response 
}) 
.listen(8000);  
//Server runs on localhost:8080 