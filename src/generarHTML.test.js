import {generarHtmlIngresarIntento, generarHtmlHistorialIntentos, generarHtmlPalabraSecreta} from './generarHTML.js';

describe("generarHtmlIngresarIntento(tamPalabraSecreta)", () => {
    it('TC1. deberia retornat un submit cuando se ingresa un número igual a 0 para el tamaño de la palabra secreta', () => {
        let submit = '<input type="submit" class="ingresar-palabra-boton submit" value="ACEPTAR"/>'
        let tamPalabraSecreta = 0;
        const resultado = generarHtmlIngresarIntento(tamPalabraSecreta);
        expect(resultado).toBe(submit);
    });
    it('TC2. deberia retornar un input text y un input submit cuando se ingresa un número igual a 1 para el tamaño de la palabra secreta', () => {
        const tamPalabraSecreta = 1;
        const resultado = generarHtmlIngresarIntento(tamPalabraSecreta);
        expect(resultado.match(/<input/g)).toHaveLength(tamPalabraSecreta+1);
        expect(resultado.match(/type="submit"/)).toHaveLength(1);
    });
    it('TC3. deberia retornar 5 inputs text y un input submit cuando se ingresa un número igual a 5 para el tamaño de la palabra secreta', () => {
        const tamPalabraSecreta = 5;
        const resultado = generarHtmlIngresarIntento(tamPalabraSecreta);
        expect(resultado.match(/<input/g)).toHaveLength(tamPalabraSecreta+1);
        expect(resultado.match(/type="submit"/)).toHaveLength(1);
    });
});

describe("generarHtmlHistorialIntentos(tamPalabraSecreta, historialIntentos, listaPistas)", () => {
    it('TC1. deberia retornar una cadena que contenga 6 <br> si el tamaño de la palabra secreta es 0', () => {
        let historialIntentos = ["X", "X", "X", "X", "X", "X"];
        let listaPistas = ["X", "X", "X", "X", "X", "X"];
        let tamPalabraSecreta = 0
        const resultado = generarHtmlHistorialIntentos(tamPalabraSecreta, historialIntentos, listaPistas);
        expect(resultado.match(/<br>/g)).toHaveLength(6);
    });
    it('TC2. deberia retornar una cadena que contenga 6 (255, 255, 255) si no existen intentos', () => {
        let historialIntentos = ["X", "X", "X", "X", "X", "X"];
        let listaPistas = ["X", "X", "X", "X", "X", "X"];
        let tamPalabraSecreta = 1
        const resultado = generarHtmlHistorialIntentos(tamPalabraSecreta, historialIntentos, listaPistas);
        expect(resultado.match(/255, 255, 255/g)).toHaveLength(6);
    });
    it('TC3. deberia retornar una cadena que contenga 1 (18, 156, 235) y 5 (255, 255, 255) si existe un intento y una pista acertada(z)', () => {
        let historialIntentos = ["A", "X", "X", "X", "X", "X"];
        let listaPistas = ["z", "X", "X", "X", "X", "X"];
        let tamPalabraSecreta = 1
        const resultado = generarHtmlHistorialIntentos(tamPalabraSecreta, historialIntentos, listaPistas);
        expect(resultado.match(/18, 156, 235/g)).toHaveLength(1);
        expect(resultado.match(/255, 255, 255/g)).toHaveLength(5);
    });
    it('TC4. deberia retornar una cadena que contenga 1 (248, 170, 81) y 5 (255, 255, 255) si existe un intento y una pista que se encuentre en la palabra(a)', () => {
        let historialIntentos = ["A", "X", "X", "X", "X", "X"];
        let listaPistas = ["a", "X", "X", "X", "X", "X"];
        let tamPalabraSecreta = 1
        const resultado = generarHtmlHistorialIntentos(tamPalabraSecreta, historialIntentos, listaPistas);
        expect(resultado.match(/248, 170, 81/g)).toHaveLength(1);
        expect(resultado.match(/255, 255, 255/g)).toHaveLength(5);
    });
    it('TC5. deberia retornar una cadena que contenga 1 (194, 192, 192) y 5 (255, 255, 255) si existe un intento y una pista (o) si no se encontro en la palabra', () => {
        let historialIntentos = ["A", "X", "X", "X", "X", "X"];
        let listaPistas = ["o", "X", "X", "X", "X", "X"];
        let tamPalabraSecreta = 1
        const resultado = generarHtmlHistorialIntentos(tamPalabraSecreta, historialIntentos, listaPistas);
        expect(resultado.match(/194, 192, 192/g)).toHaveLength(1);
        expect(resultado.match(/255, 255, 255/g)).toHaveLength(5);
    });
});