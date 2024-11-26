var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) { /* cadastrar usuário */
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) { /* entrar com o usuário cadastrado no site */
    usuarioController.autenticar(req, res);
});

router.post("/inserir", function (req, res) { /* id do usuário e o número da notícia */
})

router.post("/plotar", function (req, res) { /* pegar as notícias e contar a quantidade baseada no grupo de notícias */
    usuarioController.plotar(req, res)
})

module.exports = router;