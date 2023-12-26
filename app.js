const express = require('express');
const cors = require('cors');
const app = express();

// CORS ayarları
app.use(cors());
app.get('/classify', (reqClassify, resClassify) => {

  ///////
  const http = require("https");
  const options = {
    "method": "GET",
    "hostname": "lab1.veriket.com",
    "port": null,
    "path": "/Services.asmx/GetScopes?company=2d5d7ee8-57e0-467f-b479-d0ebfd5b5aa0",
    "headers": {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)"
    }
  };
  
  const req = http.request(options, function (res) {
    const chunks = [];
  
    res.on("data", function (chunk) {
      chunks.push(chunk);
    });
  
    res.on("end", function () {
      const body = Buffer.concat(chunks);
      console.log("classify başarılı");
      resClassify.send(body.toString());
    });
  });
  
  req.end();
  ////////
  });



app.get('/sensitivities', (reqSensitivity, resSensitivity) => {

    ///////
    const http = require("https");
    const options = {
      "method": "GET",
      "hostname": "lab1.veriket.com",
      "port": null,
      "path": "/Services.asmx/GetSensitivities?company=2d5d7ee8-57e0-467f-b479-d0ebfd5b5aa0",
      "headers": {
        "Accept": "*/*",
        //"User-Agent": "Thunder Client (https://www.thunderclient.com)"
      }
    };
    
    const req = http.request(options, function (res) {
      const chunks = [];
    
      res.on("data", function (chunk) {
        chunks.push(chunk);
      });
    
      res.on("end", function () {
        const body = Buffer.concat(chunks);
        console.log("senstivities başarılı");
        resSensitivity.send(body.toString());
      });
    });
    
    req.end();
    ////////
    });


app.get('/classifyResult', (reqClassifyResult, resClassifyResult) => {

      ///////
      const http = require("http");
      const options = {
        "method": "GET",
        "hostname": "demo.veriket.com",
        "port": null,
        "path": "/Services.asmx/ClassifyData?_clientKey=41H7wO535fLV3hHwN6hqbg==&company=2d5d7ee8-57e0-467f-b479-d0ebfd5b5aa0&data=Test&mac=1&ip=2&ip2=3&user=fati",
        "headers": {
          "Accept": "*/*",
          "User-Agent": "Thunder Client (https://www.thunderclient.com)"
        }
      };
      
      const req = http.request(options, function (res) {
        const chunks = [];
      
        res.on("data", function (chunk) {
          chunks.push(chunk);
        });
      
        res.on("end", function () {
          const body = Buffer.concat(chunks);
          console.log("classifyResult başarılı");
          resClassifyResult.send(body.toString());
        });
      });
      
      req.end();
    });

    //http://demo.veriket.com/Services.asmx/ClassifyData?_clientKey=41H7wO535fLV3hHwN6hqbg==&company=2d5d7ee8-57e0-467f-b479-d0ebfd5b5aa0&data=Test&mac=1&ip=2&ip2=3&user=fati
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
