export class produto{
    private codigo: number=0;
    private descricao: string="";
    private Umedida: number=0;
    private QTD: number=0;

    constructor(codigo: number, descricao: string){
        this.codigo = codigo;
        this.descricao = descricao;
        this.Umedida = 0;
        this.QTD = 0;
    }

    RetornaEstoque(){
        console.log("Possue em estoque :" + this.QTD);
    }

    ImplantaEstoque(imp: number){
        this.QTD+=imp;
    }

    BaixaEstoque(baixa: number): boolean{
        if(this.QTD> baixa){
            this.QTD-=baixa;
        }else{
            console.log("Estoque Insufiente")
            return false;
        }
    }
    
    ImprimirDado(){
        console.log("Código: " + this.codigo);
        console.log("Descrição :" + this.descricao);
        console.log("Undidade de Medidia :" + this.Umedida);
        console.log("Quantidade :" + this.QTD);
    }
};

