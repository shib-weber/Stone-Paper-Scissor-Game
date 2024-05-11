let i=0;let j=0;
let b=document.querySelector("#youp");
let c=document.querySelector("#compp");
let a =document.querySelector("#rock");
let d=document.querySelector(".message");
let p =document.querySelector("#paper");
let s =document.querySelector("#scissor");
const round=localStorage.getItem("round");
console.log(round);


a.addEventListener("click",()=>{
    let x=Math.floor(Math.random()*3)
    if(x==1){
        c.innerHTML=++i;
        d.innerHTML="<div class='lost-g'>AI'S PAPER BEAT YOURS ROCK</div>"
    }
        
    else if(x==2){
        b.innerHTML=++j;
        d.innerHTML="<div class='win-g'>YOURS ROCK BEAT AI'S SCISSOR</div>"
        
    }
    else{
        d.innerHTML="IT'S A DRAW"
    }
    console.log(i);
    console.log(j);
    if(i==round || j==round){
        if(i>j){
            localStorage.removeItem("round");
            alert("you lost");
        }
        else{
            localStorage.removeItem("round");
            alert("you win");
        }
    }
})
p.addEventListener("click",()=>{
    let x=Math.floor(Math.random()*3)
    if(x==2){
        c.innerHTML=++i;
        d.innerHTML="<div class='lost-g'>AI'S SCISSOR BEAT YOURS PAPER</div>"
    }
        
    else if(x==0){
        b.innerHTML=++j;
        d.innerHTML="<div class='win-g'>YOURS PAPER BEAT AI'S ROCK</div>"
        
    }
    else{
        d.innerHTML="IT'S A DRAW"
    }  
    console.log(i);
    console.log(j);
    if(i==round || j==round){
        if(i>j){
            localStorage.removeItem("round");
            alert("you lost");
        }
        else{
            localStorage.removeItem("round");
            alert("you win");
        }
    }
})
s.addEventListener("click",()=>{
    let x=Math.floor(Math.random()*3)
    if(x==0){
        c.innerHTML=++i;
        d.innerHTML="<div class='lost-g'>AI'S ROCK BEAT YOURS SCISSOR</div>"
    }
        
    else if(x==1){
        b.innerHTML=++j;
        d.innerHTML="<div class='win-g'>YOURS SCISSOR BEAT AI'S PAPER</div>"
        
    }
    else{
        d.innerHTML="IT'S A DRAW"
    }
    console.log(i);
    console.log(j);
    if(i==round || j==round){
        if(i>j){
            localStorage.removeItem("round");
            alert("you lost");
        }
        else{
            localStorage.removeItem("round");
            alert("you win");
        }
    }
})

