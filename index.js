const $botonNumeroSiete = document.querySelector(".boton-siete");
const $botonNumeroOcho = document.querySelector(".boton-ocho");
const $botonNumeroNueve = document.querySelector(".boton-nueve");
const $botonNumeroSeis = document.querySelector(".boton-seis");
const $botonNumeroCinco = document.querySelector(".boton-cinco");
const $botonNumeroCuatro = document.querySelector(".boton-cuatro");
const $botonNumeroTres = document.querySelector(".boton-tres");
const $botonNumeroDos = document.querySelector(".boton-dos");
const $botonNumeroUno = document.querySelector(".boton-uno");
const $botonNumeroCero = document.querySelector(".boton-cero");

const $botonRestar = document.querySelector(".boton-restar");
const $botonSumar = document.querySelector(".boton-sumar");
const $botonMultiplicar = document.querySelector(".boton-multiplicar");
const $botonDividir = document.querySelector(".boton-dividir");

const $botonImprimirResultado = document.querySelector(
  ".boton-imprimir-resultado"
);
const $botonReiniciar = document.querySelector(".boton-reiniciar");

let secuenciaActual = false;
let secuenciaAImprimir = false;
let listaDeSecuencias = [];

let resultadoFinal = false;

let numeroPresionado = false;

let operadores = {
  resta: "-",
  suma: "+",
  multiplicacion: "*",
  division: "/",
};

let listaDeOperadores = [];

function guardarNumeros(numeroDelUsuario) {
  if (secuenciaActual === false) {
    secuenciaActual += Number(numeroDelUsuario);
    secuenciaAImprimir += Number(numeroDelUsuario);
  } else if (resultadoFinal === secuenciaAImprimir) {
    resultadoFinal = false;
    secuenciaActual = false;
    secuenciaActual += Number(numeroDelUsuario);
    secuenciaAImprimir = Number(numeroDelUsuario);
  } else {
    secuenciaActual += numeroDelUsuario;
    secuenciaAImprimir += numeroDelUsuario;
  }
}

function indicarQueSePresionoUnNumero() {
  numeroPresionado = true;
}

function indicarQueNoSePresionoUnNumero() {
  numeroPresionado = false;
}

function guardarSecuenciaDeNumeros() {
  if (numeroPresionado === true) {
    listaDeSecuencias.push(Number(secuenciaActual));
  } else if (resultadoFinal != false) {
    return false;
  } else {
    return false;
  }
}

function borrarSecuenciaActual() {
  secuenciaActual = false;
}

function guardarOperadores(operador) {
  if (numeroPresionado === true) {
    secuenciaAImprimir += operador;
    listaDeOperadores.push(operador);
  } else if (resultadoFinal === false) {
    return false;
  } else if (secuenciaActual === false) {
    return false;
  } else {
    secuenciaAImprimir += operador;
    listaDeOperadores.push(operador);
  }
}

function imprimirSecuencias() {
  const $visorDeCalculadora = document.querySelector(".visor-numeros");

  if (secuenciaAImprimir === false) {
    return false;
  } else {
    $visorDeCalculadora.value = secuenciaAImprimir;
  }
}

