import { navbar } from "../../navbar.js";
import { coloresProductos } from "./coloresProductos.js";
import { productos } from "./products.js";
import { sabores } from "./sabores.js";
import { tallas } from "./tallas.js";
import { tamanios } from "./tamanios.js";

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
        cart[existingProductIndex].quantity = quantity;
        cart[existingProductIndex].options = { ...cart[existingProductIndex].options, options };
    } else {
        console.log("Push")
        cart.push(productToAdd);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    renderCartItems()
};

export function renderCartItems(cartItemsArray = []) {
    console.log("Ejecutando renderCartItems")
    if (!cartItemsArray) {
        cartItemsArray = [];
    }

    let cartItems = []
    if (cartItemsArray.length === 0) {
        try {
            cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
        } catch (error) {
            console.log(error)
        }
    } else {
        cartItems = cartItemsArray
    }

    const dinamicContentContainer = document.getElementById("dynamic-content");
    if (!Array.isArray(cartItems) || cartItems.length === 0) {
        const box = document.createElement("div")
        box.id = "cart-content"
        box.innerText = "Aún no hay elementos en el carrito"
        box.style.backgroundColor = "#ffffff"
        dinamicContentContainer.innerHTML = ""
        dinamicContentContainer.append(box)
        console.warn("No hay elementos en el carrito o la entrada no es válida.");
        return;
    }


    if (!dinamicContentContainer) {
        console.error("El elemento con id 'sidebar' no se encuentra en el DOM.");
        return;
    }

    const boxText = document.getElementById("cart-content")
    if (boxText) boxText.remove()
    dinamicContentContainer.innerHTML = "";

    const template = cartItems.map((prod) => {
        const selectedProduct = productos.find(product => product.id === parseInt(prod.productId))
        const selectedColor = coloresProductos.find(color => color.id === parseInt(prod.options?.colores))?.name
        const selectedSabor = sabores.find(sabor => sabor.id === parseInt(prod.options?.sabores))?.name
        const selectedTamanio = tamanios.find(tamanio => tamanio.id === parseInt(prod.options?.tamanios))?.name
        const selectedTalle = tallas.find(talla => talla.id === parseInt(prod.options?.tallas))?.name
        return `
    <div id="cart-content">
        <div class="cart-item">
            <picture class="product-img">

                <img src="${selectedProduct?.imageUrl || 'https://via.placeholder.com/100'}" alt="Producto">
            </picture>
            <div class="product-body">
                <p class="product-title">${prod.title || 'Producto sin título'}</p>
                <p class="product_p">${parseFloat(prod.price).toLocaleString("es-AR", { style: "currency", "currency": "ARS" }) || '0.00'}</p>
                <p class="product_p">Cantidad: ${prod.quantity}</p>
                <p class="product_p">Total: ${parseFloat(prod.price * prod.quantity).toLocaleString("es-AR", { style: "currency", "currency": "ARS" })}</p>
                <div class="buttons-box">
                    <button class="btn-add" target_id="${prod.productId}"><img src="./assets/Iconos/plus.svg" alt="Aumentar"></button>
                    <button class="btn-remove" target_id="${prod.productId}"><img src="./assets/Iconos/minus.svg" alt="Disminuir"></button>
                </div>
                <div class="product-options">
                    <p>Color: ${selectedColor || 'N/A'}</p>
                    <p>Talle: ${selectedTalle || 'N/A'}</p>
                    <p>Tamaño: ${selectedTamanio || 'N/A'}</p>
                    <p>Sabor: ${selectedSabor || 'N/A'}</p>
                </div>
            </div>
        </div>
    </div>
`
    }).join("");

    dinamicContentContainer.insertAdjacentHTML("beforeend", template);
    const minusBtn = document.querySelectorAll(".btn-remove")
    const addBtn = document.querySelectorAll(".btn-add")
    minusBtn.forEach(element => {
        element.addEventListener("click", (e) => {
            const productId = parseInt(element.getAttribute("target_id"));
            let cartItems = [];

            try {
                cartItems = JSON.parse(localStorage.getItem("cart")) || [];
            } catch (error) {
                console.log("Error al leer el carrito: ", error);
            }

            const selectedProduct = cartItems.find(cartItem => cartItem.productId === productId);

            if (selectedProduct) {
                if (selectedProduct.quantity === 1) {
                    cartItems = cartItems.filter(cartItem => cartItem.productId !== productId);
                } else {
                    selectedProduct.quantity -= 1;
                }
                localStorage.setItem("cart", JSON.stringify(cartItems));
                renderCartItems(cartItems)
            }
        });
    });

    addBtn.forEach(element => {
        element.addEventListener("click", (e) => {
            const productId = parseInt(element.getAttribute("target_id"));
            let cartItems = [];

            try {
                cartItems = JSON.parse(localStorage.getItem("cart")) || [];
            } catch (error) {
                console.log("Error al leer el carrito: ", error);
            }

            const selectedProduct = cartItems.find(cartItem => cartItem.productId === productId);

            if (selectedProduct) {
                selectedProduct.quantity += 1;
                localStorage.setItem("cart", JSON.stringify(cartItems));
                renderCartItems(cartItems)
            }
        });
    });
}

export function openSidebar() {
    console.log("Se ejecuta el opeen sidebar")
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggle-btn');
    const carritoLink = document.getElementById('carrito-link');

    carritoLink.addEventListener('click', (e) => {
        e.preventDefault();
        sidebar.classList.toggle('active');
    });

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });
}

document.addEventListener("DOMContentLoaded", () => {
    navbar()
    openSidebar();
    console.log("Se ejecuta desde cart.js")
    let savedCart = [];
    try {
        savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    } catch (error) {
        console.log(error);
    }
    renderCartItems(savedCart);
});


