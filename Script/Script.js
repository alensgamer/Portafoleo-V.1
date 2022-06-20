/* Funcion para pantalla de carga */
window.onload = function(){
        var Carga = document.getElementById("Carga");
        Carga.style.visibility="hiden";
        Carga.style.opacity="0";
        Carga.style.zIndex="-1";  
        espera.style.visibility="hiden";
        espera.style.opacity="0";
        espera.style.zIndex="-1";
}
/* Funcion para saber en donde esta el mouse */
window.addEventListener("mousemove", function(kuragiri){
        /* console.log(kuragiri)/* Posiciones del mouse */ 
        var espera=this.document.getElementById("espera")
        espera.style.visibility="hiden";
        espera.style.opacity="0";
        espera.style.zIndex="-1";  
})
/* Funcion para saber cuando sale el mouse */
window.addEventListener("mouseout",function(seva){
        /* console.log(seva,"se va de la pagina") */ /* imprime cuando sale de la pagina */
        
                espera.style.visibility="visible";
                espera.style.opacity="1";
                espera.style.zIndex="50";  
        
        
})
/* Funcion para saber que teclas se precionan */
window.addEventListener("keypress",function(change){
        /* console.log(change)
        console.log(change.keyCode, change.key) */
        /* console.log(this.document.getElementById("cuerpecito").style.backgroundColor) */
        if(change.keyCode=="13"){
                var fondo= document.getElementById("cuerpecito").style.backgroundColor/* no puedes 
                cambiar el valor de donde vienen las variables con variables */

                if(fondo==""){
                        document.getElementById("cuerpecito").style.backgroundColor="blue"
                }else{
                        document.getElementById("cuerpecito").style.backgroundColor=""
                }
                
        }
        if(change.keyCode=="13"){
                
        }
})

console.log("pq entras en mi codigo? 📸🧐");




