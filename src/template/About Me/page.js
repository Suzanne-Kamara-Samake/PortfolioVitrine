import { AboutMeView} from "./index.js";


let V = {

};
V.render= function(){
   return AboutMeView.html();
};

let C = {};
C.init= function(){
    return V.render();
    
}
export function AboutMePage() {
    

    // document.body.appendChild(AboutMeView.dom());
    return C.init();
}