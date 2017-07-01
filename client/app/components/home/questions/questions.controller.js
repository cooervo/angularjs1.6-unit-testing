class QuestionsController {
  static $inject = ['HttpService']

  constructor(HttpService) {
    this.name = 'questions';
    this.httpService = HttpService;
    this.questions = [];
  }

  $onInit() {
    this.questions = this.httpService.getQuestions();
  }

  $onDestroy() {
  }

  addQuestion(){
    let question = {
      title: document.getElementById("qo-add-question-title").value,
      content: document.getElementById("qo-add-question-content").value
    }
    this.httpService.addQuestion(question)
  }
}
export default QuestionsController;
