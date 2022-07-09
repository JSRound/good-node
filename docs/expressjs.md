# [Expressjs](https://expressjs.com/)

## Https Server
La clave esta en usar el modulo https para crear hacer el listen
```
// Create a NodeJS HTTPS listener on port 4000 that points to the Express app
// Use a callback function to tell when the server is created.
https
  .createServer(app)
  .listen(4000, ()=>{
    console.log('server is runing at port 4000')
  });
```
Sin embargo, todavia no estamos usando una comunicacion encriptada.
Para habilitar la comunicacion encriptada mirar la documentacion sobre [certificados](./certificates)


Para poder abrir localhost usando https debemos setear un flag de Chrome
```
chrome://flags/#allow-insecure-localhost
```
Al reiniciar chrome ya podremos ver el servidor funcionando con https

## [Template Engines](https://expressjs.com/en/resources/template-engines.html)