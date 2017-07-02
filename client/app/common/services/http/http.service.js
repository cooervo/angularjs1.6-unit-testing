import angular from 'angular';

class HttpService {
  static $inject = ['$http', '$state']

  constructor($http, $state) {
    this.$state = $state;
    this.$http = $http;
    this.questions = [
      {
        "title": "Why is it faster to process a sorted array than an unsorted array?",
        "content": "Here is a piece of C++ code that seems very peculiar. For some strange reason, sorting the data miraculously makes the code almost six times faster."
      },
      {
        "title": "How do I delete a Git branch both locally and remotely?",
        "content": "I want to delete a branch both locally and on my remote project fork on GitHub. Failed Attempts to Delete Remote Branch"
      },
    ];
  }

  getQuestions() {
    return this.$http.get("http://localhost:3131/questions");
  }

  addQuestion(question) {
    return this.$http.post("http://localhost:3131/questions", question);

  }

  openQuestion(question){
    this.question = question;
    this.$state.go('question-detail');
  }
}


export default HttpService;
