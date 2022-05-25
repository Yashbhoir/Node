const EventModule = require('events');
const trigger = new EventModule();// As event is a class we need to create a object of it

trigger.addListener("Server down",function(){ // add and register a listner to listen to alert to 
    console.log("Alert Server is down");
})


trigger.emit("Server down"); // make a trigger which will cause alert

 