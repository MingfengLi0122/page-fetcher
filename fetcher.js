const fs = require("fs").promises;
const request = require("request");
const args = process.argv.slice(2);

const url = args[0];
const localfile = args[1];

request(url, (error, response, body) => {
  fs.writeFile(localfile,body);
  console.log(`Downloaded and saved ${body.length} bytes to ${localfile}`);
})