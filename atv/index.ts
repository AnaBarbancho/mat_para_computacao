interface FuncaoRelacao {
    (a: number, b: number):number;
}

class Relacao {
    construirPares(aA: number[], bB: number[], funcao: FuncaoRelacao){
        const pares: {a:number, b:number}[] = [];
        aA.forEach(a => {
            bB.forEach(b => {
                if (funcao(a, b)) {
                    pares.push({a, b});
                }
            });
        });
        return pares ;
    }
}

function funcaoRelacao(a: number, b: number) {
    return a + b ;
}

const aA: number[] = [1, 2, 3];
const bB: number[] = [4, 5, 6];

const relacao = new Relacao();
console.log(relacao.construirPares(aA, bB, funcaoRelacao));
