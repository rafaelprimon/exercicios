let peça = "torre";

switch (peça.toLowerCase()){
    case 'rei':
        console.log("Rei anda uma casa para qualquer direção.");
        break;
    case "rainha":
        console.log("Rainha simula o movimento de todas as peças.");
        break;
    case "bispo":
        console.log("Bispo anda nas diagonais");
        break;
    case "cavalo":
        console.log("Cavalo anda em L");
        break;
    case "torre":
        console.log("Torre anda muitas casas reto.");
        break;
    case "peão":
        console.log("Peão anda uma casa por vez, exceto no primeiro movimento do jogo em que pode andar 2.");
        break;
    default:
        console.log("Erro, não existe a peça!");
        break;
}