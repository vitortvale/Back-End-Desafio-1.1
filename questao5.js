class Pessoa {
    #nome;
    #CPF;
    #dataNascimento;
    #rendaMensal;
    #estadoCivil;
    #dependentes;

    constructor(nome, CPF, dataNascimento, rendaMensal, estadoCivil, dependentes) {
        this.#nome = nome;
        this.#CPF = CPF;
        this.#dataNascimento = dataNascimento;
        this.#rendaMensal = rendaMensal;
        this.#estadoCivil = estadoCivil;
        this.#dependentes = dependentes;

    }

    get nome() {
        return this.#nome;
    }

    get CPF() {
        return this.#CPF;
    }

    get dataNascimento() {
        return this.#dataNascimento;
    }

    get rendaMensal() {
        return this.#rendaMensal;
    }

    get estadoCivil() {
        return this.#estadoCivil;
    }

    get dependentes() {
        return this.#dependentes;
    }

    imprimeDados() {
        console.log(`Nome: ${this.nome}`);
        let c = "";
        for(let i = 0; i < 11; i++) {
            if(i == 3 || i == 6) {
                c = c.concat('.')
            }
            if(i == 9) {
                c = c.concat('-');
            }
            c = c.concat(CPF[i])
        }
        console.log(`CPF: ${c}`);
        console.log(`Data de nascimento: ${this.dataNascimento.getDay()}/${this.dataNascimento.getMonth()}/${this.dataNascimento.getUTCFullYear()}`);
        console.log(`Renda mensal: ${this.rendaMensal}`);
        console.log(`Estado civil: ${this.estadoCivil}`);
        console.log(`Dependentes: ${this.dependentes}`);
    }
}


const prompt = require("prompt-sync")({ signint : true });

let nome = prompt('Insira o nome (Pelo menos 5 caracteres) ');

while(nome.length < 5 || typeof(nome) != "string") {
    console.log('O nome deve conter pelo menos 5 caracteres');
    nome = prompt('Insira o nome corretamente: ');
}

let CPF = prompt('Insira o CPF (Exatamente 11 digitos)');
let CPFn = parseInt(CPF);
while(CPF.length != 11 || typeof(CPFn) != "number") {
    console.log('O CPF deve ter exatos 11 digitos');
    CPF = prompt('Insira o CPF corretamente: ');
    CPFn = parseInt(CPF);
}

let dataNascimento = prompt('Insira a data de nascimento no formado DD/MM/AAAA: ');
nascimento = dataNascimento.split('/');
let dn = new Date(nascimento[2],nascimento[1],nascimento[0]);
let agora = new Date();
let diff = agora.getUTCFullYear() - dn.getUTCFullYear();
while(dataNascimento.length != 10 || dataNascimento[2] != '/' || dataNascimento[5] != '/' || diff < 18) {
    console.log('As regras para a data de nascimento nao foram respeitadas');
    dataNascimento = prompt('Insira a data de nascimento no formado DD/MM/AAAA: ');
    nascimento = dataNascimento.split('/');
    dn = new Date(nascimento[2],nascimento[1],nascimento[0]);
    agora = new Date();
    diff = agora.getUTCFullYear() - dn.getUTCFullYear();
}


let rendaMensal = prompt('Insira a renda mensal no formato com duas casas decimais e virgula decimal: ');
let r = rendaMensal.split(",");
while(r[1].length != 2) {
    rendaMensal = prompt('Insira a renda mensal no formato com duas casas decimais e virgula decimal: ');
    r = rendaMensal.split(",");
    console.log(`${r[0]}`);
    console.log(`${r[1]}`);
    console.log(`${r[1].length}`);
}

let estadoCivil = prompt('Insira o estado civil C, S, V ou D (maiusculo ou minusculo: ');
let estadosCivis = "CcSsVvDd"
while(!estadoCivil.includes(estadoCivil)) {
    estadoCivil = prompt('Insira o estado civil C, S, V ou D (maiusculo ou minusculo: ');
}

let dependentes = prompt('Insira a quantidade de dependentes(0 a 10)');

while(dependentes > 10 || dependentes < 0) {
    console.log('Esse numero de dependentes nao e aceito');
    dependentes = prompt('Insira a quantidade de dependentes(0 a 10)');    
}

p = new Pessoa(nome, CPFn, dn, rendaMensal, estadoCivil, dependentes);
p.imprimeDados();