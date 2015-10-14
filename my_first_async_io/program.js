var fs= require ('fs');
var string;
var buf=fs.readFile(process.argv[2], function (err, data) {
  if (err) 
  {
  	throw err;
  }
  string=data.toString();
  lines();
});
function lines() {
	var res=string.split('\n').length-1;
	console.log(res);
}