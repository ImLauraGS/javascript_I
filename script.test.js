const { add, printNumbers, randomNumber, parOImpar, potConduir,trobarMaxim,positiu, numMesGran, printMessage, Person} = require('./script.js');

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
    
    // test('La funció printMessage imprimeix el missatge correctament', () => {
    //     const consoleSpy = jest.spyOn(console, 'log');
    //     printMessage();
    //     expect(consoleSpy).not.toHaveBeenCalled();
        
    //     // Avanzar manualmente en el tiempo 3 segundos
    //     jest.advanceTimersByTime(3000);
    
    //     expect(consoleSpy).toHaveBeenCalledWith('Hello World!');
    // });

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

    
});