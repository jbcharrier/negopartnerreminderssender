var firebase = require('firebase-admin');

src="https://www.gstatic.com/firebasejs/4.1.1/firebase.js";

firebase.initializeApp({
  credential: firebase.credential.cert({
    "type": "service_account",
    "project_id": "negopartner-a1282",
    "private_key_id": "657795ca14760e33a1e45e18ea2a82a62df76879",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDGQ96S58HjExIh\nvSz5NSI/0SBToRRf1m2Aqc9wZoKiVFxwuEJrLGBSDbDLB9lHr89khtkLT9syDq9w\nksCL/GxamXxByMNWsurfGo9KZMv3DeW0giQM/br7BOJgrsDevUWWTPQfHBE4dmbB\n0asS+swyWQuL5Fw5Zi5iV6uT0KUDSPBCBhZGEYCUOpwDVlEdjk3D1d5PVe3Br2PU\nnMnPFDlgNmWikPQfXQnkmBsM8HSwQ+gNPbzf9586eqZIfZ0clYaNA2Ef4X1f3nZo\nCTOd/XMWOzeQqI2wxC3oDTPlLbNGsVtF1jeu+OmsKQOUSbM3IOI2yGtRbXc1Ud8u\ndGSCWmLZAgMBAAECggEAOO3QARqu34bgU/O/8CbDmNNxltHPyd0GQEWCHOIybG4Q\nxQUDfUaWubjYpNOyHhVrVZAqzka1x9/TnF1nEEsAydr8hN8ix8hEDJ/RuSjMMDo7\nVONxepF4mQ9D+UL0eoCadJfQGQa0IyRMSSbtGlwNOf+7gwWlPY4Lj41g5OaqGxDa\nKknl7HOyOQmNPu2rzwfemF4TCn2Xv7wF3594sF5K/O+qhXBHbeYMYJFBOHT+x1WU\ndy3leWh63nX4bJD0gBpbPlTNny9NP12y5RtmxEGw8niLgALa8quwc9WmT/Rgp12n\nZ5OxkV/dprVF39UO/tkhNdfXDv7NcU21ung4UX4CaQKBgQD+Hz4R+hqD8uzNs3Qm\n2tnHv0kjRQIzR1wtlpfRxHNfFCBHVizahxj7FQ9nSbbGunHJY2LMv/AWlYj+44xl\n1PsiisQxKS2io2uhYv1/7aM/KABJSHp5T4ftF6MV/XpNNi1DH3CdwdRfNZtNcO/B\n1zvs7lh4EBvOPIyT+TQ2yJ9EVwKBgQDHuvRq1sIH6VOY7GYIPbQJ8jPSrSiE1TPt\nkxSb+MsydisTbWkfJI6vhRkSGLyySCW0mK6bdpsbLHuWHCRhMVzM98Vnr5F8H/Zo\nCm3J10DpBlfoXsj2L3aZWvvCWwaskFy2wX6k7lj74qphep80AhtRpA89oWRtd2iA\nIAd3aJ6UTwKBgCzm4FTU2HKQLf96wf9LlEeTKR0uSGE/Lq5veYv7JleaesmgFHTY\ngjV7VyltAPrEXu6yvPZow8d5zKcdFeW4aFeGJXx6RjICpjXyA9Di8IFsVACe6eUd\nhGsETjDIhR+3fu/pUkDNyvS3yCU622Jo4ZHP25n7Xq5mTICo++ziLiIpAoGBAJ7q\nuSj9AVtsIjDt/20VM1gql2NMlY3DWdLxERfdCEh5T2LgziCSZNlxDHaiqhksYJvm\nVB+salNfvGG+uI+AyDbp+e66+gYKJHO5wIs1sxb2DiH8sOd48mOoyeJlrNTG9I4R\nPSQb5T9dpXV0LJIkDvqRj/LYpGCY/tPbKDWxT2PvAoGAZ9fsU992pdN6SpRtI11w\nGQ8rx6mlbviKaJX81M6WVrHq8gRh6TxsJ20ExKGQZPYWCzDvQbQ9q9PYkBUbr6Dq\nZiEl0iGU4L8wjswkPwIO3/1a8XaD7Io+8G+4pcOfEcBHF3GipYvEF9vqgTx+CpCn\nGLw4Vvo1TC8ChIffCJ/QiqI=\n-----END PRIVATE KEY-----\n",
    "client_email": "negopartner-a1282@appspot.gserviceaccount.com",
    "client_id": "101295784375616077986",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://accounts.google.com/o/oauth2/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/negopartner-a1282%40appspot.gserviceaccount.com"
  }),
  databaseURL: "https://negopartner-a1282.firebaseio.com"
});

module.exports = firebase.database();