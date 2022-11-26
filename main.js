function tocar(idElementoAudio) {

    document.querySelector(idElementoAudio).play();
}

const teclas = document.querySelectorAll('.tecla');

let i = 0;

while(i < teclas.length) {

    teclas[i].onclick = tocar;

    i++;

    console.log(i);
}