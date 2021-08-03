//  ==== Show menu =====
const showMenu = (toggleId, navId) => {
  const toggleEl = document.getElementById(toggleId);
  const navEl = document.getElementById(navId);

  if (toggleEl && navEl) {
    toggleEl.addEventListener('click', () => {
      navEl.classList.toggle('show-menu');
      toggleEl.classList.toggle('active');
    });
  }
};
showMenu('nav-toggle', 'nav-menu');


//  Popup
const popup = (popupId, openClass) => {
  const popupEl = document.getElementById(popupId);
  const closeBtn = document.querySelectorAll('.popup__close');
  const openBtn = document.querySelector(openClass);

  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    popupEl.classList.add('active');
  });

  closeBtn.forEach((item) => {
    item.addEventListener('click', () => {
      popupEl.classList.remove('active');
    });
  });

  popupEl.addEventListener('click', (e) => {
    let target = e.target;

    if (target.matches('#popup-login')) {
      popupEl.classList.remove('active');
    }
    if (target.matches('#cart')) {
      popupEl.classList.remove('active');
    }
  });
};
popup('popup-login', '.login');
popup('cart', '.nav__item--cart');
