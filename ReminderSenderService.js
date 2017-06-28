let mailjet = require ('node-mailjet')
  .connect('3821e73f3db1d06060a4c2c34e1af024', 'c40bbb6e8e834624e0fc0e8d0c0c4a80');

let sendNewReminder = function (email, accountName, siteName, areaName) {
  
  console.log("email", email);
  console.log("accountName", accountName);
  console.log("siteName", siteName);
  console.log("areaName", areaName);
  
  let request = mailjet
    .post("send")
    .request({
      "FromEmail":"jbchar@yopmail.com",
      "FromName":"Mailjet Pilot",
      "Subject":"NegoPartner - Audit d'un de vos espace à réaliser",
      "Html-part":"<p>Bonjour,</p>" +
      "<p>NegoPartner vous informe que vous pouvez dès à présent réaliser un audit qualité de l'un de vos site.</p>" +
      "<p>Pour cela, rendez-vous sur votre espace web Audit NegoPartner : https://negopartnerfront.firebaseapp.com </p>" +
      "<p>Sans validation de cet audit qualité dans les 10 jours, NegoPartner le considèrera comme validé sans alerte.</p>",
      "Recipients":[
        {
          "Email": email
        }
      ]
    });
  request
    .then(result => {
      console.log('Result OK', result.body)
    })
    .catch(err => {
      console.log('Result NOK', err.statusCode)
    })
};

module.exports = {sendNewReminder: sendNewReminder};