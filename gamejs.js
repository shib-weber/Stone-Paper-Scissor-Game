let i=0;let j=0;
let bo=document.querySelector("body");
let b=document.querySelector("#youp");
let c=document.querySelector("#compp");
let b1=document.querySelector("#youp1");
let c1=document.querySelector("#compp1");
let a =document.querySelector("#rock");
let d=document.querySelector(".message");
let p =document.querySelector("#paper");
let s =document.querySelector("#scissor");
let st =document.querySelector("#status");
const round=localStorage.getItem("round");
bo.classList.remove("popUp");
console.log(round);
a.addEventListener("click",()=>{
    let x=Math.floor(Math.random()*3)
    if(x==1){
        c.innerHTML=++i;
        c1.innerHTML=i;
        d.innerHTML="<div class='lost-g'>AI'S PAPER BEAT YOURS ROCK</div>"
    }
        
    else if(x==2){
        b.innerHTML=++j;
        b1.innerHTML=j;
        d.innerHTML="<div class='win-g'>YOURS ROCK BEAT AI'S SCISSOR</div>"
        
    }
    else{
        d.innerHTML="IT'S A DRAW"
    }
    if(i==round || j==round){
        if(i>j){
            st.innerHTML="<div class='lost-g'>LOST :(</div>"
            bo.classList.add("popUp");
        }
        else{
            st.innerHTML="<div class='win-g'>VICTORY!! :(</div>"
            bo.classList.add("popUp");
        }
    }
})
p.addEventListener("click",()=>{
    let x=Math.floor(Math.random()*3)
    if(x==2){
        c.innerHTML=++i;
        c1.innerHTML=i;
        d.innerHTML="<div class='lost-g'>AI'S SCISSOR BEAT YOURS PAPER</div>"
    }
        
    else if(x==0){
        b.innerHTML=++j;
        b1.innerHTML=j;
        d.innerHTML="<div class='win-g'>YOURS PAPER BEAT AI'S ROCK</div>"
        
    }
    else{
        d.innerHTML="IT'S A DRAW"
    }  
    if(i==round || j==round){
        if(i>j){
            st.innerHTML="<div class='lost-g'>LOST :(</div>"
            bo.classList.add("popUp");
        }
        else{
            st.innerHTML="<div class='win-g'>VICTORY!! :(</div>"
            bo.classList.add("popUp");
        }
    }
})
s.addEventListener("click",()=>{
    let x=Math.floor(Math.random()*3)
    if(x==0){
        c.innerHTML=++i;
        c1.innerHTML=i;
        d.innerHTML="<div class='lost-g'>AI'S ROCK BEAT YOURS SCISSOR</div>"
    }
        
    else if(x==1){
        b.innerHTML=++j;
        b1.innerHTML=j;
        d.innerHTML="<div class='win-g'>YOURS SCISSOR BEAT AI'S PAPER</div>"
        
    }
    else{
        d.innerHTML="IT'S A DRAW"
    }
    if(i==round || j==round){
        if(i>j){
            st.innerHTML="<div class='lost-g'>LOST :(</div>"
            bo.classList.add("popUp");
        }
        else{
            st.innerHTML="<div class='win-g'>VICTORY!! :(</div>"
            bo.classList.add("popUp");
        }
    }
})
let ho=document.querySelector("#hm");
let re=document.querySelector("#re");
ho.addEventListener("click",()=>{
    localStorage.removeItem("round");
    location.href="round.html"
})
re.addEventListener("click",()=>{
    location.href="game.html"
})
