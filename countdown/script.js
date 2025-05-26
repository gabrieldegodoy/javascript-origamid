import Countdown from "./countdown.js";

const tempoParaONatal = new Countdown('24 December 2025 23:59:59 GMT-0300');
const tempoParaOAnoNovo = new Countdown('31 December 2025 23:59:59 GMT-0300');

console.log(`Faltam ${tempoParaONatal.total.days} dias, ${tempoParaONatal.total.hours} horas, ${tempoParaONatal.total.minutes} minutos e ${tempoParaONatal.total.seconds} segundos para o natal`);

setInterval(() => {
  console.log(`Faltam ${tempoParaOAnoNovo.total.days} dias, ${tempoParaOAnoNovo.total.hours} horas, ${tempoParaOAnoNovo.total.minutes} minutos e ${tempoParaOAnoNovo.total.seconds} segundos para o ano novo`);
}, 1000);

