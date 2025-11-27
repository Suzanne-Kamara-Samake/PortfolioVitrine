import { ProjectView} from "./index.js";


let V = {

};
V.render= function(){
   return ProjectView.html();
};

let C = {};
C.init= function(){
    return V.render();
    
}
export function ProjectPage() {
    
    // document.body.appendChild(ProjectView.dom());
    return C.init();
}