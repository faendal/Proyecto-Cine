import { Sala } from "./sala.mjs";
import { Pelicula } from "./pelicula.mjs";

export class Funcion 
{
    static numeracion_funciones = 1;

    constructor(fecha_hora, sala, pelicula) 
    {
        this._codigo = Funcion.numeracion_funciones;
        Funcion.numeracion_funciones++;
        this.Fecha_hora = fecha_hora;
        this.Sala = sala;
        this.Pelicula = pelicula;
        this._boletas_general = this._sala.Sillas_general;
        this._boletas_preferencial =  this._sala.Sillas_preferencial;
    }

    get Fecha_hora() { return this._fecha_hora; }

    set Fecha_hora(value) 
    {
        try
        {
            if (value >= new Date() && value <= new Date().setDate(new Date().getDate() + 45)) this._fecha_hora = value;
            else throw new Error("Ingrese una fecha válida para la función");
        }
        catch (error) { throw new Error("Ocurrió un error asignando la fecha y hora\n" + error); }
    }

    get Sala() { return this._sala.toString(); }

    set Sala(value)
    {
        try
        {
            if (value instanceof Sala) this._sala = value;
            else throw new Error("Ingrese un objeto sala");
        }
        catch (error) { throw new Error("Ocurrió un error asignando la sala a la función\n" + error); }
    }

    get Pelicula() { return this._pelicula.toString(); }

    set Pelicula(value)
    {
        try
        {
            if (value instanceof Pelicula) this._pelicula = value;
            else throw new Error("Ingrese un objeto película");
        }
        catch (error) { throw new Error("Ocurrió un error asignando la película\n" + error); }
    }

    get Boletas_general() { return this._boletas_general;}

    get Boletas_preferencial() { return this._boletas_preferencial; }

    toString() { return this.Fecha_hora.toLocaleTimeString("en-US"); }
}
