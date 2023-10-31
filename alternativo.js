let nome = "Link";
let vitorias = 250;
let derrotas = 6;

function subDerrotas(vitorias, derrotas) {
    // Validação de entrada
    if (typeof vitorias !== 'number' || typeof derrotas !== 'number' || vitorias < 0 || derrotas < 0) {
        throw new Error('Vitórias e derrotas devem ser números inteiros positivos.');
    }

    return vitorias - derrotas;
}

function calcularNivel(nome, vitorias, derrotas) {
    let saldoVitorias = subDerrotas(vitorias, derrotas);

    let pontos = {
        10: "Ferro",
        20: "Bronze",
        50: "Prata",
        80: "Ouro",
        90: "Diamante",
        100: "Lendario",
    };

    for (let exp in pontos) {
        if (saldoVitorias <= exp) {
            return `O Herói ${nome} tem saldo de ${saldoVitorias} pontos e está no nível de ${pontos[exp]}`;
        }
    }

    return `O Herói ${nome} tem saldo de ${saldoVitorias} pontos e está no nível de Imortal`;
}

let resultado = calcularNivel(nome, vitorias, derrotas);
console.log(resultado);
