let loginscroll = $('html, body');
$('a').click(function () {
    loginscroll.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
});


function escrever(texto, idElemento, tempo) {
    let letras = texto.split('').reverse();
    let tipo = setInterval(function () {
        if (!letras.length) return clearInterval(tipo);
        let seguinte = letras.pop();
        document.getElementsById(idElemento).innerHTML += seguinte;
    }, tempo);
}


escrever('Proteja-se!, Proteja a sua Familía', 'log', 100);
