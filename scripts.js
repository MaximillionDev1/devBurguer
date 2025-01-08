

const list = document.querySelector('ul');
const buttonShow = document.querySelector('.show-all');
const buttonDiscount = document.querySelector('.discount');
const buttonTotalPrice = document.querySelector('.item-price');
const buttonFilterVegan = document.querySelector('.toVegan');


function renderProducts(products) {
    const productHTML = products.map(product => `
        <li>
            <img src="${product.src}" alt="${product.name}">
            <p>${product.name}</p>
            <p class="item-price">R$ ${product.price.toFixed(2)}</p>
        </li>
    `).join('');
    list.innerHTML = productHTML;
}

function showAllProducts() {
    renderProducts(menuOptions);
}


function applyDiscount() {
    const discountedProducts = menuOptions.map(product => ({
        ...product,
        price: product.price * 0.9 
    }));
    renderProducts(discountedProducts);
}


function calculateTotalPrice() {
    const totalPrice = menuOptions.reduce((acc, product) => acc + product.price, 0);
    list.innerHTML = `
        <li>
            <p>O valor total dos itens é R$ ${totalPrice.toFixed(2)}</p>
        </li>
    `;
}


function filterVeganProducts() {
    const veganProducts = menuOptions.filter(product => product.vegan);
    renderProducts(veganProducts);
}


buttonShow.addEventListener('click', showAllProducts);
buttonDiscount.addEventListener('click', applyDiscount);
buttonTotalPrice.addEventListener('click', calculateTotalPrice);
buttonFilterVegan.addEventListener('click', filterVeganProducts);
