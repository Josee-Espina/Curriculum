//navbar
navButtons=document.querySelectorAll(".nav-btn");
for(button of navButtons){
    button.addEventListener("click",(e)=>{
        for(button of navButtons){
            if(button!=e.target){
                button.classList.remove("btn-success");
            }else{
                button.classList.add("btn-success");
                if(button.classList.contains("abme")){
                    document.querySelector(".aboutme").style.display="flex"
                    document.querySelector(".projects").style.display="none"
                    document.querySelector(".skills").style.display="none"

                }
                if(button.classList.contains("prj")){
                    document.querySelector(".projects").style.display="inline"
                    document.querySelector(".aboutme").style.display="none"
                    document.querySelector(".skills").style.display="none"
                }
                 if(button.classList.contains("skl")){
                    document.querySelector(".projects").style.display="none"
                    document.querySelector(".aboutme").style.display="none"
                    document.querySelector(".skills").style.display="inline"
                }

            }
        }
    });
}





//Proyectos


//boton de mostrar proyecto de inventario
buttonflag=0;
invbutton=document.getElementById("invbutton");
invbutton.addEventListener("click",(e)=>{
    document.querySelector(".inv-system").style.display="inline";
    
    document.querySelector(".app").style.display="none";
    document.getElementById("appbutton").classList.remove("btn-success");
    buttonflag=1;

})

appbutton=document.getElementById("appbutton");
appbutton.addEventListener("click",(e)=>{
    document.querySelector(".inv-system").style.display="none";
    document.getElementById("invbutton").classList.remove("btn-success");

    document.querySelector(".app").style.display="inline";
    buttonflag=2;
})

appbutton.addEventListener("mouseover",(e)=>{
    e.target.classList.add("btn-success")
})
appbutton.addEventListener("mouseout",(e)=>{
    if(buttonflag!=2){
    e.target.classList.remove("btn-success")
    }
})

invbutton.addEventListener("mouseover",(e)=>{
    e.target.classList.add("btn-success")
})
invbutton.addEventListener("mouseout",(e)=>{
    if(buttonflag!=1){
    e.target.classList.remove("btn-success")
    }
})