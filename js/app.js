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

// ==== Slider ====
const slider = (sliderId, stockItem, arrowLeft, arrowRight) => {
  const slider = document.getElementById(sliderId);
  const slides = document.querySelectorAll(stockItem);

  slider.addEventListener('click', (e) => {
    let target = e.target;
    if (target.closest(arrowRight)) {
      const active = document.querySelector('.active');
      active.classList.remove('active');
      if (active.nextElementSibling) {
        active.nextElementSibling.classList.add('active');
      } else {
        slides[0].classList.add('active');
      }
    }
    if (target.closest(arrowLeft)) {
      const active = document.querySelector('.active');
      active.classList.remove('active');
      if (active.previousElementSibling) {
        active.previousElementSibling.classList.add('active');
      } else {
        slides[slides.length - 1].classList.add('active');
      }
    }
  });
};

slider('slider-1', '.stock-1', '.arrow-left-1', '.arrow-right-1');
slider('slider-2', '.stock-2', '.arrow-left-2', '.arrow-right-2');

// Tabs
const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
  const header = document.querySelector(headerSelector);
  const tab = document.querySelectorAll(tabSelector);
  const content = document.querySelectorAll(contentSelector);

  function hideTabContent() {
    content.forEach((item) => {
      item.style.display = 'none';
    });
    tab.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }
  function showTabContent(i = 0) {
    content[i].style.display = 'flex';
    tab[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent(1);

  header.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target;
    if (
      target.classList.contains(tabSelector.replace(/\./, '')) ||
      target.parentNode.classList.contains(tabSelector.replace(/\./, ''))
    ) {
      tab.forEach((item, i) => {
        if (target === item || target.parentNode === item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
};

tabs(
  '.products__header-list',
  '.products__header-item',
  '.products__content',
  'active'
);

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
