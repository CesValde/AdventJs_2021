export default function isValidLetter(letter) {
    let openIndex = -1; // Índice del paréntesis abierto actual

    for(let i = 0; i < letter.length; i++) {
        const char = letter[i];

        if(char === "(") {
            if(openIndex !== -1) {
                // Paréntesis abierto: válido, seguimos
            }
            openIndex = i; // Guardamos el inicio del paréntesis
        } else if(char === ")") {
            if(openIndex === -1) {
                // Cierre sin apertura → inválido
                return false;
            }
            const content = letter.slice(openIndex + 1, i); // Contenido dentro de los paréntesis

            // Verificaciones
            if(content.length === 0) return false;        // Paréntesis vacío
            if(content.includes("{") || content.includes("[")) return false; // Caracteres prohibidos

            openIndex = -1; // Cerramos el paréntesis actual
        }
    }

    // Si quedó algún paréntesis abierto sin cerrar
    if(openIndex !== -1) return false;
    return true; // Todo bien
}