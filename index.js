'use strict'

//import { Partes } from "./partesForca.js";


function novaDica() {
    const dica = document.querySelector('.dica-jogo'); // seleciona a div 'dica-jogo';
    const textoDica = document.createElement('h2'); // cria elemento h2 dentro da div 'dica-jogo';
    textoDica.setAttribute('class', "dica") // adiciona atributo class com o nome 'dica'; 
    const novaDica = dica.appendChild(textoDica) // cria elemento filho na div 'dica-jogo'
    novaDica.innerHTML=`Dica 2: ` // insere elemento dentro do HTML;
    var dicaSelecionada = 'Proporciona alta troca de dados entre os equipamentos em até 20km de distância' // cria string com texto para ser adicionado junto com o elemento que foi criado;
    novaDica.innerHTML+=dicaSelecionada // insere string de texto junto com o elemento filho h2 que foi criado.
    const bntNovaDica = document.querySelector('.bntNovaDica')
    bntNovaDica.disabled=true
}
//novaDica()


function criaConteudo(){
    const conteudoJogo = document.querySelector('.conteudo-jogo');
    const adicionaConteudo = document.createElement('div');
    adicionaConteudo.setAttribute('class', 'boneco')
    //const novoConteudo = conteudoJogo.appendChild(adicionaConteudo);
    //const novoConteudo = conteudoJogo.insertBefore(adicionaConteudo, conteudoJogo[0]);
    //novoConteudo.innerHTML='Proporciona alta troca de dados entre os equipamentos'

}

criaConteudo();


const pegaDivForca = document.querySelector('#forca')


//pegaDivForca.innerHTML=forca


// MODELO SE A LETRA ESTIVER CORRETA.
const a = document.querySelector('#A').addEventListener('click', () =>{
    document.querySelector('#A').disabled = true;
    var insereResult = document.getElementById('letraA');
    insereResult.innerHTML='A';
    var insereResult = document.getElementById('letraAa');
    insereResult.innerHTML='A';
})

const b = document.querySelector('#B').addEventListener('click', () =>{
    document.querySelector('#B').disabled = true;
    var insereResult = document.getElementById('letraB');
    insereResult.innerHTML='B';
})

const f = document.querySelector('#F').addEventListener('click', () =>{
    document.querySelector('#F').disabled = true;
    var insereResult = document.getElementById('letraF');
    insereResult.innerHTML='F';
})

const i = document.querySelector('#I').addEventListener('click', () =>{
    document.querySelector('#I').disabled = true;
    var insereResult = document.getElementById('letraI');
    insereResult.innerHTML='I';
    var insereResult = document.getElementById('letraIi');
    insereResult.innerHTML='I';
})

const r = document.querySelector('#R').addEventListener('click', () =>{
    document.querySelector('#R').disabled = true;
    var insereResult = document.getElementById('letraR');
    insereResult.innerHTML='R';
})

const o = document.querySelector('#O').addEventListener('click', () =>{
    document.querySelector('#O').disabled = true;
    var insereResult = document.getElementById('letraO');
    insereResult.innerHTML='O';
})
const p = document.querySelector('#P').addEventListener('click', () =>{
    document.querySelector('#P').disabled = true;
    var insereResult = document.getElementById('letraP');
    insereResult.innerHTML='P';
})

const t = document.querySelector('#T').addEventListener('click', () =>{
    document.querySelector('#T').disabled = true;
    var insereResult = document.getElementById('letraT');
    insereResult.innerHTML='T';
})

const c = document.querySelector('#C').addEventListener('click', () =>{
    document.querySelector('#C').disabled = true;
    var insereResult = document.getElementById('letraC');
    insereResult.innerHTML='C';
})


const forcaCab = `<div id="forca">
<img class="forcaIMG" src="./img/cabca-.png"" alt="">
</div>`

const forcaCorpo = `<div id="forca">
<img class="forcaIMG" src="./img/corpo-.png"" alt="">
</div>`

const forcaBraEsq = `<div id="forca">
<img class="forcaIMG" src="./img/braco-esq.png"" alt="">
</div>`

const forcaBraDir = `<div id="forca">
<img class="forcaIMG" src="./img/braco-dir.png"" alt="">
</div>`

const forcaPeEsq = `<div id="forca">
<img class="forcaIMG" src="./img/pe-esq.png"" alt="">
</div>
`
const forcaPeDir = `<div id="forca">
<img class="forcaIMG" src="./img/pe-dir.png"" alt="">
</div>`

const forcaOlhos = `<div id="forca">
<img class="forcaIMG" src="./img/olhos-fim.png"" alt="">
</div>`


const Partes = {
    cabeca: forcaCab,
    corpo: forcaCorpo,
    bracoEsq: forcaBraEsq,
    bracoDir: forcaBraDir,
    peEsq: forcaPeEsq,
    peDir: forcaPeDir,
    olhos: forcaOlhos,
}

// CRIA MENSAGEM DE FIM DE JOGO 
const gameOver = `<div id="forca">
<img class="forcaIMG" src="/fimdejogo.gif"" alt="">
</div>`






const letras = []

function adicionarLetra(letra) {
    letras.push(letra);

}

// Adicionei um evento para escultar todas as letras clicadas.
var letrasHTML = document.getElementsByClassName('btnss');
for (var l = 0; l < letrasHTML.length; l++) {
    letrasHTML[l].addEventListener("click", function(event) {
        var letraClicada = event.target.textContent;
        var letraDisabled = event.target;

        adicionarLetra(letraClicada);
        console.log(letraClicada)
        console.log(letras)
        if(letras.length == 1){
            console.log(`letra ${letraClicada} clicada`)
            var insereCab = document.getElementById('forca');
            insereCab.innerHTML=Partes.cabeca;
            letraDisabled.disabled=true
            
        }
        if(letras.length == 2){
            console.log(`letra ${letraClicada} clicada`)
            var insereCab = document.getElementById('forca');
            insereCab.innerHTML=Partes.corpo;
            letraDisabled.disabled=true
        }
        if(letras.length == 3){
            console.log(`letra ${letraClicada} clicada`)
            var insereCab = document.getElementById('forca');
            insereCab.innerHTML=Partes.bracoEsq;
            letraDisabled.disabled=true
        }
        if(letras.length == 4){
            console.log(`letra ${letraClicada} clicada`)
            var insereCab = document.getElementById('forca');
            insereCab.innerHTML=Partes.bracoDir;
            letraDisabled.disabled=true
        }
        if(letras.length == 5){
            console.log(`letra ${letraClicada} clicada`)
            var insereCab = document.getElementById('forca');
            insereCab.innerHTML=Partes.peEsq;
            letraDisabled.disabled=true
        }
        if(letras.length == 6){
            console.log(`letra ${letraClicada} clicada`)
            var insereCab = document.getElementById('forca');
            insereCab.innerHTML=Partes.peDir;
            letraDisabled.disabled=true
        }
        if(letras.length == 7){
            console.log(`letra ${letraClicada} clicada`)
            var insereCab = document.getElementById('forca');
            insereCab.innerHTML=Partes.olhos;
            letraDisabled.disabled=true
        }
        // 
        if(letras.length >= 7){
            console.log(`letra ${letraClicada} clicada`)
            var insereCab = document.getElementById('forca');
            insereCab.innerHTML=gameOver
            //letraDisabled.disabled=true
        }
    });

}






























/* const contador = []
console.log(contador)

const s = document.querySelector('#S').addEventListener('click', function() {
    document.querySelector('#S').disabled = true;
    var adcS = 'S';
    contador.push(adcS);
    contador.join(',');
    console.log(contador)
    return adcS;
}) */