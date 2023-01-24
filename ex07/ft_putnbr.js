function displayPossibleValues(num) {
    let numStr = (num + "").split("");
    if (numStr.length === 1) return num;
    let AllCombinaisons = [];

    function findCombinations(current, rest) {
      if (rest.length === 0) {
        AllCombinaisons.push(parseInt(current.join("")));
        return;
      }

      for (let i = 0; i < rest.length; i++) {
        findCombinations(current.concat([rest[i]]), rest.slice(0, i).concat(rest.slice(i + 1)));
      }
    }
    findCombinations([], numStr);

    return AllCombinaisons.join(', ');
}

console.log(displayPossibleValues(219))