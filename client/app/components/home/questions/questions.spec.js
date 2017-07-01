import QuestionsModule from './questions'
import QuestionsController from './questions.controller';
import QuestionsComponent from './questions.component';
import QuestionsTemplate from './questions.html';
import AppModule from '../../../common/common';

describe('Questions', () => {
  let $rootScope, makeController, httpService;

  beforeEach(window.module(QuestionsModule));
  beforeEach(window.module(AppModule));
  beforeEach(inject((_$rootScope_, _HttpService_) => {
    $rootScope = _$rootScope_;
    httpService = _HttpService_;
    makeController = () => {
      return new QuestionsController(_HttpService_);
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    let controller;
    it('has questions', () => {
      controller = makeController();
      expect(controller).to.have.property('questions');
      controller.$onInit();
      expect(controller.questions.length).to.equal(2);
    });

    let component = QuestionsComponent;
    it('includes the intended template',() => {
      expect(component.template).to.equal(QuestionsTemplate);
    });

    it('is should add questions', () => {
      expect(controller.questions.length).to.equal(2);
      controller.addQuestion();
      expect(controller.questions.length).to.equal(3);

    });

  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(QuestionsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs

    let component = QuestionsComponent;
      it('invokes the right controller', () => {
        expect(component.controller).to.equal(QuestionsController);
      });
  });
});
