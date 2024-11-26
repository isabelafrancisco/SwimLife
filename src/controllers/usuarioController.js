var usuarioModel = require("../models/usuarioModel");
var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) { /* entrar com o usuário cadastrado no site */
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        // aquarioModel.buscarAquariosPorEmpresa(resultadoAutenticar[0].empresaId)
                            // .then((resultadoAquarios) => {
                                // if (resultadoAquarios.length > 0) {
                                    res.json({
                                        id: resultadoAutenticar[0].idcadastro,
                                        nome: resultadoAutenticar[0].usuario,
                                        // cpf: resultadoAutenticar[0].cpf,
                                        email: resultadoAutenticar[0].email,
                                        senha: resultadoAutenticar[0].senha
                                        // aquarios: resultadoAquarios
                                    });
                                // } else {
                                //     res.status(204).json({ aquarios: [] });
                                // }
                            // })
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) { /* cadastrar usuário */
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    // var cpf = req.body.cpfServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    // var fkEmpresa = req.body.idEmpresaVincularServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    // } else if (cpf == undefined) {
    //     res.status(400).send("Seu cpf está undefined!");
    // } 
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } 
    // else if (fkEmpresa == undefined) {
    //     res.status(400).send("Sua empresa a vincular está undefined!");
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function inserir(req, res) { /* inserindo o id do usuário e o id da notícia */

    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idNoticia = req.body.idNoticiaServer;
    var idUsuario = req.body.idUsuarioServer;

        usuarioModel.inserir(idUsuario, idNoticia)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
}

function plotar(req, res){ /* pegando a fknoticia e a quantidade de cliques que teve */
        usuarioModel.plotar()
            .then(
                function (resultadoAutenticar) {
                      res.json({
                                        noticia1: resultadoAutenticar[0].noticia, 
                                        quantidade1: resultadoAutenticar[0].quantidade,
                                        noticia2: resultadoAutenticar[1].noticia, 
                                        quantidade2: resultadoAutenticar[1].quantidade,
                                        noticia3: resultadoAutenticar[2].noticia, 
                                        quantidade3: resultadoAutenticar[2].quantidade,
                                        noticia4: resultadoAutenticar[3].noticia, 
                                        quantidade4: resultadoAutenticar[3].quantidade,
                                        
                                    });}
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                } 
            );
    
}


module.exports = {
    autenticar,
    cadastrar,
    inserir,
    plotar
}