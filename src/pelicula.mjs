import { Multiplex } from "./multiplex.mjs";

export class Pelicula 
{
    constructor(nombre, duracion, edad_minima, genero) 
    {
        this.Nombre = nombre;
        this.Duracion = duracion;
        this.Edad_minima = edad_minima;
        this.Genero = genero;
    }

    get Nombre() { return this._nombre; }

    set Nombre(value) 
    {
        try 
        {
            if (value && value.trim().length >= 0) this._nombre = value;
            else throw new Error("Ingrese un nombre válido");
        } 
        catch (error) { throw new Error("Ocurrió un error asignando el nombre a la película\n" + error); }
    }

    get Duracion() { return this._duracion; }

    set Duracion(value) 
    {
        try 
        {
            if (parseInt(value * 60 * 1000) >= Multiplex.min_duracion && parseInt(value * 60 * 1000) <= Multiplex.max_duracion) this._duracion = value * 60 * 1000;
            else throw new Error("Ingrese una duración válida para la película");
        } 
        catch (error) { throw new Error("Ocurrió un error asignando la duración\n" + error); }
    }

    get Edad_minima() { return this._edad_minima; }

    set Edad_minima(value)
    {
        try 
        {
            if (Multiplex.l_edades_minimas.includes(parseInt(value))) this._edad_minima = value;
            else throw new Error("Ingrese una las edades mínimas varían entre los 0 y los 18 años");
        } 
        catch (error) { throw new Error("Ocurrió un error asignando la edad mínima\n" + error); }
    }

    get Genero() { return this._genero; }

    set Genero(value)
    {
        try
        {
            if(Multiplex.l_generos.includes(value.trim().toLowerCase())) this._genero = value;
            else throw new Error("Ingrese un género válido");
        }
        catch (error) { throw new Error("Ocurrió un error asignando el género\n" + error); }
    }

    toString() { return this.Nombre; }
}
