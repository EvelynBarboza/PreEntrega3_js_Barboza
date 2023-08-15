//Bienvenidos al juego ADIVINA EL NUMERO

//alert("Bienvenidos a ADIVINA EL NUMERO")

//LLAMO A LA FUNCION
const listaIntentos = []
adivinarNumero()

    const datoNombre = document.getElementById("nombre").value;
    let resultadoNombre = {};
    console.log(datoNombre)
    const datoApellido = document.getElementById("apellido").value;
    let resultadoApellido = {};
    console.log(datoApellido)
    
//FUNCION
function adivinarNumero() {
    let datosJugador = {
        /*nombre: prompt("Ingresa tu nombre"),
        apellido: prompt("Ingresa tu apellido"),*/
    } 

    let numeroX = Math.ceil(Math.random()*10);
    console.log(numeroX)
    let ganaste = 0
    for (let i=0; i < 3; i +=1) {
        //let intento = Number(prompt("Ingresa un nùmero"));
        let intento = document.querySelector('#intentos');
        let btn3 = document.querySelector(".btn3")
        
        btn3.addEventListener('click', (evt)=> {
            document.querySelector('#res').innerHTML = intento.value
        })
        listaIntentos.push(intento.value)
        
        if (numeroX == intento) {
            document.write(datoNombre, " Felicidades, GANASTE!" + "<br>");
            ganaste = 1
            break;
        }else{ 
            if (numeroX > intento) {
                console.log(datosJugador.nombre + " debes ingresar un nùmero mayor");
            }else{  
                console.log(datosJugador.nombre + " debes ingresar un nùmero menor");
            }    
        }
    }
    if (ganaste === 0) {
        document.write(datosJugador.nombre, " Lo sentimos ! GAME OVER" + "<br>")
    } 
    document.write("Tus intentos son ", listaIntentos)
    return;
}

//FIN DEL JUEGO