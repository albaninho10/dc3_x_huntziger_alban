const generateChiffre = () => {
    let array = []
    for (let i = 0; i < 10; i++) {
        array.push(i)
    }
    let result = array.join('')
    return result

}

console.log(generateChiffre())

/* Un chiffre en minuscule est différent d'un chiffre en lettre (écriture d'un nombre en utilisant des mots plutôt que des chiffres). Les chiffres en minuscule sont des caractères numériques qui peuvent être utilisés pour représenter des nombres dans des calculs mathématiques et d'autres applications, tandis que les chiffres écrits en lettres sont utilisés principalement pour la lecture et l'écriture de nombres en langue parlée ou écrite. */