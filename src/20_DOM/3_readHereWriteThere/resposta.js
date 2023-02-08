/**
 * Declara unha variable ou constante "resposta" e asígnalle o obxeto obtido 
 * empregando document.querySelector e o selector p#capturame.
 */

// Escribe aquí o teu código.
const entradaDoTexto = document.querySelector("textarea")
const saidaDoResultado = document.querySelector("#enMaiusculas")

function actualizaSaidaEnMaiusculas() {
    const textoIntroducido = entradaDoTexto.value
    const textoEnMaiusculas = textoIntroducido.toUpperCase()
    saidaDoResultado.innerText = textoEnMaiusculas
}

entradaDoTexto.addEventListener(actualizaSaidaEnMaiusculas)


/**
 * Non cambies nada despois destas liñas
 */
export { entradaDoTexto, saidaDoResultado, actualizaSaidaEnMaiusculas }