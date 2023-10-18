let div = document.getElementById('resultado');
let al = new CONTACORRENTE();
let btnEdit = document.getElementById('btnEdit');
let btnSave = document.getElementById('salvar');
let btn = document.getElementById('btn');

function exibir() {

  al.nomeBanco = document.getElementById('nomeBanco').value;
  al.numeroAgencia = document.getElementById('numeroAgencia').value;
  al.nome = document.getElementById('nome').value;
  al.sobrenome = document.getElementById('sobrenome').value;
  al.numeroConta = document.getElementById('numeroConta').value;
  al.dataAbertura = document.getElementById('dataAbertura').value;
  al.saldoInicial = document.getElementById('saldoInicial').value;
  al.cidade = document.getElementById('cidade').value;
  al.estado = document.getElementById('estado').value;

  div.innerHTML = `<p class="alert alert-success">${al.ImprimirDados()}</p>`;
}

function CarregarModal() {

  document.getElementById('nomeBancoEdit').value = al.nomeBanco;
  document.getElementById('numeroAgenciaEdit').value = al.numeroAgencia;
  document.getElementById('nomeEdit').value = al.nome;
  document.getElementById('sobrenomeEdit').value = al.sobrenome;
  document.getElementById('numeroContaEdit').value = al.numeroConta;
  document.getElementById('dataAberturaEdit').value = al.dataAbertura;
  document.getElementById('saldoInicialEdit').value = al.saldoInicial;
  document.getElementById('cidadeEdit').value = al.cidade;
  document.getElementById('estadoEdit').value = al.estado;

}

function edit() {
  
  div.innerHTML = ('')

  al.nomeBanco = document.getElementById('nomeBancoEdit').value;
  al.numeroAgencia = document.getElementById('numeroAgenciaEdit').value;
  al.nome = document.getElementById('nomeEdit').value;
  al.sobrenome = document.getElementById('sobrenomeEdit').value;
  al.numeroConta = document.getElementById('numeroContaEdit').value;
  al.dataAbertura = document.getElementById('dataAberturaEdit').value;
  al.saldoInicial = document.getElementById('saldoInicialEdit').value;
  al.cidade = document.getElementById('cidadeEdit').value;
  al.estado = document.getElementById('estadoEdit').value;

  div.innerHTML = `
    <p class="alert alert-success">
      Banco: ${al.nomeBanco}<br>
      Agência: ${al.numeroAgencia}<br>
      Nome: ${al.nome}<br>
      Sobrenome: ${al.sobrenome}<br>
      Numero Da Conta: ${al.numeroConta}<br>
      Data De Abertura: ${al.dataAbertura}<br>
      Cidade: ${al.cidade}<br>
      Estado: ${al.estado}<br>
      Saldo Inicial: ${al.saldoInicial}<br>

      
    </p>
  `;
}

btn.addEventListener('click', exibir);
btnEdit.addEventListener('click', CarregarModal);
btnSave.addEventListener('click', edit);
