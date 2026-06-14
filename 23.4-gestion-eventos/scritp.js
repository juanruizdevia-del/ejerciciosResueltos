
const add_product = document.querySelectorAll('.btn-agregar');

add_product.forEach((btn) => {
    btn.addEventListener('click', (evt) => {
        const name = evt.currentTarget.dataset.nombre;
        const price = parseFloat(evt.currentTarget.dataset.precio);
        console.log(`Nombre: ${name} | precio: ${price} han sido seleccionados.`);
        addToCard(name, price);
    })
});

/*

.createElement();
https://developer.mozilla.org/es/docs/Web/API/Document/createElement

*/

function addToCard(name, price) {
    // ul id = "lista-carrito"
    const newLi = document.createElement('li');
    const data = document.createTextNode(`Nombre: ${name} | precio: ${price} `);
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.className = 'btn btn-primary btn-sm btn-dark m-1'


    newLi.append(data,deleteBtn);
    document.getElementById('lista-carrito').prepend(newLi);
}