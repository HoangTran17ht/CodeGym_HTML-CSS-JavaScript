function addProduct() {
    let productId = getLastestProductId() + 1;
    let productName = document.getElementById("product_name").value;
    let price = Number(document.getElementById("price").value);
    let quantity = Number(document.getElementById("quantity").value);
    let picture = document.getElementById("picture").value;

    let product = new Product(productId, productName, quantity, price, picture);
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
    document.getElementById("product_name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("picture").value = "";
}

var start = 1990;
var end = new Date().getFullYear();
var options = "";
for (var year = end; year >= start; year--) {
    options += `<option>  ${year} </option>`;
}
document.getElementById("year").innerHTML = options;

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