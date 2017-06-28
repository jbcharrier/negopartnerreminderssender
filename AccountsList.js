let db = require('./FireBaseConfig');

let getAccountsList = function () {
  return new Promise(function(resolve){
    db.ref('account').once('value').then(function(snapshot){
      let accountsList = snapshot.val();
      resolve(accountsList)
    }).catch(function(error) {
    console.log("error", error);
    resolve(false);
    });
  })
};

module.exports = {getAccountsList: getAccountsList};