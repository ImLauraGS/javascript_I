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
        return console.log('Hello World!');
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

//Exercici 1.3: Callbacks

//Exercici 1 Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i una funció de callback. La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre.

const processar = (num, callback) => callback(num);

//Exercici 2 Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres: dos nombres i una funció de callback. La funció calculadora ha d'invocar la funció de callback amb els dos nombres com a paràmetres. Després, crida calculadora amb una funció que faci la suma dels dos nombres.

const calculadora = (a, b, callback) => callback(a + b);

//Exercici 3 Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar que accepti dos paràmetres: un nom i una funció de callback. La funció ha d'esperar 2 segons i llavors invocar la funció de callback, passant el nom com a paràmetre.

const esperarISaludar = (name, callback) => {
    setTimeout(() => {
        callback(name);
    }, 2000);
}

//Exercici 4 Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: un array i una funció de callback. La funció processarElements ha d'invocar la funció de callback per cada element de l'array.

const processarElements = (arr, callback) => {
    arr.forEach(element => callback(element));
}

//Exercici 5 Escriu una funció processarCadena que accepti dos paràmetres: una cadena de caràcters i una funció de callback. La funció processarCadena ha de convertir la cadena a majúscules i llavors invocar la funció de callback amb la cadena transformada.

const processarCadena = (str, callback) => {
    callback(str.toUpperCase());
}


//Exercici 1.4: Rest & Spread operators

//Exercici 1 Operador Spread en Arrays: Crea dues arrays, array1 i array2. Utilitza l'operador spread per a crear una tercera array que contingui tots els elements de array1 i array2.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, ...array2];


//Exercici 2 Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.

const suma = (...args) => args.reduce((acc, curr) => acc + curr);

//Exercici 3 Copiant objectes amb Spread: Crea un objecte 'objecte1'. Després crea un segon objecte, 'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread. Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.

const objecte1 = {
    name: 'John',
    age: 30
}
const objecte2 = { ...objecte1 };

objecte2.name = 'Jane';

//Exercici 4 Rest en Destructuring: Crea una array amb diversos elements. Utilitza destructuring i l'operador rest per a assignar els primers dos elements a variables, i després assignar la resta dels elements a una tercera variable.

const [first, second, ...rest] = [1, 2, 3, 4, 5];

//Exercici 5 Spread en Funcions: Crea una funció que accepti tres arguments. Després, crea una array amb tres elements i crida la funció utilitzant l'operador spread amb aquesta array.

const funcio3arguments = (a, b, c) => a + b + c;
const array = [1, 2, 3];
funcio3arguments(...array);

//Exercici 6 Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents. Utilitza l'operador spread per a fusionar aquests dos objectes en un de nou.

const obj1 = {
    name: 'John'
}
const obj2 = {
    age: 30
}
const obj3 = { ...obj1, ...obj2 };

//Exercici 1.5: Array transformations

//Exercici 1 Map: Teniu un array de números [1, 2, 3, 4]. Crea una nova array que contingui el quadrat de cada número.

const numbers = [1, 2, 3, 4];
const squaredNumbers = numbers.map(num => num ** 2);

//Exercici 2 Filter: Teniu una array de números [1, 2, 3, 4]. Crea una nova array que només contingui els números parells.

const evenNumbers = numbers.filter(num => num % 2 === 0);

//Exercici 3 Find: Teniu una array de números [1, 10 , 8, 11]. Utilitza la funció find per a trobar el primer número que és major a 10.

const numMesGranArr = numbers.find(num => num > 10);

//Exercici 4 Reduce: Teniu una array de números [13, 7, 8, 21]. Fes servir la funció reduce per a calcular la suma total dels números.

const total = numbers.reduce((acc, curr) => acc + curr, 0);

// Exercici 5
// Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una funció en una sola línia que faci el següent:
// - Filtra els nombres majors o iguals a 10.
// - Multiplica cada nombre filtrat per 2.
// - Calcula la suma dels nombres filtrats i multiplicats per 2.
// - La funció ha de retornar el resultat de la suma.

