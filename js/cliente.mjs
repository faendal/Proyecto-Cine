import { Multiplex } from "./multiplex.mjs"
import { Persona } from "./persona.mjs";

export class Cliente extends Persona 
{
    constructor(id, nombre, numero_contacto, saldo = 0, puntos_acumulados = 0) 
    {
        super(id, nombre, numero_contacto, saldo);
        this._puntos_acumulados = puntos_acumulados;
        this._combosCliente = Object.fromEntrie
        (
            Object.entries(Multiplex.CombosMultiplex).filter(([key]) => key >= 1 && key <= 3)
        );
    }

    get Puntos_acumulados() { return this.puntos_acumulados; }

    get Saldo() { return this._saldo; }

    Comprar_Combo(combo) 
    {
        try
        {
            if (this._combosCliente.hasOwnProperty(combo)) 
            {
                if (this._saldo > this._combosCliente[combo])
                {
                    this._puntos_acumulados += Math.floor
                    (
                        this._combosCliente[combo] / Multiplex.precio_por_punto_regular
                    );
                    this._saldo -= this._combosCliente[combo];
                }
                else throw new Error("Cuenta con un saldo insuficiente para la transacción\n.Recargue por favor");
            } 
            else throw new Error('Ingrese un código de combo válido');
        } 
        catch (error) { throw new Error('Ocurrió un error durante la compra del combo\n' + error); }
    }

    Comprar_boletas(funcion, cantidad_general, cantidad_preferencial)
    {
        try
        {
            if (cantidad_general + cantidad_preferencial >=1 && cantidad_general + cantidad_preferencial <= 10)
            {
                if (funcion instanceof Funcion)
                {
                    if (cantidad_general + cantidad_preferencial <= funcion.boletas_general)
                    {
                        this._saldo -= (cantidad_general * Multiplex.precio_general + cantidad_preferencial * Multiplex.precio_preferencial);
                        puntos_acumulados += (cantidad_general + 2 * cantidad_preferencial);
                        funcion.boletas_general -= cantidad_general;
                        funcion.boletas_preferencial -= cantidad_preferencial;
                    }
                    else throw new Error("No quedan suficientes boletas para completar su solicitud");
                }
                else throw new Error("Ingrese un objeto función");
            }
            else throw new Error("Solo puede comprar entre 1 y 10 boletas por compra");
        }
        catch (error) { throw new Error("Ocurrió un error durante la compra de boletas\n" + error); }
    }

    toString() { return `${this.Nombre} - Puntos: ${this.Puntos_acumulados}`; }
}
