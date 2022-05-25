console.log(module,exports,require);// these 5 are the arguments which automatically passed by wrapper function whenever a variable or function is created
console.log(__filename,__dirname,)// module is library export is reference to that library and require is function use to call module



const path_module = require('path');//how to use path module

var parsed = path_module.parse(__filename);

console.log(parsed);
