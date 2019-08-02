var express = require('express');
var morgan = require('morgan');
var chalk = require('chalk');
var path = require('path');

var app = express();


app.use(morgan());
app.use(express.static(path.join(__dirname+'/public/')));

app.use('/css', express.static(path.join(__dirname+'/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname+'/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname+'/node_modules/jquery/dist')));


app.get("/",function(req, res){
  // res.send("hello");
  //res.sendFile(__dirname + "/views/index.html");
  res.sendFile(path.join(__dirname ,'views','index.html'));
});

app.listen(3000,function(){
    console.log("listening on port "+ chalk.green('3000'));
})
