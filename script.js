// Exercici 1.1: Arrow functions

//Exercici 1: Conversió de funcions: Tens una funció add que accepta dos paràmetres i retorna la seva suma. Converteix-la en una funció de fletxa. Per exemple: function add(a, b) {return a + b;}.

const add = (a, b) => a + b;

//Exercici 2 Funció de fletxa sense paràmetres: Crea una funció de fletxa anomenada randomNumber que no necessiti paràmetres i que retorni un número aleatori entre 0 i 100.

const randomNumber = () => Math.floor(Math.random() * 101);

// Exercici 3 Ús de 'this' en les funcions de fletxa: Crea una classe person que tingui una propietat name i una funció greet que utilitzi una funció de fletxa. La funció ha d'imprimir una salutació que inclogui el nom de la persona. Per exemple: console.log(Hola, ${this.name});.

class Person {
    constructor(name) {
        this.name = name;
    }
    greet = () => console.log(`Hola, ${this.name}`);
}

// Exercici 4 Funció de fletxa dins d'un loop: Crea una funció anomenada printNumbers que accepti un array de números i utilitzi un loop for per imprimir cada número a la consola utilitzant una funció de fletxa.

const printNumbers = (arr) => {
    arr.forEach(num => console.log(num));
}

// Exercici 5 Funció de fletxa amb 'setTimeout': Crea una funció de fletxa que imprimeixi un missatge a la consola després d'esperar 3 segons.

const printMessage = () => {
    setTimeout(() => {
        console.log('Hello World!');
    }, 3000);
}

//Exercici 1.2: Operador ternari

//Exercici 1 Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com a paràmetre i utilitzi l'operador ternari per determinar si l'usuari pot conduir. Si l'edat és 18 o més, ha de retornar 'Pots conduir'. Si no, ha de retornar 'No pots conduir'.

const potConduir = (age) => age >= 18 ? 'Pots conduir' : 'No pots conduir';

// Exercici 2 Ús amb operadors de comparació: Escriu una expressió que utilitzi l'operador ternari per determinar quin dels dos nombres donats (num1 i num2) és més gran. Si num1 és més gran, retorna 'num1 és més gran'. Si no, retorna 'num2 és més gran'.

const num1 = 5;
const num2 = 10;
const numMesGran = num1 > num2 ? 'num1 és més gran' : 'num2 és més gran';

//Exercici 3 Ús enllaçat d'operadors ternaris: Escriu una expressió que utilitzi enllaços d'operadors ternaris per determinar si un número és positiu, negatiu o zero. 

const num = 5;
const positiu = num > 0 ? 'Positiu' : num < 0 ? 'Negatiu' : 'Zero';

//Operador ternari amb funcions: Crea una funció trobarMaxim que accepti tres paràmetres (a, b, c) i utilitzi l'operador ternari per determinar el valor màxim.

const trobarMaxim = (a, b, c) => a > b ? a > c ? a : c : b > c ? b : c;

//Exercici 4 Operador ternari dins un bucle: Escriu una funció parOImpar que accepti un array de números i utilitzi un bucle per a recórrer l'array. Dins del bucle, utilitza l'operador ternari per a determinar si cada número és parell o imparell.

const parOImpar = (arr) => {
    arr.forEach(num => {
        num % 2 === 0 ? console.log(`${num} és parell`) : console.log(`${num} és imparell`);
    });
}

export { add, printNumbers, randomNumber, parOImpar, potConduir, printMessage, numMesGran, positiu, trobarMaxim, Person };