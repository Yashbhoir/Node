const log_module = require('./logger.js')
const EventModule = require("events");
var Emitter = new EventModule();

log_module("Message Logged though logger");

Emitter.emit("Alert Logged", {id : 1, url :"yrf"})
