const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router();

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');
/*req e res são parâmetros de um middleware, que é um interceptador. No caso toda vez que a url /teste for
chamada, ela vai ser interceptada aqui*/
/* req é a parte da requisiçao, qualquer informação que o cliente envia para o servidor estará dentro do req*/
/* res é a reposta para o cliente*/
routes.get('/teste', (req, res) => {
    return res.send('Hello World');
})

routes.post("/boxes", BoxController.store);
routes.get("/boxes/:id", BoxController.show);

routes.post(
    "/boxes/:id/files", 
    multer(multerConfig).single("file"), 
    FileController.store
);

module.exports = routes;