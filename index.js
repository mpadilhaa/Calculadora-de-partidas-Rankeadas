const rankedResults = (victories, loses) => {
  return victories - loses;
};

const result = rankedResults(120, 12);

const rankedLevelMsg = (level) => {
  console.log(`O Herói tem de saldo de ${result} está no nível de ${level}`);
};

if (result < 10) {
  rankedLevelMsg("Ferro");
} else if (result >= 11 && result <= 20) {
  rankedLevelMsg("Bronze");
} else if (result >= 21 && result <= 50) {
  rankedLevelMsg("Prata");
} else if (result >= 51 && result <= 80) {
  rankedLevelMsg("Ouro");
} else if (result >= 81 && result <= 90) {
  rankedLevelMsg("Diamante");
} else if (result >= 91 && result <= 100) {
  rankedLevelMsg("Lendário");
} else if (result >= 101) {
  rankedLevelMsg("Imortal");
}
