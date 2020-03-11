
module.exports = {
    RabbitMQ: { CONN_URL: process.env.RABBITMQ_CONN_URL || '' },
    SERVER: { PORT: process.env.SERVER_PORT || 3000 },
    MONGODB: { URI: process.env.MONGODB_URI || ''}
}