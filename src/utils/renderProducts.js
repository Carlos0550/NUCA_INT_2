import { recortarPalabras } from "./cutWords.js";

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
            window.location.href = `../../productDetail.html?productId=${productId}`
        });
    });
}