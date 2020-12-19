const fizzbuzz = require('./fizzbuzz');

//Given - dado que
//should - deveria que isso...
//then - então espere isso

describe("Se o número não for múltiplo de 3 ou de 5 ele deve retornar ele mesmo", () => { //A função que irá fazer os testes

    test("Deve retornar 7 quando passado 7", () => { //o teste feito
        const result = fizzbuzz(7);
        expect(result).toEqual(7); //Verificação do teste.

    });
    test("Se for multiplo de 3 deve retornar Fizz", () => { //o teste feito
        const result = fizzbuzz(3);
        expect(result).toEqual("Fizz");  //Verificação dos teste.
    });


    test("Se for multiplo de 5 retornar Buzz", () => {  //o teste feito
        const result = fizzbuzz(10);
        expect(result).toEqual("Buzz"); //Verificação dos teste.
    });


    test("Se for multiplo de 5 e 3, retornar FizzBuzz", () => { //o teste feito
        const result = fizzbuzz(15);
        expect(result).toEqual("FizzBuzz"); //Verificação dos teste.
    })
});


