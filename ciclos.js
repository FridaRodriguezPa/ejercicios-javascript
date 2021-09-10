//alert('C I C L O S');

    //Ejemplo
  /*  for(var contador = 0; contador < 10; contador++){
        console.log('Hola desde el cilo for. Vuelta '+contador);
    }
    */

    //Ejemplo 2
/*const frutas = ['Manzana','Mango','Pera','Piña','Sandia','Melon'];
for(var i = 0; i< frutas.length; i++){
    console.log(frutas[i]);
}*/

////////////////////////////////////////////////////////////////////////
        //  C A L C U L A D O R A
        num1 = parseInt( prompt('Escribe un numero:'));
        num2= parseInt( prompt('Escribe otro numero:'));
        operaciones= prompt('¿Qué operación te gustaría hacer?');
    if(operaciones === 'suma'){
        suma=num1+num2;
        console.log('El resultado es '+suma);
    } else if(operaciones === 'resta'){
        resta=num1-num2;
        console.log('El resultado es '+resta);
    }else if(operaciones === 'multiplicacion'){
        multiplicacion=num1*num2;
        console.log('El resultado es '+multiplicacion);
    }else if(operaciones === 'division'){
        division=num1/num2;
        console.log('El resultado es '+division);
    }else if(operaciones === 'raizcuadrada'){
        raizcuadrada= Math.sqrt(num1);
        console.log('El resultado es '+raizcuadrada);
    }
