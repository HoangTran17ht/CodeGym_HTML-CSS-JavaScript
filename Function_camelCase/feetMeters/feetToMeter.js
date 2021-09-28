function feetToMeter() {
    let feetIn = document.getElementById("feetIn").value;
    meterOut = 0.305 * feetIn;
    document.getElementById("meterOut").innerHTML = meterOut;
}