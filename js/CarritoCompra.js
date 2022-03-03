let valor =0;
let cantidad = "";
let cop =112350 ;


function aumentar(){
    if(valor<=5)
    {
        cantidad =document.getElementById(`cantidad`).value=++valor;
        document.getElementById("total").innerHTML = cantidad;
        calcularSubtotal();
    }
    
}
function disminuir(){
    if(valor>=1){
        cantidad = document.getElementById(`cantidad`).value = --valor;
        document.getElementById("total").innerHTML = cantidad;
        calcularSubtotal();
    }
    
} 

function calcularSubtotal(){
    let cantidadElemento = document.getElementById("total").innerHTML;
    let subtotal = cop * Number(cantidadElemento);
    let subtotalFormat = new Intl.NumberFormat('es-ES').format(subtotal);
    document.getElementById("valorSubtotal").innerHTML = subtotalFormat;
}




















//function mostrarnuevoNombre(){
   // document.getElementById("valor").innerHTML = cantidad;
//};
//function mostrarnombreAntiguo(){
  //  let cantidad = document.getElementById("valor").innerHTML;
   // if(cantidad === nombreAntiguo){
            
  //  }
  //  else{
   //     document.getElementById("valor").innerHTML = nombreAntiguo;
    
   // }
//}

