const express = require('express');
const morgan = require('morgan');
const chalk = require('chalk');
const path = require('path');
const debug = require('debug')('app');
const app = express();

const port = process.env.PORT;

app.set('views','./src/views');
app.set('view engine',"ejs");

app.use(morgan());
app.use(express.static(path.join(__dirname+'/public/')));

app.use('/css', express.static(path.join(__dirname+'/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname+'/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname+'/node_modules/jquery/dist')));


app.get("/",function(req, res){
  // res.send("hello");
  //res.sendFile(__dirname + "/views/index.html");
 // res.sendFile(path.join(__dirname ,'views','index.html'));

 res.render('\index', { list:['one','two','three'],title: 'EJS' });
});

app.listen(port,function(){
//    console.log("listening on port "+ chalk.green('3000'));
  debug("listening on port "+ chalk.green(port))
});
