function tocar(idElementoAudio) {

    document.querySelector(idElementoAudio).play();
}

//lista de teclas
const teclas = document.querySelectorAll('.tecla');

let i = 0;

while(i < teclas.length) {

    const tecla = teclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = () => {
        tocar(idAudio);
    };

    i++;
}