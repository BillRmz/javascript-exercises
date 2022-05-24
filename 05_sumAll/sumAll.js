const sumAll = function() {
    if (typeof a !== "number" || typeof b !== "number"){
        return "ERROR";

    }else if(a < 0 || b < 0 ) {
        return "ERROR";
    }
    else { 
        let max = Math.max(a,b)
        let min = Math.min(a,b)
        let reg = 0;
         for (let i = min; i <= max; i++){
            reg += i;         
        }
        
        return reg }
};

// Do not edit below this line
module.exports = sumAll;
