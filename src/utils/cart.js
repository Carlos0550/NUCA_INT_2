import { productos } from "./products.js";

export const updateCart = (productId, options, quantity) => {
    const addedProduct = productos.find(producto => producto.id === parseInt(productId))

    const cart = JSON.parse(localStorage.getItem("cart")) || []
    
    const existingProductIndex = cart.findIndex(item => item.productId === parseInt(productId))
    const productToAdd = {
        productId: addedProduct.id,
        title: addedProduct.title,
        price: addedProduct.price,
        options, 
        quantity 
    };

    if (existingProductIndex !== -1) {
        console.log("aqui")
        cart[existingProductIndex].quantity =quantity;
        cart[existingProductIndex].options = { ...cart[existingProductIndex].options, options };
    } else {
        console.log("Push")
        cart.push(productToAdd);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    console.log("Carrito actualizado: ", cart);
};

document.addEventListener("DOMContentLoaded", ()=>{
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggle-btn');
    const carritoLink = document.getElementById('carrito-link');
    const cartContainer = document.getElementById("cart-content")

    const savedCart = JSON.parse(localStorage.getItem("cart"))
    console.log(savedCart)

    carritoLink.addEventListener('click', (e) => {
        e.preventDefault();
        sidebar.classList.toggle('active');
    });

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });
})
