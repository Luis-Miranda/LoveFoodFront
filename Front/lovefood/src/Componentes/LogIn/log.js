let username = document.getElementById("username");
let contrasena = document.getElementById("password");
let acceso = document.getElementById("button-addon2 acceso");
let login = document.getElementById("button-addon2 log");


console.log(login)

const doLogin = () => {
    if (username.value === 'charliebotones' && contrasena.value === 'wuichodesponemacs') {

        acceso.classList.remove('noV')
        login.classList.add('noV')

    } else {
        alert('No puedes entrar amigo!')

    }
}

login.addEventListener("click",doLogin)

// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}

let 
