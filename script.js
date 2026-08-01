/* =========================================================
   GARIMPO DA CASA — script.js
   Pequenas interações: ano no rodapé e botão "voltar ao topo"
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // Atualiza o ano no rodapé automaticamente
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Mostra/esconde o botão "voltar ao topo" conforme o scroll
  const backToTopBtn = document.getElementById("backToTop");

  const toggleBackToTop = () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  };

  window.addEventListener("scroll", toggleBackToTop);
  toggleBackToTop(); // checa o estado inicial

  // Ao clicar, rola suavemente até o topo da página
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Todos os links de produto e redes sociais já abrem em nova aba
  // via atributo target="_blank" no HTML (mais confiável e acessível
  // do que forçar isso via JavaScript).
});
