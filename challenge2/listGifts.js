/* Challenge 2 */

/**
 * Return words that are not empty or do not start with a _
 * @param {string}
 * @returns {object}
 */
function listGifts(letter) {
    const regalos = {};
    const words = letter.toLowerCase().split(' ').filter(word => word !== '' && !word.startsWith('_'));

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        regalos[word] = (regalos[word] || 0) + 1;
    }
    return regalos
}