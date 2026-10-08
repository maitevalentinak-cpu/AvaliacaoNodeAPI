import titulo from "../controlle/filme.js";
import Titulo  from "../model/Titulo.js"
 
class ServiceTitulo{
 
    Buscar() {
        return titulo.Buscar()
    }
 
    BuscarUm(id) {
        if(!id || isNaN(id)) {
            throw new Error("imforme o ID")
        }
        return Titulo .BuscarUm(id)
    }
 
    Criar(nome) {
        if(!nome) {
            throw new Error(" Favor informar o nome");
        }
 
      Titulo .Criar(nome)
    }
 
    Alterar(id, nome) {
        if (!id || isNaN(id) || !nome) {
            throw new Error("Favor Informar todos os dados");
        }
        Titulo.Alterar(id, nome)
    }
 
    Deletar(id) {
        if(!id || isNaN(id)){
            throw new Error("Favor informar o ID corretamente");
           
        }
 
        Titulo.Deletar(id)
    }
 
   
}
 
export default new ServiceExercicio()