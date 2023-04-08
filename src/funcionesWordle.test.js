import FuncionesWordle from "./funcionesWordle"

describe("Funcion esIntentoIncompleto(intento, tamPalabraSecreta)", () => {
  let funcionesWordle = new FuncionesWordle();
  it('TC1. Debe lanzar un error si el intento es incompleto', () => {
    expect(() => {
      funcionesWordle.esIntentoIncompleto('hola', 6);
    }).toThrowError("Palabra Incompleta.");
  });

  it('TC2. No debe lanzar un error si el intento es completo', () => {
    expect(() => {
      funcionesWordle.esIntentoIncompleto('hola', 4);
    }).not.toThrowError();
  });
})

describe("Funcion esIntentoPermitido(intento)", () => {
  let funcionesWordle = new FuncionesWordle();
  it('TC1. Debería lanzar un error si el intento no es una palabra seleccionable', () => {
    expect(() => funcionesWordle.esIntentoPermitido('XYZ')).toThrow('No existe esa palabra.');
  });
  
  it('TC2. No debe lanzar un error si el intento es completo', () => {
    expect(() => funcionesWordle.esIntentoPermitido('HOLA')).not.toThrow('No existe esa palabra.');
  });
})

describe("generarResultadoVacio(tamPalabraSecreta)", () => {
  let funcionesWordle = new FuncionesWordle();
  //console.log(funcionesWordle);
  it('TC1. Tiene que generar un array del mismo tamanio que el de la variable tamPalabraSecreta', () => {
    funcionesWordle.generarResultadoVacio(5);
    console.log(typeof(funcionesWordle.obtenerCadenaResultado()))
    expect(funcionesWordle.obtenerCadenaResultado()).toEqual(['o','o','o','o','o']);
  });
  it('TC2. Tiene que generar un array de tamanio 0 ', () => {
    funcionesWordle.generarResultadoVacio(0);
    expect(funcionesWordle.cadenaResultado).toEqual([]);
    //expect(0).toBe(0);
  });
})

describe("definirNuevaPalabra(nuevaPalabra)", () => {
  let funcionesWordle = new FuncionesWordle();
  it('TC1. Tiene que aniadir la palabra a la lista y subir el tamanio de la lista de palabras', () => {
    funcionesWordle.definirNuevaPalabra('PELO');
    expect(funcionesWordle.palabrasSeleccionables[funcionesWordle.palabrasSeleccionables.length - 1]).toBe("PELO");
  });

  it('TC2. Debería lanzar un error si se ingresa una cadena vacía', () => {
    expect(() => funcionesWordle.definirNuevaPalabra('')).toThrow('Ya existe esa palabra.');
  });
  
  it('TC3. No debe lanzar un error si el intento es completo', () => {
    expect(() => funcionesWordle.definirNuevaPalabra('HOLA')).toThrow('Ya existe esa palabra.');
  });
})

describe('agregarNuevaPalabra(nuevaPalabra)', () => {
  let funcionesWordle = new FuncionesWordle();
  
  it('TC1. debería devolver la nueva palabra si se puede agregar exitosamente', () => {
    expect(funcionesWordle.agregarNuevaPalabra('RARO')).toBe('RARO');
  });
  
  it('TC2. debería devolver el mensaje de error si la nueva palabra no es válida', () => {
    expect(funcionesWordle.agregarNuevaPalabra('HOLA')).toBe('Ya existe esa palabra.');
  });
});

describe('definirPalabraSecretaAlAzar(categoria)', () => {
  const randomNumberExpected = 0
  let funcionesWordle;

  beforeEach(() => {
    funcionesWordle = new FuncionesWordle();
    jest.spyOn(global.Math, 'random').mockReturnValue(randomNumberExpected)
  })

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore()
  })

  it('TC1. debería retornar una palabra aleatoria de la categoría Deporte', () => {
    expect(funcionesWordle.definirPalabraSecretaAlAzar('Deporte')).toBe('MESSI')
    expect(Math.random).toHaveBeenCalledTimes(1)
  });

  it('TC2. debería retornar una palabra aleatoria de la categoría UCB', () => {
    expect(funcionesWordle.definirPalabraSecretaAlAzar('UCB')).toBe('LOBO')
    expect(Math.random).toHaveBeenCalledTimes(1)
  });

  it('TC3. debería retornar una palabra aleatoria de la categoría UCB', () => {
    expect(funcionesWordle.definirPalabraSecretaAlAzar('Sistemas')).toBe('HOLA')
    expect(Math.random).toHaveBeenCalledTimes(1)
  });
});

describe('definirResultadoJuego(intento, palabraSecreta)', () => {
  let funcionesWordle = new FuncionesWordle();
  const palabraSecreta = 'HOLA';

  it('TC1. debería devolver "Ganador" si el intento es igual a la palabra secreta', () => {
    funcionesWordle.nroIntentos = 0;
    expect(funcionesWordle.definirResultadoJuego('HOLA', palabraSecreta)).toBe('Ganador');
  });
  
  it('TC2. debería devolver "Perdedor" si se han hecho 6 intentos sin acertar la palabra secreta', () => {
    funcionesWordle.nroIntentos = 6;
    expect(funcionesWordle.definirResultadoJuego('XYZ', palabraSecreta)).toBe('Perdedor');
  });
  
  it('TC3. debería devolver "Activo" si el intento es diferente a la palabra secreta y no se han hecho 6 intentos', () => {
    funcionesWordle.nroIntentos = 0;
    expect(funcionesWordle.definirResultadoJuego('MUNDO', palabraSecreta)).toBe('Activo');
  });
});

describe('definirPalabraSecreta(palabra)', () => {
  let funcionesWordle = new FuncionesWordle();
  
  it('TC1. Devuelve la palabra y la guarda ', () => {
    expect(funcionesWordle.definirPalabraSecreta('MUNDO')).toBe('MUNDO');
  });
  
  it('TC2. Devuelve la palabra y no la guarda ', () => {
    expect(funcionesWordle.definirPalabraSecreta('RAYOS')).toBe('RAYOS');
  });
});

describe("limpiarListaIntentos()", () => {
  let funcionesWordle = new FuncionesWordle();
  //console.log(funcionesWordle);
  it('TC1. Tiene que generar un array del mismo tamanio que el de la variable tamPalabraSecreta', () => {
    funcionesWordle.limpiarListaIntentos();
    expect(funcionesWordle.listaIntentos).toEqual(['X','X','X','X','X','X',]);
    expect(funcionesWordle.listaPistas).toEqual(['X','X','X','X','X','X',]);
    expect(funcionesWordle.nroIntentos).toEqual(0);
  });
})

describe("obtenerListaPalabras()", () => {
  let funcionesWordle = new FuncionesWordle();
  //console.log(funcionesWordle);
  it('TC1. Tiene que retornar la Lista de Palabras', () => {
    expect(funcionesWordle.obtenerListaPalabras()).toEqual(["HOJA","HOLA","LOBO","COLA","PALO","PICO","COCA","PERO","DUKE","RAYOS","MESSI","PALOS","LIBRO","LLAVE","BALON","CINCO",]);
  });
})