import HttpService from '../services/http/http.service'

class QuestionsController {
  static $inject = ['HttpService']

  constructor(HttpService) {
    this.name = 'questions';
    this.service = HttpService;
  }

  $onInit() {
    console.log("$onInit")
    this.service.getResults();
  }

  $onDestroy() {
    console.log("$onDestroy")
  }
}
export default QuestionsController;
