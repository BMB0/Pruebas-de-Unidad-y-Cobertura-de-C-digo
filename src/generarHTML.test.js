import {generarHtmlIngresarIntento, generarHtmlHistorialIntentos, generarHtmlPalabraSecreta} from './generarHTML.js';

describe("generarHtmlIngresarIntento(tamPalabraSecreta)", () => {
    it('TC1. deberia retornat un submit cuando se ingresa un número igual a 0 para el tamaño de la palabra secreta', () => {
        let submit = '<input type="submit" class="ingresar-palabra-boton submit" value="ACEPTAR"/>'
        let tamPalabraSecreta = 0;
        const resultado = generarHtmlIngresarIntento(tamPalabraSecreta);
        expect(resultado).toBe(submit);
    });
});
  