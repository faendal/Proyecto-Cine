import { Multiplex } from "./multiplex.mjs";
import { Persona } from "./persona.mjs";

export class Taquillero extends Persona 
{
    constructor(id, nombre, numero_contacto, saldo = 0) 
    {
        super(id, nombre, numero_contacto, saldo);
        this._descuento = Multiplex.descuento_taquillero;
    }

    get Descuento() { return this._descuento; }

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
                        this._saldo -= (cantidad_general * Multiplex.precio_general + cantidad_preferencial * Multiplex.precio_preferencial - this.Descuento);
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

    toString() { return this.Nombre; }
}
