// takes a callback function as an argument
function receivesAFunction(callbackFunction) {
    callbackFunction();
}

// takes no arguments and returns a named function
function returnsANamedFunction() {
    return function myFunction() {
        9+9
    };
}

// takes no arguments and returns an anonymous function
function returnsAnAnonymousFunction () {
    return function() {
        "This is an anonymous function"
    }
}