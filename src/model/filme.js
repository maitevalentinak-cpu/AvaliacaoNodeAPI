const nomes = Array("Ana", "Batata", "João")
 
class Titulo {
    Buscar() {
        return nomes
    }
 
    BuscarUm(id) {
        return nomes[id]
    }
 
    Alterar(id, nome) {
        nomes[id] = nome
    }
 
    Deletar(id) {
        nomes.splice(id, 1)
    }
}
 
export default new Titulo()