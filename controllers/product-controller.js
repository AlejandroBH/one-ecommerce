import { productServices } from "../services/product-services.js";

const createCard = (name, price, image, id) => {
    const card = document.createElement('ul');
    card.classList.add('card');
    const contentCard = `
    <li><img class="card__image" src="${image}" alt="Imagen ${name}"></li>
    <li class="card__name">${name}</li>
    <li class="card__price">$${price}</li>
    <li><a class="card__view" href="/screens/view_product.html?id=${id}">Ver Producto</a></li>
    `;
    card.innerHTML = contentCard;
    return card;
}

const product = document.querySelector('[data-products]');

productServices.listProducts().then((data) => {
    document.querySelector('[data-crudAjax]').style.display = 'block';
    data.forEach(({ name, price, image, id }) => {
        const newProduct = createCard(name, price, image, id);
        product.appendChild(newProduct);
    })
}).catch((error) => {
    document.querySelector('[data-crudAjax]').style.display = 'none';
    alert('Error de conexion con el servidor');
});