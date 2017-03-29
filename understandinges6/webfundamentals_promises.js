// As seen in:
// https://developers.google.com/web/fundamentals/getting-started/primers/promises
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const get = function (url) {
  return new Promise(function (resolve, reject) {
     const req = new XMLHttpRequest();
     req.open('GET', url);
     
     req.onload = function () {
         if (req.status === 200) {
             resolve(req.response);
         } else {
             reject(Error(req.response));
         }
     };
     
     // handle network error
     req.onerror = function () {
       reject(Error('Network Error'));  
     };
     
     // Send the request
     req.send();
  });  
};

// Driver program
const url = 'https://raw.githubusercontent.com/googlesamples/web-fundamentals/gh-pages/fundamentals/getting-started/primers/story.json';
get(url).then(function (response) {
    console.log('Success', response);
}, function (error) {
    console.log(error);
});