import { productos } from "./products.js";

export let cartInfo = {
    products: []
};

export const updateCart = (productId, options, quantity) => {
    const addedProduct = productos.find(producto => producto.id === parseInt(productId))

    console.log("Producto añadido: ", addedProduct)
    console.log("Opciones de compra: ", options)
    console.log("Cantidad: ", quantity)

    const existingProductIndex = cartInfo.products.findIndex(
        (product) => product.productId === productId
    );

    if (existingProductIndex !== -1) {

        cartInfo.products[existingProductIndex] = {
            ...cartInfo.products[existingProductIndex],
            productOptions: options,
        };
    } else {

        cartInfo.products.push({
            productId,
            productOptions: options,
        });
    }

    return cartInfo; 
};
