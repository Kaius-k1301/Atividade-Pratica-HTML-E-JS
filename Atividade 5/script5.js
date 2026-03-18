const PONTOS_BRONZE = 50;//necessario 50 pontos para ficar no rank de bronze
const PONTOS_PRATA  = 75;//necessario 75 pontos para ficar no rank de prata
const PONTOS_OURO   = 100;//necessario 100 pontos para ficar no rank de ouro

function verificarRank() {
    const pontos = Number(document.getElementById("pontos").value);

    let rank;

    if (pontos >= PONTOS_OURO) {
        rank = "Ouro";
    } else if (pontos >= PONTOS_PRATA) {
        rank = "Prata";
    } else if (pontos >= PONTOS_BRONZE) {
        rank = "Bronze";
    } else {
        rank = "Sem rank";
    }

    document.getElementById("resultado").innerHTML = "Pontuação: " + pontos + " - Rank: " + rank;
}
