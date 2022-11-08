var imagenes = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg'],
    cont = 0;
function carrousel(contenedorCarrousel) {

    contenedorCarrousel.addEventListener('click', e => {

        let atras = contenedorCarrousel.querySelector('.atras'),
            adelante = contenedorCarrousel.querySelector('.adelante'),
            img = contenedorCarrousel.querySelector('img'),
            tgt = e.target;

        if (tgt == atras) {

            if (cont > 0) {
                img.src = imagenes[cont - 1];
                cont--;
            } else {
                img.src = imagenes[imagenes.length - 1];
                cont = imagenes.length - 1;
            }


        } else if (tgt == adelante) {
            if (cont < imagenes.length - 1) {
                img.src = imagenes[cont + 1];
                cont++;
            } else {
                img.src = imagenes[0];
                cont = 0;
            }
        }
    });
}
document.addEventListener("DOMContentLoaded", () => {
    let contenedorCarrousel = document.querySelector('.contenedorCarrousel');
    carrousel(contenedorCarrousel);
});