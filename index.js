const vitorias = 278;
const derrotas = 47;
const mensagem = nivelRank(vitorias, derrotas);
console.log(mensagem);


function nivelRank(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;
  let nivelHeroi;

  if (vitorias < 10) {
      nivelHeroi = "Ferro";
  } else if (vitorias >= 10 && vitorias <= 20) {
      nivelHeroi = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
      nivelHeroi = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
      nivelHeroi = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
      nivelHeroi = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
      nivelHeroi = "Lendário";
  } else {
      nivelHeroi = "Imortal";
  }

  return `O Herói possui o saldo de ${saldoVitorias} vitórias e está no nível ${nivelHeroi}`;
}

