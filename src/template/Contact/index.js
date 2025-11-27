import template from "./template.html?raw";
import { htmlToFragment } from "../../utils/utils.js";

let ContactView = {
  html: function () {
    return template;
  },

  dom: function () {
    return htmlToFragment(template);
  },
  // setupMenuHandlers: function() {
  //   const menuToggle = document.getElementById('menu-toggle');
  //   const navMenu = document.getElementById('nav-menu');
  //   const navOverlay = document.getElementById('nav-overlay');
  //   const burgerTop = document.getElementById('burger-top');
  //   const burgerMiddle = document.getElementById('burger-middle');
  //   const burgerBottom = document.getElementById('burger-bottom');
  //   let isMenuOpen = false;

  //   console.log("Setup menu handlers - menuToggle:", menuToggle);

  //   if (!menuToggle || !navMenu) {
      
  //     console.error('Éléments du menu non trouvés');
  //     return;
  //   }

  //   function toggleMenu() {
  //     isMenuOpen = !isMenuOpen;
      
  //     if (isMenuOpen) {
  //       navMenu.classList.remove('-translate-x-full');
  //       navMenu.classList.add('translate-x-0');
  //       navOverlay.classList.remove('opacity-0', 'pointer-events-none');
  //       navOverlay.classList.add('opacity-100', 'pointer-events-auto');
        
  //       // Animation du burger en X
  //       burgerTop.classList.add('rotate-45', 'translate-y-2');
  //       burgerMiddle.classList.add('opacity-0');
  //       burgerBottom.classList.add('-rotate-45', '-translate-y-2');
  //     } else {
  //       closeMenu();
  //     }
  //   }

  //   function closeMenu() {
  //     isMenuOpen = false;
  //     navMenu.classList.add('-translate-x-full');
  //     navMenu.classList.remove('translate-x-0');
  //     navOverlay.classList.add('opacity-0', 'pointer-events-none');
  //     navOverlay.classList.remove('opacity-100', 'pointer-events-auto');
      
  //     // Animation du burger revenir à la normale
  //     burgerTop.classList.remove('rotate-45', 'translate-y-2');
  //     burgerMiddle.classList.remove('opacity-0');
  //     burgerBottom.classList.remove('-rotate-45', '-translate-y-2');
  //   }

  //    let handlerBurgerMenu = function(ev) {
  //     if (ev.target.id.toLowerCase() === 'button' ) {
       
      
  //     console.log(ev);
  //     if (isMenuOpen) {
  //       closeMenu();
  //     } else {
  //       toggleMenu();
  //     }
  //     }
  //   };

  //   menuToggle.addEventListener('click', handlerBurgerMenu);
  //   navOverlay.addEventListener('click', closeMenu);

  //   // Fermer le menu en appuyant sur Escape
  //   document.addEventListener('keydown', (e) => {
  //     if (e.key === 'Escape' && isMenuOpen) {
  //       closeMenu();
  //     }
  //   });
  // }
};

// let page = ContactView.dom();

// // Appeler setupMenuHandlers après que le DOM soit prêt
// document.addEventListener('DOMContentLoaded', () => {
//   ContactView.setupMenuHandlers();
// });



export { ContactView };