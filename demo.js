console.log("primer ejercicio");

const myObject = {
    name: "Silvia",
    id: 1000,
    surname: "Suan",
    heigth: "1,60",
}

const hasId = ({
    id
}) => id ? console.log("true") : console.log("false");
hasId(myObject);

console.log("segundo ejercicio");

const myArray = ["Silvia", "Juan", user = {
    id: 1233,
    altura: "1,82",
}];

const head = ([primero, ...rest]) => console.log(primero);
head(myArray);

console.log("tercer ejercicio");

const myArray3 = ["Dani", user2 = { pantalon: "Verde", camiseta: "Amarilla", }, "Roja", 5, 7, 6, 3, 9];
const tail = ([, ...restElement]) => console.log([...restElement]);
tail(myArray3);

console.log("cuarto ejercicio");

const swapFirstToLast = ([primero, ...restElement]) => console.log([...restElement, primero]); 
swapFirstToLast(myArray3); 

console.log("quinto ejercicio");

const excludeId = ({
    id,
    ...restProperty
}) => console.log({
    ...restProperty
});
excludeId(myObject);

console.log("sexto ejercicio");

const arrayWords = ["Silvia", "Luis", "Miguel", "Alejandra", "Lucía", "Didac", "Nil", "Juan"];
const wordsStartingWithA = words => words.filter(word => word[0] === "a" || word[0]==="A");
console.log(wordsStartingWithA(arrayWords));

console.log("septimo ejercicio");

const concat = words => words.join(" - ");
console.log(concat(arrayWords)); 

console.log("octavo ejercicio");

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8];
const multArray = (numbers, product) => numbers.map(number => number* product);
console.log(multArray(numberArray, 2));

console.log("noveno ejercicio");

const calcMult = numbers => numbers.reduce((acc, number) => acc + number, 0);
console.log(calcMult(numberArray));