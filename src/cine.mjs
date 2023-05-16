export class Multiplex 
{
    static min_duracion = 45;
    static max_duracion = 500;
    static descuento_taquillero = 0.3;
    static descuento_regular = 0;
    static descuento_platino = 0.1;
    static descuento_oro = 0.2;
    static precio_general = 10000;
    static precio_preferencial = 15000;
    static min_general = 35;
    static max_general = 700;
    static min_preferencial = 15;
    static max_preferencial = 300;
    static puntos_platino = 100;
    static puntos_oro = 150;
    static precio_por_punto_regular = 10000;
    static precio_por_punto_platino = 5000;
    static precio_por_punto_oro = 2000;
    static l_edades_minimas = [7, 10, 13, 15, 17, 18];
    static l_recargas = [40000, 50000, 60000, 70000, 80000, 90000, 100000, 120000, 150000, 200000]
    static l_categorias = ["regular" , "platino", "oro"]
    static CombosMultiplex = 
    {
        1: 25000,
        2: 30000,
        3: 40000,
        4: 50000,
        5: 60000
    };
    static  l_generos = 
    [
        "accion",
        "aventura",
        "animacion",
        "comedia",
        "crimen",
        "documental",
        "drama",
        "fantasia",
        "horror",
        "musical",
        "misterio",
        "romance",
        "scifi",
        "thriller",
    ];

    constructor()
    {
        this._l_salas = []
        this._l_clientes = []
        this._l_funciones = []
        this._l_peliculas = []
        this._l_taquilleros = []
    }

    get L_salas() { return this._l_salas; }

    get L_clientes() { return this._l_clientes; }

    get L_funciones() { return this._l_funciones; }

    get L_peliculas() { return this._l_peliculas; }

    get L_taquilleros() { return this._l_taquilleros; }

    Contratar_taquillero(id, nombre, numero_contacto, usuario, contrasena)
    {
        try
        {
            trabajador = new Taquillero(id, nombre, numero_contacto, usuario, contrasena);
            this._l_taquilleros.push(trabajador);
            return trabajador;
        }
        catch (error) { throw new Error("Ocurrió un error contratando al taquillero\n" + error); }
    }

    Construir_sala(sillas_generales, sillas_preferenciales)
    {
        nueva_sala = new Sala(sillas_generales, sillas_preferenciales);
        this._l_salas.push(nueva_sala);
        return nueva_sala;
    }

    Crear_cliente(id, nombre, numero_contacto, usuario, contrasena)
    {
        nuevo_cliente = new Cliente(id, nombre, numero_contacto, usuario, contrasena);
        this._l_clientes.push(nuevo_cliente);
        return nuevo_cliente;
    }

    Crear_funcion(fecha_hora, sala, pelicula)
    {
        nueva_funcion = new Funcion(fecha_hora, sala, pelicula);
        this._l_funciones.push(nueva_funcion);
        return nueva_funcion;
    }

    Pasar_pelicula(nombre, duracion, edad_minima, genero, puntero_imagen)
    {
        nueva_peli = new Pelicula(nombre, duracion, edad_minima, genero, puntero_imagen);
        this._l_peliculas.push(nueva_peli);
        return nueva_peli;
    }
}

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

export class Pelicula 
{
    constructor(nombre, duracion, edad_minima, genero, puntero_imagen) 
    {
        this.Nombre = nombre;
        this.Duracion = duracion;
        this.Edad_minima = edad_minima;
        this.Genero = genero;
        this.Puntero_imagen = puntero_imagen;
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
            if (parseInt(value) >= Multiplex.min_duracion && parseInt(value) <= Multiplex.max_duracion) this._duracion = value * 60 * 1000;
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
            else throw new Error("Ingrese una edad incluida en el marco de clasificaciones ESRB");
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

    get Puntero_imagen() { return this._puntero_imagen; }

    set Puntero_imagen(value) 
    {
        try 
        {
            if (value && value.trim().length >= 0) this._puntero_imagen = value;
            else throw new Error("Ingrese un nombre válido");
        } 
        catch (error) { throw new Error("Ocurrió un error asignando el nombre a la película\n" + error); }
    }

    toString() { return this.Nombre; }
}

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

