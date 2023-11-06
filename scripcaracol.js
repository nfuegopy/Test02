//Creo una funcion (const) llamada caracol en referencia  a lo que buscamos
const caracol = (array) =>{
  //Iniciamos el array donde contendra los elementos, posterior a eso iniciamos el recorrido con
  //creamos un while para recorrer mientras exista filas 
    let finalArray = []
    while(array.length)
    {
      //El truco esta en este apartado  en el primer push recorreremos toda la primera fila de izquierda 
      //derecha hasta terminar 
      finalArray.push(...array.shift())
      for (var i = 0; i < array.length; i++){
        finalArray.push(array[i].pop())
      }

      //El truco en este apartado es que haremos lo mismo  un recorrido pero en sentido contrario
      //en este recorrido se realiza solo en la ultima fila hasta terminar la matrices existentens
      finalArray.push(...(array.pop() || []).reverse())
      for (var i = array.length -1; i >= 0; i--){
        finalArray.push(array[i].shift())
      }
    }
    //retornamos el resultado final manteniendo el recorrido de filas formando un espiral
    return finalArray
  }


  //Por ultimo realizamos la exportancion 
  module.exports = {
    caracol
};