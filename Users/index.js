const express = require('express')
const app = express()
const cors = require('cors')
const amqp = require('amqplib/callback_api');


// dotenv
const dotenv = require('dotenv')
dotenv.config('/');
const PORT = process.env.PORT || 3200;

// database
require("./db/connect");

//  It parses incoming JSON requests and puts the parsed data in req.body.
app.use(express.json());
app.use(cors())

// router
const router = require("./routes/routes");
app.use('/api/v1', router);




app.get('/users', function (req, res) {
  let data = {
    id:1,
    name:'Jem',
    age:25
  }
  amqp.connect(`amqp://localhost`,function(err,conn){
    if(err){
      console.log("err",err);
    }

    conn.createChannel(function(err,ch){
      const queue = "Message_Queue_User"
      const msg = JSON.stringify(data)
      ch.assertQueue(queue,{durable:false})
      ch.sendToQueue(queue,Buffer.from(msg))
      console.log(`sent ${msg} to ${queue}`);
    })
  })
  res.send('message from user service')
})

// listening
app.listen(PORT,()=>{
    console.log(`connected to the ${PORT}`);
})