// Making varibles for DOM manipulation.
let button=document.querySelector("#changeMode");
let body=document.querySelector("body");
let mode="light";
// Using EventListener for 'Change Mode' button.
button.addEventListener("click",()=>{
    if(mode==="light"){
        mode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
        button.innerText="Light mode 🌄"
    }else{
        mode="light";
        button.innerText="Dark mode 🌜"
        body.classList.add("light");
        body.classList.remove("dark");
    }
});