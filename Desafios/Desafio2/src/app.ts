// Como podemos melhorar o esse código usando TS? 
enum Profissoes {
    Padeiro,
    Atriz,
    Pedreiro

}

interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissoes
}
///////////////////---PESSOA---//////////////////////////
const pessoa1 = {} as Pessoa;
pessoa1.nome = "Maria";
pessoa1.idade = 29;
pessoa1.profissao = Profissoes.Atriz;
///////////////////---PESSOA---//////////////////////////
const pessoa2 = {
    nome: "Roberto",
    idade: 19,
    profissao: Profissoes.Padeiro
}
//////////////////////////////////////////
class pessoaClasse {
    private _nome: string;
    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }
    private _idade: number;
    public get idade(): number {
        return this._idade;
    }
    public set idade(value: number) {
        this._idade = value;
    }
    private _profissao: Profissoes;
    public get profissao(): Profissoes {
        return this._profissao;
    }
    public set profissao(value: Profissoes) {
        this._profissao = value;
    }

    constructor(nomeContructor: string = "", idade: number = 0, profissao: Profissoes = Profissoes.Atriz) {
        this._nome = nomeContructor
        this._idade = idade
        this._profissao = profissao

    }
}
///////////////////---PESSOA---//////////////////////////
const pessoa3 = new pessoaClasse("laura", 32, Profissoes.Atriz);
///////////////////---PESSOA---//////////////////////////
const pessoa4 = new pessoaClasse();
pessoa4.idade = 19;
pessoa4.nome = "carlos";
pessoa4.profissao = Profissoes.Padeiro;
