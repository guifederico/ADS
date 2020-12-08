var express = require('express'); // importar o express
var bodyParser =  require('body-parser'); // importar o body-parser
var path = require('path'); // importar lib path (nativa do node.js)
var expressLayouts = require('express-ejs-layouts');
var calc = require('./calculadora'); // importar modulo de calc. (calculadora.js)


var app = express(); // criar um app do express

// configura os dados oriondso da requisição http
app.use(bodyParser.urlencoded({extended: true}));

app.use(expressLayouts);

// configura o caminho para arquivos estaticos (img, css, html, js...)
app.use(express.static('public'));

app.set('view engine', 'ejs'); // setar o motor de views que será usado
app.set('views', path.join(__dirname, '/views')); // caminho da pasta 'views'

app.get('/', function (req, res) {
    const parametro = {
        titulo: 'Soma',
        data: Date.now()
    };
    res.render('index', parametro);
});

app.post('/soma', function(req, res) {
    var body = req.body;
    var a = parseFloat(body.a);
    var b = parseFloat(body.b);
    var resultado = calc.somar(body.a, body.b);
    res.render('resultado', {
        operacao: 'soma', 
        a: a,
        b: b,
        resultado: resultado
    });    
});

app.post('/subtracao', function(req, res) {
    console.log('subtracao');
    res.send('ok');
});

app.post('/divisao', function(req, res) {
    console.log('divisao');
    res.send('ok');
});

app.post('/multiplicacao', function(req, res) {
    console.log('multiplicacao');
    res.send('ok');
});

app.listen(3001, function() {
    console.log('Servidor executado na porta 3001');
});