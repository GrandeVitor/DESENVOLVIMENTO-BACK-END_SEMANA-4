import express from 'express'
import Instrumento from './models/Instrumento.js';
const app = express();
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
//Liberar acesso a pasta public
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(__dirname + '/public'))

// Configurações
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Rota inicial
app.get('/', (req, res) => {
    res.render('index');
});

//rota lista instrumentos
app.get('/instrumento/lst', async (req, res) => {
const instrumentos = await Instrumento.find();
res.render("instrumento/lst", { instrumentos });
})

app.get('/instrumento/add', (req, res) => {
res.render('instrumento/add');
});

//rota para adicionar instrumento
app.post('/instrumento/add/ok', async (req, res) => {
const { nome, fabricante, preco, tipo } = req.body;
await Instrumento.create({ nome, fabricante, preco, tipo });
res.render("instrumento/addok", { nome });
})

app.listen(3000, () => {
console.log('Servidor rodando na porta http://localhost:3000');
})