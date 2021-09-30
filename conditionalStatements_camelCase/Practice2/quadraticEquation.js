let a2 = 4;
let b2 = 2;
let c2 = 5;

let result2 = calcQuadraticEquation(a2,b2,c2);
function calcQuadraticEquation(a2, b2, c2) {
    if (a2 == 0) {
        if (b2 == 0) {
            if (c2 == 0) {
                result = "Phương trình có vô số nghiệm!";
            } else {
                result = "Phương trình vô nghiệm!";

            }
        } else {
            result = -b2 / a2;
        }
    } else {
        let delta = b2 * b2 - 4 * a2 * c2;
        let x1 = (-b2 + Math.sqrt(delta)) / (2 * a2);
        let x2 = (-b2 - Math.sqrt(delta)) / (2 * a2);
        result = `Phương trình có 2 nghiệm: x1 = ${x1}, x2 = ${x2}`;
    }
    return result;
}