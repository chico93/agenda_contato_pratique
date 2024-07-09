const form = document.getElementById('form-agenda');
const nomes = [];
const contatos = [];
let linhas='';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeAgenda = document.getElementById('nome-agenda');
    const inputContatoAgenda = document.getElementById('contato-agenda');

    if(contatos.includes(inputContatoAgenda.value)){
        alert(`O telefone: ${inputContatoAgenda.value} já foi salvo`);
    } else{
        contatos.push(parseFloat(inputContatoAgenda.value));
        nomes.push(parseFloat(inputNomeAgenda.value));

        let linha = '<tr>';

        linha += `<td>${inputNomeAgenda.value}</td>`;
        linha += `<td>${inputContatoAgenda.value}</td>`;
        linha += '</tr>'

        linhas += linha;
    
    }

    inputNomeAgenda.value = '';
    inputContatoAgenda.value = '';

}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

