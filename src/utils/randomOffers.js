export function selectRandomProducts(productos, cantidad = 8) {
    const seleccionados = new Set()

    const limite = Math.min(cantidad, productos.length)

    while (seleccionados.size < limite) {
        const indiceAleatorio = Math.floor(Math.random() * productos.length)
        seleccionados.add(productos[indiceAleatorio])
    }

    return Array.from(seleccionados)
}