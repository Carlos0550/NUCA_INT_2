import { productos } from "./products.js"
import { sabores as saboresProductos } from "./sabores.js"
import { tamanios as tamanioProductos, tamanios } from "./tamanios.js"
import { coloresProductos as coloresPr } from "./coloresProductos.js"
import { tallas as tallasProductos } from "./tallas.js"
import { capitaliceStrings } from "./capitaliceStrings.js"
const renderProductDetails = () => {
    const productDetailContainer = document.getElementById("productDetail")
    productDetailContainer.style.display = "flex"
    productDetailContainer.innerHTML = ""
    const urlParams = new URLSearchParams(location.search)
    const productId = urlParams.get("productId")

    const selectedProduct = productos.find((producto) => producto.id === Number(productId))
    console.log(selectedProduct)
    const { colores, sabores, tallas, tamanios } = selectedProduct?.opcionesCompra

    const hasOptions = Boolean(
        (colores && colores.length > 0) ||
        (sabores && sabores.length > 0) ||
        (tallas && tallas.length > 0) ||
        (tamanios && tamanios.length > 0)
    )
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
                    <div class="details__options">
    ${hasOptions ? `<h3 id="details-options-title">Opciones de compra</h3>` : ""}
    
    ${colores && colores.length > 0
                ? `
        <p class="details-options-subtitle">Colores</p>
        <div class="buttons__wrapper">
            ${colores.map((color) => {
                    const colorNombre = coloresPr.find((c) => c.id === color)?.name || "Color desconocido";
                    return `<button class="details-options__button" type="color" value="${color}">${capitaliceStrings(colorNombre)}</button>`;
                })}
        </div>
            `
                : ""
            }
    
                    ${sabores && sabores.length > 0
                ? `
                        <p class="details-options-subtitle">Sabores</p>
                        <div class="buttons__wrapper">
                            ${sabores.map((sabor) => {
                    const saborNombre = saboresProductos.find((s) => s.id === sabor)?.name || "Sabor desconocido";
                    return `<button class="details-options__button" type="sabor" value="${sabor}">${capitaliceStrings(saborNombre)}</button>`;
                })}
                        </div>
                        `
                : ""
            }
                </div>
                ${tallas && tallas.length > 0 ? `
                    <p class="details-options-subtitle">Tallas</p>
                    <div class="buttons__wrapper">
                        ${tallas.map((talla) => {
                const nombreTalla = tallasProductos.find(t => t.id === talla)?.name || "Talla desconocida";
                return `<button class="details-options__button" type="talle" value="${talla}">${capitaliceStrings(nombreTalla)}</button>`;
            }).join("")}
                    </div>
                ` : ""}

                ${tamanios && tamanios.length > 0 ? `
                        <p class="details-options-subtitle">Tamaños</p>
                        <div class="buttons__wrapper">
                            ${tamanios.map((tamanio) => {
                const nombreTamanio = tamanioProductos.find(t => t.id === tamanio)?.name || "No encontrado"
                return `<button class="details-options__button" type="tamanio" value="${tamanio}">${capitaliceStrings(nombreTamanio)}</button>`
            }).join("")}
                        </div>
                    `
                : ""
            }
            <div id="btn__add-cart-wrapper"><button id="btn-add-cart">Agregar al carrito</button></div>
                </div>
                    
                </div>
                
        </div>
    `
        productDetailContainer.innerHTML = template
    }

}

document.addEventListener("DOMContentLoaded", () => {
    renderProductDetails()
    const buttonSelected = document.querySelectorAll(".details-options__button");

    const selectedOptions = {
        tamanios: null,
        talles: null,
        colores: null,
        sabores: null
    }

    if(buttonSelected){
        buttonSelected.forEach(element => {
            element.addEventListener("click", (e) => {
                const buttonValue = e.target.value;
                const buttonType = element.getAttribute("type");
    
                buttonSelected.forEach(btn => {
                    if (btn.getAttribute("type") === buttonType) {
                        btn.classList.remove("active");
                    }
                });
    
                if (selectedOptions[buttonType] === buttonValue) {
                    selectedOptions[buttonType] = null;
                    element.classList.remove("active");
                } else {
                    selectedOptions[buttonType] = buttonValue; 
                    element.classList.add("active");
                }
    
                console.log(`Botón de tipo ${buttonType} clickeado con valor: ${buttonValue}`);
                console.log("Opciones seleccionadas:", selectedOptions);
            });
        });
    }
})


