const { add, printNumbers, randomNumber, parOImpar, potConduir,trobarMaxim, processar, calculadora, esperarISaludar, processarElements, processarCadena, suma, funcio3arguments, esperar, esperar2, promesa, promesa2, promesaAll, obj3, array3, objecte1, objecte2,positiu, numMesGran, squaredNumbers, parells, evenNumbers, printMessage, Person} = require('./script.js');

describe('Testing de les funcions', () => {
    test('La funció add suma correctament', () => {
        expect(add(2, 3)).toBe(5);
    });

    test('La funció randomNumber genera nombres entre 0 i 100', () => {
        const num = randomNumber();
        expect(num).toBeGreaterThanOrEqual(0);
        expect(num).toBeLessThanOrEqual(100);
    });

    test('La classe Person saluda correctament', () => {
        const person = new Person('Maria');
        const consoleSpy = jest.spyOn(console, 'log');
        person.greet();
        expect(consoleSpy).toHaveBeenCalledWith('Hola, Maria');
    });

    test('La funció printNumbers imprimeix correctament', () => {
        const consoleSpy = jest.spyOn(console, 'log');

        consoleSpy.mockReset();

        printNumbers([1, 2, 3]);
        expect(consoleSpy).toHaveBeenNthCalledWith(1, 1);
        expect(consoleSpy).toHaveBeenNthCalledWith(2, 2);
        expect(consoleSpy).toHaveBeenNthCalledWith(3, 3);
    });
    
    test('La funció printMessage imprimeix un missatge després de 3 segons', (done) => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

        printMessage();
 
        setTimeout(() => {
            expect(consoleSpy).toHaveBeenCalledWith('Hello World!');
            consoleSpy.mockRestore();
            done();
        }, 3000);
    });

    test('La funció potConduir retorna el resultat correcte', () => {
        expect(potConduir(17)).toBe('No pots conduir');
        expect(potConduir(18)).toBe('Pots conduir');
        expect(potConduir(25)).toBe('Pots conduir');
    });

    test('La expressió numMesGran retorna el resultat correcte', () => {
        expect(numMesGran).toBe('num2 és més gran');
    });

    test('La expressió positiu retorna el resultat correcte', () => {
        expect(positiu).toBe('Positiu');
    });

    test('La funció trobarMaxim retorna el resultat correcte', () => {
        expect(trobarMaxim(1, 2, 3)).toBe(3);
        expect(trobarMaxim(3, 5, 1)).toBe(5);
        expect(trobarMaxim(9, 3, 2)).toBe(9);
    });
    
    test('La funció parOImpar imprimeix correctament', () => {
        const consoleSpy = jest.spyOn(console, 'log');

        consoleSpy.mockReset();

        parOImpar([1, 2, 3, 4, 5]);
        expect(consoleSpy).toHaveBeenNthCalledWith(1, '1 és imparell');
        expect(consoleSpy).toHaveBeenNthCalledWith(2, '2 és parell');
        expect(consoleSpy).toHaveBeenNthCalledWith(3, '3 és imparell');
        expect(consoleSpy).toHaveBeenNthCalledWith(4, '4 és parell');
        expect(consoleSpy).toHaveBeenNthCalledWith(5, '5 és imparell');
    });

    test('La funció processar executa el callback correctament', () => {
        const callback = jest.fn();
        processar(5, callback);
        expect(callback).toHaveBeenCalledWith(5);
    });

    test('La funció calculadora executa la suma correctament', () => {
        const callback = jest.fn();
        calculadora(2, 3, callback);
        expect(callback).toHaveBeenCalledWith(5);
    });

    test('La funció esperarISaludar retorna el resultat correcte', done => {
        const nombre = 'Laura';
        esperarISaludar(nombre, result => {
            expect(result).toBe(nombre);
            done(); 
        });
    });
    
    test('La funció processarElements executa el callback per cada element', () => {
        const callback = jest.fn();
        processarElements([1, 2, 3], callback);
        expect(callback).toHaveBeenCalledTimes(3);
        expect(callback).toHaveBeenNthCalledWith(1, 1);
        expect(callback).toHaveBeenNthCalledWith(2, 2);
        expect(callback).toHaveBeenNthCalledWith(3, 3);
    });
    
    test('La funció processarCadena executa el callback per cada lletra', () => {
        const callback = jest.fn();
        processarCadena('hola', callback);
        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith('HOLA');
    });

    test('La funció array3 retorna un array amb 3 elements', () => {
        expect(array3).toHaveLength(6);
    });

    test('La funció suma retorna la suma correcta', () => {
        expect(suma(1, 2, 3, 4, 5)).toBe(15);
    });

    test('La propietat name de objecte1 no canvia quan es canvia la propietat name de objecte2', () => {
        expect(objecte1.name).toBe('John');
        expect(objecte2.name).toBe('Jane');
    });
    
    test('La destructuració i l\'operador rest assignen correctament els valors', () => {
        const array = [1, 2, 3, 4, 5];
    
        const [first, second, ...rest] = array;
    
        expect(first).toBe(1);
        expect(second).toBe(2);
        expect(rest).toEqual([3, 4, 5]);
    });

    test('La funció funcio3arguments retorna la suma correcta', () => {
        expect(funcio3arguments(1, 2, 3)).toBe(6);
    });

    test('La propietat name de obj3 és correcta', () => {
        expect(obj3.name).toBe('John');
        expect(obj3.age).toBe(30);
    });

    test('La propietat squaredNumbers retorna els números correctes', () => {
        expect(squaredNumbers).toEqual([1, 4, 9, 16]);
    });

    test('La propietat evenNumbers retorna els números parells correctes', () => {
        expect(evenNumbers).toEqual([2, 4]);
    });

    test('La propietat numMesGranArr retorna el número més gran correctament', () => {
        const numbers = [1, 10, 8, 11];
        const numMesGranArr = numbers.find(num => num > 10);
        expect(numMesGranArr).toBe(11);
    });

    test('La propietat total retorna la suma correcta', () => {
        const numbers = [1, 2, 3, 4];
        const total = numbers.reduce((acc, curr) => acc + curr);
        expect(total).toBe(10);
    });

    test('La propietat resultat retorna el resultat correcte', () => {
        const arrnum = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];
        const resultat = arrnum.filter(num => num >= 10).map(num => num * 2).reduce((acc, curr) => acc + curr, 0);

        expect(resultat).toBe(130);
    });

    test('Verifica si tots o alguns elements son majors que 10', () => {
        const arr = [11, 12, 13, 14];
        const totsMajors = arr.every(num => num > 10);
        const algunsMajors = arr.some(num => num > 10);
    
        expect(totsMajors).toBe(true); 
        expect(algunsMajors).toBe(true); 
    });

    test('La funció forEach imprimeix cada nom a la consola', () => {
        const consoleSpy = jest.spyOn(console, 'log'); 

        const noms = ['Anna', 'Bernat', 'Clara'];
        noms.forEach(nom => console.log(nom));
    
        expect(consoleSpy).toHaveBeenCalledWith('Anna');
        expect(consoleSpy).toHaveBeenCalledWith('Bernat');
        expect(consoleSpy).toHaveBeenCalledWith('Clara');
    
        consoleSpy.mockRestore();
    });

    test('La funció for-of imprimeix cada nom a la consola', () => {
        const consoleSpy = jest.spyOn(console, 'log'); 

        const noms = ['Anna', 'Bernat', 'Clara'];
        for (const nom of noms) {
            console.log(nom);
        }
    
        expect(consoleSpy).toHaveBeenCalledWith('Anna');
        expect(consoleSpy).toHaveBeenCalledWith('Bernat');
        expect(consoleSpy).toHaveBeenCalledWith('Clara');
    
        consoleSpy.mockRestore();
    });

    test('La funció filter crea una nova array amb els números parells', () => {

        expect(parells).toEqual([2, 4, 6]);
    });

    test('El bucle for-in imprimeix cada clau i el seu valor a la consola', () => {
        const consoleSpy = jest.spyOn(console, 'log'); 

        const obj = { name: 'Ona', age: 25, city: 'Barcelona' };
        for (const key in obj) {
            console.log(`${key}: ${obj[key]}`);
        }

        expect(consoleSpy).toHaveBeenCalledWith('name: Ona');
        expect(consoleSpy).toHaveBeenCalledWith('age: 25');
        expect(consoleSpy).toHaveBeenCalledWith('city: Barcelona');
    
        consoleSpy.mockRestore();
    });

    test('El bucle for-of imprimeix els números fins a trobar el 5 i després es deté', () => {
        const consoleSpy = jest.spyOn(console, 'log'); 

        const numeros = [1, 2, 3, 4, 5, 6];
        for (const num of numeros) {
            console.log(num);
            if (num === 5) {
                break;
            }
        }
    
        expect(consoleSpy).toHaveBeenCalledWith(1);
        expect(consoleSpy).toHaveBeenCalledWith(2);
        expect(consoleSpy).toHaveBeenCalledWith(3);
        expect(consoleSpy).toHaveBeenCalledWith(4);
        expect(consoleSpy).toHaveBeenCalledWith(5);
        expect(consoleSpy).not.toHaveBeenCalledWith(6);
    
        consoleSpy.mockRestore();
    });

    test('El bucle for-of imprimeix cada element i la seva posició en la consola', () => {
        const consoleSpy = jest.spyOn(console, 'log'); 
        const noms = ['Anna', 'Bernat', 'Clara'];
    
        for (const [index, nom] of noms.entries()) {
            console.log(`${index}: ${nom}`);
        }
  
        expect(consoleSpy).toHaveBeenCalledWith('0: Anna');
        expect(consoleSpy).toHaveBeenCalledWith('1: Bernat');
        expect(consoleSpy).toHaveBeenCalledWith('2: Clara');
    
        consoleSpy.mockRestore();
    });

    test('La funció promesa retorna la cadena correcta', async () => {
        const result = await promesa;
        expect(result).toBe('Hola, món');
    });

    test('La funció promesa2 retorna la cadena correcta', async () => {
        const result = await promesa2;
        expect(result).toBe('Hola, món');
    }, 5000);

    test('La funció esperar retorna el resultat correcte', async () => {
        const result = await esperar();
        expect(result).toBe('Hola, món');
    });

    test('La funció esperar2 retorna el resultat correcte', async () => {
        const result = await esperar2();
        expect(result).toBe('Hola, món');
    });

    test('La funció promesaAll retorna el resultat correcte', async () => {
        const result = await promesaAll;
        expect(result).toEqual(['Primera promesa resolta', 'Segona promesa resolta']);
    });
    
    
});