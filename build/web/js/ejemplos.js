/**
 * Ejemplos de JavaScript
 */

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
function realizarOperacion (oper)
{
    let a = parseFloat(document.getElementById("txtNumero1").value);
    let b = parseFloat(document.getElementById("txtNumero1").value);
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
