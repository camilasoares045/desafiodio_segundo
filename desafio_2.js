let nome = "Link";
let vitorias = 250;
let derrotas = 6;
let nivel;

//para calcular o numero de vitorias e derrotas
function subDerrotas(vitorias, derrotas) {
    return vitorias - derrotas
}

var saldoVitorias = subDerrotas(vitorias, derrotas)

const pontos = {
    10: "Ferro",
    20: "Bronze",
    50: "Prata",
    80: "Ouro",
    90: "Diamante",
    100: "Lendario",
};

//para checar nivel do personagem
for (let exp in pontos) {
    if (saldoVitorias <= exp) {
        nivel = pontos[exp];
        break;
    }
}

if (!nivel) {
    nivel = "Imortal"; // Se a experiência for maior que o valor máximo definido
}

console.log(`O Herói ${nome} tem de saldo de ${saldoVitorias} pontos e está no nível de ${nivel}`)