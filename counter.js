var createCounter = function(n) {
    
    return function() {
        return n++
    };
};
const counter1 = createCounter(10)
counter1()