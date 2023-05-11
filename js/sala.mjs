import { Multiplex } from "./multiplex.mjs";

export class Sala 
{
    static numeracion_salas = 1;

    constructor(sillas_general, sillas_preferencial) 
    {
        this._nro_sala = Sala.numeracion_salas;
        Sala.numeracion_salas++;
        this.Sillas_general = sillas_general;
        this.Sillas_preferencial = sillas_preferencial;
    }

    get Sillas_general() { return this._sillas_general; }

    set Sillas_general(value) 
    {
        try 
        {
            if (value >= Multiplex.min_general && value <= Multiplex.max_general) this._sillas_general = value;
            else throw new Error("Ingrese una cantidad de sillas generales válida");
        } 
        catch (error) { throw new Error("Ocurrió un error asignando las sillas generales\n" + error); }
    }

    get Sillas_preferencial() { return this._sillas_preferencial; }

    set Sillas_preferencial(value)
    {
        try
        {
            if (value >= Multiplex.min_preferencial && value <= Multiplex.max_preferencial) this._sillas_preferencial = value;
            else throw new Error("Ingrese una cantidad de sillas preferenciales válida");
        } 
        catch (error) { throw new Error("Ocurrió un error asignando las sillas preferenciales\n" + error); }
    }

    toString() { return "Sala número " + this._nro_sala; }
}
