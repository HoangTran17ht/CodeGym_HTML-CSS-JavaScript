function addProduct() {
    let productId = getLastestProductId() + 1;
    let motorcycleLine = document.getElementById("motorcycleLine").value;
    let color = document.getElementById("color").value;
    let year = document.getElementById("year").value;
    let kmTraveled = document.getElementById("km").value;
    let price = Number(document.getElementById("price").value);
    let address = document.getElementById("address").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let sellerName = document.getElementById("sellerName").value;
    let details = document.getElementById("details").value;
    let picture = document.getElementById("picture").value;

    let product = new Product(productId, motorcycleLine, year, color, kmTraveled, price, details, picture, phoneNumber, sellerName, address);
        products.push(product);
        saveStoreRoom("motorcycleMarket", products);
        showProduct();
    reset();

}
function getLastestProductId() {
    let prods = [...products];
    return prods.sort(function (prod1, prod2) {
        return prod2.productId - prod1.productId;
    })[0].productId;

}

function reset() {
    document.getElementById("motorcycleLine").value = selected;
    document.getElementById("color").value = "";
    document.getElementById("year").value = "";
    document.getElementById("km").value = "";
    document.getElementById("price").value = "";
    document.getElementById("address").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("sellerName").value = "";
    document.getElementById("details").value = "";
    document.getElementById("picture").value = "";
}

var start = 1990;
var end = new Date().getFullYear();
var optionsYears = "";
for (var year = end; year >= start; year--) {
    options += `<option>  ${year} </option>`;
}
document.getElementById("year").innerHTML = optionsYears;

// function saveProduct(index) {
//     let new_productName = document.getElementById(`pn_${index}`).value;
//     let newIndex = isNotExistProduct(new_productName);
//     if (newIndex == -1 || newIndex == index) {
//         products[index] = new_productName;
//         showProduct();
//         saveStoreRoom("motorcycleMarket", products);
//         resetProduct(index);
//     } else {
//         alert(`${new_productName} is existing.`);
//     }
// }