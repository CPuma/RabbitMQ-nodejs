const amqp = require('amqplib/callback_api')

require('dotenv').config()
const CONN_URL = process.env.RABBITMQ_CONN_URL;


amqp.connect(CONN_URL, function (err, conn) {
    conn.createChannel(function (err, ch) {
        ch.consume('user-messages', function (msg) {
            console.log('....');
            setTimeout(function () {
                console.log("Message", msg.content.toString())
            }, 4000)
        }, { noAck: true })
    })
})