db.videojuegos.insertMany([
    {
        _id:1,
        titulo: "Dragon Ball Z Kakarot",
        precio: 35,
        empredesarrolladoras: ["Bandai Namco Entertainment", "CyberConnect2"],

        modojuego: "Un jugador",
        plataformas: {
            consola: ["PlayStation 4", "Xbox One", "Nintendo Switch"],
            ordenador: ["Microsoft Windows", "Google Stadia"]
        },
        ventas:{
            cantidad: 2,
            unidad: "millones"
        },
        Géneros: ["juego de lucha", "rol de acción", "aventura"],
        fechaestreno: {
            Japón: new Date("2020-01-16"),
            Mundial: new Date("2020-01-17"),
            NintendoSwitch: new Date("2021-09-24")
        },
        personajes: {
            jugables: ["Goku", "Vegeta", "Piccolo", "Gohan", "Trunks", "Gotenks", "Veggeto"],
            supports: ["Krillin", "Yamcha", "Tien Shinhan", "Chiaotzu", "Androide 18", "Goten", "Kid Trunks"]
        },
        pegi: 12,
        Dlcs:{
            nombre:["A new power awakens Parte 1", "A new power awakens Parte 2", "Trunks, the warrior of hope"],
            cantidad: 3
        },
        serie: "Dragon Ball Z"


    },

    

    {
        _id:2,
        titulo: "Dragon Ball Z FighterZ",
        precio: 20,
        empredesarrolladoras: ["Arc System Works", "Bandai Namco Entertainment"],

        modojuego: ["Multijugador", "Un jugador"],
        plataformas: {
            consola: ["PlayStation 4", "Xbox One", "Nintendo Switch"],
            ordenador: "Microsoft Windows"
        },
        ventas:{
            cantidad: 13,
            unidad: "millones"
        },
        Géneros: ["Lucha", "Aventura"],
        fechaestreno: {
            PlayStation4: new Date("2018-01-26"),
            ordenador: new Date("2018-01-26"),
            Xbox: new Date("2018-01-26"),
            NintendoSwitch: new Date("2018-09-28")
        },
        personajes: {
            inicio: ["Goku", "Vegeta", "BUU", "Androide 18", "Krillin", "Yamcha", "Black", "Broly", "Gohan(Joven)", "Ultimate Gohan"],
            Dlcs:{
                nombre:["Videl", "Gogeta SSGSS", "Veggeto SSGSS", "Androide 17", "Gogeta SS4", "Super Baby 2"],
                cantidad: 6
            }
        },
        pegi: 12,
        serie: "Dragon Ball Z"

    },
    
    {
        _id:3,
        titulo: "Destiny 2",
        precio: "Gratis",
        empredesarrolladoras: "Bungie Studios",
        modojuego: "Multijugador",
        plataformas: {
            consola: ["PlayStation 4", "Xbox One", "PlayStation5", "Xbox serie X y serie S"],
            ordenador: ["Microsoft Windows", "Google Stadia"]
        },
        ventas:{
            cantidad: 3.7,
            unidad: "millones"
        },
        Géneros: ["MÁS", "juego de disparos en primera persona", "Aventura", "Lucha", "Acción"],
        fechaestreno: {
            PlayStation4: new Date("2017-09-6"),
            Xbox: new Date("2017-09-6"),
            Windows: new Date("2017-10-24")
        },
        personajes: "Avatar personalizable",
        pegi: 16,
        Dlcs:{
            nombre:["La maldición de Osiris", "El estratega", "Los renegados", "Bastión de las sombras", "Más alla de la luz"],
            cantidad: 5
        },
        serie: "Destiny"
    },

    {
        _id:4,
        titulo: "Grand Theft Auto V",
        precio: 10,
        empredesarrolladoras: ["Rockstar Games", "Rockstar North", "MÁS"],
        modojuego: ["Un jugador", "Multijugador"],
        plataformas: {
            consola: ["PlayStation 4", "Xbox Serie X", "Xbox 360", "Xbox One", "PlayStation3", "PlayStation5"],
            ordenador: "Microsoft Windows"
        },
        ventas:{
            cantidad: 10,
            unidad: "millones"
        },
        Géneros: ["Acción", "Aventura", "Mundo abierto"],
        fechaestreno:{
            PlayStation3: new Date("2013-10-17"),
            Xbox: new Date("2013-10-17"),
            Microsoft: new Date("2015-04-14"),
            
        },
        personajes:{
            jugables: ["Trevor Philips", "Franklin Clinton", "Michael De Santa"]
        },
        pegi: 18,
        serie: "GTA"
    },

    {
        _id:5,
        titulo: "ARK survival evolved",
        precio: 25,
        empredesarrolladoras: [ "Studio Wildcard", "Virtual Basement", "Efecto Studios", "Abstraction", "Instinct Games", "Instinct Games S.A.E."],
        modojuego: "Multijugador",
        plataformas: {
            consola: ["PlayStation 4", "Xbox One", "Xbox Series X y Series S"],
            ordenador: "Windows"
        },
        ventas:{
            cantidad: 5.5,
            unidad: "millones"
        },
        Géneros: ["supervivencia", "simulación", "acción", "aventura"],
        fechaestreno: new Date("2017-08-29"),
        personajes: "Avatar personalizable",
        pegi: 16,
        Dlcs:{
            nombre:["Génesis", "Crystal isles", "Valguero", "Extinción", "Aberration", "Ragnarock", "Scorched earth", "The center"],
            cantidad:8

        } 

        
    },
    
    { 
        _id:6,
        titulo: "Dragon Ball Legends",
        precio: 0,
        empredesarrolladoras: ["Bandai Namco Entertainment", "Dimps"],
        modojuego: ["Multijugador", "Gacha"],
        plataformas: ["Android", "IOS"],
        descargas:{
            cantidad: 10,
            unidad: "millones"
        },
        Géneros: ["juego de naipes", "Acción", "PVP"],
        fechaestreno: new Date("2018-05-17"),
        serie: "Dragon Ball Z"
        
    },

    {
        _id:7,
        titulo: "Dragon Ball Z Dokkan Battle",
        precio: 0,
        empredesarrolladoras: "Bandai Namco Entertainment",
        modojuego: "Un jugador",
        serie: "Dragon Ball Z",
        plataforma: ["Android", "IOS"],
        descargas:{
            cantidad: 50,
            unidad: "millones"
        },
        Géneros: ["acción", "lógica", "colección"],
        fechaestreno: new Date("2015-01-30"),
        serie: "Dragon Ball Z"
    },

    {
        _id:8,
        titulo: "Red Dead Redemption 2",
        precio: 33,
        empredesarrolladoras: ["RockStar Games", "Rockstar North"],
        modojuego: "Un jugador",
        serie: "Red dead",
        plataforma:{
            consola: ["PlayStation 4", "Xbox"],
            ordenador: ["Windows", "Google Stadia"]
        },
        ventas:{
            cantidad: 145,
            unidad: "millones"
        },
        Géneros: ["acción", "aventura", "ficción"],
        fechaestreno: new Date("2018-10-25"),
        pegi: 18

    },
    {
        _id:9,
        titulo: "God of War",
        precio: 20,
        empredesarrolladoras: "SCE Santa Monica Studio",
        modojuego: "Un jugador",
        serie: "God of War",
        plataforma:{
            consola: ["PlayStation 4", "PlayStation 5"],
            ordenador: "Windows",
        },
        ventas:{
            cantidad: 20,
            unidad: "millones"
        },
        Géneros: ["acción", "aventura", "Hack and slash"],
        fechaestreno: new Date("2018-04-20"),
        pegi: 18,
        premio: "Spike Video Game a los heroes mas fuertes de la historia",
        personajes: "Kratos"
    },

    {
        _id:10,
        titulo: "League of legens",
        precio: 0,
        empredesarrolladora: "Riot Games",
        modojuego: "multijugador",
        plataforma: "Windows",
        descargas:{
            cantidad: 142,
            unidad: "millones"
        },
        premios: "Premio BAFTA al juego mas persistente",
        Géneros: ["arena de batalla", "rol", "acción"],
        fechaestreno: new Date("2009-10-27"),

    },

    {
        _id:11,
        titulo: "Valorant",
        precio: 0,
        empredesarrolladoras: "Riot Games",
        modojuego: "multijugador",
        plataforma: "Windows",
        descargas:{
            cantidad: 14,
            unidad: "millones"
        },
        premios: "Premio BAFTA",
        Géneros: ["accion", "primera persona", "rol", "estrategia"],
        fechaestreno: new Date("2020-06-2")

    },

    {
        _id:12,
        titulo: "Genshin Impact",
        precio: 0,
        empredesarrolladoras: "MiHoyo",
        modojuego: "multijugador",
        plataforma: ["PlayStation 4", "Windows", "IOS", "Android"],
        descargas:{
            cantidad: 23,
            unidad: "millones"
        },
        premios: ["Mejor juego de movil del año", "Mejor juego de rol del año"],
        Géneros: ["accion", "MMORPG", "rol", "aventura"],
        fechaestreno: new Date("2020-09-28")
    }  





    

    


])