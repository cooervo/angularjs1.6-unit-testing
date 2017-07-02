class QuestionsController {
  static $inject = ['HttpService']

  constructor(HttpService) {
    this.name = 'questions';
    this.httpService = HttpService;
    this.questions = [];
  }

  $onInit() {

    this.httpService.getQuestions()
      .then(response => {
        this.questions = response.data

      });
  }


  addQuestion() {
    // Create question from input elements
    let question = {
      title: document.getElementById("qo-add-question-title").value,
      content: document.getElementById("qo-add-question-content").value
    }

    // POST the new question
    this.httpService.addQuestion(question).then(response => {
      //push to array of questions
      this.questions.push(response.data)
    });
  }
}
export default QuestionsController;
