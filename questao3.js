const Vertice = require('./questao1.js');

class Poligono {
    nVertices;
    arr = [];
    constructor(qtdVertices) {
        if(qtdVertices < 3) {
            throw "O poligono deve ter 3 ou mais vertices";
        }
        else {
            this.nVertices = qtdVertices;
            for(let i = 0; i < qtdVertices; i++){
                let x = prompt(`Insira x do ${i + 1}o vertice: `);
                let y = prompt(`Insira y do ${i + 1}o vertice: `);
                this.arr[i] = new Vertice(x, y);
            }
        }
    }

    addVertice(V) {
        for(let i = 0; i < this.nVertices; i++) {
            if(V.equals(this.arr[i])) {
                this.arr[this.nVertices] = V;
                return true;
            }
        }
        this.arr[this.nVertices] = V;
        this.nVertices++;
        return false;
    }

    get perimetro() {
        let perimetro = 0;
        for(let i = 0, j = 1; j < this.nVertices; i++, j++) {
            perimetro += distance(this.arr[i], this.arr[j]);
        }
        petrimetro += distance(this.arr[0], this.arr[this.nVertices - 1]);
        return petrimetro;
    }

    get qtdVertices() {
        return this.nVertices;
    }
}

const prompt = require("prompt-sync")({ signint : true });

try {
    let qtdVertices = prompt('Insira a quantidade inicial de vertices do poligono ');
    p = new Poligono(qtdVertices);
    let novosVertices = prompt('Insira a quantidade de vertices que vc deseja adicionar ao poligono');
    if(novosVertices > 0) {
        for(let i = 0; i < novosVertices; i++) {
            let x = prompt(`Insira x do ${i + 1}o vertice novo: `);
            let y = prompt(`Insira y do ${i + 1}o vertice novo: `);
            console.log(`Criando vertice v = new Vertice(${x}, ${y})`);
            v = new Vertice(x, y);
            if(!p.addVertice(v)) {
                console.log('Vertice adicionado com sucesso!');
            }
            else {
                console.log('O vertice nao pode ser adicionado pois ja existe no poligono');
            }
        }
    }
    else {
        console.log('Nenhum vertice sera adicionado');
    }
    console.log(`Quantidade final de vertices do poligono: ${p.qtdVertices}`);
}
catch(e) {
    console.log(e);
}