const arrnum = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];
const resultat = arrnum.filter(num => num >= 10).map(num => num * 2).reduce((acc, curr) => acc + curr, 0);

//Exercici 6 Every / Some: Usa every i some per a determinar si tots o alguns dels elements de l'array [11, 12, 13, 14] són majors que 10, respectivament

const arr = [11, 12, 13, 14];
const totsMajors = arr.every(num => num > 10);
const algunsMajors = arr.some(num => num > 10)

//Exercici 1.6: Array loops

//Exercici 1 forEach: Teniu una array de noms. Utilitza forEach per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara'];

const noms = ['Anna', 'Bernat', 'Clara'];
noms.forEach(nom => console.log(nom));

//Exercici 2 for-of: Teniu una array de noms. Utilitza un bucle for-of per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara'];

for (const nom of noms) {
    console.log(nom);
}

//Exercici 3 filter: Teniu una array de números. Utilitza filter per a crear una nova array que només contingui els números parells. let numeros = [1, 2, 3, 4, 5, 6];

const numeros = [1, 2, 3, 4, 5, 6];
const parells = numeros.filter(num => num % 2 === 0);

//Exercici 4 for-in: Teniu un objecte amb parells clau-valor: let obj = { nom: Ona, edat: 25, ciutat: 'Barcelona' }; Utilitza un bucle for-in per a imprimir a la consola cada clau i el seu valor corresponent.

const obj = { name: 'Ona', age: 25, city: 'Barcelona' };
for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

//Exercici 5 for-of amb break: Teniu una array de números. Utilitza un bucle for-of per a imprimir a la consola els números fins a trobar el número 5, llavors atura el bucle: let numeros = [1, 2, 3, 4, 5, 6];

for (const num of numeros) {
    console.log(num);
    if (num === 5) {
        break;
    }
}

//Exercici 6 for-of amb index: Utilitza un bucle for-of per a imprimir a la consola cada element de l'array i la seva posició (index): let noms = ['Anna', 'Bernat', 'Clara']

for (const [index, nom] of noms.entries()) {
    console.log(`${index}: ${nom}`);
}

//Exercici 1.7: Promises & Async/Await

//Exercici 1 Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text 'Hola, món'.

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hola, món');
    }, 2000);
});

//Exercici 2 Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. Crea un .then que imprimeixi el resultat a la consola.

promesa.then(result => console.log(result));

//Exercici 3 Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa.

const input = 'Hola'; 

const promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (input === 'Hola') {
            resolve('Hola, món');
        } else {
            reject('Input no vàlid');
        }
    }, 2000);
});

//Exercici 4 Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a esperar el resultat de la promesa creada a l'exercici 1, i que després imprimeixi aquest resultat a la consola.

const esperar = async () => {
    const result = await promesa;
    console.log(result);
    return result; 
}

//Exercici 5 Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que capturi qualsevol possible error utilitzant un bloc try/catch.

const esperar2 = async () => {
    try {
        const result = await promesa;
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
}


//Exercici 6 Promise.all: Crea dues promeses que es resolguin després de 2 i 3 segons, respectivament. Utilitza Promise.all per a esperar que ambdues promeses es resolguin, i imprimeix els resultats a la consola.

const promesaFirst = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Primera promesa resolta');
    }, 2000);
});

const promesaSecond = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Segona promesa resolta');
    }, 3000);
});

const promesaAll = Promise.all([promesaFirst, promesaSecond]);

promesaAll.then(results => console.log(results));

export { add, printNumbers, randomNumber, parOImpar, potConduir, printMessage, processar, calculadora, esperarISaludar,processarElements,processarCadena, suma, funcio3arguments, esperar, esperar2, promesaAll, promesa, promesa2, numMesGranArr, resultat, total, squaredNumbers, evenNumbers, obj3,objecte1, objecte2, array3, numMesGran, positiu, parells, trobarMaxim, Person };


