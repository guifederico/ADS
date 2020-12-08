var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('Oi, mundo :-)');
});

var port = 3001;

// iniciando o processo do servidor
app.listen(port, function() {
    console.log(`App de Exemplo escutando na porta http://localhost:${port}`);
});

app.post('/soma', function (req, res) {
    function soma(a, b) {
        return a + b;
    }
    var body = req.body;
    var resultado = soma(body.a, body.b);    
    res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);    
  });

app.post('/sub', function (req, res) {
    function sub(a, b) {
        return a - b;
    }
    var body = req.body;
    var ressub = sub(body.a, body.b );
    res.send(`O resultado da subtração de ${body.a} e ${body.b} é ${ressub}`);
});

app.post('/mult', function (req, res) {
    function mult(a, b) {
        return a * b;
    }
    var body = req.body;
    var resmult = mult(body.a, body.b);
    res.send(`O resultado da multiplicação de ${body.a} e ${body.b} é ${resmult}`);
});

app.post('/div', function (req, res) {
    function div(a, b) {
        return a / b;
    }
    var body = req.body;
    var resdiv = div(body.a, body.b);    
    res.send(`O resultado da divisão de ${body.a} e ${body.b} é ${resdiv}`);
})