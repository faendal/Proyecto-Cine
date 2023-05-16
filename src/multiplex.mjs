import { Cliente } from "./cliente.mjs";
import { Funcion } from "./funcion.mjs";
import { Pelicula } from "./pelicula.mjs";
import { Sala } from "./sala.mjs";
import { Taquillero } from "./taquillero.mjs";

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