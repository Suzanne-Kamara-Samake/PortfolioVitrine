import { ConstructionView} from "./index.js";


let V = {

};
V.render= function(){
    // let slot = document.getElementById("app");

    //     slot.appendChild(ConstructionView.dom()) ;
       return ConstructionView.html();
      
};

let C = {};
C.init= function(){
    return V.render();
    
}
export function ConstructionPage() {
    
    // document.body.appendChild(ConstructionView.dom());
    return C.init();
}