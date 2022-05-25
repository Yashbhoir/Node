const EventModule = require("events");
var Emitter = new EventModule();
function log_print(log_para){
console.log(log_para);
}

Emitter.on("Alert Logged", function(Log_id)
{
        console.log("Take Action on", Log_id);
});


module.exports = log_print;