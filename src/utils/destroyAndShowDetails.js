import { recortarPalabras } from "./cutWords.js";
import { productos } from "./products.js";
const sliderContainer = document.querySelector(".slider");
const offertTitle = document.querySelector(".featured-products__h3")
const productsContainer = document.getElementById("shop__products");
const filterContainer = document.getElementById("filter-container")

const titleName = document.querySelectorAll("[titleMain]")
const welcomeTitle = document.querySelector("[welcomeTitle]")

const renderProductDetails = (selectedProduct) => {
    const productDetailContainer = document.getElementById("productDetail")
    productDetailContainer.style.display = "flex"

    welcomeTitle.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    console.log(selectedProduct)
    const template = `
        <div class="details__wrapper">
                <picture class="details__img">
                    <img src="./assets/${selectedProduct.imageUrl}" alt="">
                </picture>
                <div class="product__details">
                    <h1 class="details__title">${selectedProduct.title}</h1>
                    <h3 class="details__price">${parseFloat(selectedProduct.price).toLocaleString("es-AR",{style: "currency", currency: "ARS"})}</h3>
                    <div class="details__description">${selectedProduct.descripcion}</div>
                </div>
        </div>
    `
    productDetailContainer.innerHTML = template

}


export function dropContentDOM(productId) {
    //Limpieza del DOM para mostrar a detalles el producto en cuestion

    const selectedProduct = productos.find(product => product.id === Number(productId))

    sliderContainer.innerHTML = ""
    offertTitle.innerHTML = ""
    titleName.forEach(e => {
        e.innerHTML = ""
    })
    welcomeTitle.innerHTML = ""
    filterContainer.innerHTML = ""
    productsContainer.innerHTML = ""
    renderProductDetails(selectedProduct)
}

export function renderProducts(products, container) {
    container.innerHTML = "";
    for (const producto of products) {
        const cardsTemplate = `
        <div class="card shop">
            <picture class="card__image">
                <img src="./assets/${producto.imageUrl}" alt="card-product-image">
            </picture>
            <div class="card__information">
                <p class="card__title">${recortarPalabras(producto.title)}</p>
                <p class="card__price">${parseFloat(producto.price).toLocaleString("es-AR", { style: "currency", currency: "ARS" })}</p>
            </div>
            <footer class="card-footer">
                <div class="card-btn__wrapper">
                    <button class="card-btn" data-id="${producto.id}">Más detalles</button>                </div>
            </footer>
        </div>
        `;
        container.insertAdjacentHTML("beforeend", cardsTemplate);
    }

    const detailButtons = container.querySelectorAll(".card-btn");
    detailButtons.forEach(button => {
        button.addEventListener("click", () => {
            const productId = button.getAttribute("data-id");

            dropContentDOM(productId)
        });
    });
}