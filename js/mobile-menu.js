(() => {
  // ===== MOBILE MENU =====
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  const toggleMenu = () => {
    const isMenuOpen = mobileMenu.classList.contains('is-open');
    mobileMenu.classList.toggle('is-open');
    document.body.style.overflow = isMenuOpen ? '' : 'hidden';
  };

  if (openMenuBtn && closeMenuBtn && mobileMenu) {
    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
    
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', toggleMenu);
    });
  }

  // ===== MODAL WINDOW =====
  const backdrop = document.querySelector('.backdrop');
  const modalOpenBtn = document.querySelector('.button-hero');
  const modalCloseBtn = document.querySelector('.modal-close-btn');

  const openModal = () => {
    backdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    backdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  // Відкриття модалки по кліку на кнопку
  if (modalOpenBtn && backdrop) {
    modalOpenBtn.addEventListener('click', openModal);
  }

  // Закриття модалки по кліку на хрестик
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  // Закриття модалки по кліку на backdrop (поза модалкою)
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeModal();
      }
    });
  }

  // Закриття модалки по натисканню Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop && backdrop.classList.contains('is-open')) {
      closeModal();
    }
  });
})();