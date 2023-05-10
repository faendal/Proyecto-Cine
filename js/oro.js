import { Multiplex } from "./multiplex";
import { Cliente } from "./cliente";

export class Oro extends Cliente 
{
    constructor(id, nombre, numero_contacto, puntos_acumulados = 150) 
    {
        super(id, nombre, numero_contacto);
        this._descuento = Multiplex.descuento_oro;
        this._puntos_acumulados = puntos_acumulados;
        this._combosOro = Object.fromEntries
        (
            Object.entries(Multiplex.CombosMultiplex).filter(([key]) => key >= 1 && key <= 5)
        );
    }

    get Puntos_acumulados() { return this._puntos_acumulados; }

    Comprar_Combo(combo)
    {
        try 
        {
            if (this._combosOro.hasOwnProperty(combo)) 
            {
                this._puntos_acumulados += Math.floor
                (
                    this._combosOro[combo] / Multiplex.precio_por_punto_oro
                );
            } 
            else throw new Error('Ingrese un código de combo válido');
        } 
        catch (error) { throw new Error('Ocurrió un error durante la compra del combo\n' + error); }
    }
}
