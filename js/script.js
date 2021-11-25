function modifylbl() {
    valor = document.getElementById('priceRange');
    newValue = document.getElementById('lblRange')
    newValue.innerHTML = '$ 0 - $' + valor.value;

}