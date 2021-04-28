const differentArray = ['AMOR', 'XISELA', 'JAMON', 'ROMA', 'OMAR', 'MORA', 'ESPONJA', 'RAMO', 'JAPONES', 'ARMO', 'MOJAN', 'MARO', 'ORAM', 'MONJA', 'ALEXIS']

let similarArray = [];
console.log("getting similar array");
for (const element of differentArray) {
    const elementArray = element.split("")
    for (element2 of differentArray) {
        let found = true;
        const element2Array = element2.split("")
        for (char of element2Array) {
            if (elementArray.indexOf(char) < 0) {
                found = false;
            }
        }
        if (found && similarArray.indexOf(element2) < 0) {
            similarArray.push(element2)
        }
    }
}
console.log(differentArray.length)
console.log(similarArray)
console.log(similarArray.length)