# Prueba de RabbitMQ con NodeJS

### Crear Cuenta y proyecto en https://www.cloudamqp.com/

### Declarar variables de entorno en el archivo .env

- RABBITMQ_CONN_URL = (URL de coneccion a la cola)
- MONGODB_URI =
- SERVER_PORT = (puerto de escucha para el servidor)


## Run PRODUCER
Para correr el Producto  usar el comando 
```
npm run start
```
consumir con el EndPoint **/api/contacts**  metodo POST

## Run Consumer
Se puede correr tantos worker como se necesite con el comando 
```
node worker-1.js
```
