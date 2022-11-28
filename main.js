function tocar(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const teclas = document.querySelectorAll('.tecla');

for(let i = 0; i < teclas.length; i++) {

    const tecla = teclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = () => {
        tocar(idAudio);
    }

    tecla.onkeydown = (event) => {
        if(event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = () => {
        tecla.classList.remove('ativa');
    }

}
