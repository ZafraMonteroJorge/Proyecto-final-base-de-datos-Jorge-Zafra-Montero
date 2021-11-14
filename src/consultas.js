// necesito todos los juegos que sean multijugador y pertenezca a la serie de dragon ball

db.videojuegos.find({$and:[
    {modojuego:{$in:"multijugador"}},
    {serie: "Dragon Ball Z"}
]})


//quiero saber que juegos tienen una cantidad de ventas superior a 10 millones que sean de RockStar Games y de Bandai Namco Entertainment.

db.videojuegos.find({$and:[
    {$or:[ 
      {empredesarrolladoras:"Bandai Namco Entertainment"},
      {empredesarrolladoras:"Rockstar Games"}
    ]},
    {ventas:{
        cantidad:{$gt:10},
        unidad: "millones"
    },
   
}]})


//quiero saber que juego fue denominado como mejor juego de rol del año y mejor juego de movil del año

db.videojuegos.find({
    premios:{$all: 
    ["Mejor juego de movil del año", "Mejor juego de rol del año"] 
}})



// quiero saber todos los juegos que no sean de Bandai ni que sean multijugador, y que su precio este entre 0 y 20

db.videojuegos.find({$and:[
    {empredesarrolladoras:{$ne:"Bandai Namco Entertainment"}},
    {modojuego:{$nin:"multijugador"}},
    {precio: {$lte:0, $gt:20 } }
]})


// necesito todos los juegos que salieron entre los años 2018 y 2020 que tenga como edad para mayores de 16 o que  el titulo incluya el nombre Dragon ball z dokkan battle y sea de antes de 2018



db.videojuegos.find({$or:[
    {$and:[
        {fechaestreno:{"$gte": new Date("2018,01,01")}},
        {fechaestreno:{"$lte": new Date("2020,12,31")}},
        {pegi:{$gt:16}},
        
    ]},
    {$and:[
        {titulo:{$eq: "Dragon Ball Z Dokkan Battle"}},
        {fechaestreno:{"$lt": new Date("2018,01,01")}},
        
    ]}
]})


// quiero ver que juegos de riot games aparecieron en 2009

db.videojuegos.find( {$and:[
    {empredesarrolladoras:{$regex: /^Riot Games/i}},
    {fechaestreno: new Date("01-01-2009")}
]})


// quiero saber todos los juegos, pero que las sagas de Dragon Ball y God of War pertenezca a dos plataformas en especifico




db.videojuegos.find({$or:[
    {$and:[
        {$nor:[
            {serie:{$eq:"Dragon Ball Z"}},
            {serie:{$eq:"God of War"}},
        ]}
    ]},
    {plataforma:{$in:["Windows","PlayStation 4"]}},
]})


//quiero saber que juegos tienen dlcs y que contengan los generos de accion y aventura

db.videojuegos.find({$and:[
    {Dlcs:{$exists: true}},
    {Géneros: ["accion", "aventura"]}
]})
