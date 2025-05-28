/* Challenge 1 */

/**
 * Return sheep that include 'n' and 'a' in their name and are red in color.
 * @param {array}
 * @returns {arrray}
 */
function contarOvejas(sheeps) {
    let filteredSheep = []
    let name

    sheeps.forEach(sheep => {
        name = sheep.name.toLowerCase() 
        if(name.includes('n') && name.includes('a') && sheep.color === 'rojo') {
            filteredSheep.push(sheep)
        }
    }) 
    return filteredSheep
}

/* Another possible solution */
/*  return ovejas.filter(oveja => {
        const nombre = oveja.name.toLowerCase();
        return nombre.includes('n') && nombre.includes('a') && oveja.color === 'rojo';
    }); 
*/