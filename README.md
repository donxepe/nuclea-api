
# Challenge

## Parte 1

La tarea 1 consiste en escribir un servicio simple que nos permita transformar un JSON. El servicio debe aceptar un JSON a través de HTTP PUT y HTTP POST, y ejecutar la acción
según corresponda el endpoint.

| Endpoint | Function | HTTP Verb |
|-|-|-|
| /alpha | Alphabetize (orders alphabetically) the keys in the request JSON payload, load the request into a database and returns the resulting JSON back in the HTTP response | PUT
| /flatten | Flatten any JSON Arrays in the request JSON payload (comma separated) such hat the resulting JSON does not contain any JSON Arrays | POST

## Ejemplos

### __/alpha__

Input

``` 
{
    "fruit": "apple",
    "animal": "zebra",
    "city-list": [
        "sunnyvale",
        "sanjose"
    ]
}
```

Output
```
{
    "animal": "zebra",
    "city-list": [
        "sunnyvale",
        "sanjose"
    ],
    "fruit": "apple"
}
```

### __/flatten__

Input

``` 
{
    "fruit": "apple",
    "animal": "zebra",
    "city-list": [
        "sunnyvale",
        "sanjose"
    ]
}
```

Output
```
{
    "fruit": "apple",
    "animal": "zebra",
    "city-list": "sunnyvale,sanjose"
}
```

## Parte 2

La tarea 2 consiste en agregar a este microservicio la funcionalidad de obtener y guardar
“Programming Quotes”.

Adicionalmente se necesita ofrecer la funcionalidad de buscar y filtrar entre las quotes” consultadas previamente, es decir, se debe ofrecer un endpoint donde se pueda obtener una cita aleatoria del el siguiente servicio ‣ una vez obtenida se debe guardar en la base de datos 

Nota: Se puede usar cualquier tipo de base de datos

| Endpoint | Function | HTTP Verb |
|-|-|-|
| /quote | Consulta https://programming-quotes-api.herokuapp.com/quotes/random para obtener un cita. Y regresar el resultado | PUT |
| /flatten  | Se espera que:                                |   GET  |
|           | * Todas las citas sean regresadas             |
|           | * Las citas se agrupen por autor y esten ordenadas alfabéticamente  |
|           | * No se debe mostrar el autor en cada una de las citas|
|           | * Dentro de cada autor las citas se deben mostrar en orden descendente según la fecha de consulta |  |

## Ejemplos

### __/quote__ 

Output
```
{
    "author": "name",
    "id": "someid",
    "quote": "some awesome quote",
    "consultation_date": "12-03-2022"
}
```

### __/quotes__

Output
```
{
    "Author A": [
        {
            "id": "someid",
            "quote": "some awesome quote",
            "consultation_date": "12-03-2022"
        },
        {
            "id": "someotherid",
            "quote": "some awesome quote",
            "consultation_date": "10-03-2022"
        }
    ],
    "Author B": [
        {
            "id": "someextraid",
            "quote": "some awesome quote",
            "consultation_date": "04-1-2021"
        }
    ]
}
```

## Requerimientos Técnicos

- [x] Debe estar programado en Node ya sea js o ts. Debe contar las siguientes
características:
- [x]  Debe estar desarrollado en Express (https://expressjs.com/)
- [x] Se conecte con una base de datos (puede ser un servicio de terceros)
- [] Debe implemente un logger
- [x] Debe implemente al menos un middleware
- [x] Debe manejar variables de entorno
- [] Debe implementar al menos dos test unitarios por endpoint
- [x] Debe implementar manejo de errores
    - [x] Rutas que no existan (404)
    - [x] Si falla el api externa (500)
    - [x] Validar inputs (400)
