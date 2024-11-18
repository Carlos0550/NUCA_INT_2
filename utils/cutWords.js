export const recortarPalabras = (palabra, limit = 30) => {
    if (palabra?.trim() === "") return palabra

    const newString = palabra.slice(0, limit).trim() + "..."
    return newString
}