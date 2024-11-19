import { productos } from "./utils/products.js";
import { addFilters } from "./utils/generateFilters.js";
import { selectRandomProducts } from "./utils/randomOffers.js";
import { initSlider } from "./utils/slider.js";
import { renderProducts } from "./utils/destroyAndShowDetails.js";

document.addEventListener("DOMContentLoaded", () => {
    const productosAleatorios = selectRandomProducts(productos);
    const offertsContainer = document.getElementById("shop-offer__container");
    const productsContainer = document.getElementById("shop__products");
    const filterContainer = document.getElementById("filter-container");
    const productDetail = document.getElementById("productDetail")
    productDetail.style.display = "none"
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
