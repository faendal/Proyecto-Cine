import { Multiplex } from "./multiplex.mjs"
import { Funcion } from "./funcion.mjs";
import { Persona } from "./persona.mjs";

export class Cliente extends Persona 
{
    constructor(id, nombre, numero_contacto, saldo = 0, puntos_acumulados = 0) 
    {
        super(id, nombre, numero_contacto, saldo);
        this._puntos_acumulados = puntos_acumulados;
        this._descuento = Multiplex.descuento_regular;
        this._combosCliente = Object.fromEntries
        (
            Object.entries(Multiplex.CombosMultiplex).filter(([key]) => key >= 1 && key <= 3)
        );
    }

    get Puntos_acumulados() { return this._puntos_acumulados; }

    get Saldo() { return this._saldo; }

    get Descuento() { return this._descuento; }

    Comprar_Combo(combo) 
    {
        try
        {
            if (this._combosCliente.hasOwnProperty(combo)) 
            {
                if (this._saldo >= this._combosCliente[combo])
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
            let cantidad_total = cantidad_general + cantidad_preferencial;
            if (cantidad_total >=1 && cantidad_total <= 10)
            {
                if (funcion instanceof Funcion)
                {
                    if (cantidad_total <= funcion.Boletas_general + funcion.Boletas_preferencial)
                    {
                        let deduccion = cantidad_general * Multiplex.precio_general + cantidad_preferencial * Multiplex.precio_preferencial;
                        if(this._saldo >= deduccion)
                        {
                            this._saldo -= (deduccion * (1 - this.Descuento));
                            this._puntos_acumulados += (cantidad_general + 2 * cantidad_preferencial);
                            funcion.boletas_general -= cantidad_general;
                            funcion.boletas_preferencial -= cantidad_preferencial;
                        }
                        else throw new Error("No cuenta con el saldo suficiente para la transacción.\nRecargue por favor");
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
