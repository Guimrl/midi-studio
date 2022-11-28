function tocar(idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);

    if(elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido');
        location.reload();
    }

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
