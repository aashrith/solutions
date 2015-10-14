var fs= require ('fs');
var path= require('path');
var file= process.argv[2];
var extn="."+ process.argv[3];
fs.readdir(file, function (err, list) {
  if (err) 
  {
  	throw err;
  }
 list.forEach(function(files){
    if(path.extname(files) === extn){
      console.log(files);
    }
  });
});
