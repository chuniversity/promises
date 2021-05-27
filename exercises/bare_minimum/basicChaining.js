/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
Promise.promisifyAll(fs);
var utils1 = require('./promiseConstructor');
var utils2 = require('./promisification');



var fetchProfileAndWriteToFile = function (readFilePath, writeFilePath) {
  return utils1.pluckFirstLineFromFileAsync(readFilePath)
    .then(function (username) {
      return utils2.getGitHubProfileAsync(username);
    })
    .then(function (body) {
      console.log('thebody', data);
      return JSON.stringify(data);
    })
    .then(function (stringBody) {
      return fs.writeFile(writeFilePath, stringBody);
    })
    .catch(function (err) {
      // Will catch any promise rejections or thrown errors in the chain!
      console.log('Oops, caught an error: ', err);
    });

};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
