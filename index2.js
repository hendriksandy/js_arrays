const superheroes = [{
        name: "Batman",
        alter_ego: "Bruce Wayne"
    },
    {
        name: "Superman",
        alter_ego: "Clark Kent"
    },
    {
        name: "Spiderman",
        alter_ego: "Peter Parker"
    }
]

const zoekspiderman = superheroes.find(vindspiderman)

function vindspiderman(person) {
    return person.name === "Superman"
}

console.log(zoekspiderman)

// Hier komt jouw functie

//const findSpiderMan = (superheroes) =>
// superheroes.find((person) => person.name == "Spiderman");
//console.log(findSpiderMan(superheroes))
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}


const doubleArrayValues = [1, 2, 3]

const verdubbel = doubleArrayValues.map(kees)

function kees(number) {
    return number * 2
}
console.log(verdubbel)



const containsNumberBiggerThan10 = [1, 4, 3, 6, 9, 7, 8]

groterals10 = containsNumberBiggerThan10.some(sjaak)

function sjaak(nummer) {
    return nummer > 10
}
console.log(groterals10)
// result should be true
//containsNumberBiggerThan10([1,2,1,2,1,2]})
// result should be false

const isItalyInTheGreat7 = ['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States']

const searchItalie = isItalyInTheGreat7.find(finditaly)

function finditaly(land) {
    return land === "Italy"
}

console.log(searchItalie)

const cijfers = [1, 4, 3, 6, 9, 7, 11]
cijfers.forEach(numbers => {


    console.log(numbers * 10)
})


const numb = [1, 2, -2, 3, -4, 0, 7]
//const filtered = numb.filter(groteralsnul)

//function groteralsnul(cijferss) {
// return cijferss >= 0

//}

const filtered = numb.filter(cijferss => cijferss >= 0)

console.log(filtered)