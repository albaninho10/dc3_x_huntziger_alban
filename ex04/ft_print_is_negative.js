const isPositive = (nbr) => {
    if (isNaN(nbr)) {
        let result = "Is Not a Number"
        return result
    } else {
        let result
        switch (Math.sign(nbr)) {
            case 1:
                result = "P"
                break;
            case -1:
                result = "N"
                break;
            case 0:
                result = "P"
                break;
            case -0:
                result = "P"
                break;
            default:
                result = "N"
        }
        return result
    }
}

console.log(isPositive(-0))