function calculateTheCircle() {
    let radius = Number(document.getElementById("exe2").value);
    let Pi = 3.14;
    let circumference = calculateTheCircumference(radius, Pi);
    let area = calculateArea(radius, Pi);

    document.getElementById("circumference").innerHTML = circumference;
    document.getElementById("area").innerHTML = area;
}
// Hàm tính chu vi hình tròn
function calculateTheCircumference(radius, Pi) {
    return radius * radius * Pi;
}
// Hàm tính diện tích hình tròn
function calculateArea(radius, Pi) {
    return radius * Pi * 2;
}