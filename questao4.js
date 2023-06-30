class Aluno {
    #matricula;
    #nome;
    #P1 = -10;
    #P2 = -10;
    constructor(nome, matricula) {
        this.#matricula = matricula;
        this.#nome = nome;
    }

    get getNome() {
        return this.#nome;
    }

    get getMatricula() {
        return this.#matricula;
    }

    setP1(nota) {
        this.#P1 = nota;
        console.log(`NOTA DA P1 PARA O ALUNO ${this.#nome} LANCADA - ${nota}`);
    }

    setP2(nota) {
        this.#P2 = nota;
        console.log(`NOTA DA P2 PARA O ALUNO ${this.#nome} LANCADA - ${nota}`);
    }

    get getP1() {
        return this.#P1;
    }

    get getP2() {
        return this.#P2;
    }

}

class Turma {
    #alunos = [];
    #qtdAlunos;
    constructor(qtdAlunos) {
        this.#qtdAlunos = qtdAlunos;
    }

    insereAluno(nome, matricula) {
        for(let i = 0; i < this.#alunos.length; i++) {
            if(matricula == this.#alunos[i].getMatricula) {
                throw "dois alunos com a mesma matricula nao podem ser inseridos!";
            }
        }
        this.#alunos.push(new Aluno(nome, matricula));
    }

    removeAluno(matricula) {
        for(let i = 0; i < this.#alunos.length; i++) {
            if(this.#alunos[i].getMatricula == matricula) {
                delete this.#alunos[i];
                this.#qtdAlunos--;
                return true;
            }
        }
        return false;
    }

    lancaNota(matricula, prova, nota) {
        for(let i = 0; i < this.#alunos.length; i++) {
            if(this.#alunos[i].getMatricula == matricula) {
                console.log('ALUNO ENCONTRADO');
                if(prova == 1) {
                    this.#alunos[i].setP1(nota);
                    console.log('NOTA LANCADA');
                }
                else if(prova == 2) {
                    this.#alunos[i].setP2(nota);
                    console.log('NOTA LANCADA');
                }
                else {
                    console.log('insira 1 ou 2');
                }
            }
        }
    }

    get getQtdAlunos() {
        return this.#qtdAlunos;
    }

    get getAlunos() {
        return this.#alunos;
    }

    imprimeTurma() {
        this.#alunos = this.#alunos.sort((a,b) => (a.getNome.toLowerCase() < b.getNome.toLowerCase()) ? -1 : ((b.getNome.toLowerCase() > a.getNome.toLowerCase()) ? 1 : 0));
        console.log('---------------------------------------');
        console.log('Matricula Nome             P1   P2   NF');
        console.log('---------------------------------------');
        for(let i = 0; i < this.#alunos.length; i++) {
            let NF;
            let aluno = this.#alunos[i];
            if(aluno.getP1 == -10 && aluno.getP2 == -10) {
                let NF = 0;
                console.log(`   ${aluno.getMatricula}       ${aluno.getNome}           -   -  ${NF}`);
            }
            else if(aluno.getP1 == -10 && aluno.getP2 != -10){
                let NF = parseFloat(aluno.getP2) / 2;
                console.log(`   ${aluno.getMatricula}       ${aluno.getNome}           -   ${aluno.getP2}  ${NF}`);
            }
            else if(aluno.getP1 != -10 && aluno.getP2 == -10){
                let NF = parseFloat(aluno.getP1) / 2;
                console.log(`   ${aluno.getMatricula}       ${aluno.getNome}           ${aluno.getP1}   -  ${NF}`);
            }
            else {
                let NF = (parseFloat(aluno.getP1) + parseFloat(aluno.getP2)) / 2;
                console.log(`   ${aluno.getMatricula}       ${aluno.getNome}           ${aluno.getP1}   ${aluno.getP2}  ${NF}`);
            }
        }
    }
}

const prompt = require("prompt-sync")({ signint : true });
try {
    let numeroAlunos = prompt('Insira a quantidade de alunos da turmna ');
    const t = new Turma(numeroAlunos);
    for(let i = 0; i < numeroAlunos; i++) {
        let nome = prompt(`Insira o nome do ${i + 1}o aluno: `);
        let matricula = prompt(`Insira a matricula do ${i + 1}o aluno: `);
        t.insereAluno(nome, matricula);
    }
    while(true) {
        console.log('LANCAMENTO DE NOTAS ------  DIGITE -1 A QUALQUER MOMENTO PARA SAIR ');
        let matricula = prompt('INSIRA A MATRICULA DO ALUNO: ');
        if(matricula == -1) {
            break;
        }
        let prova = prompt('DIGITE 1 PARA LANCAR NOTA DA P1 E 2 PARA LANCAR NOTA DA P2: ');
        if(prova == -1) {
            break;
        }
        let nota = prompt('INSIRA A NOTA: ');
        if(nota == -1) {
            break;
        }
        else {
            t.lancaNota(matricula, prova, nota)
        }
    }
    t.imprimeTurma();
}
catch(e) {
    console.log(e);
}
