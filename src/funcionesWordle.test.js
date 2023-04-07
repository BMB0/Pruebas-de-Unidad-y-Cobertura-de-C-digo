import FuncionesWordle from "./funcionesWordle"
import WordleError from "./ExcepcionesWordle";

describe("Funcion esIntentoIncompleto(intento, tamPalabraSecreta)", () => {
  let funcionesWordle = new FuncionesWordle();
  it('TCU 1. Debe lanzar un error si el intento es incompleto', () => {
    Error = new WordleError("Palabra Incompleta.")
    expect(() => {
      funcionesWordle.esIntentoIncompleto('hola', 6);
    }).toThrowError(Error);
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