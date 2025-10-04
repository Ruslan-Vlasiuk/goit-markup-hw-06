(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Функція для перемикання меню
  const toggleMenu = () => {
    const isMenuOpen = mobileMenu.classList.contains('is-open');
    
    mobileMenu.classList.toggle('is-open');
    
    // Блокуємо/розблоковуємо прокрутку body
    document.body.style.overflow = isMenuOpen ? '' : 'hidden';
  };

  // Відкриття меню
  openMenuBtn.addEventListener('click', toggleMenu);

  // Закриття меню
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Закриття при кліку на посилання
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });
})();