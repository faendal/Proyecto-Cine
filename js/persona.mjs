import { Multiplex } from "./multiplex.mjs";

export class Persona 
{
    constructor(id, nombre, numero_contacto, saldo = 0) 
    {
        this.Id = id;
        this.Nombre = nombre;
        this.Numero_contacto = numero_contacto;
        this._saldo = saldo;
    }

    get Id() { return this._id; }

    set Id(value) 
    {
        try 
        {
            if (value >= 0 && value <= Number.MAX_SAFE_INTEGER) this._id = value; 
            else throw new Error('Ingrese un Id válido');
        } 
        catch (error) { throw new Error('Ocurrió un error asignando el Id\n' + error) };
    }

    get Nombre() { return this._nombre; }

    set Nombre(value) 
    {
        try 
        {
            if (value && value.trim().length > 0) this._nombre = value;
            else throw new Error('Ingrese un nombre válido');
        } 
        catch (error) { throw new Error('Ocurrió un error asignando el nombre\n' + error); }
    }

    get Numero_contacto() { return this._numero_contacto; }

    set Numero_contacto(value) 
    {
        try
        {
            if ( value && value.trim().length >= 7 && value.trim().length <= 15) this._numero_contacto = value;
            else throw new Error('Ingrese un número de contacto válido');
        }
        catch (error) {throw new Error("Ocurrió un error asignando el número de contacto\n" + error); }
    }

    Recargar_saldo(valor)
    {
        try 
        { 
            if (Multiplex.l_recargas.includes(value)) _saldo += valor;
            else throw new Error("Ingrese un valor disponible en la lista de recargas");
        }
        catch (error) { throw new Error("Ocurrió un error recargando el saldo\n" + error); }
    }
}
