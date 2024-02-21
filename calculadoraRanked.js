// Função para calcular o nível do jogador com base no número de vitórias
function calcularNivelHeroi(saldoVitorias) {
    let nivel;

    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return nivel;
}

// uso da função
let saldoVitorias = 75;
let nivel = calcularNivelHeroi(saldoVitorias);
console.log(`O Jogador com saldo de ${saldoVitorias} vitórias está no nível ranking ${nivel}`);
