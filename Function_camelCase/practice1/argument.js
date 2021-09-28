function increase() {
    let number = document.getElementById("before").value;
    number++;
    return document.getElementById("after").innerHTML = number;
}