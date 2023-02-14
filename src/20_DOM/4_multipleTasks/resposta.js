/**
 * Declara unha variable ou constante "resposta" e asígnalle o obxeto obtido 
 * empregando document.querySelector e o selector p#capturame.
 */

// Escribe aquí o teu código.
const entradaDoTexto = document.querySelector("textarea")
const saidaNumeroCaracteres = document.querySelector("#numeroCaracteres")
const saidaNumeroPalabras = document.querySelector("numeroPalabras")

function actualizaNumeroCaracteres() {
    const textoIntroducido = entradaDoTexto.value
    const lonxitudeString = textoIntroducido.length
    saidaNumeroCaracteres.innerText = lonxitudeString
}

entradaDoTexto.addEventListener("input", actualizaNumeroCaracteres)

function actualizaNumeroPalabras () {
    const textoIntroducido = entradaDoTexto.value
    const fragString = textoIntroducido.split(" ")
    
}


/**
 * Non cambies nada despois destas liñas
 */
export {
    entradaDoTexto,
    saidaNumeroCaracteres,
    saidaNumeroPalabras,
    actualizaNumeroCaracteres,
    actualizaNumeroPalabras
}