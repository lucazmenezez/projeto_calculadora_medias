const formulario = document.getElementById('formulario');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji festejando"/>';
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji Decepcionado"/>';
var linhas = ''
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite a nota mínima:'));

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
    calculaMediaFinal();
});

function adicionaLinha(){
    const nomeAtividade = document.getElementById('nome-atividade');
    const notaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(nomeAtividade.value)) {
        alert(`A atividade: ${nomeAtividade.value} já foi inserida`);
    } else {

    atividades.push(nomeAtividade.value);
    notas.push(parseFloat(notaAtividade.value));    
    
    var linha = '<tr>'
    linha += `<td>${nomeAtividade.value}</td>`;
    linha += `<td>${notaAtividade.value}</td>`;
    linha += `<td>${notaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}`;
    linha += '</tr>';

    linhas += linha;
    }

    nomeAtividade.value = '';
    notaAtividade.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal();
    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

    console.log(media);
}

function calculaMediaFinal(){
    var somaDasNotas = 0;

    for(var i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}