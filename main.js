let toggle = document.querySelector('.toggle');
let text = document.querySelector('.text');


function Animatedtoggle(){
    toggle.classList.toggle('active');

    if(toggle.classList.contains("active")){
        text.innerHTML = 'On';
        document.body.style.backgroundColor= 'red';
        document.body.style.color= 'Black';
    }else {
        text.innerHTML = 'OFF';
        document.body.style.backgroundColor= 'white';
        document.body.style.color= 'Black';
    }
}