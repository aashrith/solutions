var fs= require ('fs');
var path= require('path');
module.exports = function(file, ext, callback){
fs.readdir(file, function (err, list) {
  if (err) 
  {

  	return callback(err);
  }
  var data=[];
 list.forEach(function(files){
    if(path.extname(files) === "."+ext){
      data.push(files);
    }
  });
return callback(null, data);
});
}