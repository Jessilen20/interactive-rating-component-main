//You selected <!-- Add rating here --> out of 5

//Funcion para cambiar el contenido
function Rating() {
    console.log(3);
}

//Funcion para guardar el puntaje
function GuardarPuntaje(point) {
    var puntaje = 0;

    switch (point) {
        case "star1":
            puntaje = 1;
            break;

        case "star2":
            puntaje = 2;
            break;

        case "star3":
            puntaje = 3;
            break;

        case "star4":
            puntaje = 4;
            break;

        case "star5":
            puntaje = 5;
            break;

        default:
            console.log("no se sellecciona nada")
            break;
    }

    return console.log(puntaje);
}