function resolverOperacion() {
  for (let i = 0; i < listaDeSecuencias.length; i++) {
    if (listaDeOperadores[i] === "-") {
      if (resultadoFinal === false && listaDeSecuencias.length > 1) {
        resultadoFinal = listaDeSecuencias[0];
        listaDeSecuencias.shift();
        resultadoFinal = resultadoFinal - listaDeSecuencias[i];
      } else if (
        resultadoFinal === secuenciaAImprimir &&
        listaDeSecuencias.length > 1
      ) {
        resultadoFinal = listaDeSecuencias[i];
      } else {
        if (resultadoFinal != false && listaDeSecuencias.length >= 1) {
          resultadoFinal = resultadoFinal - listaDeSecuencias[i];
        } else if (listaDeSecuencias.length < 2) {
          return false;
        } else {
          resultadoFinal = resultadoFinal - listaDeSecuencias[i];
        }
      }
    } else if (listaDeOperadores[i] === "+") {
      if (resultadoFinal === false && listaDeSecuencias.length > 1) {
        resultadoFinal = listaDeSecuencias[0];
        listaDeSecuencias.shift();
        resultadoFinal = resultadoFinal + listaDeSecuencias[i];
      } else if (resultadoFinal === secuenciaAImprimir) {
        resultadoFinal = listaDeSecuencias[i];
      } else {
        if (resultadoFinal != false && listaDeSecuencias.length >= 1) {
          resultadoFinal = resultadoFinal + listaDeSecuencias[i];
        } else if (listaDeSecuencias.length < 2) {
          return false;
        } else {
          resultadoFinal = resultadoFinal + listaDeSecuencias[i];
        }
      }
    } else if (listaDeOperadores[i] === "*") {
      if (resultadoFinal === false && listaDeSecuencias.length > 1) {
        resultadoFinal = listaDeSecuencias[0];
        listaDeSecuencias.shift();
        resultadoFinal = resultadoFinal * listaDeSecuencias[i];
      } else if (resultadoFinal === secuenciaAImprimir) {
        resultadoFinal = listaDeSecuencias[i];
      } else {
        if (resultadoFinal != false && listaDeSecuencias.length >= 1) {
          resultadoFinal = resultadoFinal * listaDeSecuencias[i];
        } else if (listaDeSecuencias.length < 2) {
          return false;
        } else {
          resultadoFinal = resultadoFinal * listaDeSecuencias[i];
        }
      }
    } else if (listaDeOperadores[i] === "/") {
      if (resultadoFinal === false && listaDeSecuencias.length > 1) {
        resultadoFinal = listaDeSecuencias[0];
        listaDeSecuencias.shift();
        resultadoFinal = resultadoFinal / listaDeSecuencias[i];
      } else if (resultadoFinal === secuenciaAImprimir) {
        resultadoFinal = listaDeSecuencias[i];
      } else {
        if (resultadoFinal != false && listaDeSecuencias.length >= 1) {
          resultadoFinal = resultadoFinal / listaDeSecuencias[i];
        } else if (listaDeSecuencias.length < 2) {
          return false;
        } else {
          resultadoFinal = resultadoFinal / listaDeSecuencias[i];
        }
      }
    }
  }
}

function imprimirResultadoFinal() {
  const $visorDeCalculadora = document.querySelector(".visor-numeros");

  if (resultadoFinal === false) {
    return false;
  } else {
    $visorDeCalculadora.value = resultadoFinal;
  }
}

function actualizarSecuenciaAImprimir() {
  if (resultadoFinal === false) {
    return false;
  } else {
    secuenciaAImprimir = resultadoFinal;
  }
}

function limpiarListaDeSecuencias(resultadoDePosibleError) {
  if (resultadoDePosibleError) {
    return false;
  } else {
    listaDeSecuencias = [];
  }
}

function limpiarListaDeOperadores(resultadoDePosibleError) {
  if (resultadoDePosibleError) {
    return false;
  } else {
    listaDeOperadores = [];
  }
}

function verificarPosibleError() {
  if (resultadoFinal === false) {
    return true;
  } else {
    return false;
  }
}

function reiniciarSecuenciasYListas() {
  secuenciaActual = false;
  secuenciaAImprimir = false;
  listaDeSecuencias = [];
  resultadoFinal = false;
  numeroPresionado = false;
  listaDeOperadores = [];
}

function reiniciarVisor() {
  const $visorDeCalculadora = document.querySelector(".visor-numeros");
  $visorDeCalculadora.value = "0";
}

$botonNumeroSiete.onclick = function () {
  const botonNumeroSiete = document.querySelector(".boton-siete").value;

  indicarQueSePresionoUnNumero();
  guardarNumeros(botonNumeroSiete);
  imprimirSecuencias();

  return false;
};

