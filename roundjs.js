
let a=document.querySelector("#bt1");
let b=document.querySelector("#bt2");
let c=document.querySelector("#bt3");
let d=document.querySelector("#bt4");
let e=document.querySelector("#bt5");
a.addEventListener("click",()=>{
    localStorage.setItem("round",5);
    location.href="game.html"
})
b.addEventListener("click",()=>{
    localStorage.setItem("round",10);
    location.href="game.html"
})
c.addEventListener("click",()=>{
    localStorage.setItem("round",15);
    location.href="game.html"
})
d.addEventListener("click",()=>{
    localStorage.setItem("round",20);
    location.href="game.html"
})
e.addEventListener("click",()=>{
    localStorage.setItem("round",25);
    location.href="game.html"
})
