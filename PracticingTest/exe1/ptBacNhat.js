
function calcSquareEquation() {
    let a = 5;
    let b = 8;
    var result = 0;
    if (a == 0) {
        if (b == 0) {
            result = "Phương trình có vô số nghiệm!";
        } else {
            result = "Phương trình vô nghiệm!";
        }
    } else {
        result = - b / a;
    }
document.getElementById("output").innerText = result;
}