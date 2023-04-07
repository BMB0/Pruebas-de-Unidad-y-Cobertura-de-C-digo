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
})