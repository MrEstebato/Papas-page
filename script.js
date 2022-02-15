//let productos = ["Takis Fuego", "Doritos nacho", "Cheetos torciditos", "Tostachos Sabor Queso Jalapeño", "Chips Jalapeño"]

function enviarCont(){
    var nombre = document.contacto.nombre.value;
    var apellidoP = document.contacto.app.value;
    var correo = document.contacto.corr.value;

    if(nombre.length > 0){
        //console.log("Hasta aqui nombre funciona y los datos del apellido paterno son: " + apellidoP);
        if(apellidoP.length > 0){
            //console.log("Hasta aqui apellido paterno funciona y los datos del correo son: " + correo);
            if(correo.length > 0){
                alert("Sus datos se han enviado correctamente");
            }else{
                alert("Error: Verifique sus datos en Correo");
            }
        }else{
            alert("Error: Verifique sus datos en Apellido paterno");
        }
    }else{
        alert("Error: Verifique sus datos en Nombre");
    }
}

function enviarReg(){
    var nombrereg = document.registro.nombreprod.value;
    var marca = document.registro.marca.value;
    var fechacad = document.registro.fecha.value;

    if(nombrereg.length > 0){
        if(marca.length > 0){
            if(fechacad.length > 0){
                alert("Sus datos se han recibido correctamente");
            }else{
                alert("Error: Verifique sus datos en Fecha de caducidad");
            }
        }else{
            alert("Error: Verifique sus datos en en Marca");
        }
    }else{
        alert("Error: Verifique sus datos en Nombre");
    }
}