    toString() { return this.Fecha_hora.toLocaleDateString("en-US", options) + this.Fecha_hora.toLocaleTimeString("en-US"); }
}

export class Persona 
{
    constructor(id, nombre, numero_contacto, usuario, contrasena, saldo) 
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
        catch (error) { throw new Error('Ocurrió un error asignando la contraseña\n' + error); }
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

export class Taquillero extends Persona 
{
    constructor(id, nombre, numero_contacto, usuario, contrasena, saldo = 0) 
    {
        super(id, nombre, numero_contacto, usuario, contrasena, saldo);
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
                        let deduccion = cantidad_general * Multiplex.precio_general + cantidad_preferencial * Multiplex.precio_preferencial
                        if (this._saldo >= deduccion)
                        {
                            this._saldo -= (deduccion * ( 1 - this.Descuento));
                            funcion.boletas_general -= cantidad_general;
                            funcion.boletas_preferencial -= cantidad_preferencial;
                        }
                        else throw new Error("No cuenta con el saldo suficiente para la transacción.\nRecargue por favor")
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

export class Cliente extends Persona
{
    constructor(id, nombre, numero_contacto, usuario, contrasena, saldo = 0, puntos_acumulados = 0) 
    {
        super(id, nombre, numero_contacto, usuario, contrasena, saldo);
        this._puntos_acumulados = puntos_acumulados;
        this.Verificar_categoria()
    }

    get Puntos_acumulados() { return this._puntos_acumulados; }

    get Saldo() { return this._saldo; }

    get Descuento() { return this._descuento; }

    get Categoria() { return this._categoria;}
    
    set Categoria(value)
    {
        try
        {
            if (Multiplex.l_categorias.includes(value)) this._categoria = value;
            else throw new Error("Ingrese una categpría válida");
        }
        catch (error) { throw new Error("Ocurrió un error asignando la categoría\n" + error); }
    }

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
                    this.Verificar_categoria()
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
            cantidad_total = cantidad_general + cantidad_preferencial;
            if (cantidad_total >=1 && cantidad_total <= 10)
            {
                if (funcion instanceof Funcion)
                {
                    if (cantidad_total <= funcion.Boletas_general + funcion.Boletas_preferencial)
                    {
                        deduccion = cantidad_general * Multiplex.precio_general + cantidad_preferencial * Multiplex.precio_preferencial;
                        if(this._saldo >= deduccion)
                        {
                            this._saldo -= (deduccion * (1 - this.Descuento));
                            this._puntos_acumulados += (cantidad_general + 2 * cantidad_preferencial);
                            funcion.boletas_general -= cantidad_general;
                            funcion.boletas_preferencial -= cantidad_preferencial;
                            this.Verificar_categoria()
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

    Verificar_categoria()
    {
        if (this.Puntos_acumulados < 100)
        {
            this.Categoria = "regular";
            this._descuento = Multiplex.descuento_regular;
            this._combosCliente = Object.fromEntries
            (
                Object.entries(Multiplex.CombosMultiplex).filter(([key]) => key >= 1 && key <= 3)
            );
        }
        else if (this.Puntos_acumulados >= 100 && this.Puntos_acumulados < 150)
        {
            this.Categoria = "platino";
            this._descuento = Multiplex.descuento_platino;
            this._combosCliente = Object.fromEntries
            (
                Object.entries(Multiplex.CombosMultiplex).filter(([key]) => key >= 1 && key <= 4)
            );
        }
        else if (this.Puntos_acumulados >= 150)
        {
            this.Categoria = "oro";
            this._descuento = Multiplex.descuento_oro;
            this._combosCliente = Object.fromEntries
            (
                Object.entries(Multiplex.CombosMultiplex).filter(([key]) => key >= 1 && key <= 5)
            );
        }
    }

    toString() { return `${this.Nombre}`; }
}