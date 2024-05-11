const a=document.querySelector(".cc");
const b=document.querySelector(".button1");
const c=document.querySelector(".button2");
const d=document.querySelector(".container");
const wp= d.getBoundingClientRect();
const nb= c.getBoundingClientRect();

b.addEventListener("click",()=>{
    location.href="round.html"
})
c.addEventListener("mouseover",()=>{
    const i=Math.floor(Math.random()*300)+1;
    const j=Math.floor(Math.random()*300)+1;
    console.log(i);
    console.log(j);

    d.style.top = i +"px"
    d.style.left= j +"px"
})
