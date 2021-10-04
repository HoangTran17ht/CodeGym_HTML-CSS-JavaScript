function CountStr() {
    let str = document.getElementById("input").value;
    var count = 0;
    for (let i = 0; i < str.length; i++) {
        if (IsVowels(str[i]) == true) {
            count++;
        }
    }
    returnResults(str, count);
}

function IsVowels(characters) {
    if (characters == "a" || characters == "o" || characters == "e" || characters == "u" || characters == "i") {
        return true;
    }
    return false;
}

function returnResults(str, count) {
    if (count == 0) {
        document.getElementById("output").innerText = `Không có ký tự nguyên âm nào trong chuỗi!`;
    } else {
        document.getElementById("output").innerText = `Có ${count} ký tự nguyên âm trong chuỗi!`;
    }
}