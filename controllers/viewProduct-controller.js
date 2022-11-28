import { productServices } from "../services/product-services.js";

const getProduct = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get('id');

    const name = document.querySelector('.viewProduct__tittle');
    const price = document.querySelector('.viewProduct__price');
    const description = document.querySelector('.viewProduct__description');
    const image = document.querySelector('.viewProduct__image');

    const dataProduct = await productServices.productView(id);
    name.innerHTML = dataProduct.name;
    price.innerHTML = '$' + dataProduct.price;
    description.innerHTML = dataProduct.description;
    image.src = dataProduct.image;
    document.title = `${dataProduct.name} - Alura Geek`;
}

getProduct()