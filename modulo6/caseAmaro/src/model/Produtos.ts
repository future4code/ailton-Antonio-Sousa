export default class Produtos  {
    constructor(
        private id:string,
        private name:string,
        private tags:string
    ){}

    public getId() {
        return this.id
    }
    public getName() {
        return this.name
    }
    public getTags() {
        return this.tags
    }
}

export interface ProdutosDTO {
    id:string, name:string, tags:string
}