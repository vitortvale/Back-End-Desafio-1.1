const Vertice = require('./questao1.js');

class Triangulo {   
    #v1;
    #v2;
    #v3;
    #a;
    #b;
    #c;

    constructor(v1, v2, v3) {
        let ladoA = v1.distancia(v2);
        let ladoB = v2.distancia(v3);
        let ladoC = v3.distancia(v1);
        if(ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
            throw "Os vertices nao sao capazes de formar um triangulo";
        }
        else {
            this.#v1 = v1;
            this.#v2 = v2;
            this.#v3 = v3;
            this.#a = ladoA;
            this.#b = ladoB;
            this.#c = ladoC;
        }
    }

    get getV1() {
        return this.#v1;
    }

    get getV2() {
        return this.#v2;
    }

    get getV3() {
        return this.#v3;
    }

    equals(T) {
        if(this.#v1 == T.getV1 && this.#v2 == T.getV2 &&  this.#v2 == T.getV2 && this.#v3 == T.getV3) {
            return true;
        }
        return false;
    }

    get perimetro() {
        return this.#a + this.#b + this.#c ;
    }

    get tipo() {
        if(this.#a == this.#b && this.#b == this.#c) {
            return "equilatero";
        }
        else if(this.#a != this.#b && this.#b != this.#c && this.#a != this.#c) {
            return "escaleno";
        }
        else {
            return "isoceles";
        }
    }

    clone() {
        const t = new Triangulo(this.#v1, this.#v2, this.#v3);
        return t;
    }

    get area() {
        let S = this.perimetro / 2;
        return Math.sqrt(Math.abs(S * (S - this.#a) * (S - this.#b) * (S - this.#c)));
    }
}


/*try {
    const prompt = require("prompt-sync")({ signint : true });
    const triangulos = [];
    for(let i = 0; i < 3; i++) {
        const v1x = prompt('insira x do primeiro vertice: ');
        const v1y = prompt('insira y do primeiro vertice: ');
        const v1 = new Vertice(v1x, v1y);
        const v2x = prompt('insira x do segundo vertice: ');
        const v2y = prompt('insira y do segundo vertice: ');
        const v2 = new Vertice(v2x, v2y);
        const v3x = prompt('insira x do terceiro vertice: ');
        const v3y = prompt('insira y do terceiro vertice: ');
        const v3 = new Vertice(v3x, v3y);
        triangulos[i] = new Triangulo(v1, v2, v3);
        console.log(`triangulo ${i + 1} criado!`); 
    }
    
    for(let j = 0; j < 3; j++) {
        console.log(`Perimetro do ${j + 1}o triangulo : ${triangulos[j].perimetro}`);
        console.log(`Tipo do ${j + 1}o triangulo : ${triangulos[j].tipo}`);
        console.log(`Area do ${j + 1}o triangulo : ${triangulos[j].area}`);
    }

    const trianguloclone = triangulos[0].clone();
    
    if(trianguloclone.equals(triangulos[0])) {
        console.log("Clonagem de triangulos efetuada com sucesso");
    }
    else {
        console.log("Erro na clonagem de triangulos");
    }
}

catch(e) {
    console.log(e);
}*/

