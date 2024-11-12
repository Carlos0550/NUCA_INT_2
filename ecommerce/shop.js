import { productos } from "./utils/products.js";

function selectRandomProducts(productos, cantidad = 4) {
    const seleccionados = new Set()

    const limite = Math.min(cantidad, productos.length)
    console.log("Limite: ", limite)

    while (seleccionados.size < limite) {
        const indiceAleatorio = Math.floor(Math.random() * productos.length)
        seleccionados.add(productos[indiceAleatorio])
    }

    return Array.from(seleccionados)
}

const recortarPalabras = (palabra, limit = 30) => {
    if(palabra?.trim() === "") return palabra

    const newString = palabra.slice(0,limit).trim() + "..."
    return newString
}

const categorias = [
    {
        id: 1,
        name: "Prendas",
    },
    {
        id: 2,
        name: "Suplementos"
    },
    {
        id: 3,
        name: "Gadgets"
    }
]

document.addEventListener("DOMContentLoaded", () => {
    const productosAleatorios = selectRandomProducts(productos)
    const productsContainer = document.getElementById("shop-products__container")

    for (const producto of productosAleatorios) {
        console.log(producto.imageUrl)
        const cardsTemplate = `
        <div class="card">
                <picture class="card__image">
                    <img src="./assets/${producto.imageUrl}" alt="card-product-image">
                </picture>
                <div class="card__information">
                    <p class="card__title">${recortarPalabras(producto.title)}</p>
                    <p class="card__price">${parseFloat(producto.price).toLocaleString("es-AR",{style:"currency", currency: "ARS"})}</p>
                </div>
        </div>
    `
        productsContainer.insertAdjacentHTML("beforeend", cardsTemplate)
    }
});
