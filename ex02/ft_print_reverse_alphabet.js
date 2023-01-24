const generateAlphabet = () => {
    let alphabet = [...Array(26).keys()].map(i => String.fromCharCode(i + 97));
    let result = alphabet.reverse().join('')
    return result
}

console.log(generateAlphabet())