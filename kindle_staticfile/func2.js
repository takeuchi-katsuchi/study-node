var Hoge = function(){}

Hoge.prototype.add = function(val1, val2) {
    return val1 + val2;
}

Hoge.prototype.sub = function(val1, val2) {
    return val1 - val2;
}

var hoge = new Hoge();
module.exports = hoge;