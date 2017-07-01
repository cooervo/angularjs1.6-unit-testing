class QuestionController {
  static $inject = ['HttpService']

  constructor(HttpService) {
    this.httpService = HttpService;
  }

  $onInit() {
  }

  $onDestroy() {
  }

  showQuestion(question) {
    this.httpService.openQuestion(question);
  }
}
export default QuestionController;
