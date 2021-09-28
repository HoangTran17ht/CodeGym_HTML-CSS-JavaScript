function calculateFactorial() {
    let number = Number(document.getElementById("exe3").value);
    document.getElementById("resultExe3").innerHTML = factorial(number);
}

function factorial(number) {
    if (number == 2) {
        return 2;
    }
    return number * factorial(number - 1);
}