const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(name) {
    cats.push("Ralph")

}
function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}
function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
   }

function prependCat(name) {
    const newCats = [name, ...cats];
    return newCats;
}
function removeLastCat () {
    cats.slice(0,-1)
    const copyofCats = cats.slice(0,-1)
       return copyofCats;
}
function removeFirstCat() {
    cats.slice(1)
    const copyofCats = cats.slice(1)
       return copyofCats;
   } 