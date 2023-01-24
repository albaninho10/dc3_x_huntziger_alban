const generateChiffre = () => {
    let array = []
    for (let i = 0; i < 10; i++){
        array.push(i)
    }
    let result = array.join('')
    return result
}

console.log(generateChiffre())