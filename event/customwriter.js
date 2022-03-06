const {Writable} = require("stream");

var CustomWriter = class extends Writable {
  constructor(options){
    super(options || {decodeString: true});
  }

  _write(chunk, encoding, done) {
    var text;
    if (encoding=="buffer") {
        text = chunk.toString(this._writableState.defaultEncoding);
    } else {
        text = chunk;
    }
    try{
    console.log(text);
    } catch(error){
      done(error);
      return;
    }
    done();
  }
};

module.exports = CustomWriter;