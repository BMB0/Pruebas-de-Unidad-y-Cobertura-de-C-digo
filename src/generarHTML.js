
function generarHtmlIngresarIntento(tamPalabraSecreta){
    let codigoFormulario = "";
    let codigoInputs = "";
    let codigoSubmit = `<input type="submit" class="ingresar-palabra-boton submit" value="ACEPTAR"/>`;
    for(let i = 0; i < tamPalabraSecreta; i++){
        if(i < tamPalabraSecreta - 1){
            codigoInputs = `<input type="text" id="input-${i}" class="ingresar-intento" size="1" maxlength="1" onkeyup="this.value = this.value.toUpperCase(); movetoNext(this,'input-${i+1}');">`;
        }else{
            codigoInputs = `<input type="text" id="input-${i}" class="ingresar-intento" size="1" maxlength="1" onkeyup="this.value = this.value.toUpperCase();"><br>`;
        }
        codigoFormulario = codigoFormulario + codigoInputs;
    }
    codigoFormulario = codigoFormulario + codigoSubmit;

    return codigoFormulario;
}

function generarHtmlHistorialIntentos(tamPalabraSecreta, historialIntentos, listaPistas){
    let codigoFormulario = "";
    let codigoInputs;
    let intento = "";
    let pista = "";
    for(let fila = 0; fila < 6; fila++){
        intento = historialIntentos[fila];
        pista = listaPistas[fila];
        for(let col = 0; col < tamPalabraSecreta; col++){
            if (intento != "X"){
                if(pista[col] == "z"){
                    codigoInputs = `<input style="background-color: rgb(18, 156, 235);text-align: center" type="text" class="historial-intento fila-${fila+1}" size="1" maxlength="1" value="${intento[col]}" disabled>`;
                }
                if(pista[col] == "a"){
                    codigoInputs = `<input style="background-color: rgb(248, 170, 81);text-align: center" type="text" class="historial-intento fila-${fila+1}" size="1" maxlength="1" value="${intento[col]}" disabled>`;
                }
                if(pista[col] == "o"){
                    codigoInputs = `<input style="background-color: rgb(194, 192, 192);text-align: center" type="text" class="historial-intento fila-${fila+1}" size="1" maxlength="1" value="${intento[col]}" disabled>`; 
                }     
            }
            else
            {
                codigoInputs = `<input style="background-color: rgb(255, 255, 255)" type="text" class="historial-intento fila-${fila+1}" size="1" maxlength="1" disabled>`;
            }
            codigoFormulario = codigoFormulario + codigoInputs;
        }
        codigoFormulario = codigoFormulario + "<br>";
    }
    return codigoFormulario;
}

function generarHtmlPalabraSecreta(tamPalabraSecreta, palabraSecreta){
    //let codigoFormulario = "La palabra secreta es: ";
    let codigoFormulario = "";
    for(let i = 0; i < tamPalabraSecreta; i++){
        codigoFormulario = codigoFormulario + `<input type="text" class="palabra-secreta" size="1" maxlength="1" disabled value="${palabraSecreta[i]}">`;
    }
    return codigoFormulario;
}


export {generarHtmlIngresarIntento, generarHtmlHistorialIntentos, generarHtmlPalabraSecreta};