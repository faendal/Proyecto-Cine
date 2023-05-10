import { Multiplex } from "./multiplex";
import { Persona } from "./persona";

export class Taquillero extends Persona 
{
    constructor(id, nombre, numero_contacto) 
    {
        super(id, nombre, numero_contacto);
        this._descuento = Multiplex.descuento_taquillero;
    }

    get Descuento() { return this._descuento; }

    toString() { return this.Nombre; }
}
