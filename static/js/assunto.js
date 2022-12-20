export class Assunto {
    constructor(nome, descricao, nivelDominio, contexto, nivelComplexidade, jaConheciaAntes) {
        this._id = Math.floor(Math.random() * (100000 - 1) + 1);
        this._nome = nome;
        this._descricao = descricao;
        this._nivelDominio = nivelDominio;
        this._contexto = contexto;
        this._nivelComplexidade = nivelComplexidade;
        this._jaConheciaAntes = jaConheciaAntes;
    }
    get id() {
        return this._id;
    }
    get nome() {
        return this._nome;
    }
    get descricao() {
        return this._descricao;
    }
    get nivelDominio() {
        return this._nivelDominio;
    }
    get context() {
        return this._contexto;
    }
    get nivelComplexidade() {
        return this._nivelComplexidade;
    }
    get jaConheciaAntes() {
        return this._jaConheciaAntes;
    }
}
