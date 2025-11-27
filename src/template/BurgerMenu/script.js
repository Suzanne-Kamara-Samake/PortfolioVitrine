let BurgerMenu = {setupMenuHandlers: function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navOverlay = document.getElementById('nav-overlay');
    const burgerTop = document.getElementById('burger-top');
    const burgerMiddle = document.getElementById('burger-middle');
    const burgerBottom = document.getElementById('burger-bottom');
    const burgerCross = document.getElementById('burgerCross');
    let isMenuOpen = false;

    console.log("Setup menu handlers - menuToggle:", menuToggle);

    if (!menuToggle || !navMenu) {
      
      console.error('Éléments du menu non trouvés');
      return;
    }

    function toggleMenu() {
      isMenuOpen = !isMenuOpen;
      
      if (isMenuOpen) {
        // navMenu.classList.remove('-translate-x-full');
        // navMenu.classList.add('translate-x-0');
        navMenu.style.transform = 'translateX(100%)';
        // navOverlay.classList.remove('opacity-0', 'pointer-events-none');
        // navOverlay.classList.add('opacity-100', 'pointer-events-auto');
        navOverlay.style.opacity = '1';
        navOverlay.style.pointerEvents = 'auto';
        
        // Changer les 3 barres en SVG croix
        burgerTop.style.display = 'none';
        burgerMiddle.style.display = 'none';
        burgerCross.style.display = 'block';
        burgerBottom.style.display = 'none';
      } else {
        closeMenu();
        
      }
    }

    function closeMenu() {
      isMenuOpen = false;
      navMenu.style.transform = 'translateX(-100%)';
      navMenu.style.transform = 'translateX(0)';
      navOverlay.style.opacity= '0';
      navOverlay.style.transform = 'pointer-events-none';
    //   navOverlay.classList.remove('opacity-100', 'pointer-events-auto');
      
      // Revenir aux 3 barres du burger
      burgerTop.style.display = 'block';
      burgerTop.style.transform = 'rotate(0) translateY(0)';
      burgerMiddle.style.display = 'block';
    //   burgerMiddle.classList.remove('opacity-0');
    //   burgerMiddle.style.display.remove('opacity-0');
      burgerBottom.style.display = 'block';
      burgerBottom.style.transform = 'rotate(0) translateY(0)';
      burgerCross.style.display = 'none';
    }

     let handlerBurgerMenu = function(ev) {
      if (ev.target.tagName.toLowerCase() === 'button' || ev.target.id === 'burger-top'  || ev.target.id === 'burger-middle' || ev.target.id === 'burger-bottom'|| ev.target.id === 'burgerCross') {
       
      
      console.log("Vous avez cliqué sur le burger");
      if (isMenuOpen) {
        closeMenu();
      } else {
        toggleMenu();
      }
      }
    };


    menuToggle.addEventListener('click', handlerBurgerMenu);
    navOverlay.addEventListener('click', closeMenu);

    // Fermer le menu en appuyant sur Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    });
  }
};

export { BurgerMenu };