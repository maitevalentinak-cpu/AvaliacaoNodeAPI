import express from "express"
import ControllerTitulo from '../controller/pessoa.js'
const router =express.Router()

router.post("/buscar", ControllerPessoa.Buscar )
router.get("/buscarUm/:id",ControllerPessoa.BuscarUm )
router.post("criar",ControllerPessoa.criar )
router.get("/alterar/:id", ControllerPessoa.Alterar)
router.post("/deletar/:id",ControllerPessoa.Deletar )

export default router