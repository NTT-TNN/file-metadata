const express = require('express');
const multer = require('multer');

var app=express();

var port=process.env.PORT||3500;



var upload = multer({ dest: 'uploads/' });


app.get('/',function(req,res){
  res.sendFile(__dirname+"/index.html");
})

app.post('/api',upload.single('user'),function(req,res){
  console.log(req.file);
  res.send("Size of file "+req.file.originalname+" la: "+req.file.size.toString()+" byte");
})

app.listen(port,function(){
  console.log("App running at port "+port);
})
