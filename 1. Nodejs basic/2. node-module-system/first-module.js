function Add(a, b) {
    return a + b;
}

function Subtract(a, b) {
    return a - b;
}

function Division(a, b) {
    if (b == 0) {throw new Error("Division by zero is not allowed.");
        return;
    }
    else return a / b;
}

// Named exports instead of default export
export { Add, Subtract, Division };
