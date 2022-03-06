var a = require("../module-a/index");

module.exports = function(){
    a();
    console.log("call b");
};