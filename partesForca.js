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


export const Partes = {
    cabeca: forcaCab,
    corpo: forcaCorpo,
    bracoEsq: forcaBraEsq,
    bracoDir: forcaBraDir,
    peEsq: forcaPeEsq,
    peDir: forcaPeDir,
    olhos: forcaOlhos,
}






// Array para armazenar as letras
let letras = [];

// Função para adicionar uma letra ao array
function adicionarLetra() {
    // Pode-se adicionar qualquer lógica para gerar a letra aqui
    // Neste exemplo, vamos adicionar letras de A a Z de forma sequencial
    const novaLetra = String.fromCharCode(65 + letras.length);
    
    // Adiciona a nova letra ao array
    letras.push(novaLetra);

    // Atualiza o conteúdo da página com o array atualizado
    atualizarArrayLetras();
}

// Função para atualizar o conteúdo da página com o array de letras
function atualizarArrayLetras() {
    const arrayLetrasElement = document.getElementById('arrayLetras');
    arrayLetrasElement.textContent = letras.join(', ');
}

// Adiciona um ouvinte de eventos ao botão para chamar a função quando for clicado
const botaoAdicionarLetra = document.getElementById('adicionarLetra');
botaoAdicionarLetra.addEventListener('click', adicionarLetra);














// Array para armazenar as letras
var letras0 = [];

// Função para adicionar uma letra ao array quando clicada
function adicionarLetra(letra) {
    letras.push(letra);

    // Atualize a exibição das letras adicionadas
    document.getElementById("letrasAdicionadas").textContent = letras.join(", ");
}

// Adicione ouvintes de evento a todas as letras (você pode criar as letras dinamicamente)
var letrasHTML = document.getElementsByClassName("letra");
for (var i = 0; i < letrasHTML.length; i++) {
    letrasHTML[i].addEventListener("click", function(event) {
        var letraClicada = event.target.textContent;
        adicionarLetra(letraClicada);
    });
}


