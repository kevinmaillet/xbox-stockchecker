require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNTSID;
const authToken = process.env.TWILIO_AUTHTOKEN;
const client = require('twilio')(accountSid, authToken);

const sendMessage = (store, storeLink) => {
  client.messages
    .create({
      body: `XBox available at ${store} ${storeLink}`,
      from: process.env.SEND_FROM,
      to: process.env.SEND_TO,
    })
    .then((message) => console.log(message.sid));
};

exports.sendMessage = sendMessage;
