function atualizarTimer() {
  const agora = new Date();
  const fim = new Date(END_DATE);
  const diff = fim - agora;

  const timerEl = document.getElementById("timer");
  if (!timerEl) return;

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

/* ===== Modal Contato ===== */
const modal = document.getElementById("contatoModal");
const btnAbrir = document.getElementById("btnContato");
const btnFechar = document.getElementById("btnFecharContato");

function abrirModal() {
  if (!modal) return;
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
}

function fecharModal() {
  if (!modal) return;
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

btnAbrir && btnAbrir.addEventListener("click", abrirModal);
btnFechar && btnFechar.addEventListener("click", fecharModal);

modal && modal.addEventListener("click", (e) => {
  if (e.target === modal) fecharModal(); // clicou no fundo
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") fecharModal();
});
