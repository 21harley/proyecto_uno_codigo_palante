function modal(){
    const modal=document.querySelector(".header-list-title");
    modal.classList.toggle("active-modal");
}
function toggleButton(id){
    const active=document.querySelector("#"+id);
    active.addEventListener("click",(e)=>{
        e.preventDefault();
        modal();
    });
}
export default function ToggolModal(){
    toggleButton("active-modal");
    toggleButton("close-modal");
}

