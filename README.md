async y await son características de JavaScript que se utilizan para trabajar con funciones asincrónicas, mientras que then() es un método que se usa con promesas para manejar la ejecución de código asincrónico. Aquí te explico qué sucede al usar cada uno y las diferencias entre ellos:

async y await:

async se utiliza para declarar una función como asincrónica. Esto significa que la función devolverá una promesa implícita y permite el uso de await dentro de la función.
await se usa dentro de una función declarada con async para esperar que una promesa se resuelva antes de continuar ejecutando el código en esa función. Cuando se encuentra await, la ejecución de la función se pausa hasta que la promesa se resuelva o se rechace. Esto permite escribir código asincrónico de manera más similar a un estilo síncrono, lo que puede hacer que el código sea más legible.

then() es un método que se utiliza con objetos de tipo promesa. Permite encadenar funciones de devolución de llamada (callbacks) que se ejecutan cuando la promesa se resuelve o se rechaza.
then() se usa comúnmente para manejar el resultado de una promesa o para encadenar múltiples operaciones asincrónicas.

Diferencias:

La principal diferencia es la sintaxis y la legibilidad del código. async y await tienden a hacer que el código asincrónico sea más similar a un código síncrono, lo que puede hacerlo más fácil de entender.
then() se utiliza principalmente para encadenar operaciones asincrónicas, mientras que async y await permiten estructurar el código asincrónico de una manera más parecida a una función síncrona.
Con async y await, los errores se manejan utilizando bloques try...catch, lo que hace que el manejo de errores sea más similar al manejo de excepciones en código síncrono. En cambio, con then(), se utiliza el método .catch() para manejar errores.