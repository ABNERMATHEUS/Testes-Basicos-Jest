const counterVogal  = require('./counterVogal');

describe("Contando vogais",()=>{ //A função que irá fazer os testes
    
//Given - dado que
//should - deveria que isso...
//then - então espere isso

    test("AEIOU deve retornar 5",()=>{ //o teste feito
        const result = counterVogal("AEIOU");
        expect(result).toEqual(5); //Verificação do teste.
    })

    test("A1E2IO3U4U deve retornar 6",()=>{ //o teste feito
        const result = counterVogal("A1E2IO3U4U");
         expect(result).toEqual(6);  //Verificação dos teste.
    })

    test("Passando número deve retornar 0",()=>{ //o teste feitos
        const result = counterVogal(123);
        expect(result).toEqual(0);  //Verificação dos teste.
    })
});