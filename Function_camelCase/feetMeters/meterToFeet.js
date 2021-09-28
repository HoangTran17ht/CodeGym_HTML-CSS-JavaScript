function meterToFeet() {
    let meterIn = document.getElementById("meterIn").value;
    feetOut = 3.279 * meterIn;
    document.getElementById("feetOut").innerHTML = feetOut;
}