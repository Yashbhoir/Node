const os_module = require('os');

var arch_cpu = os_module.arch();
var free_mem = os_module.freemem();
// var cpu_details = os_module.cpus();
var pid_prior = os_module.getPriority();
var total_mem = os_module.totalmem();
console.log(arch_cpu,free_mem,pid_prior,total_mem);
console.log(cpu_details);