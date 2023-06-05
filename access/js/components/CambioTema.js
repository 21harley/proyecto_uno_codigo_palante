/*
.teme-check ~ .header,
.teme-check ~ main,
.teme-check ~ footer{
    --color-primario: #ffffff;
    --color-secundario: #000000;
    --color-terciario: #ffffff;
    --color-cuarto: #ffffff;
}
.teme-check  ~ .header{
    box-shadow: 0px 0.3px 9px 0px rgba(255, 255, 255, 0.45);
}

.teme-check  ~ main  .article-contacto__redes img{
    filter: invert(100%);
}

.teme-check  ~ .header  .header-ul img{
    filter: invert(1);
}

*/
let img=true;
const url=["luna.png","sol.png"];

export default function CambioTema(){
    const button = document.querySelector(".button-temaColor");
    const Img=document.querySelector(".temaColor");
    const color=document.querySelector("#color");

    button.addEventListener("click",(e)=>{
        e.preventDefault();
        img=!img;
        Img.setAttribute("src","./access/img/"+(img?"luna.png":"sol.png"));
        color.classList.toggle("teme-check");
    })
}

/*
.color-check:checked  ~ .header,
.color-check:checked  ~ main,
.color-check:checked  ~ footer{
    transition: 1s all;
    --color-primario: #af599e;
    --color-secundario: #fbfbfb;
    --color-terciario: #0f0f0f;
    --color-cuarto: rgba(175, 89, 158, 0.3);
}

.color-check:checked  ~ .header{
    box-shadow: 0px 0.3px 9px 0px rgba(0,0,0,0.45);
}

.color-check:checked  ~ main  .article-contacto__redes img{
    filter: none;
}

.color-check:checked  ~ .teme-check-c{
    background-image: url(/access/img/tema-color.png);
}


*/