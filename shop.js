import { productos } from "./utils/products.js";
import { addFilters } from "./utils/generateFilters.js";
import { recortarPalabras } from "./utils/cutWords.js";
import { selectRandomProducts } from "./utils/randomOffers.js";
import { initSlider } from "./utils/slider.js";

function renderProducts(products, container) {
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
                    <button class="card-btn">Más detalles</button>
                </div>
            </footer>
        </div>
        `;
        container.insertAdjacentHTML("beforeend", cardsTemplate);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const productosAleatorios = selectRandomProducts(productos);
    const offertsContainer = document.getElementById("shop-offer__container");
    const productsContainer = document.getElementById("shop__products");
    const filterContainer = document.getElementById("filter-container");

    filterContainer.innerHTML = addFilters();

    const inputSearch = document.getElementById("filter__search");
    const categoryFilter = document.getElementById("filter__options");

    renderProducts(productos, productsContainer);
    renderProducts(productosAleatorios, offertsContainer);

    inputSearch.addEventListener("input", applyFilters);
    categoryFilter.addEventListener("change", applyFilters);

    function applyFilters() {
        const searchQuery = inputSearch.value.toLowerCase();
        const selectedCategory = categoryFilter.value ;
        console.log("selectedCategory: ", selectedCategory)

        const filteredProducts = productos.filter((product) => {
            const matchesCategory = selectedCategory && selectedCategory !== "todos"
                ? product.idCategoria === parseInt(selectedCategory)
                : true;
    
            const matchesSearch = searchQuery
                ? product.title.toLowerCase().includes(searchQuery)
                : true;
    
            return matchesCategory && matchesSearch;
        });

        renderProducts(filteredProducts, productsContainer);
    }

    initSlider();
});

window.addEventListener("resize", initSlider);
