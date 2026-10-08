class ControllerTitulo {

  Buscar(req, res) {
    try {
     
      const nomes = ServiceTitulo.Buscar()
      res.send({ nomes })
    } catch (error) {
      res.send({ message: error.mesage })
    }
  }

  BuscarUm(req, res) {
  try {
    const id = req.params.id
    const nome = ServiceTitulo.BuscarUm(id)

    res.send({ nome})
      } catch (error) {
       res.send({ message: error.mesage})
    }
    
  }


 
  Alterar(req, res) {
    try {
      const id = req.params.id
      const nome = req.body.nome
     
      const sub = ServiceTitulo.Alterar(id,nome)
      res.send({ mesage: " Alterado com sucesso!"})
    } catch (error) {
      res.send({ message: error.mesage })
    }
  }
  Deletar(req, res) {
    try {
      const id= req.params.id

      ServiceTitulo.Deletar(id)
      
      res.send({ message:"Deletado com sucesso!" })
    } catch (error) {
      res.send({ message: error.mesage })
    }
  }
}
export default new ControllerTitulo()
