const amqp = require('amqplib/callback_api');
const config = require('../configs/app.config')

const CONN_URL = config.RabbitMQ.CONN_URL;

let ch = null;
amqp.connect(CONN_URL, function (err, conn) {
    if (err) {
        console.log("ERROR en Connection al RABBIT", err)
        process.exit(0)
    }
    conn.createChannel(function (err, channel) {
        if (err) console.log(err)
        ch = channel
    })
});

const publishToQueue = async (queueName, data) => {
    return ch.sendToQueue(queueName, new Buffer.from(data))
    return 'Publicado en la COla'
}

process.on('exit', code => {
    ch.close();
    console.log('Closing rabbitmq channel')
})

module.exports = publishToQueue