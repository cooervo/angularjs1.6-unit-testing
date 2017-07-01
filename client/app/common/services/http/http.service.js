import angular from 'angular';

class HttpService {
  static $inject = ['$http','$q']

  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

  getResults() {
    console.log("getResults()")
    //return this.$http.get('/foo/bar/');
    this.$http.get("https://www.reddit.com/r/photoshopbattles/comments/6kl24d/psbattle_bat_carrying_baby.json")
      .then(function(response) {
        console.log("response", response)
      });
  }
}


export default HttpService;
