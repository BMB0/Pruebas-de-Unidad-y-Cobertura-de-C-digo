import FuncionesWordle from "./funcionesWordle"

describe("Funcion esIntentoIncompleto(intento, tamPalabraSecreta)", () => {
  let funcionesWordle = new FuncionesWordle();
  it('TCU 1. Debe lanzar un error si el intento es incompleto', () => {
    expect(() => {
      funcionesWordle.esIntentoIncompleto('hola', 6);
    }).toThrowError("Palabra Incompleta.");
  });

  it('TCU 2. No debe lanzar un error si el intento es completo', () => {
    expect(() => {
      funcionesWordle.esIntentoIncompleto('hola', 4);
    }).not.toThrowError();
  });
})

describe("Funcion esIntentoPermitido(intento)", () => {
  let funcionesWordle = new FuncionesWordle();
  it('TCU 1. Debería lanzar un error si el intento no es una palabra seleccionable', () => {
    expect(() => funcionesWordle.esIntentoPermitido('XYZ')).toThrow('No existe esa palabra.');
  });
  
  it('TCU 2. No debe lanzar un error si el intento es completo', () => {
    expect(() => funcionesWordle.esIntentoPermitido('HOLA')).not.toThrow('No existe esa palabra.');
  });
})

describe("generarResultadoVacio(tamPalabraSecreta)", () => {
  let funcionesWordle = new FuncionesWordle();
  //console.log(funcionesWordle);
  it('TCU 1. Tiene que generar un array del mismo tamanio que el de la variable tamPalabraSecreta', () => {
    funcionesWordle.generarResultadoVacio(5);
    console.log(typeof(funcionesWordle.obtenerCadenaResultado()))
    expect(funcionesWordle.obtenerCadenaResultado()).toEqual(['o','o','o','o','o']);
  });
  it('TCU 2. Tiene que generar un array de tamanio 0 ', () => {
    funcionesWordle.generarResultadoVacio(0);
    expect(funcionesWordle.cadenaResultado).toEqual([]);
    //expect(0).toBe(0);
  });
})

describe("definirNuevaPalabra(nuevaPalabra)", () => {
  let funcionesWordle = new FuncionesWordle();
  it('TCU 1. Tiene que aniadir la palabra a la lista y subir el tamanio de la lista de palabras', () => {
    funcionesWordle.definirNuevaPalabra('PELO');
    expect(funcionesWordle.palabrasSeleccionables[funcionesWordle.palabrasSeleccionables.length - 1]).toBe("PELO");
  });

  it('TCU 2. Debería lanzar un error si se ingresa una cadena vacía', () => {
    expect(() => funcionesWordle.definirNuevaPalabra('')).toThrow('Ya existe esa palabra.');
  });
  
  it('TCU 3. No debe lanzar un error si el intento es completo', () => {
    expect(() => funcionesWordle.definirNuevaPalabra('HOLA')).toThrow('Ya existe esa palabra.');
  });
})