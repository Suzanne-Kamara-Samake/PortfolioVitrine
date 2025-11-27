import { ContactView} from "./index.js";


let V = {

};
V.render= function(){
    return ContactView.html();
};

let C = {};
C.init= function(){
    return V.render();
    
}
export function ContactPage() {
    
    // document.body.appendChild(ContactView.dom());
    return C.init();
}