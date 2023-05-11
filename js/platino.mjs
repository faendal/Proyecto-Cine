import { Multiplex } from "./multiplex.mjs";
import { Cliente } from "./cliente.mjs";

export class Platino extends Cliente 
{
    constructor(id, nombre, numero_contacto, saldo = 0, puntos_acumulados = 100) 
    {
        super(id, nombre, numero_contacto, saldo, puntos_acumulados);
        this._descuento = Multiplex.descuento_platino;
        this._combosPlatino = Object.fromEntries
        (
            Object.entries(Multiplex.CombosMultiplex).filter(([key]) => key >= 1 && key <= 4)
        );
    }

    Comprar_Combo(combo) 
    {
        try 
        {
            if (this._combosPlatino.hasOwnProperty(combo)) 
            {
                if (this._saldo > this._combosPlatino[combo])
                {
                    this._puntos_acumulados += Math.floor
                    (
                        this._combosPlatino[combo] / Multiplex.precio_por_punto_platino
                    );
                    this._saldo -= this._combosPlatino[combo] * (1 - this._descuento);
                }
                else throw new Error("Cuenta con un saldo insuficiente para la transacción\n.Recargue por favor");
            } 
            else throw new Error('Ingrese un código de combo válido');
        } 
        catch (error) { throw new Error('Ocurrió un error durante la compra del combo\n' + error); }
    }
}
