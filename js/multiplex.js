export class Multiplex 
{
    static min_duracion = 45 * 60 * 1000;
    static max_duracion = 500 * 60 * 1000;
    static descuento_taquillero = 0.3;
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
}