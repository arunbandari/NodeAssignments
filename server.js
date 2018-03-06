var express    = require('express');
var app		   = express();
var bodyParser = require('body-parser');
const request = require('request');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json({}));
app.get('/all',function(req,res){
	var data = "";
    console.log(req.query.name);
  	request('https://search.paytm.com/suggest?s='+req.query.name, { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    data = body.keywords;
    });
    setTimeout(function(){
    console.log(data);
    res.json(data);
},500);

});
app.use(function(req,res){
	res.sendFile(__dirname+'/index.html');
});
var PORT = process.env.PORT || 3000;
app.listen(PORT,function(){
	console.log('server is running on '+PORT);
});