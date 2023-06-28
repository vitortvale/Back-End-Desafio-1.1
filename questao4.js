class Aluno {
    #matricula;
    #nome;
    #P1 = '-';
    #P2 = '-';
    constructor(matricula, nome) {
        this.#matricula = matricula;
        this.#nome = nome;
    }

    get getNome() {
        return this.#nome;
    }

    get getMatricula() {
        return this.#matricula;
    }

    lancaP1(notaP1) {
        this.#P1 = notaP1;
    }

    
    lancaP2(notaP2) {
        this.#P2 = notaP2;
    }

}

class Turma {
    #alunos = [];
    constructor(qtdAlunos) {
        this.#alunos = qtdAlunos;
    }

    insereAluno(nome, matricula) {
        for(let i = 0; i < this.#alunos.length; i++) {
            if(matricula == this.#aluno[i].getMatricula) {
                console.log('Dois alunos com a mesma matricula nao podem ser adicionados');
                return false;
            }
        }
        this.#alunos[this.#alunos.length] = new Aluno(nome, matricula);
    }
}