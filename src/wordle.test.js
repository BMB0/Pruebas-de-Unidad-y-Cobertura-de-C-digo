import Wordle from "./wordle";

describe("obtenerIntento()", () => {
    let wordle = new Wordle();
    it('TC1. Tiene que retornar la variable intento', () => {
      expect(wordle.obtenerIntento()).toBe(undefined);
    });
  })

  describe('obtenerCategoriaSistemas()', () => {
    let wordle;
    beforeEach(() => {
      wordle = new Wordle();
    });
    it('TC1. debería retornar la lista de palabras de la categoría Sistemas', () => {
      let resultadoEsperado = ["HOLA", "PERO"];
      let resultadoObtenido = wordle.obtenerCategoriaSistemas();
      expect(resultadoObtenido).toEqual(resultadoEsperado);
    });
  });

  describe('obtenerCategoriaUCB()', () => {
    let wordle;
    beforeEach(() => {
      wordle = new Wordle();
    });
    it('TC1. debería retornar la lista de palabras de la categoría UCB', () => {
      let resultadoEsperado = ["LOBO", "LIBRO", "LLAVE"];
      let resultadoObtenido = wordle.obtenerCategoriaUCB();
      expect(resultadoObtenido).toEqual(resultadoEsperado);
    });
  });

  describe('obtenerCategoriaDeporte()', () => {
    let wordle;
    beforeEach(() => {
      wordle = new Wordle();
    });
    it('TC1. debería retornar la lista de palabras de la categoría Deporte', () => {
      let resultadoEsperado = ["MESSI", "BALON", "DUKE", "CINCO"];
      let resultadoObtenido = wordle.obtenerCategoriaDeporte();
      expect(resultadoObtenido).toEqual(resultadoEsperado);
    });
  });