const printCombinaisons = () => {
    let array = []
    for (let i = 0; i <= 9; i++) {
        for (let j = i + 1; j <= 9; j++) {
            for (let k = j + 1; k <= 9; k++) {
                let str = i
                array.push("" + i + j + k);
            }
        }
    }

    let result = array.join(', ')
    return result
}

console.log(printCombinaisons())