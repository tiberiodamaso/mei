const c1 = document.querySelector('#c1');
const c2 = document.querySelector('#c2');
let ct = document.querySelector('#ct');
const i1 = document.querySelector('#i1');
const i2 = document.querySelector('#i2');
let it = document.querySelector('#it');
const s1 = document.querySelector('#s1');
const s2 = document.querySelector('#s2');
let st = document.querySelector('#st');
let tt = document.querySelector('#tt');


c1.addEventListener('input', () => {
    let sum = 0;
    sum += +c1.value + +c2.value;
    ct.value = sum;
    updateTotal();
})

c2.addEventListener('input', () => {
    let sum = 0;
    sum += +c1.value + +c2.value;
    ct.value = sum;
    updateTotal();
})


i1.addEventListener('input', () => {
    let sum = 0;
    sum += +i1.value + +i2.value;
    it.value = sum;
    updateTotal();
})

i2.addEventListener('input', () => {
    let sum = 0;
    sum += +i1.value + +i2.value;
    it.value = sum;
    updateTotal();
})

s1.addEventListener('input', () => {
    let sum = 0;
    sum += +s1.value + +s2.value;
    st.value = sum;
    updateTotal();
})

s2.addEventListener('input', () => {
    let sum = 0;
    sum += +s1.value + +s2.value;
    st.value = sum;
    updateTotal();
})

function updateTotal() {

    let sumTotal = +ct.value + +it.value + +st.value;
    tt.value = sumTotal;
}

