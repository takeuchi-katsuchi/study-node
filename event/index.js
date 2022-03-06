var CustomReader = require("./customreader.js");
var CustomWriter = require("./customwriter.js");

var reader = new CustomReader();
var writer = new CustomWriter();
reader.pipe(writer);
reader.resume();