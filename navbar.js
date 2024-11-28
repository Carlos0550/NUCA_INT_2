export function navbar() {
    const template = `
    <picture class="shop__picture">
            <img src="./assets/Iconos/logo.png" alt="navbarIcon">
        </picture>
        <nav class="shop__nav">
            <ul class="shop__ul">
                <li class="shop-ul__li"><a href="/">
                        <img src="./assets/Iconos/home.svg" alt="home_icon" width="24" height="auto">
                        Inicio
                    </a></li>
                
                <li><a>
                <li id="carrito-link"><a>
                        <img src="./assets/Iconos/cart.svg" alt="cart_icon" width="24" height="auto">
                        Carrito
                    </a></li>
            </ul>
        </nav>
    `
    const header = document.querySelector(".shop__header")
    header.insertAdjacentHTML("beforeend", template)
}