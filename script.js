// ============================
// GALERIA: lista clicável
// ============================
const OBRAS = [
  {
    id: "obra-x",
    titulo: "Obra X",
    descricao: "Descrição da obra (edite aqui no script.js).",
    nome: "Obra X",
    numero: "—",
    tecnica: "—",
    etc: "—",
    img: "assets/img/obra-x.jpg"
  },
];

function initGaleria(){
  const list = document.getElementById("workList");
  if(!list) return;

  list.innerHTML = "";
  OBRAS.forEach((obra, idx) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = obra.titulo;
    a.addEventListener("click", (e) => {
      e.preventDefault();
      renderObra(obra);
      [...list.querySelectorAll("a")].forEach(x => x.classList.remove("active"));
      a.classList.add("active");
    });
    li.appendChild(a);
    list.appendChild(li);

    if(idx === 0) setTimeout(() => a.click(), 0);
  });
}

function renderObra(obra){
  const img = document.getElementById("workImg");
  const title = document.getElementById("workTitle");
  const desc = document.getElementById("workDesc");

  const fNome = document.getElementById("fNome");
  const fNumero = document.getElementById("fNumero");
  const fTecnica = document.getElementById("fTecnica");
  const fEtc = document.getElementById("fEtc");

  if(img){
    img.src = obra.img;
    img.alt = obra.titulo;
  }
  if(title) title.textContent = obra.titulo;
  if(desc) desc.textContent = obra.descricao;

  if(fNome) fNome.textContent = obra.nome;
  if(fNumero) fNumero.textContent = obra.numero;
  if(fTecnica) fTecnica.textContent = obra.tecnica;
  if(fEtc) fEtc.textContent = obra.etc;
}

// ============================
// LEILÃO: modais
// ============================
function initLeilaoModais(){
  const openInfo = document.getElementById("openInfo");
  const infoModal = document.getElementById("infoModal");

  const openForm = document.getElementById("openForm");
  const formModal = document.getElementById("formModal");

  function showModal(modal){
    if(!modal) return;
    modal.classList.add("show");
    modal.setAttribute("aria-hidden","false");
    document.body.style.overflow = "hidden";
  }

  function hideModal(modal){
    if(!modal) return;
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden","true");
    document.body.style.overflow = "";
  }

  if(openInfo && infoModal){
    openInfo.addEventListener("click", (e)=>{
      e.preventDefault();
      showModal(infoModal);
    });
  }

  if(openForm && formModal){
    openForm.addEventListener("click", ()=>{
      showModal(formModal);
    });
  }

  document.addEventListener("click", (e)=>{
    const btn = e.target.closest("[data-close]");
    if(btn){
      const id = btn.getAttribute("data-close");
      hideModal(document.getElementById(id));
    }
  });

  [infoModal, formModal].forEach((modal)=>{
    if(!modal) return;
    modal.addEventListener("click", (e)=>{
      if(e.target === modal) hideModal(modal);
    });
  });

  document.addEventListener("keydown", (e)=>{
    if(e.key !== "Escape") return;
    hideModal(infoModal);
    hideModal(formModal);
  });
}

// ============================
// LEILÃO: status + contador
// ============================
function initCountdown(){
  const countdownEl = document.getElementById("countdown");
  const statusEl = document.getElementById("statusLine");
  const endEl = document.getElementById("endAt");
  if(!countdownEl || !statusEl || !endEl) return;

  const iso = endEl.getAttribute("data-end");
  if(!iso) return;

  const endMs = Date.parse(iso);
  if(Number.isNaN(endMs)) return;

  function pad(n){ return String(n).padStart(2,"0"); }

  function setStatus(open){
    statusEl.innerHTML = open
      ? 'Status: <strong>ABERTO</strong>'
      : 'Status: <strong>ENCERRADO</strong>';
  }

  function tick(){
    const nowMs = Date.now();
    const diff = endMs - nowMs;

    if(diff <= 0){
      setStatus(false);
      countdownEl.innerHTML = "<strong>Encerrado.</strong> Lances após o horário não são considerados.";
      return;
    }

    setStatus(true);

    const s = Math.floor(diff / 1000);
    const d = Math.floor(s / 86400);
    const h = Math.floor((s % 86400) / 3600);
    const m = Math.floor((s % 3600) / 60);
    const ss = s % 60;

    const parts = [];
    if(d > 0) parts.push(`${d}d`);
    parts.push(`${pad(h)}h`);
    parts.push(`${pad(m)}m`);
    parts.push(`${pad(ss)}s`);

    countdownEl.innerHTML = `Tempo restante: <strong>${parts.join(" ")}</strong>`;
    setTimeout(tick, 1000);
  }

  tick();
}

document.addEventListener("DOMContentLoaded", ()=>{
  initGaleria();
  initLeilaoModais();
  initCountdown();
});
