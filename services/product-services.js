const url = 'http://localhost:3000/product';

const listProducts = () => {
    return fetch(url).then(response => response.json());
}

const productView = (id) => {
    return fetch(`${url}/${id}`).then(response => response.json());
}

export const productServices = {
    listProducts,
    productView
}