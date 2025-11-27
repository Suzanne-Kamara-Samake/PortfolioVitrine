import template from "./template.html?raw";
import { htmlToFragment } from "../../utils/utils.js";

let ProjectView = {
  html: function () {
    return template;
  },

  dom: function () {
    return htmlToFragment(template);
  },
// setupMenuHandlers: function() {
//     const menuToggle = page.getElementById('menu-toggle');
//     const navMenu = page.getElementById('nav-menu');
//     const navOverlay = page.getElementById('nav-overlay');
//     const burgerTop = page.getElementById('burger-top');
//     const burgerMiddle = page.getElementById('burger-middle');
//     const burgerBottom = page.getElementById('burger-bottom');
//     let isMenuOpen = false;

   

//     function toggleMenu() {
//       isMenuOpen = !isMenuOpen;
      
//       if (isMenuOpen) {
//         navMenu.classList.remove('-translate-x-full');
//         navMenu.classList.add('translate-x-0');
//         navOverlay.classList.remove('opacity-0', 'pointer-events-none');
//         navOverlay.classList.add('opacity-100', 'pointer-events-auto');
        
//         // Animation du burger en X
//         burgerTop.classList.add('rotate-45', 'translate-y-2');
//         burgerMiddle.classList.add('opacity-0');
//         burgerBottom.classList.add('-rotate-45', '-translate-y-2');
//       } else {
//         closeMenu();
//       }
//     }

//     function closeMenu() {
//       isMenuOpen = false;
//       navMenu.classList.add('-translate-x-full');
//       navMenu.classList.remove('translate-x-0');
//       navOverlay.classList.add('opacity-0', 'pointer-events-none');
//       navOverlay.classList.remove('opacity-100', 'pointer-events-auto');
      
//       // Animation du burger revenir à la normale
//       burgerTop.classList.remove('rotate-45', 'translate-y-2');
//       burgerMiddle.classList.remove('opacity-0');
//       burgerBottom.classList.remove('-rotate-45', '-translate-y-2');
//     }

//     let handlerBurgerMenu = function(ev) {
//       if (isMenuOpen) {
//         closeMenu();
//       } else {
//         toggleMenu();
//       }
    };

//     menuToggle.addEventListener('click', handlerBurgerMenu);
//     navOverlay.addEventListener('click', closeMenu);

//     // Fermer le menu en appuyant sur Escape
//     document.addEventListener('keydown', (e) => {
//       if (e.key === 'Escape' && isMenuOpen) {
//         closeMenu();
//       }
//     });
//   }
// };

// let page = ProjectView.dom();

// // Appeler setupMenuHandlers après que le DOM soit prêt
// document.addEventListener('DOMContentLoaded', () => {
//   ProjectView.setupMenuHandlers();
// });
export { ProjectView };