function createXmasTree(height) {
    let arbol = ''
    let asteriscos = 1

    // Parte superior (ramas)
    for(let i = 0; i < height; i++) {
        // espacios a la izquierda
        for(let j = 0; j < (height - i - 1); j++) {
            arbol += '_'
        }
        // asteriscos
        for(let j = 0; j < asteriscos; j++) {
            arbol += '*'
        }
        // espacios a la derecha
        for(let j = 0; j < (height - i - 1); j++) {
            arbol += '_'
        }

        arbol += "\n"
        asteriscos += 2
    }

    // Tronco (2 filas)
    for(let k = 0; k < 2; k++) {
        // espacios antes del tronco
        for (let j = 0; j < height - 1; j++) {
            arbol += '_'
        }
        
        // tronco
        arbol += '#'
        // espacios después del tronco
        for (let j = 0; j < height - 1; j++) {
            arbol += '_'
        }

        // para no dejar salto de linea al final 
        if(k == 0) {
            arbol += "\n"
        }
    }
    return arbol
}


const arbol = createXmasTree(10) ; 
console.log(arbol)