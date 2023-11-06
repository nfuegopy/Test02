// Importa la función snail desde el archivo donde la definiste
const { caracol } = require('./scripcaracol'); 

function ejecutarPruebas() {
    // Definir con el ejemplo brindado en el ejercicio
    const prueba1 = {
        entrada: [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ],
        esperado: [1, 2, 3, 6, 9, 8, 7, 4, 5]
    };

    //Prueba mas ampliada para un mayor recorrido
    const prueba2 = {
        entrada: [
            [1, 2, 3, 1],
            [4, 5, 6, 4],
            [7, 8, 9, 7],
            [7, 8, 9, 7],
        ],
        esperado: [1, 2, 3, 1, 4, 7, 7, 9, 8, 7, 7, 4, 5, 6, 9, 8]
    };
  
      //Prueba mas ampliada pero con un recorrido diferente para confirmar 
      const prueba3 = {
        entrada: [
            [1, 2, 3, 1],
            [4, 5, 6, 4],
            [7, 8, 9, 7],
            [7, 8, 9, 7],
        ],
        esperado: [1, 2, 3, 1, 4, 7, 7, 9, 8, 9, 4, 8, 5, 6, 9, 8]
    };
    console.assert(JSON.stringify(caracol(prueba1.entrada)) === JSON.stringify(prueba1.esperado), 'Prueba 1 Fallida');
    console.assert(JSON.stringify(caracol(prueba2.entrada)) === JSON.stringify(prueba2.esperado), 'Prueba 2 Fallida');
    console.assert(JSON.stringify(caracol(prueba3.entrada)) === JSON.stringify(prueba3.esperado), 'Prueba 3 Fallida');
//De acuerdo a los ejemplos que brinde solo debe lanzar error la prueba Numero 3

}
ejecutarPruebas();
