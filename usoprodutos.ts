import{produto} from "./produto"
let a:produto = new produto(1, "caixa");

a.BaixaEstoque(100);
a.ImplantaEstoque(100);
a.BaixaEstoque(10);
a.ImprimirDado();