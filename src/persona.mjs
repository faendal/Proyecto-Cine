import { Multiplex } from "./multiplex.mjs";

export class Persona 
{
    constructor(id, nombre, numero_contacto, usuario, contrasena, saldo = 0) 
    {
        this.Id = id;
        this.Nombre = nombre;
        this.Numero_contacto = numero_contacto;
        this._saldo = saldo;
        this.Usuario = usuario
        this.Contrasena = contrasena
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
            if ( toString(value) && (toString(value).trim().length >= 7 || toString(value).trim().length <= 15)) this._numero_contacto = value;
            else throw new Error('Ingrese un número de contacto válido');
        }
        catch (error) {throw new Error("Ocurrió un error asignando el número de contacto\n" + error); }
    }

    get Saldo() { return this._saldo; }

    get Usuario() { return this._usuario;}

    set Usuario(value)
    {
        try 
        {
            if (value && value.trim().length > 0) this._usuario = value;
            else throw new Error('Ingrese un nombre de usuario válido');
        } 
        catch (error) { throw new Error('Ocurrió un error asignando el nombre de usuario\n' + error); }
    }

    get Contrasena() { return this._contrasena;}

    set Contrasena(value)
    {
        try 
        {
            if (value && value.trim().length > 0) this._contrasena = value;
            else throw new Error('Ingrese una contraseña válida');
        } 
        catch (error) { throw new Error('Ocurrió un error asignando la constraseña\n' + error); }
    }
    
    Recargar_saldo(valor)
    {
        try 
        { 
            if (Multiplex.l_recargas.includes(valor)) this._saldo += valor;
            else throw new Error("Ingrese un valor disponible en la lista de recargas");
        }
        catch (error) { throw new Error("Ocurrió un error recargando el saldo\n" + error); }
    }
}
