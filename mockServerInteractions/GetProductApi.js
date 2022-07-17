"use strict"

const axios = require("axios")
const https = require('https')

exports.createProduct = async (endpoint) => {
  const pathPostRequest = '/product/products';
  const queryParams = 'storeName=ctr&baseStoreId=144&lang=en&isKiosk=false&mock=true';
  const mockURL = endpoint + pathPostRequest + '?' + queryParams;

  const agent = new https.Agent({
    rejectUnauthorized: false
  });

  var requestBody = {
    'productCodes': ['0603711']
  };

  return axios
    .request({
      method: 'POST',
      url: mockURL,
      httpsAgent: agent,
      headers: {
        'Content-Type': 'application/json',
        'baseSiteId': 'ctr',
        'Cache-Control': 'no-cache',
        'Ocp-Apim-Subscription-Key': '1fe6f718b6cd4b178e9f394055656daa'
      },
      data: requestBody
    })
    .then((response) => {
      console.log("**** Consumer End's Response On Hitting Mock Server ****");
      const responseData = response.data;
      console.log(responseData);
      return response;
    }, (error) => {
      console.log("**** Consumer End's Error On Hitting Mock Server ****" + error);
    });
};