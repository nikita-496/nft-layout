/*const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  IOS: function () {
    return navigator.userAgent.match(/Iphone|Ipad|Ipod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/EMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.IOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

if (isMobile.any()) {
  document.body.classList.add('_touch');
} else {
  document.body.classList.add('_pc');
}

/*const windowInnerWidth = window.innerWidth;
const mobileVersion = 800;

const setBurgerMenu = (currWindowWidth, breackPoint) => {
  if (currWindowWidth <= breackPoint) {
    const navBlock = document.querySelector('.header__nav');
    navBlock.style.display = 'none';
  } else {
    return;
  }
};

setBurgerMenu(windowInnerWidth, mobileVersion);*/
