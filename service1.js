/*jshint esversion: 6 */
angular.module('myModule')
  .service('service1', class {
    getServiceData(param) {
      return new Promise(function(resolve, reject) {
        // if (!param) {
        //   reject();
        // }
        setTimeout(function() {
          resolve('Mr. ' + param);
        }, 500);
      });
    }
  });
