var {fork} = require("child_process");
var path = require("path");

var child = fork(path.join(__dirname, "child"), {execArgv:[]});
child.send({hello: "messa"});
child.on("close", (code) => {
    console.log(`Child process exited with code ${code}`);
})