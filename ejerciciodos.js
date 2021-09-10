//alert('Hola');
                  //Ejercicio 1
/*var nombre = prompt('Bienvenidx ¿Cual es tu nombre?');
if(nombre){
    document.write('Hola! ' + nombre + ', Saludos desde JavaScrpt :)');
}else{
    document.write('Escribe tu nombre por favor :(');
*/
                //  Ejercicio 2
num1 = parseInt( prompt('Escribe un numero:'));
num2= parseInt( prompt('Escribe otro numero:'));
function operaciones(num1,num2){
    var resultado= (num1 + num2);
    var resultadodos = (num1 - num2);
    var resultadotres = (num1 * num2);
    var resultadocuatro = (num1 / num2);
    document.write(' Suma= '+ resultado+'<br>'+ ' Resta= '+ resultadodos+'<br>'+' Multiplicación= '+ resultadotres+'<br>'+' División= '+ resultadocuatro);
}
operaciones(num1,num2);
