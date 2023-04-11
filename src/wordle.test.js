import Wordle from "./wordle";

describe("obtenerIntento()", () => {
    let wordle = new Wordle();
    it('TC1. Tiene que retornar la variable intento', () => {
      expect(wordle.obtenerIntento()).toBe(undefined);
    });
  })

  describe('obtenerCategoriaSistemas()', () => {
    it('TC1. debería retornar la lista de palabras de la categoría Sistemas', () => {
      const wordle = new Wordle();
      const resultadoEsperado = ["HOLA", "PERO"];
      const resultadoObtenido = wordle.obtenerCategoriaSistemas();
      expect(resultadoObtenido).toEqual(resultadoEsperado);
    });
  });