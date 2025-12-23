// ============================
// GALERIA: lista clicável
// ============================
const OBRAS = [
  {
    id: "obra-x",
    titulo: "Obra X",
    descricao: "Descrição da obra:",
    nome: "Obra X",
    numero: "—",
    tecnica: "—",
    etc: "—",
    img: "assets/img/obra-x.jpg"
  },
  // duplicar e editar aqui quando quiser
];

function initGaleria(){
  const list = document.getElementById("workList");
  if(!list) return;

  list.innerHTML = "";
  OBRAS.forEach((obra, idx) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = obra.titulo + " (link clicável)";
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

  if(img) img.src = obra.img;
  if(title) title.textContent = obra.titulo;
  if(desc) desc.textContent = obra.descricao;

  if(fNome) fNome.textContent = obra.nome;
  if(fNumero) fNumero.textContent = obra.numero;
  if(fTecnica) fTecnica.textContent = obra.tecnica;
  if(fEtc) fEtc.textContent = obra.etc;
}

// ============================
// LEILÃO: apenas modais (sem timer)
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

document.addEventListener("DOMContentLoaded", ()=>{
  initGaleria();
  initLeilaoModais();
});
