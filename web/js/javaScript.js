
function saludar()
{
    alert ('Hola Mundo desde JavaScript!');
}
function generarSaludo()
{
    let nombre = document.getElementById("txtNombre").value;
    let mensaje = 'hola, ' + nombre;
    alert(mensaje);
}
function realizarOperacion (oper)// ope indic ala funcion
{
    let a = parseFloat(document.getElementById("txtNumero1").value); //
    let b = parseFloat(document.getElementById("txtNumero2").value);
    let res = 0;
    
    switch (oper)
    {
        case 1 :
            res = sumar(a,b); break;
        case 2 :
            res = restar(a,b); break;
        case 3 :
            res = multiplicar(a,b); break;
        case 4 :
            res = dividir(a,b); break;    
    }
    document.getElementById("txtResultado").value=res;
}
function sumar(n1,n2)
{
    let resultado = n1 + n2;
    return resultado;
}
function restar(n1,n2)
{
    let resultado = n1 - n2;
    return resultado; 
}
function multiplicar(n1,n2)
{
    let resultado = n1 * n2;
    return resultado; 
 
}
function dividir(n1,n2)
{
    let resultado =0;
    if (n2 != 0)
    {
        resultado = n1 / n2;
    }
    return resultado; 
} 



function calcularBisiesto()
{
    let anio = parseInt(document.getElementById("txtAnio").value);
    let resultado = anio % 4;
    
    if (resultado != 0)
    {
        document.getElementById("ResultadoAnio").innerHTML = "El anio no es bisiesto";
        document.getElementById("ResultadoAnio").classList.remove("text-success");
        document.getElementById("ResultadoAnio").classList.add("text-danger");
    }
    else
    {
      document.getElementById("ResultadoAnio").innerHTML = "El anio SI es bisiesto";
      document.getElementById("ResultadoAnio").classList.remove("text-danger");
      document.getElementById("ResultadoAnio").classList.add("text-success");
    } 
}
/**
function cotizarCostoDeFritura()
{
    let costo = parseFloat(document.getElementById("cmbTamanio").value);
    //revisamos si vamos a cargar el costo de la salsa:
    if (document.getElementById("chbSalsa").checked === true)
    {
        costo  += 2;
    }
     //revisamos si vamos a cargar el costo de la salsa:
    if (document.getElementById("chbCrema").checked === true)
    {
        costo  += 3;
    }
     //revisamos si vamos a cargar el costo de la salsa:
    if (document.getElementById("chbCueritos").checked === true)
    {
        costo += + 5;
    }
     //revisamos si vamos a cargar el costo de la salsa:
    if (document.getElementById("chbCol").checked === true)
    {
        costo += 2;
    }
    if(document.getElementById("rbtDescuentoSi").checked === true)
    {
       costo *=90; //10% de descuento  
    }
    
    document.getElementById("txtTotal").value = costo;
    
     // alert ("pasa a recoger tu pedido");
    Swal.fire('pedido listo','pasa a recoger tu pedido:)','success');          
                
     
}
***/

function navegar()
{
    //window.location.replace("graficador.html");
    window.location.href = 'graficador.html';
    
}
function cotizarCostoDeFritura() {
  let costo = parseFloat(document.getElementById("cmbTamanio").value);

  // Revisamos si se seleccionó la salsa
  if (document.getElementById("salsachetos").checked) {
    costo += 2;
  }

  // Revisamos si se seleccionó la crema
  if (document.getElementById("limonChetos").checked) {
    costo += 3;
  }

  // Revisamos si se seleccionaron los cueritos
  if (document.getElementById("cueritoChetos").checked) {
    costo += 5;
  }

  // Revisamos si se seleccionó el col
  if (document.getElementById("colchestos").checked) {
    costo += 2;
  }

  // Aplicamos el descuento del 10% si se seleccionó
  if (document.getElementById("descuChetos").checked) {
    costo *= 0.9; // 10% de descuento
  }

  document.getElementById("txtTotal").value = costo.toFixed(2);

  Swal.fire('Pedido listo', 'Pasa a recoger tu pedido :)', 'success');
}

// Asignar el evento de clic al botón de calcular costo
document.getElementById("calcularBtn").addEventListener("click", cotizarCostoDeFritura);









/* 

  // Función para calcular el costo total
  function calcularCosto() {
    // Obtener el valor del tamaño seleccionado
    const cmbTamanio = document.getElementById('cmbTamanio');
    const tamanio = parseFloat(cmbTamanio.value);

    // Obtener el valor de los aditivos seleccionados
    const colchestos = document.getElementById('colchestos').checked;
    const salsachetos = document.getElementById('salsachetos').checked;
    const limonChetos = document.getElementById('limonChetos').checked;
    const cueritoChetos = document.getElementById('cueritoChetos').checked;


    // Obtener el valor del descuento seleccionado
    const descuChetos = document.getElementById('descuChetos').checked;

    // Calcular el costo base según el tamaño
    let costoBase = tamanio;

    // Agregar el costo de los aditivos seleccionados
    if (colchestos) {
      costoBase += 4.0;
    }
    if (salsachetos) {
      costoBase += 2.0;
    }
    if (limonChetos) {
      costoBase += 1.0;
    }
    if (cueritoChetos) {
      costoBase += 3.0;
    }

    // Aplicar el descuento si está seleccionado
    if (descuChetos) {
      costoBase *= 0.9; // 10% de descuento
    }

    // Mostrar el costo total en el campo de texto
    const txtTotal = document.getElementById('txtTotal');
    txtTotal.value = costoBase.toFixed(2);
    
      // Evento clic del botón "Calcular costo"
  const calcularBtn = document.getElementById('calcularBtn');
  calcularBtn.addEventListener('click', calcularCosto);
  
    // alert ("pasa por tu pedido");
    Swal.fire('Pedido listo','Pasa a recoger tu pedido:)','success');  
  }

  // Evento clic del botón "Calcular costo"
  const calcularBtn = document.getElementById('calcularBtn');
  calcularBtn.addEventListener('click', calcularCosto);


/*

function esBisiesto(anio) {
  return (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;
}

function verificarBisiesto() {
  let yearInput = document.getElementById('yearInput');
  let year = parseInt(yearInput.value);

  if (isNaN(year)) {
    alert('Ingrese un a&ntilde;o válido');
    return;
  }

  var resultContainer = document.getElementById('resultContainer');
  var message = year + (esBisiesto(year) ? ' es bisiesto' : ' no es bisiesto');
  resultContainer.textContent = message;
}
**/