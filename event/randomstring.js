module.exports = function (max = 10) {
    var data = [];
    var original = "01234567890abcdefghijklmnopqrstuwxzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var length = original.length;
    for(var i = 0; i < max; i ++){
        data[i] = original[Math.floor(Math.random() * length)];
    }
    return data.join("");
};