const repeatString = function(word, time) {
    text = ''
    if (time < 0) {
        return "ERROR"
    } 
    else { 
    for (let i = 0; i < time; i++) {
        text+=word;
        }
    }
        return text 

};



// Do not edit below this line
module.exports = repeatString;
