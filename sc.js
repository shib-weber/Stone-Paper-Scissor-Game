const a=document.querySelector(".cc");
const b=document.querySelector(".button1");
const c=document.querySelector(".button2");
const wp= a.getBoundingClientRect();
const nb= c.getBoundingClientRect();

b.addEventListener("click",()=>{
})
c.addEventListener("mouseover",()=>{
    const i=Math.floor(Math.random()*(wp.width - nb.width))+1;
    const j=Math.floor(Math.random()*(wp.height - nb.height))+1;
    console.log(i);
    console.log(j);
    c.style.left = i +"px"
    c.style.top = j +"px"
})
