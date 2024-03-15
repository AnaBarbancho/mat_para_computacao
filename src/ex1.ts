//defina uma variavel que tem uma anotação explicita de um tipo numerico

let x:number = 0;
console.log(x);

//defina uma variavel que tem uma anotação explicita de um tipo string
let y:string = "Oi";
console.log(y);

//uma variavel que não tenha anotação explicita de tipo mas que receba um valor logico
let a = true;
console.log(a);

//uma variavel que seja um JSON contento prioridades de tipo numerico e de tipo string
let vr: {numero:number,texto:string};
vr = {
    numero : 17,
    texto : "Olá mundo"
};
console.log(vr);


//um array numerico com anotação explicito de tipo
let b:number[] = [1,2,3,4];
console.log(b);