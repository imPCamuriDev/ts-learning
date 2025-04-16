type People<T = Aluno> = {
  nome: string;
  idade: number;
  profissao: T
};

type Aluno = {
    curso: string
};

interface Engenheiro {
    crea: string
}

interface Medico {
    crm: string
}

let medico:People<Medico>
let aluno:People;