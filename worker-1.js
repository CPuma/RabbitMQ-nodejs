const amqp = require('amqplib/callback_api')

const CONN_URL = 'amqp://mxwkybqp:XAQLs_b7miB8S4NRXahnx5IXb3qL7h6h@mosquito.rmq.cloudamqp.com/mxwkybqp';


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