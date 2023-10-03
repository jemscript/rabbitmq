const express = require('express')
const app = express()
const cors = require('cors')
const axios = require('axios')
const amqp = require('amqplib/callback_api');


// dotenv
const dotenv = require('dotenv')
dotenv.config('/');
const PORT = process.env.PORT || 3100;

// database
require("./db/connect");

//  It parses incoming JSON requests and puts the parsed data in req.body.
app.use(express.json());
app.use(cors())

// router
const router = require("./routes/routes");
app.use('/api/v1', router);

app.get('/products', async (req, res) => {

  amqp.connect(`amqp://localhost`, function (err, conn) {
    if (err) {
      console.log("err", err);
    }

    conn.createChannel(function (err, ch) {
      const queue = "Message_Queue_User"
      // ch.assertQueue(queue,{durable:false})
      // ch.sendToQueue(queue,msg)
      console.log(`Waiting for the msg from queue`);
      ch.consume(queue, async function (msg) {
        console.log("message from user", msg.content.toString());
        await res.send(msg.content.toString())
      }, { noAck: true })
    })

  })


  // const userData = await axios.get('http://localhost:3200/users')
  // res.send("Message from product service" + userData.data)
})

// listening
app.listen(PORT, () => {
  console.log(`connected to the ${PORT}`);
})



