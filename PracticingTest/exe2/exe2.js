function searchIndex() {
    let arr = [4, 6, 5, 3, 7, 2];
    let x = Number(document.getElementById("input").value);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
            returnResults(x,i);
            return;
        }
    }
    returnResults(x, - 1);
}

function returnResults(x,index) {
    if (index == - 1) {
        document.getElementById("output").innerText = `Giá trị ${x} không tồn tại trong mảng!`;
    } else {
        document.getElementById("output").innerText = `Giá trị ${x} ở vị trí ${index} trong mảng!`;
    }
}