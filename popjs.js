let i=0;
let b=document.querySelector("body");
let a=document.querySelector("#f");

a.addEventListener("click",()=>{
    console.log(++i);
    if(i==5){
        console.log("true");
        b.classList.add("popUp");
    }
})
