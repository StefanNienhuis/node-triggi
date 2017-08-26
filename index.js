var request = require('request');

class Triggi {

  constructor(connectURL) {
    this.connectURL = connectURL
    if (!this.connectURL.startsWith("https://connect.triggi.com/c/")) {
      throw new Error('Invalid connect URL make sure it starts with "https://"!')
    }
  }

  setOn() {
    request(this.connectURL, function (error, response, body) {
      if (error || response.statusCode != 200) {
        console.error('Something went wrong with the request.')
      }
    });
  }

  setValue(val) {
    if (typeof val != 'string') {
      throw new Error('Invalid value type, please use "string" as type.')
    }

    request(this.connectURL + '?value=' + val, function (error, response, body) {
      if (error || response.statusCode != 200) {
        console.error('Something went wrong with the request.')
      }
    });
  }

  getValue() {
    console.error('Receiving a value from an connector is not supported by Triggi, stay tuned for updates!');

    return undefined
  }
}

module.exports = Triggi;
