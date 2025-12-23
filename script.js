// =========================
// GALERIA (dados editáveis)
// =========================
const OBRAS = [
  {
    id: "obra-x",
    titulo: "Obra X",
    descricao: "Descrição da obra X.",
    nome: "Obra X",
    numero: "001/2025",
    tecnica: "Aquarela / Nanquim",
    etc: "Dimensões, papel, etc.",
    img: "assets/img/obra-x.jpg"
  },
  // Adicione mais obras copiando este bloco
  // {
  //   id: "obra-y",
  //   titulo: "Obra Y",
  //   descricao: "Descrição da obra Y.",
  //   nome: "Obra Y",
  //   numero: "002/2025",
  //   tecnica: "Técnica",
  //   etc: "Detalhes",
  //   img: "assets/img/obra-y.jpg"
  // }
];

function initGaleria(){
  const ul = document.getElementById("listaObras");
  if(!ul) return;

  ul.innerHTML = "";
  OBRAS.forEach((obra, idx) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = obra.titulo + " (ver)";
    a.addEventListener("click", (e) => {
      e.preventDefault();
      renderObra(obra);
      // destaque simples
      [...ul.querySelectorAll("a")].forEach(x => x.classList.remove("active"));
      a.classList.add("active");
    });
    li.appendChild(a);
    ul.appendChild(li);

    if(idx === 0) {
      setTimeout(()=>a.click(), 0);
    }
  });
}

function renderObra(obra){
  const img = document.getElementById("obraImg");
  const nome = document.getElementById("obraNome");
  const desc = document.getElementById("obraDesc");

  if(img) img.src = obra.img;
  if(nome) nome.textContent = obra.titulo;
  if(desc) desc.textContent = obra.descricao;

  const fNome = document.getElementById("fNome");
  const fNumero = document.getElementById("fNumero");
  const fTecnica = document.getElementById("fTecnica");
  const fEtc = document.getElementById("fEtc");

  if(fNome) fNome.textContent = obra.nome;
  if(fNumero) fNumero.textContent = obra.numero;
  if(fTecnica) fTecnica.textContent = obra.tecnica;
  if(fEtc) fEtc.textContent = obra.etc;
}

// =========================
// LEILÃO (timer + modal info)
// =========================
function formatBR(date){
  // Mostra em pt-BR, mas respeitando o offset do próprio AUCTION_END (-03:00)
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short"
  }).format(date);
}

function initLeilao(){
  const endStr = window.AUCTION_END;
  if(!endStr) return;

  const endDate = new Date(endStr);

  const endPretty = document.getElementById("endPretty");
  const endsAt = document.getElementById("endsAt");

  if(endPretty) endPretty.textContent = formatBR(endDate);
  if(endsAt) endsAt.textContent = formatBR(endDate);

  const timerEl = document.getElementById("timer");

  function tick(){
    if(!timerEl) return;

    const now = new Date();
    const diff = endDate - now;

    if(diff <= 0){
      timerEl.textContent = "ENCERRADO";
      return;
    }

    const total = Math.floor(diff/1000);
    const h = Math.floor(total/3600);
    const m = Math.floor((total%3600)/60);
    const s = total%60;

    timerEl.textContent =
      String(h).padStart(2,"0")+"h "+
      String(m).padStart(2,"0")+"m "+
      String(s).padStart(2,"0")+"s";
  }

  tick();
  setInterval(tick, 1000);

  // Modal info
  const btnInfo = document.getElementById("btnInfo");
  const modal = document.getElementById("modalInfo");
  const close = document.getElementById("closeInfo");

  function openModal(){
    if(!modal) return;
    modal.classList.add("show");
    modal.setAttribute("aria-hidden","false");
  }
  function closeModal(){
    if(!modal) return;
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden","true");
  }

  if(btnInfo) btnInfo.addEventListener("click", (e)=>{ e.preventDefault(); openModal(); });
  if(close) close.addEventListener("click", closeModal);

  if(modal){
    modal.addEventListener("click", (e)=>{
      if(e.target === modal) closeModal();
    });
  }

  document.addEventListener("keydown", (e)=>{
    if(e.key === "Escape") closeModal();
  });
}

// =========================
// START
// =========================
document.addEventListener("DOMContentLoaded", ()=>{
  initGaleria();
  initLeilao();
});
