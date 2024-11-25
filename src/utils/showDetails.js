import { productos } from "./products.js";
import { sabores as saboresProductos } from "./sabores.js";
import { tamanios as tamanioProductos } from "./tamanios.js";
import { coloresProductos as coloresPr } from "./coloresProductos.js";
import { tallas as tallasProductos } from "./tallas.js";
import { capitaliceStrings } from "./capitaliceStrings.js";
import { updateCart } from "./cart.js";
const selectedOptions = {
    tamanios: null,
    tallas: null,
    colores: null,
    sabores: null
};

let selectedQuantity = 1;

let total = 0;

const urlParams = new URLSearchParams(location.search);
const productId = urlParams.get("productId");

const searchValue = (key, value) => {
    console.log(key)
    switch (key) {
        case "colores":
            return `<p class="summary_p"><strong>Color: </strong>${capitaliceStrings(coloresPr.find(color => color.id === parseInt(value))?.name)}</p>`
        case "tamanios":
            return `<p class="summary_p"><strong>Tamaño: </strong>${capitaliceStrings(tamanioProductos.find(tamanio => tamanio.id === parseInt(value))?.name)}</p>`
        case "sabores":
            return `<p class="summary_p"><strong>Sabor: </strong>${capitaliceStrings(saboresProductos.find(sabor => sabor.id === parseInt(value))?.name)}</p>`
        case "tallas":
            return `<p class="summary_p"><strong>Talle: </strong>${capitaliceStrings(tallasProductos.find(talla => talla.id === parseInt(value))?.name)}</p>`
        default:
            return `<p class="summary_p"><strong>${key}:</strong> ${value}</p>`
    }
}

const renderPurchaseSummary = () => {
    const resumeContainer = document.getElementById("resume");
    const selectedProduct = productos.find(producto => producto.id === parseInt(productId))
    if (resumeContainer) {
        const hasSelectedOptions = Object.values(selectedOptions).some(value => value !== null);
        const optionsSummary = Object.entries(selectedOptions)
            .filter(([key, value]) => value !== null)
            .map(([key, value]) => searchValue(key, value))
            .join("");
        total = selectedProduct ? parseFloat(selectedProduct.price) * parseInt(selectedQuantity) : 0

        resumeContainer.innerHTML = `
            <h4>Resumen de compra</h4>
            ${hasSelectedOptions
                ? optionsSummary
                : "<p class='summary_p'>No hay opciones seleccionadas.</p>"}
            <p class="summary_p"><strong>Cantidad:</strong> ${selectedQuantity}</p>
            <p class="summary_p"><strong>${total.toLocaleString("es-AR",{style: "currency", currency: "ARS"})}</strong></p>
        `;
    }
};

document.addEventListener("DOMContentLoaded", () => {
    renderProductDetails();
    renderPurchaseSummary();
    document.body.addEventListener("click", (e) => {
        if (e.target.classList.contains("details-options__button")) {
            const buttonValue = e.target.value;
            const buttonType = e.target.getAttribute("data-type");

            document.querySelectorAll(`.details-options__button[data-type="${buttonType}"]`)
                .forEach((btn) => btn.classList.remove("active"));

            if (selectedOptions[buttonType] === buttonValue) {
                selectedOptions[buttonType] = null;
                e.target.classList.remove("active");
            } else {
                selectedOptions[buttonType] = buttonValue;
                e.target.classList.add("active");
            }

            renderPurchaseSummary();
        }

        if (e.target.id === "btn-add-cart") {
            const hasMissingOptions = Object.entries(selectedOptions).some(([key, value]) => {
                return document.querySelectorAll(`.details-options__button[data-type="${key}"]`).length > 0 && value === null;
            });

            if (hasMissingOptions) {
                alert("Por favor, selecciona todas las opciones antes de agregar al carrito.");
                return;
            }
            updateCart(productId, selectedOptions, selectedQuantity)
            alert("Producto agregado al carrito con éxito.");

            document.querySelectorAll(".details-options__button").forEach((btn) => btn.classList.remove("active"));
            Object.keys(selectedOptions).forEach((key) => (selectedOptions[key] = null));
            selectedQuantity = 1;

            renderPurchaseSummary();
        }

        if (e.target.id === "plusIcon") {
            selectedQuantity += 1;
            renderPurchaseSummary();
        }

        if (e.target.id === "minusIcon") {
            if (selectedQuantity > 1) {
                selectedQuantity -= 1;
                renderPurchaseSummary();
            }
        }
    });

    
});

