export class carro{
    private marca: string="";
    private modelo: string="";
    private placa: string="";
    private velo: number=0;
    private velomax: number=100;

    constructor(marca: string, modelo: string, placa: string){
        this.marca = marca;
        this.modelo = modelo;
        this.placa = placa;
        this.velo = 0;
        this.velomax = 100;
    }
    
    Acelerar(ace: number): boolean {
        if(this.velomax > this.velo){
            if (ace < 11){
                this.velo+=ace;
            }else{
                console.log("Não acelera mais que 10");
                return false;
            }
        }else{
            console.log("Velocidade Maxima atingida");
            return false;
        }
        
    }
    Frear(): boolean{
        if(this.velo > 0){
            this.velo-=10;
        }else{
            console.log("Carro está parado!")
            return false;
        }


    }
    ImprimirDados(){
        console.log("marca: " + this.marca);
        console.log("moledo: " + this.modelo);
        console.log("placa: " + this.placa);
        console.log("Velocidade:" + this.velo);
        console.log("Velocidade Máxima: " + this.velomax);
    }
}
