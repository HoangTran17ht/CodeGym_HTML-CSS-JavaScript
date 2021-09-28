let allProduct = [];
display(allProduct);

// Hàm hiển thị All Product.
function display() {
    let tableDisplay = "";
    for (let i = 0; i < allProduct.length; i++) {
        tableDisplay += "<tr>";

        tableDisplay += `<td> ${allProduct[i]} </td>`;
        tableDisplay += `<td><input type="button" id="edit${i}" value="Edit" onclick="editNameProduct(${i})" style="background-color: rgb(52, 182, 102);"></td>`;
        tableDisplay += `<td><input type="button" id="delete${i}" value="Delete" onclick="deleteProduct(${i})"  style="background-color: rgb(52, 182, 102);"></td>`;

        tableDisplay += "</tr>";
    }
    document.getElementById("tableDisplay").innerHTML = tableDisplay;
    return;
}

// Hàm add new product.
function addNewProduct() {
    let newProduct = document.getElementById("newProduct").value;
    // for (let element in allProduct) {
    //     if (allProduct[element] == newProduct) {
    //         return alert(`Lỗi! Trùng tên sản phẩm`);
    //     }
    // }
    if (exist(newProduct))
        return alert(`Lỗi! Trùng tên sản phẩm`);
    allProduct.push(`${newProduct}`);
    display();
    alert(`Đã thêm sản phẩm "${newProduct}" !`);

}

function deleteProduct(i) {

    var proceed = confirm("Bạn chắc chưa?");
    if (proceed) {
        del(i);
        display();
    }
}
// Kiểm tra trùng lặp sản phẩm
function exist(productName) {
    for (let element in allProduct) {
        if (element == productName)
            return true;
    }
    return false;
}

// Hàm edit name product.
function editNameProduct(i) {
    let productEdit = prompt("New name product: ");
    allProduct[i] = productEdit;
    display(allProduct);
    alert("Đổi tên sản phẩm thành công!");
}

// Hàm delete product
function del(i) {
    allProduct.splice(i, 1);
}