const renderProductDetails = () => {
    const productDetailContainer = document.getElementById("productDetail");
    productDetailContainer.style.display = "flex";
    productDetailContainer.innerHTML = "";



    const selectedProduct = productos.find((producto) => producto.id === Number(productId));
    const { colores, sabores, tallas, tamanios } = selectedProduct?.opcionesCompra;

    const hasOptions = Boolean(
        (colores && colores.length > 0) ||
        (sabores && sabores.length > 0) ||
        (tallas && tallas.length > 0) ||
        (tamanios && tamanios.length > 0)
    );

    if (selectedProduct) {
        const template = `
            <div class="details__wrapper">
                <picture class="details__img">
                    <img src="./assets/${selectedProduct.imageUrl}" alt="">
                </picture>
                
                <div class="product__details">
                    <h1 class="details__title">${selectedProduct.title}</h1>
                    <h3 class="details__price">${parseFloat(selectedProduct.price).toLocaleString("es-AR", { style: "currency", currency: "ARS" })}</h3>
                    <div class="details__description">${selectedProduct.descripcion}</div>
                    
                    <div id="resume">
                        <!-- El resumen se genera dinámicamente -->
                        <h4>Resumen de compra</h4>
                        <p>No hay opciones seleccionadas.</p>
                        <p><strong>Cantidad:</strong> ${selectedQuantity}</p>
                    </div>

                    <div class="details__options">
                        ${hasOptions ? `<h3 id="details-options-title">Opciones de compra</h3>` : ""}
                        ${colores && colores.length > 0
                ? `<p class="details-options-subtitle">Colores</p>
                               <div class="buttons__wrapper">
                                   ${colores.map((color) => {
                    const colorNombre = coloresPr.find((c) => c.id === color)?.name || "Color desconocido";
                    return `<button class="details-options__button" data-type="colores" value="${color}">${capitaliceStrings(colorNombre)}</button>`;
                }).join("")}
                               </div>`
                : ""}

                        ${sabores && sabores.length > 0
                ? `<p class="details-options-subtitle">Sabores</p>
                               <div class="buttons__wrapper">
                                   ${sabores.map((sabor) => {
                    const saborNombre = saboresProductos.find((s) => s.id === sabor)?.name || "Sabor desconocido";
                    return `<button class="details-options__button" data-type="sabores" value="${sabor}">${capitaliceStrings(saborNombre)}</button>`;
                }).join("")}
                               </div>`
                : ""}
                        
                        ${tallas && tallas.length > 0
                ? `<p class="details-options-subtitle">Tallas</p>
                               <div class="buttons__wrapper">
                                   ${tallas.map((talla) => {
                    const nombreTalla = tallasProductos.find((t) => t.id === talla)?.name || "Talla desconocida";
                    return `<button class="details-options__button" data-type="tallas" value="${talla}">${capitaliceStrings(nombreTalla)}</button>`;
                }).join("")}
                               </div>`
                : ""}

                        ${tamanios && tamanios.length > 0
                ? `<p class="details-options-subtitle">Tamaños</p>
                               <div class="buttons__wrapper">
                                   ${tamanios.map((tamanio) => {
                    const nombreTamanio = tamanioProductos.find((t) => t.id === tamanio)?.name || "No encontrado";
                    return `<button class="details-options__button" data-type="tamanios" value="${tamanio}">${capitaliceStrings(nombreTamanio)}</button>`;
                }).join("")}
                               </div>`
                : ""}
                    </div>
                    
                    <div id="btn__add-cart-wrapper">
                        <button id="btn-add-cart">Agregar al carrito</button>
                        <img id="plusIcon" src="../../assets/Iconos/plus.svg" alt="Aumentar cantidad">
                        <img id="minusIcon" src="../../assets/Iconos/minus.svg" alt="Disminuir cantidad">
                    </div>
                </div>
            </div>
        `;
        productDetailContainer.innerHTML = template;
    }
};
