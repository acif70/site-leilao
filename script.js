function atualizarTimer() {
  const agora = new Date();
  const fim = new Date(END_DATE);

  const diff = fim - agora;

  const timerEl = document.getElementById("timer");

  if (diff <= 0) {
    timerEl.textContent = "ENCERRADO";
    return;
  }

  const totalSeg = Math.floor(diff / 1000);
  const horas = Math.floor(totalSeg / 3600);
  const minutos = Math.floor((totalSeg % 3600) / 60);
  const segundos = totalSeg % 60;

  timerEl.textContent =
    String(horas).padStart(2, "0") + "h " +
    String(minutos).padStart(2, "0") + "m " +
    String(segundos).padStart(2, "0") + "s";
}

setInterval(atualizarTimer, 1000);
atualizarTimer();
