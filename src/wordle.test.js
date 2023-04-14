import WordleError from "./ExcepcionesWordle";
import Wordle from "./wordle";

describe("obtenerIntento()", () => {
    let wordle = new Wordle();
    it('TC1. Tiene que retornar la variable intento', () => {
      expect(wordle.obtenerIntento()).toBe(undefined);
    });
  });

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

  describe("obtenerResultadoJuego()", () => {
    let wordle = new Wordle();
    wordle.definirSecreta("RAYOS");
    wordle.definirIntento("RAYOS");
    it('TC1. Tiene que retornar la Lista de intentos', () => {
      expect(wordle.obtenerResultadoJuego()).toEqual("Ganador");
    });
  });

  describe("obtenerPalabrasSeleccionables()", () => {
    let wordle = new Wordle();
    it('TC1. Tiene que retornar la lista de palabras seleccionables', () => {
      expect(wordle.obtenerPalabrasSeleccionables()).toEqual(["HOJA", "HOLA", "LOBO", "COLA", "PALO", "PICO", "COCA", "PERO", "DUKE", "RAYOS", "MESSI", "PALOS", "LIBRO", "LLAVE", "BALON", "CINCO"]);
    });
  });

  describe("obtenerHistorialIntentos()", () => {
    let wordle = new Wordle();
    it('TC1. Tiene que retornar el historial de intentos', () => {
      expect(wordle.obtenerHistorialIntentos()).toEqual([]);
    });
  });

  describe("definirNuevaPalabra()", () => {
    let wordle = new Wordle();
    it('TC1. Guarda una nueva palabra en nuevaPalabra', () => {
      wordle.definirNuevaPalabra("REZAR")
      expect(wordle.nuevaPalabra).toEqual("REZAR");
    });
  }) 

  describe("obtenerPista()", () => {
    let wordle 
    const randomNumberExpected = 0

    beforeEach(() => {
      wordle = new Wordle();
      jest.spyOn(global.Math, 'random').mockReturnValue(randomNumberExpected)
    })

    afterEach(() => {
      jest.spyOn(global.Math, 'random').mockRestore()
    })
    it('TC1. Guarda una nueva palabra en nuevaPalabra', () => {
      wordle.palabraSecreta = "RAYOS";
      wordle.tamPalabraSecreta = 5;
      wordle.funcionesWordle.obtenerPistaAlAzar("RAYOS");
      expect(wordle.obtenerPista()).toEqual("R");
    });
  }) 

  describe("definirPalabraSecreta()", () => {
    let wordle 
    const randomNumberExpected = 0

    beforeEach(() => {
      wordle = new Wordle();
      jest.spyOn(global.Math, 'random').mockReturnValue(randomNumberExpected)
    })

    afterEach(() => {
      jest.spyOn(global.Math, 'random').mockRestore()
    })
    it('TC1. define una palabra secreta', () => {
      wordle.definirPalabraSecreta()
      expect(wordle.palabraSecreta).toEqual("HOJA");
    });
  }) 