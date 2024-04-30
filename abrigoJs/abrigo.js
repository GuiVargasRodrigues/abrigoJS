const readline = require('readline-sync');

let abrigos = [];

function menu() {
  console.log("===== ABRIGOS TEMPORÁRIOS =====");
  console.log("1. Cadastrar abrigo");
  console.log("2. Listar abrigos");
  console.log("3. Procurar abrigo");
  console.log("4. Sair");
  console.log("Escolha uma opção:");
}

function cadastrarAbrigo() {
  console.log("Opção 1 - Cadastrar abrigo");

  // Solicitar informações sobre o novo abrigo
  let nome = readline.question("Nome do abrigo: ");
  let endereco = readline.question("Endereço do abrigo: ");
  let telefone = readline.question("Telefone do abrigo: ");
  let capacidade = Number(readline.question("Capacidade de lotação do abrigo: "));
  let cidade = readline.question("Cidade do abrigo: ");

  // Criar objeto com as informações do novo abrigo
  let novoAbrigo = {
    nome: nome,
    endereco: endereco,
    telefone: telefone,
    capacidade: capacidade,
    cidade: cidade
  };

  // Adicionar novo abrigo ao array de abrigos
  abrigos.push(novoAbrigo);

  console.log("Abrigo cadastrado com sucesso!");
}

function listarAbrigos() {
  console.log("Opção 2 - Listar abrigos");
  console.log("--------------------");
  console.log("LISTAGEM DE ABRIGOS:");
  console.log("--------------------");
  console.log("CÓDIGO |         NOME         |              ENDEREÇO              |   TELEFONE   |  CAPACIDADE | CIDADE");
  console.log("---------------------------------------------------------------------------------------------------------");
  abrigos.forEach((abrigo, index) => {
    console.log(`  ${index}  | ${abrigo.nome} | ${abrigo.endereco} | ${abrigo.telefone} | ${abrigo.capacidade} | ${abrigo.cidade}`);
  });
  console.log("---------------------------------------------------------------------------------------------------------");
}

function procurarAbrigo() {
  console.log("Opção 3 - Procurar abrigo");
  let cidade = readline.question("Qual cidade você está? ");
  console.log("--------------------");
  console.log("LISTAGEM DE ABRIGOS:");
  console.log("--------------------");
  console.log("CÓDIGO |         NOME         |              ENDEREÇO              |   TELEFONE   |  CAPACIDADE | CIDADE");
  console.log("---------------------------------------------------------------------------------------------------------");
  let encontrados = abrigos.filter(abrigo => abrigo.cidade.toLowerCase().includes(cidade.toLowerCase()));
  encontrados.forEach((abrigo, index) => {
    console.log(`  ${index}  | ${abrigo.nome} | ${abrigo.endereco} | ${abrigo.telefone} | ${abrigo.capacidade} | ${abrigo.cidade}`);
  });
  console.log("---------------------------------------------------------------------------------------------------------");
}

// Loop do menu
let opcao;
do {
  menu();
  opcao = Number(readline.question("Opção: "));
  switch (opcao) {
    case 1:
      cadastrarAbrigo();
      break;
    case 2:
      listarAbrigos();
      break;
    case 3:
      procurarAbrigo();
      break;
    case 4:
      console.log("Saindo...");
      break;
    default:
      console.log("Opção inválida.");
  }
} while (opcao !== 4);

