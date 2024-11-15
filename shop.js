import { productos } from "./utils/products.js";

function selectRandomProducts(productos, cantidad = 6) {
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
    if (palabra?.trim() === "") return palabra

    const newString = palabra.slice(0, limit).trim() + "..."
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

let isUserScrolling = false;
const sliderContainer = document.getElementById("shop-offer__container");

function initSlider() {

    if (sliderContainer.dataset.interval) {
        clearInterval(sliderContainer.dataset.interval);
    }

    let currentPosition = 0;
    const gap = 16;
    const visibleCards = 1;

    const card = sliderContainer.querySelector('.card');
    const cardStyle = window.getComputedStyle(card);
    const cardWidth = card.offsetWidth + parseInt(cardStyle.marginRight);

    const totalCards = sliderContainer.children.length;
    const maxPosition = (totalCards - visibleCards) * (cardWidth + gap);

    const moveSlider = () => {
        if (isUserScrolling) return
        currentPosition += cardWidth + gap;

        if (currentPosition > maxPosition) {
            currentPosition = 0;
        }

        sliderContainer.scrollTo({ left: currentPosition, behavior: "smooth" });
    };

    const interval = setInterval(moveSlider, 2000);
    sliderContainer.dataset.interval = interval;
}



document.addEventListener("DOMContentLoaded", () => {
    const productosAleatorios = selectRandomProducts(productos)
    const offertsContainer = document.getElementById("shop-offer__container")
    const productsContainer = document.getElementById("shop__products")
    for (const producto of productosAleatorios) {
        const cardsTemplate = `
        <div class="card">
                <picture class="card__image">
                    <img src="./assets/${producto.imageUrl}" alt="card-product-image">
                </picture>
                <div class="card__information">
                    <p class="card__title">${recortarPalabras(producto.title)}</p>
                    <p class="card__price">${parseFloat(producto.price).toLocaleString("es-AR", { style: "currency", currency: "ARS" })}</p>
                </div>
        </div>
    `
        offertsContainer.insertAdjacentHTML("beforeend", cardsTemplate)

    }

    for (const producto of productos) {
        const cardsTemplate = `
        <div class="card shop">
                <picture class="card__image">
                    <img src="./assets/${producto.imageUrl}" alt="card-product-image">
                </picture>
                <div class="card__information">
                    <p class="card__title">${recortarPalabras(producto.title)}</p>
                    <p class="card__price">${parseFloat(producto.price).toLocaleString("es-AR", { style: "currency", currency: "ARS" })}</p>
                </div>
                <div class="card-btn__wrapper">
                        <button class="card-btn">Más detalles</button>
                    </div>
        </div>
    `
        productsContainer.insertAdjacentHTML("beforeend", cardsTemplate)
    }
    initSlider()


});

sliderContainer.addEventListener("scroll", () => {
    isUserScrolling = true
    clearTimeout(sliderContainer.scrollTimeout)
    sliderContainer.scrollTimeout = setTimeout(() => {
        isUserScrolling = false
    }, 1000);
})

window.addEventListener("resize", initSlider);


