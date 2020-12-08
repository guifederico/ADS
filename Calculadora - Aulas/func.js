function operacaoLenta(callback) {
    setTimeout(function () {
        callback('resultado da operacao lenta')
    }, 2000);

}

function facaAlgo(msg) {
    console.log(`estou fazendo algo ${msg}`)
}

function facaOutroAlgo() {
    console.log(`fazendo outro algo`);
}


//----------------
operacaoLenta(function (msg) {
    facaAlgo(msg);
})

facaOutroAlgo();