let a1 = 3;
let b1 = 4;
let result1 = "";
result1 = calcSquareEquation(a1,b1);
function calcSquareEquation(a, b) {
    if (a == 0) {
        if (b == 0) {
            result = "Phương trình có vô số nghiệm!";
        } else {
            result = "Phương trình vô nghiệm!";
        }
    } else {
        result = - b / a;
    }
    return result;
}
