let axios = require('axios');

let url = 'HTTPS://HARSHASRIKARA.API.STDLIB.COM/ACM-DEV@DEV/CHALLENGE/';
axios.get(url, {
    params: {
      value: "Jafar"
    }
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
  });  