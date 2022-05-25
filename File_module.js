const file_module =  require('fs');

//var path = file_module.readdirSync('./logger');

file_module.readdir('./',function(err,op){
   if(err)console.log('Error is', err);
    else
   console.log('output is:', op);
});

//console.log(path);

