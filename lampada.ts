export class lampada{
    private status : boolean;

    constructor(status: boolean){
        this.status = status;
    }

    ligar(){
        this.status=true;
    }
    desligar(){
        this.status=false;
    }
    observar(){
        if(this.status == true){
            console.log("Ligado")
        }else{
            console.log("Desligado");
        }
    }
}