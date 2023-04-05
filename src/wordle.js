import FuncionesWordle from "./funcionesWordle";

class Wordle{
    constructor(){
        this.palabraSecreta;
        this.tamPalabraSecreta;
        this.intento;
        this.historialIntentos = [];
        this.listaPistas = [];
        this.nroIntentos;
        this.funcionesWordle = new FuncionesWordle();
        this.cadenaResultado;
        this.nuevaPalabra;
        this.categoria = [];
    }

    definirPalabraSecreta(categoria="general"){
        this.palabraSecreta = this.funcionesWordle.definirPalabraSecretaAlAzar(categoria);
        this.definirTamPalabraSecreta();
        this.historialIntentos = this.funcionesWordle.definirHistorialIntentos();
        this.listaPistas = this.funcionesWordle.definirListaPistas();
        this.nroIntentos = this.funcionesWordle.definirNroIntentos();
    }

    definirSecreta(palabra){
        this.palabraSecreta = this.funcionesWordle.definirPalabraSecreta(palabra);
        this.definirTamPalabraSecreta();
        this.historialIntentos = this.funcionesWordle.definirHistorialIntentos();
        this.listaPistas = this.funcionesWordle.definirListaPistas();
        this.nroIntentos = this.funcionesWordle.definirNroIntentos();
    }

    definirTamPalabraSecreta(){
        this.tamPalabraSecreta = this.funcionesWordle.definirTamanioPalabraSecreta(this.palabraSecreta);
    }

    definirIntento(intentoPalabra){
        this.intento = this.funcionesWordle.definirIntento(intentoPalabra, this.tamPalabraSecreta);
        this.historialIntentos = this.funcionesWordle.definirHistorialIntentos();
        this.nroIntentos = this.funcionesWordle.definirNroIntentos();
        this.funcionesWordle.definirCadenaResultado(this.palabraSecreta,this.intento);
    }

    definirNuevaPalabra(nuevaPalabra){
        this.nuevaPalabra = this.funcionesWordle.agregarNuevaPalabra(nuevaPalabra);
    }

    definirCategorias(categoria){
        this.categoria = this.funcionesWordle.definirCategorias(categoria);
    }

    obtenerIntento(){
        return this.intento;
    }

    obtenerHistorialIntentos(){
        return this.historialIntentos;
    }

    obtenerNroIntentos(){
        return this.nroIntentos;
    }
    
    obtenerPalabraSecreta(){
        return this.palabraSecreta;
    }

    obtenerPalabrasSeleccionables(){
        return this.funcionesWordle.obtenerListaPalabras();
    }
    
    obtenerCadenaResultado(){
        return this.funcionesWordle.obtenerCadenaResultado();
    }

    obtenerListaPistas(){
        return this.listaPistas;
    }
    
    obtenerResultadoJuego(){
        return this.funcionesWordle.definirResultadoJuego(this.intento, this.palabraSecreta);
    }

    obtenerNuevaPalabra(){
        return this.nuevaPalabra;
    }

    obtenerCategoriaDeporte(){
        return this.funcionesWordle.obtenerCategoriaDeporte();
    }

    obtenerCategoriaUCB(){
        return this.funcionesWordle.obtenerCategoriaUCB();
    }

    obtenerCategoriaSistemas(){
        return this.funcionesWordle.obtenerCategoriaSistemas();
    }

    obtenerPista(){
        return this.funcionesWordle.obtenerPistaAlAzar(this.palabraSecreta);
    }

    obtenerPosicionPista(){         
        return this.funcionesWordle.obtenerPosicionPistaAlAzar(this.palabraSecreta);
    }
}
export default Wordle;


