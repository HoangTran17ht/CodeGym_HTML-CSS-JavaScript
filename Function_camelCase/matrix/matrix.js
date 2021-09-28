function process() {
    let min = 10;
    let max = 90;
    let row = 5;
    let col = 6;
}

function reset() {
    
}


function generateMatrix(min,max,row,col) {
    let matrix = [];
    for (let i = 0; i < row; i++) {
        matrix[i] = [];
        for (let j = 0; j < col; j++) {
            matrix[i][j] = Math.floor(Math.random()* (max - min + 1) + min);
        }
    }
    return matrix;
}
    let matrix = generateMatrix(5,15,3,3);
function showMatrix(matrix) {
    let tableShowMatrix = `<table>`;
    for (let i = 0; i < matrix.length; i++) {
        tableShowMatrix += `<tr>`;
        for (let j = 0; j < matrix[i].length; j++) {
            tableShowMatrix += `<td> ${matrix[i][j]} </td>`;
        }
        tableShowMatrix += `</tr>`;
    }
    tableShowMatrix += `</table>`;
    return tableShowMatrix;
}

function showMatrixPrime(matrix) {
    let tableShowMatrixPrime = `<table>`;
    for (let i = 0; i < matrix.length; i++) {
        tableShowMatrixPrime += `<tr>`;
        for (let j = 0; j < matrix[i].length; j++) {
            tableShowMatrixPrime += `<td> ${isPrimeNumber(matrix[i][j]) ? matrix[i][j] : `-`} </td>`;
        }
        tableShowMatrixPrime += `</tr>`;
    }
    tableShowMatrixPrime += `</table>`;
    return tableShowMatrixPrime;
}

function isPrimeNumber(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true && number >= 2;
}
