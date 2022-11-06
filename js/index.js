const v1 = document.querySelector('#v1');
const v2 = document.querySelector('#v2');
let total = document.querySelector('#total');

v1.addEventListener('input', (event) => {
    let sum = 0;
    sum += +v1.value + +v2.value;
    total.value = sum;
})

v2.addEventListener('input', (event) => {
    let sum = 0;
    sum += +v1.value + +v2.value;
    total.value = sum;
})