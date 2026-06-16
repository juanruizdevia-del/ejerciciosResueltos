
let cantidadItems = 0;
let totalGeneral = 0.0;

const addProduct = document.querySelectorAll('.btn-agregar');

addProduct.forEach((btn) => {
    btn.addEventListener('click', (evt) => {
        const name = evt.currentTarget.dataset.nombre;
        const price = parseFloat(evt.currentTarget.dataset.precio);
        console.log(`Nombre: ${name} | precio: ${price} han sido seleccionados.`);
        cantidadItems++;
        totalGeneral += price;
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
    deleteBtn.textContent = 'X';

    deleteBtn.className = 'btn-delete btn-primary btn-sm btn-dark m-1'
    newLi.append(data, deleteBtn);
    document.getElementById('lista-carrito').appendChild(newLi);
    
    updateBadge();
    updateTotal();

    deleteBtn.addEventListener('click', () => {
        document.getElementById('lista-carrito').removeChild(newLi);
        console.log(`${name} ha sido eliminado de la lista.`);
        cantidadItems--;
        totalGeneral -= price;
        updateBadge();
        updateTotal();
    });
}


function updateBadge() {
    const badge = document.getElementById('badge');
    badge.textContent = cantidadItems;
}

function updateTotal() {
    const total = document.getElementById('total');
    total.textContent = totalGeneral;
}

const deleteCart = document.getElementById('btn-delete-cart');

deleteCart.addEventListener('click',()=>{
    document.getElementById('lista-carrito').innerHTML = '';
    cantidadItems = 0;
    updateBadge();
    totalGeneral = 0.0;
    updateTotal();
});