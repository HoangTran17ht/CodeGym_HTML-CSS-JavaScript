function isNumericCharacter(text) {
    return text * 0 == 0? true : false ;
}

function checkNumberCharacter() {
    let text = Number(document.getElementById("exe4").value);
    document.getElementById("resultExe4").innerHTML = isNumericCharacter(text);
}