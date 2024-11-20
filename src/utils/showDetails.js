import { productos } from "./products.js"

const renderProductDetails = () => {
    const productDetailContainer = document.getElementById("productDetail")
    productDetailContainer.style.display = "flex"
    productDetailContainer.innerHTML = ""
    const urlParams = new URLSearchParams(location.search)
    const productId = urlParams.get("productId")

    console.log(productId)
    const selectedProduct = productos.find((producto) => producto.id === Number(productId))

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
                </div>
        </div>
    `
        productDetailContainer.innerHTML = template
    }

}

document.addEventListener("DOMContentLoaded", () => {
    renderProductDetails()
})
