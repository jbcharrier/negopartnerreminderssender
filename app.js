'use strict';

const express = require('express');
const app = express();

let Accounts = require('./AccountsList.js');
let AuditRemindersService = require('./AuditRemindersService.js');

app.get('/cron', (req, res) => {
  Accounts.getAccountsList().then(function (accounts) {
    AuditRemindersService.sendReminder(accounts);
  });
  
  res.status(200).send('Audits checked and emails sent');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
