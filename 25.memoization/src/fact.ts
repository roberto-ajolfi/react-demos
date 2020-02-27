// Factorial code

export function factorialR(num : number){
    return num === 0 ? 1 : (num * factorial(num - 1));
}

export function factorial(num : number) {
    let total = 1; 
    for (var i = 1; i <= num; ++i) {
        total = total * i; 
    }
    return total; 
}