import{lampada}  from "./lampada"
let lampada1:lampada = new lampada(true);
let lampada2:lampada = new lampada(false);
lampada1.ligar
lampada2.desligar
lampada1.observar();
lampada2.observar();