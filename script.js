const add = function(a,b) {
	return a+b;
};

const subtract = function(a, b) {
	return a - b;
};

const multiply = function(a,b) {
	return a*b;
};

const divide = function(a,b) {
	if(b == 0){
        return "Error.";
    }else{
    return a/b;
    }
};

function operate(a,b,o){
    if (o == '+'){
        add(a,b);
    }
    else if(o =="-"){
        subtract(a,b);
    }
    else if(o == "*"){
        multiply(a,b);

    }else if(o =="/"){
        divide(a,b);
    }else{
        return "invalid";
    }
}