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