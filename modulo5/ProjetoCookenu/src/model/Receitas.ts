export class Receitas {
    constructor(
        private id: string,
        private title: string,
        private descricao: string,
        private preparo: string,
        private data: string,
        private user_id:string
    ) { }

    public getId() {
        return this.id
    }
    public getTitle() {
        return this.title
    }
    public getDescricao() {
        return this.descricao
    }
    public getPreparo() {
        return this.preparo
    }
    public getData() {
        return this.data
    }
    public getUser_id() {
        return this.user_id
    }

}