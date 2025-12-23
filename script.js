// ============================
// GALERIA: lista clicável
// ============================
const OBRAS = [
  {
    id: "obra-x",
    titulo: "Obra X",
    descricao: "Descrição da obra (edite aqui).",
    nome: "Obra X",
    numero: "—",
    tecnica: "—",
    etc: "—",
    img: "assets/img/obra-x.jpg"
  },
  // Duplicar e editar aqui quando quiser adicionar novas obras:
  // {
  //   id:"obra-y",
  //   titulo:"Obra Y",
  //   descricao:"Texto curto da obra.",
  //   nome:"Obra Y",
  //   numero:"COD-01/2026",
  //   tecnica:"Aquarela sobre papel",
  //   etc:"Dimensões: 21 x 29,7 cm",
  //   img:"assets/img/obra-y.jpg"
  // },
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
// LEILÃO: modais + contador (manual)
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

  // fechar por botões [data-close]
  document.addEventListener("click", (e)=>{
    const btn = e.target.closest("[data-close]");
    if(btn){
      const id = btn.getAttribute("data-close");
      hideModal(document.getElementById(id));
    }
  });

  // fechar clicando fora do modal
  [infoModal, formModal].forEach((modal)=>{
    if(!modal) return;
    modal.addEventListener("click", (e)=>{
      if(e.target === modal) hideModal(modal);
    });
  });

  // ESC fecha
  document.addEventListener("keydown", (e)=>{
    if(e.key !== "Escape") return;
    hideModal(infoModal);
    hideModal(formModal);
  });
}

// contador regressivo (sem backend): lê data do elemento #endAt (data-end)
function initCountdown(){
  const el = document.getElementById("countdown");
  const endEl = document.getElementById("endAt");
  if(!el || !endEl) return;

  const iso = endEl.getAttribute("data-end");
  if(!iso) return;

  const endMs = Date.parse(iso);
  if(Number.isNaN(endMs)) return;

  function pad(n){ return String(n).padStart(2,"0"); }

  function tick(){
    const nowMs = Date.now();
    const diff = endMs - nowMs;

    if(diff <= 0){
      el.innerHTML = "<strong>Encerrado.</strong> Lances após o horário não são considerados.";
      return;
    }

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

    el.innerHTML = `Tempo restante: <strong>${parts.join(" ")}</strong>`;
    setTimeout(tick, 1000);
  }

  tick();
}

document.addEventListener("DOMContentLoaded", ()=>{
  initGaleria();
  initLeilaoModais();
  initCountdown();
});
