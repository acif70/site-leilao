const endDate = new Date(END_DATE);
const endText = document.getElementById("endText");
const timer = document.getElementById("timer");

endText.textContent = endDate.toLocaleString("pt-BR",{timeZone:"America/Sao_Paulo"});

function tick(){
  const now = new Date();
  const diff = endDate - now;
  if(diff <= 0){
    timer.textContent = "ENCERRADO";
    return;
  }
  const h = Math.floor(diff/1000/60/60);
  const m = Math.floor((diff/1000/60)%60);
  const s = Math.floor((diff/1000)%60);
  timer.textContent = `${h}h ${m}m ${s}s`;
}
setInterval(tick,1000);
tick();
