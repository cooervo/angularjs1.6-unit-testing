import QuestionsModule from './questions'
import QuestionsController from './questions.controller';
import QuestionsComponent from './questions.component';
import QuestionsTemplate from './questions.html';
import AppModule from '../../../common/common';

describe('Questions', () => {
  let $rootScope, makeController, httpService, $compile, scope, $document, $httpBackend;

  beforeEach(window.module(QuestionsModule));
  beforeEach(window.module(AppModule));
  beforeEach(inject((_$rootScope_, _HttpService_, _$compile_, _$document_, $injector, _$httpBackend_) => {
    $rootScope = _$rootScope_;
    httpService = _HttpService_;
    $compile = _$compile_;
    $document = _$document_;
    $httpBackend = _$httpBackend_;

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

    });

    let component = QuestionsComponent;
    it('includes the intended template', () => {
      expect(component.template).to.equal(QuestionsTemplate);
    });

    describe('HttpService', () => {
      it('Should GET questions', () => {
        $httpBackend.when('GET', 'http://localhost:3131/questions')
          .respond(200,
            {
              "data": [
                {
                  "id": "1",
                },
                {
                  "id": "2",
                }
              ]
            });

        httpService.getQuestions().then(response => {
          expect(response.status).to.equal(200);
        })
        $httpBackend.flush();
      });


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
