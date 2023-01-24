const printCombinaisons = () => {
    let array = []
    for (let i = 0; i <= 99; i++) {
        for (let u = i + 1; u <= 99; u++) {
            let iStr = i.toString();
            let uStr = u.toString();
            if (i < 10) iStr = "0" + iStr;
            if (u < 10) uStr = "0" + uStr;
            array.push(iStr + " " + uStr);
        }
    }

    let result = array.join()
    return result
}
console.log(printCombinaisons())