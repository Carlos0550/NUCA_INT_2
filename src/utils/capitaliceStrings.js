export const capitaliceStrings = (string) =>{
    if(!string) return string
    const words = string.trim().split(" ")
    const capitalicedWords = words.map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )

    return capitalicedWords.join(" ")
}