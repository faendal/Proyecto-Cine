import { Multiplex } from "./multiplex.mjs"
import { Persona } from "./persona.mjs";

export class Cliente extends Persona 
{
    constructor(id, nombre, numero_contacto, puntos_acumulados = 0) 
    {
        super(id, nombre, numero_contacto);
        this._puntos_acumulados = puntos_acumulados;
        this._combosCliente = Object.fromEntrie
        (
            Object.entries(Multiplex.CombosMultiplex).filter(([key]) => key >= 1 && key <= 3)
        );
    }

    get Puntos_acumulados() { return this.puntos_acumulados; }

    Comprar_Combo(combo) 
    {
        try
        {
            if (this._combosCliente.hasOwnProperty(combo)) 
            {
                this._puntos_acumulados += Math.floor
                (
                    this._combosCliente[combo] / Multiplex.precio_por_punto_regular
                );
            } 
            else throw new Error('Ingrese un código de combo válido');
        } 
        catch (error) { throw new Error('Ocurrió un error durante la compra del combo\n' + error); }
    }

    toString() { return `${this.Nombre} - Puntos: ${this.Puntos_acumulados}`; }
}
