import Wordle from "./wordle";

describe("obtenerIntento()", () => {
    let wordle = new Wordle();
    it('TC1. Tiene que retornar la variable intento', () => {
      expect(wordle.obtenerIntento()).toBe(undefined);
    });
  })