$botonNumeroOcho.onclick = function () {
  const botonNumeroOcho = document.querySelector(".boton-ocho").value;

  indicarQueSePresionoUnNumero();
  guardarNumeros(botonNumeroOcho);
  imprimirSecuencias();

  return false;
};

$botonNumeroNueve.onclick = function () {
  const botonNumeroNueve = document.querySelector(".boton-nueve").value;

  indicarQueSePresionoUnNumero();
  guardarNumeros(botonNumeroNueve);
  imprimirSecuencias();

  return false;
};

$botonNumeroSeis.onclick = function () {
  const botonNumeroSeis = document.querySelector(".boton-seis").value;

  indicarQueSePresionoUnNumero();
  guardarNumeros(botonNumeroSeis);
  imprimirSecuencias();

  return false;
};

$botonNumeroCinco.onclick = function () {
  const botonNumeroCinco = document.querySelector(".boton-cinco").value;

  indicarQueSePresionoUnNumero();
  guardarNumeros(botonNumeroCinco);
  imprimirSecuencias();

  return false;
};

$botonNumeroCuatro.onclick = function () {
  const botonNumeroCuatro = document.querySelector(".boton-cuatro").value;

  indicarQueSePresionoUnNumero();
  guardarNumeros(botonNumeroCuatro);
  imprimirSecuencias();

  return false;
};

$botonNumeroTres.onclick = function () {
  const botonNumeroTres = document.querySelector(".boton-tres").value;

  indicarQueSePresionoUnNumero();
  guardarNumeros(botonNumeroTres);
  imprimirSecuencias();

  return false;
};

$botonNumeroDos.onclick = function () {
  const botonNumeroDos = document.querySelector(".boton-dos").value;

  indicarQueSePresionoUnNumero();
  guardarNumeros(botonNumeroDos);
  imprimirSecuencias();

  return false;
};

$botonNumeroUno.onclick = function () {
  const botonNumeroUno = document.querySelector(".boton-uno").value;

  indicarQueSePresionoUnNumero();
  guardarNumeros(botonNumeroUno);
  imprimirSecuencias();

  return false;
};

$botonNumeroCero.onclick = function () {
  const botonNumeroCero = document.querySelector(".boton-cero").value;

  indicarQueSePresionoUnNumero();
  guardarNumeros(botonNumeroCero);
  imprimirSecuencias();

  return false;
};

$botonRestar.onclick = function () {
  guardarSecuenciaDeNumeros();
  guardarOperadores(operadores.resta);
  borrarSecuenciaActual();
  indicarQueNoSePresionoUnNumero();
  imprimirSecuencias();

  return false;
};

$botonSumar.onclick = function () {
  guardarSecuenciaDeNumeros();
  guardarOperadores(operadores.suma);
  borrarSecuenciaActual();
  indicarQueNoSePresionoUnNumero();
  imprimirSecuencias();

  return false;
};

$botonMultiplicar.onclick = function () {
  guardarSecuenciaDeNumeros();
  guardarOperadores(operadores.multiplicacion);
  borrarSecuenciaActual();
  indicarQueNoSePresionoUnNumero();
  imprimirSecuencias();

  return false;
};

$botonDividir.onclick = function () {
  guardarSecuenciaDeNumeros();
  guardarOperadores(operadores.division);
  borrarSecuenciaActual();
  indicarQueNoSePresionoUnNumero();
  imprimirSecuencias();

  return false;
};

$botonImprimirResultado.onclick = function () {
  guardarSecuenciaDeNumeros();
  resolverOperacion();

  let resultadoDePosibleError = verificarPosibleError();

  imprimirResultadoFinal();
  indicarQueNoSePresionoUnNumero();
  actualizarSecuenciaAImprimir();
  limpiarListaDeSecuencias(resultadoDePosibleError);
  limpiarListaDeOperadores(resultadoDePosibleError);

  return false;
};

$botonReiniciar.onclick = function () {
  reiniciarSecuenciasYListas();
  reiniciarVisor();
};
