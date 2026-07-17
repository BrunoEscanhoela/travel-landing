/* ============================================
   SCRIPT PRINCIPAL — travel-landing
   JavaScript puro (vanilla), sem dependências.
   ============================================ */

// Garante que o script só roda depois que o HTML foi todo carregado
document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================
     (Parte 1) MENU HAMBÚRGUER
     Abre/fecha o painel de navegação no mobile
     alternando classes CSS.
     ========================================== */
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  // Única função responsável por abrir/fechar o menu:
  // classes visuais + atributos de acessibilidade sempre em sincronia
  const setMenuOpen = (isOpen) => {
    nav.classList.toggle('nav--open', isOpen);
    hamburger.classList.toggle('hamburger--open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    hamburger.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  };

  // O hambúrguer inverte o estado atual
  hamburger.addEventListener('click', () => {
    setMenuOpen(!nav.classList.contains('nav--open'));
  });

  // Fecha o menu ao clicar em qualquer link (útil no mobile)
  nav.querySelectorAll('.nav__link').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  /* ==========================================
     (Parte 1) HEADER COM FUNDO AO ROLAR
     O header começa transparente sobre o hero;
     após rolar 60px ganha fundo sólido para
     manter a legibilidade.
     ========================================== */
  const header = document.getElementById('header');

  const onScroll = () => {
    header.classList.toggle('header--scrolled', window.scrollY > 60);
  };

  // passive: true — avisa o navegador que o handler nunca cancela o scroll,
  // permitindo que a rolagem continue fluida sem esperar o JS
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // aplica o estado correto já no carregamento

});
