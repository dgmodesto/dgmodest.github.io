(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light navbar-inverse\">\n  <div class=\"container-fluid\">\n    <!-- suporte a mobile -->\n    <a class=\"navbar-brand\" href=\"#\">Projeto final</a>\n    <button\n      class=\"navbar-toggler\"\n      type=\"button\"\n      data-toggle=\"collapse\"\n      data-target=\"#navbarSupportedContent\"\n      aria-controls=\"navbarSupportedContent\"\n      aria-expanded=\"false\"\n      aria-label=\"Toggle navigation\"\n    >\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item dropdown\">\n          <a\n            class=\"nav-link btn btn-outline-secondary dropdown-toggle\"\n            href=\"#\"\n            role=\"button\"\n            id=\"dropdownMenuLink\"\n            data-toggle=\"dropdown\"\n            aria-haspopup=\"true\"\n            aria-expanded=\"false\"\n          >\n            Projetos\n          </a>\n\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink\">\n            <a class=\"dropdown-item\" [routerLink]=\"['/calculadora']\">\n              Calculadora\n            </a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/conversor-moedas']\">\n              Conversor de moedas\n            </a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/tarefas']\">\n              Gerenciador de tarefas\n            </a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/jogo-da-velha']\">\n              Jogo da velha\n            </a>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"container-fluid\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/calculadora/components/calculadora.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/calculadora/components/calculadora.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <form>\n    <div class=\"row\">\n      <div class=\"col-xs-8 col-sm-6 col-md-4\">\n        <div class=\"text-center bg-primary img-rounded kz-pad-20\">\n          <div class=\"row\">\n            <div class=\"col-xs-3\">\n              <button type=\"button\" (click)=\"limpar()\" class=\"btn btn-danger kz-btn\">C\n              </button>\n            </div>\n            <div class=\"col-xs-9\">\n              <input type=\"text\" class=\"form-control text-right kz-input-text\" id=\"display\" name=\"display\"\n                [value]=\"display\" readonly>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-3\">\n              <button type=\"button\" class=\"btn btn-light kz-btn\" (click)=\"adicionarNumero('7')\" id=\"btn7\">7\n              </button>\n            </div>\n            <div class=\"col-xs-3\">\n              <button type=\"button\" class=\"btn btn-light kz-btn\" (click)=\"adicionarNumero('8')\" id=\"btn8\">8\n              </button>\n            </div>\n            <div class=\"col-xs-3\">\n              <button type=\"button\" class=\"btn btn-light kz-btn\" (click)=\"adicionarNumero('9')\" id=\"btn9\">9\n              </button>\n            </div>\n            <div class=\"col-xs-3\">\n              <button type=\"button\" class=\"btn btn-warning kz-btn\" (click)=\"definirOperacao('/')\" id=\"btnDivisao\">/\n              </button>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-3\">\n              <button type=\"button\" class=\"btn btn-light kz-btn\" (click)=\"adicionarNumero('4')\" id=\"btn4\">4\n              </button>\n            </div>\n            <div class=\"col-xs-3\">\n              <button type=\"button\" class=\"btn btn-light kz-btn\" (click)=\"adicionarNumero('5')\" id=\"btn5\">5\n              </button>\n            </div>\n            <div class=\"col-xs-3\">\n              <button type=\"button\" class=\"btn btn-light kz-btn\" (click)=\"adicionarNumero('6')\" id=\"btn6\">6\n              </button>\n            </div>\n            <div class=\"col-xs-3\">\n              <button type=\"button\" class=\"btn btn-warning kz-btn\" (click)=\"definirOperacao('*')\"\n                id=\"btnMIltiplicacao\">*\n              </button>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-3\">\n              <button type=\"button\" class=\"btn btn-light kz-btn\" (click)=\"adicionarNumero('1')\" id=\"btn1\">1\n              </button>\n            </div>\n            <div class=\"col-xs-3\">\n              <button type=\"button\" class=\"btn btn-light kz-btn\" (click)=\"adicionarNumero('2')\" id=\"btn2\">2\n              </button>\n            </div>\n            <div class=\"col-xs-3\">\n              <button type=\"button\" class=\"btn btn-light kz-btn\" (click)=\"adicionarNumero('3')\" id=\"btn3\">3\n              </button>\n            </div>\n            <div class=\"col-xs-3\">\n              <button type=\"button\" class=\"btn btn-warning kz-btn\" (click)=\"definirOperacao('-')\" id=\"btnSubtracao\">-\n              </button>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-3\">\n              <button type=\"button\" class=\"btn btn-light kz-btn\" (click)=\"adicionarNumero('0')\" id=\"btn0\">0\n              </button>\n            </div>\n            <div class=\"col-xs-3\">\n              <button type=\"button\" class=\"btn btn-light kz-btn\" (click)=\"adicionarNumero('.')\" id=\"btnDecimal\">.\n              </button>\n            </div>\n            <div class=\"col-xs-3\">\n              <button type=\"button\" class=\"btn btn-success kz-btn\" (click)=\"calcular()\" id=\"btnCalcular\">=\n              </button>\n            </div>\n            <div class=\"col-xs-3\">\n              <button type=\"button\" class=\"btn btn-warning kz-btn\" (click)=\"definirOperacao('+')\" id=\"btnSoma\">+\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/conversor/components/conversor.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/conversor/components/conversor.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"possuiErro\">\n  Erro obtendo dados. Tente novamente.\n</div>\n<div class=\"panel panel-success\">\n  <div class=\"panel-heading\">\n    Selecione a moeda a ser convertida\n  </div>\n  <div class=\"panel-body text-center\">\n    <form #conversaoForm=\"ngForm\" class=\"form-inline\">\n      <input\n        type=\"text\"\n        name=\"valor\"\n        class=\"form-control text-right\"\n        placeholder=\"0\"\n        [(ngModel)]=\"conversao.valor\"\n        appNumero\n        required\n      />\n      <select\n        name=\"moedaDe\"\n        class=\"form-control\"\n        [(ngModel)]=\"conversao.moedaDe\"\n        required\n      >\n        <option *ngFor=\"let moeda of moedas\" [value]=\"moeda.sigla\">\n          {{ moeda.sigla }} - {{ moeda.descricao }}\n        </option>\n      </select>\n      <span class=\"glyphicon glyphicon-arrow-right\" aria-hidden=\"true\"></span>\n      <select\n        name=\"moedaPara\"\n        class=\"form-control\"\n        [(ngModel)]=\"conversao.moedaPara\"\n        required\n      >\n        <option *ngFor=\"let moeda of moedas\" [value]=\"moeda.sigla\">\n          {{ moeda.sigla }} - {{ moeda.descricao }}\n        </option>\n      </select>\n      <input\n        type=\"submit\"\n        value=\"Converter\"\n        class=\"btn btn-success\"\n        data-toggle=\"modal\"\n        data-target=\"#modalCotacao\"\n        (click)=\"converter()\"\n        [disabled]=\"!conversaoForm.form.valid\"\n      />\n    </form>\n  </div>\n  <app-modal-cotacao\n    [id]=\"'modalCotacao'\"\n    [conversaoResponse]=\"conversaoResponse\"\n    [conversao]=\"conversao\"\n    (confirm)=\"init()\"\n  >\n  </app-modal-cotacao>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/conversor/utils/modal-cotacao.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/conversor/utils/modal-cotacao.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"modal fade\"\n  [id]=\"id\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"modalLabel\"\n>\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button\n          type=\"button\"\n          class=\"close\"\n          data-dismiss=\"modal\"\n          aria-label=\"Fechar\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <h4 class=\"modal-title\" id=\"modalLabel\">\n          Cotação em {{ dataCotacao | dataBr }}\n        </h4>\n      </div>\n      <div class=\"modal-body text-center\">\n        <div>\n          <h2>\n            {{ conversao.valor }}\n            {{ conversao.moedaDe }}\n            =\n            {{ valorConvertido }}\n            {{ conversao.moedaPara }}\n          </h2>\n          <p>\n            1 {{ conversao.moedaPara }} = {{ cotacaoPara }}\n            {{ conversao.moedaDe }} / 1 {{ conversao.moedaDe }} =\n            {{ cotacaoDe }} {{ conversao.moedaPara }}\n          </p>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button\n          type=\"button\"\n          class=\"btn btn-success\"\n          data-dismiss=\"modal\"\n          (click)=\"novaConsulta()\"\n        >\n          Nova consulta\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"pie_chart\"></div>\r\n<div id=\"3d_pie_chart\"></div>\r\n<div id=\"donut_chart\"></div>\r\n<div id=\"bar_chart\"></div>\r\n<div id=\"line_chart\"></div>\r\n<div id=\"column_chart\"></div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/jogo-da-velha/jogo-da-velha.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/jogo-da-velha/jogo-da-velha.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2>Jogo da velha</h2>\n\n  <!-- tela inicial -->\n  <div class=\"principal\" *ngIf=\"showInicio\">\n    <a href=\"#\" class=\"botao\" (click)=\"iniciarJogo($event)\">\n      Iniciar\n    </a>\n  </div>\n  <!-- fim tela inicial -->\n\n  <!-- tabuleiro -->\n  <div *ngIf=\"showTabuleiro\">\n    <ul>\n      <li\n        class=\"kz-border-bottom kz-border-right\"\n        [class.kz-img-x]=\"exibirX(0, 0)\"\n        [class.kz-img-o]=\"exibirO(0, 0)\"\n        [class.kz-cor-vitoria]=\"exibirVitoria(0, 0)\"\n        (click)=\"jogar(0, 0)\"\n      ></li>\n      <li\n        class=\"kz-border-bottom kz-border-right\"\n        [ngClass]=\"{\n          'kz-img-x': exibirX(0, 1),\n          'kz-img-o': exibirO(0, 1),\n          'kz-cor-vitoria': exibirVitoria(0, 1)\n        }\"\n        (click)=\"jogar(0, 1)\"\n      ></li>\n      <li\n        class=\"kz-border-bottom\"\n        [ngClass]=\"{\n          'kz-img-x': exibirX(0, 2),\n          'kz-img-o': exibirO(0, 2),\n          'kz-cor-vitoria': exibirVitoria(0, 2)\n        }\"\n        (click)=\"jogar(0, 2)\"\n      ></li>\n      <li\n        class=\"kz-border-bottom kz-border-right\"\n        [ngClass]=\"{\n          'kz-img-x': exibirX(1, 0),\n          'kz-img-o': exibirO(1, 0),\n          'kz-cor-vitoria': exibirVitoria(1, 0)\n        }\"\n        (click)=\"jogar(1, 0)\"\n      ></li>\n      <li\n        class=\"kz-border-bottom kz-border-right\"\n        [ngClass]=\"{\n          'kz-img-x': exibirX(1, 1),\n          'kz-img-o': exibirO(1, 1),\n          'kz-cor-vitoria': exibirVitoria(1, 1)\n        }\"\n        (click)=\"jogar(1, 1)\"\n      ></li>\n      <li\n        class=\"kz-border-bottom\"\n        [ngClass]=\"{\n          'kz-img-x': exibirX(1, 2),\n          'kz-img-o': exibirO(1, 2),\n          'kz-cor-vitoria': exibirVitoria(1, 2)\n        }\"\n        (click)=\"jogar(1, 2)\"\n      ></li>\n      <li\n        class=\"kz-border-right\"\n        [ngClass]=\"{\n          'kz-img-x': exibirX(2, 0),\n          'kz-img-o': exibirO(2, 0),\n          'kz-cor-vitoria': exibirVitoria(2, 0)\n        }\"\n        (click)=\"jogar(2, 0)\"\n      ></li>\n      <li\n        class=\"kz-border-right\"\n        [ngClass]=\"{\n          'kz-img-x': exibirX(2, 1),\n          'kz-img-o': exibirO(2, 1),\n          'kz-cor-vitoria': exibirVitoria(2, 1)\n        }\"\n        (click)=\"jogar(2, 1)\"\n      ></li>\n      <li\n        [ngClass]=\"{\n          'kz-img-x': exibirX(2, 2),\n          'kz-img-o': exibirO(2, 2),\n          'kz-cor-vitoria': exibirVitoria(2, 2)\n        }\"\n        (click)=\"jogar(2, 2)\"\n      ></li>\n    </ul>\n  </div>\n  <!-- fim tabuleiro -->\n\n  <!-- tela final -->\n  <div *ngIf=\"showFinal\">\n    <span>\n      <p *ngIf=\"jogador == 2\">Você venceu!!!</p>\n      <p *ngIf=\"jogador == 1\">Você perdeu...</p>\n      <p *ngIf=\"jogador == 0\">O jogo terminou empatado...</p>\n      <br />\n      <a href=\"#\" class=\"botao\" (click)=\"novoJogo($event)\">\n        Jogar novamente\n      </a>\n    </span>\n  </div>\n  <!-- fim tela final -->\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tarefas/cadastrar/cadastrar-tarefas.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tarefas/cadastrar/cadastrar-tarefas.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Cadastrar tarefa</h1>\r\n\r\n<div class=\"well\">\r\n  <form #formTarefa=\"ngForm\">\r\n    <div class=\"form-group\">\r\n      <label for=\"nome\">Tarefa:</label>\r\n      <input\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        id=\"nome\"\r\n        name=\"nome\"\r\n        [(ngModel)]=\"tarefa.nome\"\r\n        #nome=\"ngModel\"\r\n        minlength=\"5\"\r\n        required\r\n      />\r\n      <div\r\n        *ngIf=\"nome.errors && (nome.dirty || nome.touched)\"\r\n        class=\"alert alert-danger\"\r\n      >\r\n        <div [hidden]=\"!nome.errors.required\">\r\n          Digite a tarefa.\r\n        </div>\r\n        <div [hidden]=\"!nome.errors.minlength\">\r\n          A tarefa deve conter ao menos 5 caracteres.\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group text-center\">\r\n      <input\r\n        type=\"submit\"\r\n        class=\"btn btn-success\"\r\n        (click)=\"cadastrar()\"\r\n        value=\"Cadastrar\"\r\n        [disabled]=\"!formTarefa.form.valid\"\r\n      />\r\n      <a [routerLink]=\"['/']\" class=\"btn btn-info\">\r\n        <span class=\"fas fa-chevron-left\" aria-hidden=\"true\"></span>\r\n        Voltar\r\n      </a>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tarefas/editar/editar-tarefa.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tarefas/editar/editar-tarefa.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Editar tarefa</h1>\n\n<div class=\"well\">\n  <form #formTarefa=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"nome\">Tarefa:</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        id=\"nome\"\n        name=\"nome\"\n        [(ngModel)]=\"tarefa.nome\"\n        #nome=\"ngModel\"\n        minlength=\"5\"\n        required\n      />\n      <div\n        *ngIf=\"nome.errors && (nome.dirty || nome.touched)\"\n        class=\"alert alert-danger\"\n      >\n        <div [hidden]=\"!nome.errors.required\">\n          Digite a tarefa.\n        </div>\n        <div [hidden]=\"!nome.errors.minlength\">\n          A tarefa deve conter ao menos 5 caracteres.\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group text-center\">\n      <input\n        type=\"submit\"\n        class=\"btn btn-success\"\n        (click)=\"atualizar()\"\n        value=\"Atualizar\"\n        [disabled]=\"!formTarefa.form.valid\"\n      />\n      <a [routerLink]=\"['/tarefas']\" class=\"btn btn-info\">\n        <span class=\"fas fa-chevron-left\" aria-hidden=\"true\"></span>\n        Voltar\n      </a>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tarefas/listar/listar-tarefa.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tarefas/listar/listar-tarefa.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- interface html da lsitagem de tarefas -->\r\n\r\n<table class=\"table table-striped table-bordered table-hover\">\r\n  <tbody>\r\n    <tr>\r\n      <th>Tarefa</th>\r\n      <th>Concluida</th>\r\n      <th class=\"text-center\">\r\n        <a [routerLink]=\"['/tarefas/cadastrar']\" class=\"btn btn-xs btn-success\">\r\n          <i class=\"fas fa-plus\"></i> Novo\r\n        </a>\r\n      </th>\r\n    </tr>\r\n    <tr *ngFor=\"let tarefa of tarefas\">\r\n      <td\r\n        [class.alert-success]=\"!tarefa.concluida\"\r\n        [tarefaConcluida]=\"tarefa.concluida\"\r\n      >\r\n        {{ tarefa.nome }}\r\n      </td>\r\n      <td style=\"width: 70px\" class=\"text-center\">\r\n        <input\r\n          [class.alert-success]=\"tarefa.concluida\"\r\n          type=\"checkbox\"\r\n          [value]=\"tarefa.id\"\r\n          [checked]=\"tarefa.concluida\"\r\n          (click)=\"alterarStatus(tarefa)\"\r\n        />\r\n      </td>\r\n      <td class=\"text-center\" style=\"width:250px\">\r\n        <a\r\n          [routerLink]=\"['/tarefas/editar', tarefa.id]\"\r\n          class=\"btn btn-xs btn-info\"\r\n          title=\"Editar\"\r\n          alt=\"Editar\"\r\n        >\r\n          <span class=\"fas fa-edit\"></span> Editar\r\n        </a>\r\n        <a\r\n          [routerLink]=\"['/tarefas/remover']\"\r\n          class=\"btn btn-xs btn-danger\"\r\n          (click)=\"remover($event, tarefa)\"\r\n          title=\"Remover\"\r\n          alt=\"Remover\"\r\n        >\r\n          <span class=\"fas fa-times\"></span> Remover\r\n        </a>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n<div *ngIf=\"tarefas.length == 0\" class=\"alert alert-primary text-center\">\r\n  <p>Nenhuma tarefa cadastrada</p>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/index.js":
/*!*********************************************!*\
  !*** ./node_modules/rxjs/_esm2015/index.js ***!
  \*********************************************/
/*! exports provided: Observable, ConnectableObservable, GroupedObservable, observable, Subject, BehaviorSubject, ReplaySubject, AsyncSubject, asapScheduler, asyncScheduler, queueScheduler, animationFrameScheduler, VirtualTimeScheduler, VirtualAction, Scheduler, Subscription, Subscriber, Notification, pipe, noop, identity, isObservable, ArgumentOutOfRangeError, EmptyError, ObjectUnsubscribedError, UnsubscriptionError, TimeoutError, bindCallback, bindNodeCallback, combineLatest, concat, defer, empty, forkJoin, from, fromEvent, fromEventPattern, generate, iif, interval, merge, never, of, onErrorResumeNext, pairs, race, range, throwError, timer, using, zip, EMPTY, NEVER, config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/Observable */ "./node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return _internal_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]; });

/* harmony import */ var _internal_observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/observable/ConnectableObservable */ "./node_modules/rxjs/_esm2015/internal/observable/ConnectableObservable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConnectableObservable", function() { return _internal_observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_1__["ConnectableObservable"]; });

/* harmony import */ var _internal_operators_groupBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/operators/groupBy */ "./node_modules/rxjs/_esm2015/internal/operators/groupBy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupedObservable", function() { return _internal_operators_groupBy__WEBPACK_IMPORTED_MODULE_2__["GroupedObservable"]; });

/* harmony import */ var _internal_symbol_observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/symbol/observable */ "./node_modules/rxjs/_esm2015/internal/symbol/observable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return _internal_symbol_observable__WEBPACK_IMPORTED_MODULE_3__["observable"]; });

/* harmony import */ var _internal_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./internal/Subject */ "./node_modules/rxjs/_esm2015/internal/Subject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return _internal_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]; });

/* harmony import */ var _internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./internal/BehaviorSubject */ "./node_modules/rxjs/_esm2015/internal/BehaviorSubject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BehaviorSubject", function() { return _internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]; });

/* harmony import */ var _internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./internal/ReplaySubject */ "./node_modules/rxjs/_esm2015/internal/ReplaySubject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReplaySubject", function() { return _internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_6__["ReplaySubject"]; });

/* harmony import */ var _internal_AsyncSubject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./internal/AsyncSubject */ "./node_modules/rxjs/_esm2015/internal/AsyncSubject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsyncSubject", function() { return _internal_AsyncSubject__WEBPACK_IMPORTED_MODULE_7__["AsyncSubject"]; });

/* harmony import */ var _internal_scheduler_asap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./internal/scheduler/asap */ "./node_modules/rxjs/_esm2015/internal/scheduler/asap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asapScheduler", function() { return _internal_scheduler_asap__WEBPACK_IMPORTED_MODULE_8__["asap"]; });

/* harmony import */ var _internal_scheduler_async__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./internal/scheduler/async */ "./node_modules/rxjs/_esm2015/internal/scheduler/async.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asyncScheduler", function() { return _internal_scheduler_async__WEBPACK_IMPORTED_MODULE_9__["async"]; });

/* harmony import */ var _internal_scheduler_queue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./internal/scheduler/queue */ "./node_modules/rxjs/_esm2015/internal/scheduler/queue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queueScheduler", function() { return _internal_scheduler_queue__WEBPACK_IMPORTED_MODULE_10__["queue"]; });

/* harmony import */ var _internal_scheduler_animationFrame__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./internal/scheduler/animationFrame */ "./node_modules/rxjs/_esm2015/internal/scheduler/animationFrame.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animationFrameScheduler", function() { return _internal_scheduler_animationFrame__WEBPACK_IMPORTED_MODULE_11__["animationFrame"]; });

/* harmony import */ var _internal_scheduler_VirtualTimeScheduler__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./internal/scheduler/VirtualTimeScheduler */ "./node_modules/rxjs/_esm2015/internal/scheduler/VirtualTimeScheduler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VirtualTimeScheduler", function() { return _internal_scheduler_VirtualTimeScheduler__WEBPACK_IMPORTED_MODULE_12__["VirtualTimeScheduler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VirtualAction", function() { return _internal_scheduler_VirtualTimeScheduler__WEBPACK_IMPORTED_MODULE_12__["VirtualAction"]; });

/* harmony import */ var _internal_Scheduler__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./internal/Scheduler */ "./node_modules/rxjs/_esm2015/internal/Scheduler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scheduler", function() { return _internal_Scheduler__WEBPACK_IMPORTED_MODULE_13__["Scheduler"]; });

/* harmony import */ var _internal_Subscription__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./internal/Subscription */ "./node_modules/rxjs/_esm2015/internal/Subscription.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subscription", function() { return _internal_Subscription__WEBPACK_IMPORTED_MODULE_14__["Subscription"]; });

/* harmony import */ var _internal_Subscriber__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./internal/Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subscriber", function() { return _internal_Subscriber__WEBPACK_IMPORTED_MODULE_15__["Subscriber"]; });

/* harmony import */ var _internal_Notification__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./internal/Notification */ "./node_modules/rxjs/_esm2015/internal/Notification.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return _internal_Notification__WEBPACK_IMPORTED_MODULE_16__["Notification"]; });

/* harmony import */ var _internal_util_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./internal/util/pipe */ "./node_modules/rxjs/_esm2015/internal/util/pipe.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return _internal_util_pipe__WEBPACK_IMPORTED_MODULE_17__["pipe"]; });

/* harmony import */ var _internal_util_noop__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./internal/util/noop */ "./node_modules/rxjs/_esm2015/internal/util/noop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _internal_util_noop__WEBPACK_IMPORTED_MODULE_18__["noop"]; });

/* harmony import */ var _internal_util_identity__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./internal/util/identity */ "./node_modules/rxjs/_esm2015/internal/util/identity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return _internal_util_identity__WEBPACK_IMPORTED_MODULE_19__["identity"]; });

/* harmony import */ var _internal_util_isObservable__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./internal/util/isObservable */ "./node_modules/rxjs/_esm2015/internal/util/isObservable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return _internal_util_isObservable__WEBPACK_IMPORTED_MODULE_20__["isObservable"]; });

/* harmony import */ var _internal_util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./internal/util/ArgumentOutOfRangeError */ "./node_modules/rxjs/_esm2015/internal/util/ArgumentOutOfRangeError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArgumentOutOfRangeError", function() { return _internal_util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_21__["ArgumentOutOfRangeError"]; });

/* harmony import */ var _internal_util_EmptyError__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./internal/util/EmptyError */ "./node_modules/rxjs/_esm2015/internal/util/EmptyError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmptyError", function() { return _internal_util_EmptyError__WEBPACK_IMPORTED_MODULE_22__["EmptyError"]; });

/* harmony import */ var _internal_util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./internal/util/ObjectUnsubscribedError */ "./node_modules/rxjs/_esm2015/internal/util/ObjectUnsubscribedError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectUnsubscribedError", function() { return _internal_util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_23__["ObjectUnsubscribedError"]; });

/* harmony import */ var _internal_util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./internal/util/UnsubscriptionError */ "./node_modules/rxjs/_esm2015/internal/util/UnsubscriptionError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnsubscriptionError", function() { return _internal_util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_24__["UnsubscriptionError"]; });

/* harmony import */ var _internal_util_TimeoutError__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./internal/util/TimeoutError */ "./node_modules/rxjs/_esm2015/internal/util/TimeoutError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return _internal_util_TimeoutError__WEBPACK_IMPORTED_MODULE_25__["TimeoutError"]; });

/* harmony import */ var _internal_observable_bindCallback__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./internal/observable/bindCallback */ "./node_modules/rxjs/_esm2015/internal/observable/bindCallback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindCallback", function() { return _internal_observable_bindCallback__WEBPACK_IMPORTED_MODULE_26__["bindCallback"]; });

/* harmony import */ var _internal_observable_bindNodeCallback__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./internal/observable/bindNodeCallback */ "./node_modules/rxjs/_esm2015/internal/observable/bindNodeCallback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindNodeCallback", function() { return _internal_observable_bindNodeCallback__WEBPACK_IMPORTED_MODULE_27__["bindNodeCallback"]; });

/* harmony import */ var _internal_observable_combineLatest__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./internal/observable/combineLatest */ "./node_modules/rxjs/_esm2015/internal/observable/combineLatest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combineLatest", function() { return _internal_observable_combineLatest__WEBPACK_IMPORTED_MODULE_28__["combineLatest"]; });

/* harmony import */ var _internal_observable_concat__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./internal/observable/concat */ "./node_modules/rxjs/_esm2015/internal/observable/concat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return _internal_observable_concat__WEBPACK_IMPORTED_MODULE_29__["concat"]; });

/* harmony import */ var _internal_observable_defer__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./internal/observable/defer */ "./node_modules/rxjs/_esm2015/internal/observable/defer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return _internal_observable_defer__WEBPACK_IMPORTED_MODULE_30__["defer"]; });

/* harmony import */ var _internal_observable_empty__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./internal/observable/empty */ "./node_modules/rxjs/_esm2015/internal/observable/empty.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return _internal_observable_empty__WEBPACK_IMPORTED_MODULE_31__["empty"]; });

/* harmony import */ var _internal_observable_forkJoin__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./internal/observable/forkJoin */ "./node_modules/rxjs/_esm2015/internal/observable/forkJoin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forkJoin", function() { return _internal_observable_forkJoin__WEBPACK_IMPORTED_MODULE_32__["forkJoin"]; });

/* harmony import */ var _internal_observable_from__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./internal/observable/from */ "./node_modules/rxjs/_esm2015/internal/observable/from.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "from", function() { return _internal_observable_from__WEBPACK_IMPORTED_MODULE_33__["from"]; });

/* harmony import */ var _internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./internal/observable/fromEvent */ "./node_modules/rxjs/_esm2015/internal/observable/fromEvent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromEvent", function() { return _internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_34__["fromEvent"]; });

/* harmony import */ var _internal_observable_fromEventPattern__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./internal/observable/fromEventPattern */ "./node_modules/rxjs/_esm2015/internal/observable/fromEventPattern.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromEventPattern", function() { return _internal_observable_fromEventPattern__WEBPACK_IMPORTED_MODULE_35__["fromEventPattern"]; });

/* harmony import */ var _internal_observable_generate__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./internal/observable/generate */ "./node_modules/rxjs/_esm2015/internal/observable/generate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generate", function() { return _internal_observable_generate__WEBPACK_IMPORTED_MODULE_36__["generate"]; });

/* harmony import */ var _internal_observable_iif__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./internal/observable/iif */ "./node_modules/rxjs/_esm2015/internal/observable/iif.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iif", function() { return _internal_observable_iif__WEBPACK_IMPORTED_MODULE_37__["iif"]; });

/* harmony import */ var _internal_observable_interval__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./internal/observable/interval */ "./node_modules/rxjs/_esm2015/internal/observable/interval.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interval", function() { return _internal_observable_interval__WEBPACK_IMPORTED_MODULE_38__["interval"]; });

/* harmony import */ var _internal_observable_merge__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./internal/observable/merge */ "./node_modules/rxjs/_esm2015/internal/observable/merge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _internal_observable_merge__WEBPACK_IMPORTED_MODULE_39__["merge"]; });

/* harmony import */ var _internal_observable_never__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./internal/observable/never */ "./node_modules/rxjs/_esm2015/internal/observable/never.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "never", function() { return _internal_observable_never__WEBPACK_IMPORTED_MODULE_40__["never"]; });

/* harmony import */ var _internal_observable_of__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./internal/observable/of */ "./node_modules/rxjs/_esm2015/internal/observable/of.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "of", function() { return _internal_observable_of__WEBPACK_IMPORTED_MODULE_41__["of"]; });

/* harmony import */ var _internal_observable_onErrorResumeNext__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./internal/observable/onErrorResumeNext */ "./node_modules/rxjs/_esm2015/internal/observable/onErrorResumeNext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onErrorResumeNext", function() { return _internal_observable_onErrorResumeNext__WEBPACK_IMPORTED_MODULE_42__["onErrorResumeNext"]; });

/* harmony import */ var _internal_observable_pairs__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./internal/observable/pairs */ "./node_modules/rxjs/_esm2015/internal/observable/pairs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return _internal_observable_pairs__WEBPACK_IMPORTED_MODULE_43__["pairs"]; });

/* harmony import */ var _internal_observable_race__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./internal/observable/race */ "./node_modules/rxjs/_esm2015/internal/observable/race.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "race", function() { return _internal_observable_race__WEBPACK_IMPORTED_MODULE_44__["race"]; });

/* harmony import */ var _internal_observable_range__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./internal/observable/range */ "./node_modules/rxjs/_esm2015/internal/observable/range.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _internal_observable_range__WEBPACK_IMPORTED_MODULE_45__["range"]; });

/* harmony import */ var _internal_observable_throwError__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./internal/observable/throwError */ "./node_modules/rxjs/_esm2015/internal/observable/throwError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwError", function() { return _internal_observable_throwError__WEBPACK_IMPORTED_MODULE_46__["throwError"]; });

/* harmony import */ var _internal_observable_timer__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./internal/observable/timer */ "./node_modules/rxjs/_esm2015/internal/observable/timer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return _internal_observable_timer__WEBPACK_IMPORTED_MODULE_47__["timer"]; });

/* harmony import */ var _internal_observable_using__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./internal/observable/using */ "./node_modules/rxjs/_esm2015/internal/observable/using.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "using", function() { return _internal_observable_using__WEBPACK_IMPORTED_MODULE_48__["using"]; });

/* harmony import */ var _internal_observable_zip__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./internal/observable/zip */ "./node_modules/rxjs/_esm2015/internal/observable/zip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return _internal_observable_zip__WEBPACK_IMPORTED_MODULE_49__["zip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EMPTY", function() { return _internal_observable_empty__WEBPACK_IMPORTED_MODULE_31__["EMPTY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NEVER", function() { return _internal_observable_never__WEBPACK_IMPORTED_MODULE_40__["NEVER"]; });

/* harmony import */ var _internal_config__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./internal/config */ "./node_modules/rxjs/_esm2015/internal/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _internal_config__WEBPACK_IMPORTED_MODULE_50__["config"]; });






















































//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/AsyncSubject.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/AsyncSubject.js ***!
  \*************************************************************/
/*! exports provided: AsyncSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncSubject", function() { return AsyncSubject; });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ "./node_modules/rxjs/_esm2015/internal/Subject.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/_esm2015/internal/Subscription.js");


class AsyncSubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"] {
    constructor() {
        super(...arguments);
        this.value = null;
        this.hasNext = false;
        this.hasCompleted = false;
    }
    _subscribe(subscriber) {
        if (this.hasError) {
            subscriber.error(this.thrownError);
            return _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
        }
        else if (this.hasCompleted && this.hasNext) {
            subscriber.next(this.value);
            subscriber.complete();
            return _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
        }
        return super._subscribe(subscriber);
    }
    next(value) {
        if (!this.hasCompleted) {
            this.value = value;
            this.hasNext = true;
        }
    }
    error(error) {
        if (!this.hasCompleted) {
            super.error(error);
        }
    }
    complete() {
        this.hasCompleted = true;
        if (this.hasNext) {
            super.next(this.value);
        }
        super.complete();
    }
}
//# sourceMappingURL=AsyncSubject.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/BehaviorSubject.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/BehaviorSubject.js ***!
  \****************************************************************/
/*! exports provided: BehaviorSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BehaviorSubject", function() { return BehaviorSubject; });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ "./node_modules/rxjs/_esm2015/internal/Subject.js");
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/rxjs/_esm2015/internal/util/ObjectUnsubscribedError.js");


class BehaviorSubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"] {
    constructor(_value) {
        super();
        this._value = _value;
    }
    get value() {
        return this.getValue();
    }
    _subscribe(subscriber) {
        const subscription = super._subscribe(subscriber);
        if (subscription && !subscription.closed) {
            subscriber.next(this._value);
        }
        return subscription;
    }
    getValue() {
        if (this.hasError) {
            throw this.thrownError;
        }
        else if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__["ObjectUnsubscribedError"]();
        }
        else {
            return this._value;
        }
    }
    next(value) {
        super.next(this._value = value);
    }
}
//# sourceMappingURL=BehaviorSubject.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/InnerSubscriber.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/InnerSubscriber.js ***!
  \****************************************************************/
/*! exports provided: InnerSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerSubscriber", function() { return InnerSubscriber; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");

class InnerSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(parent, outerValue, outerIndex) {
        super();
        this.parent = parent;
        this.outerValue = outerValue;
        this.outerIndex = outerIndex;
        this.index = 0;
    }
    _next(value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
    }
    _error(error) {
        this.parent.notifyError(error, this);
        this.unsubscribe();
    }
    _complete() {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    }
}
//# sourceMappingURL=InnerSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/Notification.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/Notification.js ***!
  \*************************************************************/
/*! exports provided: NotificationKind, Notification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationKind", function() { return NotificationKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observable/empty */ "./node_modules/rxjs/_esm2015/internal/observable/empty.js");
/* harmony import */ var _observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observable/of */ "./node_modules/rxjs/_esm2015/internal/observable/of.js");
/* harmony import */ var _observable_throwError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observable/throwError */ "./node_modules/rxjs/_esm2015/internal/observable/throwError.js");



var NotificationKind;
(function (NotificationKind) {
    NotificationKind["NEXT"] = "N";
    NotificationKind["ERROR"] = "E";
    NotificationKind["COMPLETE"] = "C";
})(NotificationKind || (NotificationKind = {}));
class Notification {
    constructor(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === "N";
    }
    observe(observer) {
        switch (this.kind) {
            case "N":
                return observer.next && observer.next(this.value);
            case "E":
                return observer.error && observer.error(this.error);
            case "C":
                return observer.complete && observer.complete();
        }
    }
    do(next, error, complete) {
        const kind = this.kind;
        switch (kind) {
            case "N":
                return next && next(this.value);
            case "E":
                return error && error(this.error);
            case "C":
                return complete && complete();
        }
    }
    accept(nextOrObserver, error, complete) {
        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
            return this.observe(nextOrObserver);
        }
        else {
            return this.do(nextOrObserver, error, complete);
        }
    }
    toObservable() {
        const kind = this.kind;
        switch (kind) {
            case "N":
                return Object(_observable_of__WEBPACK_IMPORTED_MODULE_1__["of"])(this.value);
            case "E":
                return Object(_observable_throwError__WEBPACK_IMPORTED_MODULE_2__["throwError"])(this.error);
            case "C":
                return Object(_observable_empty__WEBPACK_IMPORTED_MODULE_0__["empty"])();
        }
        throw new Error('unexpected notification kind value');
    }
    static createNext(value) {
        if (typeof value !== 'undefined') {
            return new Notification("N", value);
        }
        return Notification.undefinedValueNotification;
    }
    static createError(err) {
        return new Notification("E", undefined, err);
    }
    static createComplete() {
        return Notification.completeNotification;
    }
}
Notification.completeNotification = new Notification("C");
Notification.undefinedValueNotification = new Notification("N", undefined);
//# sourceMappingURL=Notification.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/Observable.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/Observable.js ***!
  \***********************************************************/
/*! exports provided: Observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return Observable; });
/* harmony import */ var _util_canReportError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/canReportError */ "./node_modules/rxjs/_esm2015/internal/util/canReportError.js");
/* harmony import */ var _util_toSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/toSubscriber */ "./node_modules/rxjs/_esm2015/internal/util/toSubscriber.js");
/* harmony import */ var _internal_symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../internal/symbol/observable */ "./node_modules/rxjs/_esm2015/internal/symbol/observable.js");
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/pipe */ "./node_modules/rxjs/_esm2015/internal/util/pipe.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./node_modules/rxjs/_esm2015/internal/config.js");





class Observable {
    constructor(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    lift(operator) {
        const observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    }
    subscribe(observerOrNext, error, complete) {
        const { operator } = this;
        const sink = Object(_util_toSubscriber__WEBPACK_IMPORTED_MODULE_1__["toSubscriber"])(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    }
    _trySubscribe(sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (Object(_util_canReportError__WEBPACK_IMPORTED_MODULE_0__["canReportError"])(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    }
    forEach(next, promiseCtor) {
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor((resolve, reject) => {
            let subscription;
            subscription = this.subscribe((value) => {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    }
    _subscribe(subscriber) {
        const { source } = this;
        return source && source.subscribe(subscriber);
    }
    [_internal_symbol_observable__WEBPACK_IMPORTED_MODULE_2__["observable"]]() {
        return this;
    }
    pipe(...operations) {
        if (operations.length === 0) {
            return this;
        }
        return Object(_util_pipe__WEBPACK_IMPORTED_MODULE_3__["pipeFromArray"])(operations)(this);
    }
    toPromise(promiseCtor) {
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor((resolve, reject) => {
            let value;
            this.subscribe((x) => value = x, (err) => reject(err), () => resolve(value));
        });
    }
}
Observable.create = (subscribe) => {
    return new Observable(subscribe);
};
function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = _config__WEBPACK_IMPORTED_MODULE_4__["config"].Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/Observer.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/Observer.js ***!
  \*********************************************************/
/*! exports provided: empty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./node_modules/rxjs/_esm2015/internal/config.js");
/* harmony import */ var _util_hostReportError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/_esm2015/internal/util/hostReportError.js");


const empty = {
    closed: true,
    next(value) { },
    error(err) {
        if (_config__WEBPACK_IMPORTED_MODULE_0__["config"].useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_1__["hostReportError"])(err);
        }
    },
    complete() { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/OuterSubscriber.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/OuterSubscriber.js ***!
  \****************************************************************/
/*! exports provided: OuterSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OuterSubscriber", function() { return OuterSubscriber; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");

class OuterSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    }
    notifyError(error, innerSub) {
        this.destination.error(error);
    }
    notifyComplete(innerSub) {
        this.destination.complete();
    }
}
//# sourceMappingURL=OuterSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/ReplaySubject.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/ReplaySubject.js ***!
  \**************************************************************/
/*! exports provided: ReplaySubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaySubject", function() { return ReplaySubject; });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ "./node_modules/rxjs/_esm2015/internal/Subject.js");
/* harmony import */ var _scheduler_queue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduler/queue */ "./node_modules/rxjs/_esm2015/internal/scheduler/queue.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/_esm2015/internal/Subscription.js");
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operators/observeOn */ "./node_modules/rxjs/_esm2015/internal/operators/observeOn.js");
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/rxjs/_esm2015/internal/util/ObjectUnsubscribedError.js");
/* harmony import */ var _SubjectSubscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SubjectSubscription */ "./node_modules/rxjs/_esm2015/internal/SubjectSubscription.js");






class ReplaySubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"] {
    constructor(bufferSize = Number.POSITIVE_INFINITY, windowTime = Number.POSITIVE_INFINITY, scheduler) {
        super();
        this.scheduler = scheduler;
        this._events = [];
        this._infiniteTimeWindow = false;
        this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
        this._windowTime = windowTime < 1 ? 1 : windowTime;
        if (windowTime === Number.POSITIVE_INFINITY) {
            this._infiniteTimeWindow = true;
            this.next = this.nextInfiniteTimeWindow;
        }
        else {
            this.next = this.nextTimeWindow;
        }
    }
    nextInfiniteTimeWindow(value) {
        const _events = this._events;
        _events.push(value);
        if (_events.length > this._bufferSize) {
            _events.shift();
        }
        super.next(value);
    }
    nextTimeWindow(value) {
        this._events.push(new ReplayEvent(this._getNow(), value));
        this._trimBufferThenGetEvents();
        super.next(value);
    }
    _subscribe(subscriber) {
        const _infiniteTimeWindow = this._infiniteTimeWindow;
        const _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();
        const scheduler = this.scheduler;
        const len = _events.length;
        let subscription;
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__["ObjectUnsubscribedError"]();
        }
        else if (this.isStopped || this.hasError) {
            subscription = _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        }
        else {
            this.observers.push(subscriber);
            subscription = new _SubjectSubscription__WEBPACK_IMPORTED_MODULE_5__["SubjectSubscription"](this, subscriber);
        }
        if (scheduler) {
            subscriber.add(subscriber = new _operators_observeOn__WEBPACK_IMPORTED_MODULE_3__["ObserveOnSubscriber"](subscriber, scheduler));
        }
        if (_infiniteTimeWindow) {
            for (let i = 0; i < len && !subscriber.closed; i++) {
                subscriber.next(_events[i]);
            }
        }
        else {
            for (let i = 0; i < len && !subscriber.closed; i++) {
                subscriber.next(_events[i].value);
            }
        }
        if (this.hasError) {
            subscriber.error(this.thrownError);
        }
        else if (this.isStopped) {
            subscriber.complete();
        }
        return subscription;
    }
    _getNow() {
        return (this.scheduler || _scheduler_queue__WEBPACK_IMPORTED_MODULE_1__["queue"]).now();
    }
    _trimBufferThenGetEvents() {
        const now = this._getNow();
        const _bufferSize = this._bufferSize;
        const _windowTime = this._windowTime;
        const _events = this._events;
        const eventsCount = _events.length;
        let spliceCount = 0;
        while (spliceCount < eventsCount) {
            if ((now - _events[spliceCount].time) < _windowTime) {
                break;
            }
            spliceCount++;
        }
        if (eventsCount > _bufferSize) {
            spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
        }
        if (spliceCount > 0) {
            _events.splice(0, spliceCount);
        }
        return _events;
    }
}
class ReplayEvent {
    constructor(time, value) {
        this.time = time;
        this.value = value;
    }
}
//# sourceMappingURL=ReplaySubject.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/Scheduler.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/Scheduler.js ***!
  \**********************************************************/
/*! exports provided: Scheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scheduler", function() { return Scheduler; });
class Scheduler {
    constructor(SchedulerAction, now = Scheduler.now) {
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    schedule(work, delay = 0, state) {
        return new this.SchedulerAction(this, work).schedule(state, delay);
    }
}
Scheduler.now = () => Date.now();
//# sourceMappingURL=Scheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/Subject.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/Subject.js ***!
  \********************************************************/
/*! exports provided: SubjectSubscriber, Subject, AnonymousSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectSubscriber", function() { return SubjectSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return Subject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnonymousSubject", function() { return AnonymousSubject; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observable */ "./node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/_esm2015/internal/Subscription.js");
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/rxjs/_esm2015/internal/util/ObjectUnsubscribedError.js");
/* harmony import */ var _SubjectSubscription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SubjectSubscription */ "./node_modules/rxjs/_esm2015/internal/SubjectSubscription.js");
/* harmony import */ var _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/_esm2015/internal/symbol/rxSubscriber.js");






class SubjectSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"] {
    constructor(destination) {
        super(destination);
        this.destination = destination;
    }
}
class Subject extends _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"] {
    constructor() {
        super();
        this.observers = [];
        this.closed = false;
        this.isStopped = false;
        this.hasError = false;
        this.thrownError = null;
    }
    [_internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_5__["rxSubscriber"]]() {
        return new SubjectSubscriber(this);
    }
    lift(operator) {
        const subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    }
    next(value) {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__["ObjectUnsubscribedError"]();
        }
        if (!this.isStopped) {
            const { observers } = this;
            const len = observers.length;
            const copy = observers.slice();
            for (let i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    }
    error(err) {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__["ObjectUnsubscribedError"]();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        const { observers } = this;
        const len = observers.length;
        const copy = observers.slice();
        for (let i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    }
    complete() {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__["ObjectUnsubscribedError"]();
        }
        this.isStopped = true;
        const { observers } = this;
        const len = observers.length;
        const copy = observers.slice();
        for (let i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    }
    unsubscribe() {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    }
    _trySubscribe(subscriber) {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__["ObjectUnsubscribedError"]();
        }
        else {
            return super._trySubscribe(subscriber);
        }
    }
    _subscribe(subscriber) {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__["ObjectUnsubscribedError"]();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new _SubjectSubscription__WEBPACK_IMPORTED_MODULE_4__["SubjectSubscription"](this, subscriber);
        }
    }
    asObservable() {
        const observable = new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]();
        observable.source = this;
        return observable;
    }
}
Subject.create = (destination, source) => {
    return new AnonymousSubject(destination, source);
};
class AnonymousSubject extends Subject {
    constructor(destination, source) {
        super();
        this.destination = destination;
        this.source = source;
    }
    next(value) {
        const { destination } = this;
        if (destination && destination.next) {
            destination.next(value);
        }
    }
    error(err) {
        const { destination } = this;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    }
    complete() {
        const { destination } = this;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    }
    _subscribe(subscriber) {
        const { source } = this;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        }
    }
}
//# sourceMappingURL=Subject.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/SubjectSubscription.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/SubjectSubscription.js ***!
  \********************************************************************/
/*! exports provided: SubjectSubscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectSubscription", function() { return SubjectSubscription; });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/_esm2015/internal/Subscription.js");

class SubjectSubscription extends _Subscription__WEBPACK_IMPORTED_MODULE_0__["Subscription"] {
    constructor(subject, subscriber) {
        super();
        this.subject = subject;
        this.subscriber = subscriber;
        this.closed = false;
    }
    unsubscribe() {
        if (this.closed) {
            return;
        }
        this.closed = true;
        const subject = this.subject;
        const observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        const subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    }
}
//# sourceMappingURL=SubjectSubscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/Subscriber.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/Subscriber.js ***!
  \***********************************************************/
/*! exports provided: Subscriber, SafeSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subscriber", function() { return Subscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeSubscriber", function() { return SafeSubscriber; });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/_esm2015/internal/util/isFunction.js");
/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Observer */ "./node_modules/rxjs/_esm2015/internal/Observer.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/_esm2015/internal/Subscription.js");
/* harmony import */ var _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/_esm2015/internal/symbol/rxSubscriber.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./node_modules/rxjs/_esm2015/internal/config.js");
/* harmony import */ var _util_hostReportError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/_esm2015/internal/util/hostReportError.js");






class Subscriber extends _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"] {
    constructor(destinationOrNext, error, complete) {
        super();
        this.syncErrorValue = null;
        this.syncErrorThrown = false;
        this.syncErrorThrowable = false;
        this.isStopped = false;
        switch (arguments.length) {
            case 0:
                this.destination = _Observer__WEBPACK_IMPORTED_MODULE_1__["empty"];
                break;
            case 1:
                if (!destinationOrNext) {
                    this.destination = _Observer__WEBPACK_IMPORTED_MODULE_1__["empty"];
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        this.destination = destinationOrNext;
                        destinationOrNext.add(this);
                    }
                    else {
                        this.syncErrorThrowable = true;
                        this.destination = new SafeSubscriber(this, destinationOrNext);
                    }
                    break;
                }
            default:
                this.syncErrorThrowable = true;
                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
                break;
        }
    }
    [_internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_3__["rxSubscriber"]]() { return this; }
    static create(next, error, complete) {
        const subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    }
    next(value) {
        if (!this.isStopped) {
            this._next(value);
        }
    }
    error(err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    }
    complete() {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    }
    unsubscribe() {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        super.unsubscribe();
    }
    _next(value) {
        this.destination.next(value);
    }
    _error(err) {
        this.destination.error(err);
        this.unsubscribe();
    }
    _complete() {
        this.destination.complete();
        this.unsubscribe();
    }
    _unsubscribeAndRecycle() {
        const { _parent, _parents } = this;
        this._parent = null;
        this._parents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parent = _parent;
        this._parents = _parents;
        return this;
    }
}
class SafeSubscriber extends Subscriber {
    constructor(_parentSubscriber, observerOrNext, error, complete) {
        super();
        this._parentSubscriber = _parentSubscriber;
        let next;
        let context = this;
        if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== _Observer__WEBPACK_IMPORTED_MODULE_1__["empty"]) {
                context = Object.create(observerOrNext);
                if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(context.unsubscribe)) {
                    this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = this.unsubscribe.bind(this);
            }
        }
        this._context = context;
        this._next = next;
        this._error = error;
        this._complete = complete;
    }
    next(value) {
        if (!this.isStopped && this._next) {
            const { _parentSubscriber } = this;
            if (!_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    }
    error(err) {
        if (!this.isStopped) {
            const { _parentSubscriber } = this;
            const { useDeprecatedSynchronousErrorHandling } = _config__WEBPACK_IMPORTED_MODULE_4__["config"];
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_5__["hostReportError"])(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_5__["hostReportError"])(err);
                }
                this.unsubscribe();
            }
        }
    }
    complete() {
        if (!this.isStopped) {
            const { _parentSubscriber } = this;
            if (this._complete) {
                const wrappedComplete = () => this._complete.call(this._context);
                if (!_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    }
    __tryOrUnsub(fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_5__["hostReportError"])(err);
            }
        }
    }
    __tryOrSetError(parent, fn, value) {
        if (!_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_5__["hostReportError"])(err);
                return true;
            }
        }
        return false;
    }
    _unsubscribe() {
        const { _parentSubscriber } = this;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    }
}
//# sourceMappingURL=Subscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/Subscription.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/Subscription.js ***!
  \*************************************************************/
/*! exports provided: Subscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subscription", function() { return Subscription; });
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/isArray */ "./node_modules/rxjs/_esm2015/internal/util/isArray.js");
/* harmony import */ var _util_isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/isObject */ "./node_modules/rxjs/_esm2015/internal/util/isObject.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/_esm2015/internal/util/isFunction.js");
/* harmony import */ var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/UnsubscriptionError */ "./node_modules/rxjs/_esm2015/internal/util/UnsubscriptionError.js");




class Subscription {
    constructor(unsubscribe) {
        this.closed = false;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    unsubscribe() {
        let hasErrors = false;
        let errors;
        if (this.closed) {
            return;
        }
        let { _parent, _parents, _unsubscribe, _subscriptions } = this;
        this.closed = true;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        let index = -1;
        let len = _parents ? _parents.length : 0;
        while (_parent) {
            _parent.remove(this);
            _parent = ++index < len && _parents[index] || null;
        }
        if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(_unsubscribe)) {
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                hasErrors = true;
                errors = e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"] ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_0__["isArray"])(_subscriptions)) {
            index = -1;
            len = _subscriptions.length;
            while (++index < len) {
                const sub = _subscriptions[index];
                if (Object(_util_isObject__WEBPACK_IMPORTED_MODULE_1__["isObject"])(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        hasErrors = true;
                        errors = errors || [];
                        if (e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"]) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (hasErrors) {
            throw new _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"](errors);
        }
    }
    add(teardown) {
        let subscription = teardown;
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    const tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                if (!teardown) {
                    return Subscription.EMPTY;
                }
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        if (subscription._addParent(this)) {
            const subscriptions = this._subscriptions;
            if (subscriptions) {
                subscriptions.push(subscription);
            }
            else {
                this._subscriptions = [subscription];
            }
        }
        return subscription;
    }
    remove(subscription) {
        const subscriptions = this._subscriptions;
        if (subscriptions) {
            const subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    }
    _addParent(parent) {
        let { _parent, _parents } = this;
        if (_parent === parent) {
            return false;
        }
        else if (!_parent) {
            this._parent = parent;
            return true;
        }
        else if (!_parents) {
            this._parents = [parent];
            return true;
        }
        else if (_parents.indexOf(parent) === -1) {
            _parents.push(parent);
            return true;
        }
        return false;
    }
}
Subscription.EMPTY = (function (empty) {
    empty.closed = true;
    return empty;
}(new Subscription()));
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce((errs, err) => errs.concat((err instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"]) ? err.errors : err), []);
}
//# sourceMappingURL=Subscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/config.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/config.js ***!
  \*******************************************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
let _enable_super_gross_mode_that_will_cause_bad_things = false;
const config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            const error = new Error();
            console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/observable/ConnectableObservable.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/ConnectableObservable.js ***!
  \*********************************************************************************/
/*! exports provided: ConnectableObservable, connectableObservableDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectableObservable", function() { return ConnectableObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectableObservableDescriptor", function() { return connectableObservableDescriptor; });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subject */ "./node_modules/rxjs/_esm2015/internal/Subject.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm2015/internal/Subscription.js");
/* harmony import */ var _operators_refCount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../operators/refCount */ "./node_modules/rxjs/_esm2015/internal/operators/refCount.js");





class ConnectableObservable extends _Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"] {
    constructor(source, subjectFactory) {
        super();
        this.source = source;
        this.subjectFactory = subjectFactory;
        this._refCount = 0;
        this._isComplete = false;
    }
    _subscribe(subscriber) {
        return this.getSubject().subscribe(subscriber);
    }
    getSubject() {
        const subject = this._subject;
        if (!subject || subject.isStopped) {
            this._subject = this.subjectFactory();
        }
        return this._subject;
    }
    connect() {
        let connection = this._connection;
        if (!connection) {
            this._isComplete = false;
            connection = this._connection = new _Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
            connection.add(this.source
                .subscribe(new ConnectableSubscriber(this.getSubject(), this)));
            if (connection.closed) {
                this._connection = null;
                connection = _Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
            }
            else {
                this._connection = connection;
            }
        }
        return connection;
    }
    refCount() {
        return Object(_operators_refCount__WEBPACK_IMPORTED_MODULE_4__["refCount"])()(this);
    }
}
const connectableProto = ConnectableObservable.prototype;
const connectableObservableDescriptor = {
    operator: { value: null },
    _refCount: { value: 0, writable: true },
    _subject: { value: null, writable: true },
    _connection: { value: null, writable: true },
    _subscribe: { value: connectableProto._subscribe },
    _isComplete: { value: connectableProto._isComplete, writable: true },
    getSubject: { value: connectableProto.getSubject },
    connect: { value: connectableProto.connect },
    refCount: { value: connectableProto.refCount }
};
class ConnectableSubscriber extends _Subject__WEBPACK_IMPORTED_MODULE_0__["SubjectSubscriber"] {
    constructor(destination, connectable) {
        super(destination);
        this.connectable = connectable;
    }
    _error(err) {
        this._unsubscribe();
        super._error(err);
    }
    _complete() {
        this.connectable._isComplete = true;
        this._unsubscribe();
        super._complete();
    }
    _unsubscribe() {
        const connectable = this.connectable;
        if (connectable) {
            this.connectable = null;
            const connection = connectable._connection;
            connectable._refCount = 0;
            connectable._subject = null;
            connectable._connection = null;
            if (connection) {
                connection.unsubscribe();
            }
        }
    }
}
class RefCountOperator {
    constructor(connectable) {
        this.connectable = connectable;
    }
    call(subscriber, source) {
        const { connectable } = this;
        connectable._refCount++;
        const refCounter = new RefCountSubscriber(subscriber, connectable);
        const subscription = source.subscribe(refCounter);
        if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
        }
        return subscription;
    }
}
class RefCountSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_2__["Subscriber"] {
    constructor(destination, connectable) {
        super(destination);
        this.connectable = connectable;
    }
    _unsubscribe() {
        const { connectable } = this;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        const refCount = connectable._refCount;
        if (refCount <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount - 1;
        if (refCount > 1) {
            this.connection = null;
            return;
        }
        const { connection } = this;
        const sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
        }
    }
}
//# sourceMappingURL=ConnectableObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/observable/SubscribeOnObservable.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/SubscribeOnObservable.js ***!
  \*********************************************************************************/
/*! exports provided: SubscribeOnObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeOnObservable", function() { return SubscribeOnObservable; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _scheduler_asap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scheduler/asap */ "./node_modules/rxjs/_esm2015/internal/scheduler/asap.js");
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isNumeric */ "./node_modules/rxjs/_esm2015/internal/util/isNumeric.js");



class SubscribeOnObservable extends _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"] {
    constructor(source, delayTime = 0, scheduler = _scheduler_asap__WEBPACK_IMPORTED_MODULE_1__["asap"]) {
        super();
        this.source = source;
        this.delayTime = delayTime;
        this.scheduler = scheduler;
        if (!Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_2__["isNumeric"])(delayTime) || delayTime < 0) {
            this.delayTime = 0;
        }
        if (!scheduler || typeof scheduler.schedule !== 'function') {
            this.scheduler = _scheduler_asap__WEBPACK_IMPORTED_MODULE_1__["asap"];
        }
    }
    static create(source, delay = 0, scheduler = _scheduler_asap__WEBPACK_IMPORTED_MODULE_1__["asap"]) {
        return new SubscribeOnObservable(source, delay, scheduler);
    }
    static dispatch(arg) {
        const { source, subscriber } = arg;
        return this.add(source.subscribe(subscriber));
    }
    _subscribe(subscriber) {
        const delay = this.delayTime;
        const source = this.source;
        const scheduler = this.scheduler;
        return scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
            source, subscriber
        });
    }
}
//# sourceMappingURL=SubscribeOnObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/observable/bindCallback.js":
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/bindCallback.js ***!
  \************************************************************************/
/*! exports provided: bindCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindCallback", function() { return bindCallback; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AsyncSubject */ "./node_modules/rxjs/_esm2015/internal/AsyncSubject.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/_esm2015/internal/operators/map.js");
/* harmony import */ var _util_canReportError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/canReportError */ "./node_modules/rxjs/_esm2015/internal/util/canReportError.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm2015/internal/util/isArray.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm2015/internal/util/isScheduler.js");






function bindCallback(callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_5__["isScheduler"])(resultSelector)) {
            scheduler = resultSelector;
        }
        else {
            return (...args) => bindCallback(callbackFunc, scheduler)(...args).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])((args) => Object(_util_isArray__WEBPACK_IMPORTED_MODULE_4__["isArray"])(args) ? resultSelector(...args) : resultSelector(args)));
        }
    }
    return function (...args) {
        const context = this;
        let subject;
        const params = {
            context,
            subject,
            callbackFunc,
            scheduler,
        };
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
            if (!scheduler) {
                if (!subject) {
                    subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
                    const handler = (...innerArgs) => {
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    };
                    try {
                        callbackFunc.apply(context, [...args, handler]);
                    }
                    catch (err) {
                        if (Object(_util_canReportError__WEBPACK_IMPORTED_MODULE_3__["canReportError"])(subject)) {
                            subject.error(err);
                        }
                        else {
                            console.warn(err);
                        }
                    }
                }
                return subject.subscribe(subscriber);
            }
            else {
                const state = {
                    args, subscriber, params,
                };
                return scheduler.schedule(dispatch, 0, state);
            }
        });
    };
}
function dispatch(state) {
    const self = this;
    const { args, subscriber, params } = state;
    const { callbackFunc, context, scheduler } = params;
    let { subject } = params;
    if (!subject) {
        subject = params.subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
        const handler = (...innerArgs) => {
            const value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
            this.add(scheduler.schedule(dispatchNext, 0, { value, subject }));
        };
        try {
            callbackFunc.apply(context, [...args, handler]);
        }
        catch (err) {
            subject.error(err);
        }
    }
    this.add(subject.subscribe(subscriber));
}
function dispatchNext(state) {
    const { value, subject } = state;
    subject.next(value);
    subject.complete();
}
function dispatchError(state) {
    const { err, subject } = state;
    subject.error(err);
}
//# sourceMappingURL=bindCallback.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/observable/bindNodeCallback.js":
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/bindNodeCallback.js ***!
  \****************************************************************************/
/*! exports provided: bindNodeCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindNodeCallback", function() { return bindNodeCallback; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AsyncSubject */ "./node_modules/rxjs/_esm2015/internal/AsyncSubject.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/_esm2015/internal/operators/map.js");
/* harmony import */ var _util_canReportError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/canReportError */ "./node_modules/rxjs/_esm2015/internal/util/canReportError.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm2015/internal/util/isScheduler.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm2015/internal/util/isArray.js");






function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_4__["isScheduler"])(resultSelector)) {
            scheduler = resultSelector;
        }
        else {
            return (...args) => bindNodeCallback(callbackFunc, scheduler)(...args).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(args => Object(_util_isArray__WEBPACK_IMPORTED_MODULE_5__["isArray"])(args) ? resultSelector(...args) : resultSelector(args)));
        }
    }
    return function (...args) {
        const params = {
            subject: undefined,
            args,
            callbackFunc,
            scheduler,
            context: this,
        };
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
            const { context } = params;
            let { subject } = params;
            if (!scheduler) {
                if (!subject) {
                    subject = params.subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
                    const handler = (...innerArgs) => {
                        const err = innerArgs.shift();
                        if (err) {
                            subject.error(err);
                            return;
                        }
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    };
                    try {
                        callbackFunc.apply(context, [...args, handler]);
                    }
                    catch (err) {
                        if (Object(_util_canReportError__WEBPACK_IMPORTED_MODULE_3__["canReportError"])(subject)) {
                            subject.error(err);
                        }
                        else {
                            console.warn(err);
                        }
                    }
                }
                return subject.subscribe(subscriber);
            }
            else {
                return scheduler.schedule(dispatch, 0, { params, subscriber, context });
            }
        });
    };
}
function dispatch(state) {
    const { params, subscriber, context } = state;
    const { callbackFunc, args, scheduler } = params;
    let subject = params.subject;
    if (!subject) {
        subject = params.subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
        const handler = (...innerArgs) => {
            const err = innerArgs.shift();
            if (err) {
                this.add(scheduler.schedule(dispatchError, 0, { err, subject }));
            }
            else {
                const value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
                this.add(scheduler.schedule(dispatchNext, 0, { value, subject }));
            }
        };
        try {
            callbackFunc.apply(context, [...args, handler]);
        }
        catch (err) {
            this.add(scheduler.schedule(dispatchError, 0, { err, subject }));
        }
    }
    this.add(subject.subscribe(subscriber));
}
function dispatchNext(arg) {
    const { value, subject } = arg;
    subject.next(value);
    subject.complete();
}
function dispatchError(arg) {
    const { err, subject } = arg;
    subject.error(err);
}
//# sourceMappingURL=bindNodeCallback.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/observable/combineLatest.js":
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/combineLatest.js ***!
  \*************************************************************************/
/*! exports provided: combineLatest, CombineLatestOperator, CombineLatestSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineLatest", function() { return combineLatest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombineLatestOperator", function() { return CombineLatestOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombineLatestSubscriber", function() { return CombineLatestSubscriber; });
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm2015/internal/util/isScheduler.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm2015/internal/util/isArray.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm2015/internal/OuterSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/_esm2015/internal/observable/fromArray.js");





const NONE = {};
function combineLatest(...observables) {
    let resultSelector = null;
    let scheduler = null;
    if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_0__["isScheduler"])(observables[observables.length - 1])) {
        scheduler = observables.pop();
    }
    if (typeof observables[observables.length - 1] === 'function') {
        resultSelector = observables.pop();
    }
    if (observables.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(observables[0])) {
        observables = observables[0];
    }
    return Object(_fromArray__WEBPACK_IMPORTED_MODULE_4__["fromArray"])(observables, scheduler).lift(new CombineLatestOperator(resultSelector));
}
class CombineLatestOperator {
    constructor(resultSelector) {
        this.resultSelector = resultSelector;
    }
    call(subscriber, source) {
        return source.subscribe(new CombineLatestSubscriber(subscriber, this.resultSelector));
    }
}
class CombineLatestSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__["OuterSubscriber"] {
    constructor(destination, resultSelector) {
        super(destination);
        this.resultSelector = resultSelector;
        this.active = 0;
        this.values = [];
        this.observables = [];
    }
    _next(observable) {
        this.values.push(NONE);
        this.observables.push(observable);
    }
    _complete() {
        const observables = this.observables;
        const len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            this.active = len;
            this.toRespond = len;
            for (let i = 0; i < len; i++) {
                const observable = observables[i];
                this.add(Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__["subscribeToResult"])(this, observable, observable, i));
            }
        }
    }
    notifyComplete(unused) {
        if ((this.active -= 1) === 0) {
            this.destination.complete();
        }
    }
    notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        const values = this.values;
        const oldVal = values[outerIndex];
        const toRespond = !this.toRespond
            ? 0
            : oldVal === NONE ? --this.toRespond : this.toRespond;
        values[outerIndex] = innerValue;
        if (toRespond === 0) {
            if (this.resultSelector) {
                this._tryResultSelector(values);
            }
            else {
                this.destination.next(values.slice());
            }
        }
    }
    _tryResultSelector(values) {
        let result;
        try {
            result = this.resultSelector.apply(this, values);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    }
}
//# sourceMappingURL=combineLatest.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/observable/concat.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/concat.js ***!
  \******************************************************************/
/*! exports provided: concat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony import */ var _of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./of */ "./node_modules/rxjs/_esm2015/internal/observable/of.js");
/* harmony import */ var _operators_concatAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operators/concatAll */ "./node_modules/rxjs/_esm2015/internal/operators/concatAll.js");


function concat(...observables) {
    return Object(_operators_concatAll__WEBPACK_IMPORTED_MODULE_1__["concatAll"])()(Object(_of__WEBPACK_IMPORTED_MODULE_0__["of"])(...observables));
}
//# sourceMappingURL=concat.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/observable/defer.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/defer.js ***!
  \*****************************************************************/
/*! exports provided: defer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return defer; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from */ "./node_modules/rxjs/_esm2015/internal/observable/from.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/_esm2015/internal/observable/empty.js");



function defer(observableFactory) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
        let input;
        try {
            input = observableFactory();
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        const source = input ? Object(_from__WEBPACK_IMPORTED_MODULE_1__["from"])(input) : Object(_empty__WEBPACK_IMPORTED_MODULE_2__["empty"])();
        return source.subscribe(subscriber);
    });
}
//# sourceMappingURL=defer.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/observable/empty.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/empty.js ***!
  \*****************************************************************/
/*! exports provided: EMPTY, empty, emptyScheduled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY", function() { return EMPTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyScheduled", function() { return emptyScheduled; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm2015/internal/Observable.js");

const EMPTY = new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => subscriber.complete());
function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => scheduler.schedule(() => subscriber.complete()));
}
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/observable/forkJoin.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/forkJoin.js ***!
  \********************************************************************/
/*! exports provided: forkJoin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forkJoin", function() { return forkJoin; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm2015/internal/util/isArray.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/_esm2015/internal/observable/empty.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm2015/internal/OuterSubscriber.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/_esm2015/internal/operators/map.js");






function forkJoin(...sources) {
    let resultSelector;
    if (typeof sources[sources.length - 1] === 'function') {
        resultSelector = sources.pop();
    }
    if (sources.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(sources[0])) {
        sources = sources[0];
    }
    if (sources.length === 0) {
        return _empty__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
    }
    if (resultSelector) {
        return forkJoin(sources).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_5__["map"])(args => resultSelector(...args)));
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
        return new ForkJoinSubscriber(subscriber, sources);
    });
}
class ForkJoinSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_4__["OuterSubscriber"] {
    constructor(destination, sources) {
        super(destination);
        this.sources = sources;
        this.completed = 0;
        this.haveValues = 0;
        const len = sources.length;
        this.values = new Array(len);
        for (let i = 0; i < len; i++) {
            const source = sources[i];
            const innerSubscription = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__["subscribeToResult"])(this, source, null, i);
            if (innerSubscription) {
                this.add(innerSubscription);
            }
        }
    }
    notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.values[outerIndex] = innerValue;
        if (!innerSub._hasValue) {
            innerSub._hasValue = true;
            this.haveValues++;
        }
    }
    notifyComplete(innerSub) {
        const { destination, haveValues, values } = this;
        const len = values.length;
        if (!innerSub._hasValue) {
            destination.complete();
            return;
        }
        this.completed++;
        if (this.completed !== len) {
            return;
        }
        if (haveValues === len) {
            destination.next(values);
        }
        destination.complete();
    }
}
//# sourceMappingURL=forkJoin.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/observable/from.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/from.js ***!
  \****************************************************************/
/*! exports provided: from */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "from", function() { return from; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isPromise */ "./node_modules/rxjs/_esm2015/internal/util/isPromise.js");
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArrayLike */ "./node_modules/rxjs/_esm2015/internal/util/isArrayLike.js");
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isInteropObservable */ "./node_modules/rxjs/_esm2015/internal/util/isInteropObservable.js");
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isIterable */ "./node_modules/rxjs/_esm2015/internal/util/isIterable.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/_esm2015/internal/observable/fromArray.js");
/* harmony import */ var _fromPromise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fromPromise */ "./node_modules/rxjs/_esm2015/internal/observable/fromPromise.js");
/* harmony import */ var _fromIterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fromIterable */ "./node_modules/rxjs/_esm2015/internal/observable/fromIterable.js");
/* harmony import */ var _fromObservable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fromObservable */ "./node_modules/rxjs/_esm2015/internal/observable/fromObservable.js");
/* harmony import */ var _util_subscribeTo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/subscribeTo */ "./node_modules/rxjs/_esm2015/internal/util/subscribeTo.js");










function from(input, scheduler) {
    if (!scheduler) {
        if (input instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]) {
            return input;
        }
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_util_subscribeTo__WEBPACK_IMPORTED_MODULE_9__["subscribeTo"])(input));
    }
    if (input != null) {
        if (Object(_util_isInteropObservable__WEBPACK_IMPORTED_MODULE_3__["isInteropObservable"])(input)) {
            return Object(_fromObservable__WEBPACK_IMPORTED_MODULE_8__["fromObservable"])(input, scheduler);
        }
        else if (Object(_util_isPromise__WEBPACK_IMPORTED_MODULE_1__["isPromise"])(input)) {
            return Object(_fromPromise__WEBPACK_IMPORTED_MODULE_6__["fromPromise"])(input, scheduler);
        }
        else if (Object(_util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__["isArrayLike"])(input)) {
            return Object(_fromArray__WEBPACK_IMPORTED_MODULE_5__["fromArray"])(input, scheduler);
        }
        else if (Object(_util_isIterable__WEBPACK_IMPORTED_MODULE_4__["isIterable"])(input) || typeof input === 'string') {
            return Object(_fromIterable__WEBPACK_IMPORTED_MODULE_7__["fromIterable"])(input, scheduler);
        }
    }
    throw new TypeError((input !== null && typeof input || input) + ' is not observable');
}
//# sourceMappingURL=from.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/observable/fromArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/fromArray.js ***!
  \*********************************************************************/
/*! exports provided: fromArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromArray", function() { return fromArray; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm2015/internal/Subscription.js");
/* harmony import */ var _util_subscribeToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/subscribeToArray */ "./node_modules/rxjs/_esm2015/internal/util/subscribeToArray.js");



function fromArray(input, scheduler) {
    if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_util_subscribeToArray__WEBPACK_IMPORTED_MODULE_2__["subscribeToArray"])(input));
    }
    else {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
            const sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
            let i = 0;
            sub.add(scheduler.schedule(function () {
                if (i === input.length) {
                    subscriber.complete();
                    return;
                }
                subscriber.next(input[i++]);
                if (!subscriber.closed) {
                    sub.add(this.schedule());
                }
            }));
            return sub;
        });
    }
}
//# sourceMappingURL=fromArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/observable/fromEvent.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/fromEvent.js ***!
  \*********************************************************************/
/*! exports provided: fromEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromEvent", function() { return fromEvent; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm2015/internal/util/isArray.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isFunction */ "./node_modules/rxjs/_esm2015/internal/util/isFunction.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/_esm2015/internal/operators/map.js");




const toString = Object.prototype.toString;
function fromEvent(target, eventName, options, resultSelector) {
    if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) {
        return fromEvent(target, eventName, options).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(args => Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(args) ? resultSelector(...args) : resultSelector(args)));
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
        function handler(e) {
            if (arguments.length > 1) {
                subscriber.next(Array.prototype.slice.call(arguments));
            }
            else {
                subscriber.next(e);
            }
        }
        setupSubscription(target, eventName, handler, subscriber, options);
    });
}
function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
    let unsubscribe;
    if (isEventTarget(sourceObj)) {
        const source = sourceObj;
        sourceObj.addEventListener(eventName, handler, options);
        unsubscribe = () => source.removeEventListener(eventName, handler, options);
    }
    else if (isJQueryStyleEventEmitter(sourceObj)) {
        const source = sourceObj;
        sourceObj.on(eventName, handler);
        unsubscribe = () => source.off(eventName, handler);
    }
    else if (isNodeStyleEventEmitter(sourceObj)) {
        const source = sourceObj;
        sourceObj.addListener(eventName, handler);
        unsubscribe = () => source.removeListener(eventName, handler);
    }
    else if (sourceObj && sourceObj.length) {
        for (let i = 0, len = sourceObj.length; i < len; i++) {
            setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
        }
    }
    else {
        throw new TypeError('Invalid event target');
    }
    subscriber.add(unsubscribe);
}
function isNodeStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}
function isJQueryStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}
function isEventTarget(sourceObj) {
    return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}
//# sourceMappingURL=fromEvent.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/observable/fromEventPattern.js":
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/fromEventPattern.js ***!
  \****************************************************************************/
/*! exports provided: fromEventPattern */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromEventPattern", function() { return fromEventPattern; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm2015/internal/util/isArray.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isFunction */ "./node_modules/rxjs/_esm2015/internal/util/isFunction.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/_esm2015/internal/operators/map.js");




function fromEventPattern(addHandler, removeHandler, resultSelector) {
    if (resultSelector) {
        return fromEventPattern(addHandler, removeHandler).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(args => Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(args) ? resultSelector(...args) : resultSelector(args)));
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
        const handler = (...e) => subscriber.next(e.length === 1 ? e[0] : e);
        let retValue;
        try {
            retValue = addHandler(handler);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        if (!Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(removeHandler)) {
            return undefined;
        }
        return () => removeHandler(handler, retValue);
    });
}
//# sourceMappingURL=fromEventPattern.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/observable/fromIterable.js":
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/fromIterable.js ***!
  \************************************************************************/
/*! exports provided: fromIterable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromIterable", function() { return fromIterable; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm2015/internal/Subscription.js");
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/_esm2015/internal/symbol/iterator.js");
/* harmony import */ var _util_subscribeToIterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/subscribeToIterable */ "./node_modules/rxjs/_esm2015/internal/util/subscribeToIterable.js");




function fromIterable(input, scheduler) {
    if (!input) {
        throw new Error('Iterable cannot be null');
    }
    if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_util_subscribeToIterable__WEBPACK_IMPORTED_MODULE_3__["subscribeToIterable"])(input));
    }
    else {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
            const sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
            let iterator;
            sub.add(() => {
                if (iterator && typeof iterator.return === 'function') {
                    iterator.return();
                }
            });
            sub.add(scheduler.schedule(() => {
                iterator = input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__["iterator"]]();
                sub.add(scheduler.schedule(function () {
                    if (subscriber.closed) {
                        return;
                    }
                    let value;
                    let done;
                    try {
                        const result = iterator.next();
                        value = result.value;
                        done = result.done;
                    }
                    catch (err) {
                        subscriber.error(err);
                        return;
                    }
                    if (done) {
                        subscriber.complete();
                    }
                    else {
                        subscriber.next(value);
                        this.schedule();
                    }
                }));
            }));
            return sub;
        });
    }
}
//# sourceMappingURL=fromIterable.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/observable/fromObservable.js":
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/fromObservable.js ***!
  \**************************************************************************/
/*! exports provided: fromObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromObservable", function() { return fromObservable; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm2015/internal/Subscription.js");
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/_esm2015/internal/symbol/observable.js");
/* harmony import */ var _util_subscribeToObservable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/subscribeToObservable */ "./node_modules/rxjs/_esm2015/internal/util/subscribeToObservable.js");




function fromObservable(input, scheduler) {
    if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_util_subscribeToObservable__WEBPACK_IMPORTED_MODULE_3__["subscribeToObservable"])(input));
    }
    else {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
            const sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
            sub.add(scheduler.schedule(() => {
                const observable = input[_symbol_observable__WEBPACK_IMPORTED_MODULE_2__["observable"]]();
                sub.add(observable.subscribe({
                    next(value) { sub.add(scheduler.schedule(() => subscriber.next(value))); },
                    error(err) { sub.add(scheduler.schedule(() => subscriber.error(err))); },
                    complete() { sub.add(scheduler.schedule(() => subscriber.complete())); },
                }));
            }));
            return sub;
        });
    }
}
//# sourceMappingURL=fromObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/observable/fromPromise.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/fromPromise.js ***!
  \***********************************************************************/
/*! exports provided: fromPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPromise", function() { return fromPromise; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm2015/internal/Subscription.js");
/* harmony import */ var _util_subscribeToPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/subscribeToPromise */ "./node_modules/rxjs/_esm2015/internal/util/subscribeToPromise.js");



function fromPromise(input, scheduler) {
    if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_util_subscribeToPromise__WEBPACK_IMPORTED_MODULE_2__["subscribeToPromise"])(input));
    }
    else {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
            const sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
            sub.add(scheduler.schedule(() => input.then(value => {
                sub.add(scheduler.schedule(() => {
                    subscriber.next(value);
                    sub.add(scheduler.schedule(() => subscriber.complete()));
                }));
            }, err => {
                sub.add(scheduler.schedule(() => subscriber.error(err)));
            })));
            return sub;
        });
    }
}
//# sourceMappingURL=fromPromise.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/observable/generate.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/generate.js ***!
  \********************************************************************/
/*! exports provided: generate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generate", function() { return generate; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/identity */ "./node_modules/rxjs/_esm2015/internal/util/identity.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm2015/internal/util/isScheduler.js");



function generate(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
    let resultSelector;
    let initialState;
    if (arguments.length == 1) {
        const options = initialStateOrOptions;
        initialState = options.initialState;
        condition = options.condition;
        iterate = options.iterate;
        resultSelector = options.resultSelector || _util_identity__WEBPACK_IMPORTED_MODULE_1__["identity"];
        scheduler = options.scheduler;
    }
    else if (resultSelectorOrObservable === undefined || Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_2__["isScheduler"])(resultSelectorOrObservable)) {
        initialState = initialStateOrOptions;
        resultSelector = _util_identity__WEBPACK_IMPORTED_MODULE_1__["identity"];
        scheduler = resultSelectorOrObservable;
    }
    else {
        initialState = initialStateOrOptions;
        resultSelector = resultSelectorOrObservable;
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
        let state = initialState;
        if (scheduler) {
            return scheduler.schedule(dispatch, 0, {
                subscriber,
                iterate,
                condition,
                resultSelector,
                state
            });
        }
        do {
            if (condition) {
                let conditionResult;
                try {
                    conditionResult = condition(state);
                }
                catch (err) {
                    subscriber.error(err);
                    return undefined;
                }
                if (!conditionResult) {
                    subscriber.complete();
                    break;
                }
            }
            let value;
            try {
                value = resultSelector(state);
            }
            catch (err) {
                subscriber.error(err);
                return undefined;
            }
            subscriber.next(value);
            if (subscriber.closed) {
                break;
            }
            try {
                state = iterate(state);
            }
            catch (err) {
                subscriber.error(err);
                return undefined;
            }
        } while (true);
        return undefined;
    });
}
function dispatch(state) {
    const { subscriber, condition } = state;
    if (subscriber.closed) {
        return undefined;
    }
    if (state.needIterate) {
        try {
            state.state = state.iterate(state.state);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
    }
    else {
        state.needIterate = true;
    }
    if (condition) {
        let conditionResult;
        try {
            conditionResult = condition(state.state);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        if (!conditionResult) {
            subscriber.complete();
            return undefined;
        }
        if (subscriber.closed) {
            return undefined;
        }
    }
    let value;
    try {
        value = state.resultSelector(state.state);
    }
    catch (err) {
        subscriber.error(err);
        return undefined;
    }
    if (subscriber.closed) {
        return undefined;
    }
    subscriber.next(value);
    if (subscriber.closed) {
        return undefined;
    }
    return this.schedule(state);
}
//# sourceMappingURL=generate.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/observable/iif.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/iif.js ***!
  \***************************************************************/
/*! exports provided: iif */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iif", function() { return iif; });
/* harmony import */ var _defer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defer */ "./node_modules/rxjs/_esm2015/internal/observable/defer.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/_esm2015/internal/observable/empty.js");


function iif(condition, trueResult = _empty__WEBPACK_IMPORTED_MODULE_1__["EMPTY"], falseResult = _empty__WEBPACK_IMPORTED_MODULE_1__["EMPTY"]) {
    return Object(_defer__WEBPACK_IMPORTED_MODULE_0__["defer"])(() => condition() ? trueResult : falseResult);
}
//# sourceMappingURL=iif.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/observable/interval.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/interval.js ***!
  \********************************************************************/
/*! exports provided: interval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interval", function() { return interval; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/_esm2015/internal/scheduler/async.js");
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isNumeric */ "./node_modules/rxjs/_esm2015/internal/util/isNumeric.js");



function interval(period = 0, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"]) {
    if (!Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_2__["isNumeric"])(period) || period < 0) {
        period = 0;
    }
    if (!scheduler || typeof scheduler.schedule !== 'function') {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"];
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
        subscriber.add(scheduler.schedule(dispatch, period, { subscriber, counter: 0, period }));
        return subscriber;
    });
}
function dispatch(state) {
    const { subscriber, counter, period } = state;
    subscriber.next(counter);
    this.schedule({ subscriber, counter: counter + 1, period }, period);
}
//# sourceMappingURL=interval.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/observable/merge.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/merge.js ***!
  \*****************************************************************/
/*! exports provided: merge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm2015/internal/util/isScheduler.js");
/* harmony import */ var _operators_mergeAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/mergeAll */ "./node_modules/rxjs/_esm2015/internal/operators/mergeAll.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/_esm2015/internal/observable/fromArray.js");




function merge(...observables) {
    let concurrent = Number.POSITIVE_INFINITY;
    let scheduler = null;
    let last = observables[observables.length - 1];
    if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__["isScheduler"])(last)) {
        scheduler = observables.pop();
        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
            concurrent = observables.pop();
        }
    }
    else if (typeof last === 'number') {
        concurrent = observables.pop();
    }
    if (scheduler === null && observables.length === 1 && observables[0] instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]) {
        return observables[0];
    }
    return Object(_operators_mergeAll__WEBPACK_IMPORTED_MODULE_2__["mergeAll"])(concurrent)(Object(_fromArray__WEBPACK_IMPORTED_MODULE_3__["fromArray"])(observables, scheduler));
}
//# sourceMappingURL=merge.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/observable/never.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/never.js ***!
  \*****************************************************************/
/*! exports provided: NEVER, never */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEVER", function() { return NEVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "never", function() { return never; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/noop */ "./node_modules/rxjs/_esm2015/internal/util/noop.js");


const NEVER = new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](_util_noop__WEBPACK_IMPORTED_MODULE_1__["noop"]);
function never() {
    return NEVER;
}
//# sourceMappingURL=never.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/observable/of.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/of.js ***!
  \**************************************************************/
/*! exports provided: of */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "of", function() { return of; });
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm2015/internal/util/isScheduler.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/_esm2015/internal/observable/fromArray.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/_esm2015/internal/observable/empty.js");
/* harmony import */ var _scalar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scalar */ "./node_modules/rxjs/_esm2015/internal/observable/scalar.js");




function of(...args) {
    let scheduler = args[args.length - 1];
    if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_0__["isScheduler"])(scheduler)) {
        args.pop();
    }
    else {
        scheduler = undefined;
    }
    switch (args.length) {
        case 0:
            return Object(_empty__WEBPACK_IMPORTED_MODULE_2__["empty"])(scheduler);
        case 1:
            return scheduler ? Object(_fromArray__WEBPACK_IMPORTED_MODULE_1__["fromArray"])(args, scheduler) : Object(_scalar__WEBPACK_IMPORTED_MODULE_3__["scalar"])(args[0]);
        default:
            return Object(_fromArray__WEBPACK_IMPORTED_MODULE_1__["fromArray"])(args, scheduler);
    }
}
//# sourceMappingURL=of.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/observable/onErrorResumeNext.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/onErrorResumeNext.js ***!
  \*****************************************************************************/
/*! exports provided: onErrorResumeNext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onErrorResumeNext", function() { return onErrorResumeNext; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from */ "./node_modules/rxjs/_esm2015/internal/observable/from.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm2015/internal/util/isArray.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/_esm2015/internal/observable/empty.js");




function onErrorResumeNext(...sources) {
    if (sources.length === 0) {
        return _empty__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
    }
    const [first, ...remainder] = sources;
    if (sources.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_2__["isArray"])(first)) {
        return onErrorResumeNext(...first);
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
        const subNext = () => subscriber.add(onErrorResumeNext(...remainder).subscribe(subscriber));
        return Object(_from__WEBPACK_IMPORTED_MODULE_1__["from"])(first).subscribe({
            next(value) { subscriber.next(value); },
            error: subNext,
            complete: subNext,
        });
    });
}
//# sourceMappingURL=onErrorResumeNext.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/observable/pairs.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/pairs.js ***!
  \*****************************************************************/
/*! exports provided: pairs, dispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return pairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm2015/internal/Subscription.js");


function pairs(obj, scheduler) {
    if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
            const keys = Object.keys(obj);
            for (let i = 0; i < keys.length && !subscriber.closed; i++) {
                const key = keys[i];
                if (obj.hasOwnProperty(key)) {
                    subscriber.next([key, obj[key]]);
                }
            }
            subscriber.complete();
        });
    }
    else {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
            const keys = Object.keys(obj);
            const subscription = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
            subscription.add(scheduler.schedule(dispatch, 0, { keys, index: 0, subscriber, subscription, obj }));
            return subscription;
        });
    }
}
function dispatch(state) {
    const { keys, index, subscriber, subscription, obj } = state;
    if (!subscriber.closed) {
        if (index < keys.length) {
            const key = keys[index];
            subscriber.next([key, obj[key]]);
            subscription.add(this.schedule({ keys, index: index + 1, subscriber, subscription, obj }));
        }
        else {
            subscriber.complete();
        }
    }
}
//# sourceMappingURL=pairs.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/observable/race.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/race.js ***!
  \****************************************************************/
/*! exports provided: race, RaceOperator, RaceSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "race", function() { return race; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaceOperator", function() { return RaceOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaceSubscriber", function() { return RaceSubscriber; });
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm2015/internal/util/isArray.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/_esm2015/internal/observable/fromArray.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm2015/internal/OuterSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js");




function race(...observables) {
    if (observables.length === 1) {
        if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_0__["isArray"])(observables[0])) {
            observables = observables[0];
        }
        else {
            return observables[0];
        }
    }
    return Object(_fromArray__WEBPACK_IMPORTED_MODULE_1__["fromArray"])(observables, undefined).lift(new RaceOperator());
}
class RaceOperator {
    call(subscriber, source) {
        return source.subscribe(new RaceSubscriber(subscriber));
    }
}
class RaceSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__["OuterSubscriber"] {
    constructor(destination) {
        super(destination);
        this.hasFirst = false;
        this.observables = [];
        this.subscriptions = [];
    }
    _next(observable) {
        this.observables.push(observable);
    }
    _complete() {
        const observables = this.observables;
        const len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            for (let i = 0; i < len && !this.hasFirst; i++) {
                let observable = observables[i];
                let subscription = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__["subscribeToResult"])(this, observable, observable, i);
                if (this.subscriptions) {
                    this.subscriptions.push(subscription);
                }
                this.add(subscription);
            }
            this.observables = null;
        }
    }
    notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (!this.hasFirst) {
            this.hasFirst = true;
            for (let i = 0; i < this.subscriptions.length; i++) {
                if (i !== outerIndex) {
                    let subscription = this.subscriptions[i];
                    subscription.unsubscribe();
                    this.remove(subscription);
                }
            }
            this.subscriptions = null;
        }
        this.destination.next(innerValue);
    }
}
//# sourceMappingURL=race.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/observable/range.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/range.js ***!
  \*****************************************************************/
/*! exports provided: range, dispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm2015/internal/Observable.js");

function range(start = 0, count, scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
        if (count === undefined) {
            count = start;
            start = 0;
        }
        let index = 0;
        let current = start;
        if (scheduler) {
            return scheduler.schedule(dispatch, 0, {
                index, count, start, subscriber
            });
        }
        else {
            do {
                if (index++ >= count) {
                    subscriber.complete();
                    break;
                }
                subscriber.next(current++);
                if (subscriber.closed) {
                    break;
                }
            } while (true);
        }
        return undefined;
    });
}
function dispatch(state) {
    const { start, index, count, subscriber } = state;
    if (index >= count) {
        subscriber.complete();
        return;
    }
    subscriber.next(start);
    if (subscriber.closed) {
        return;
    }
    state.index = index + 1;
    state.start = start + 1;
    this.schedule(state);
}
//# sourceMappingURL=range.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/observable/scalar.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/scalar.js ***!
  \******************************************************************/
/*! exports provided: scalar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scalar", function() { return scalar; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm2015/internal/Observable.js");

function scalar(value) {
    const result = new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
        subscriber.next(value);
        subscriber.complete();
    });
    result._isScalar = true;
    result.value = value;
    return result;
}
//# sourceMappingURL=scalar.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/observable/throwError.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/throwError.js ***!
  \**********************************************************************/
/*! exports provided: throwError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwError", function() { return throwError; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm2015/internal/Observable.js");

function throwError(error, scheduler) {
    if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => subscriber.error(error));
    }
    else {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => scheduler.schedule(dispatch, 0, { error, subscriber }));
    }
}
function dispatch({ error, subscriber }) {
    subscriber.error(error);
}
//# sourceMappingURL=throwError.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/observable/timer.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/timer.js ***!
  \*****************************************************************/
/*! exports provided: timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return timer; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/_esm2015/internal/scheduler/async.js");
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isNumeric */ "./node_modules/rxjs/_esm2015/internal/util/isNumeric.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm2015/internal/util/isScheduler.js");




function timer(dueTime = 0, periodOrScheduler, scheduler) {
    let period = -1;
    if (Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_2__["isNumeric"])(periodOrScheduler)) {
        period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
    }
    else if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_3__["isScheduler"])(periodOrScheduler)) {
        scheduler = periodOrScheduler;
    }
    if (!Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_3__["isScheduler"])(scheduler)) {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"];
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
        const due = Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_2__["isNumeric"])(dueTime)
            ? dueTime
            : (+dueTime - scheduler.now());
        return scheduler.schedule(dispatch, due, {
            index: 0, period, subscriber
        });
    });
}
function dispatch(state) {
    const { index, period, subscriber } = state;
    subscriber.next(index);
    if (subscriber.closed) {
        return;
    }
    else if (period === -1) {
        return subscriber.complete();
    }
    state.index = index + 1;
    this.schedule(state, period);
}
//# sourceMappingURL=timer.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/observable/using.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/using.js ***!
  \*****************************************************************/
/*! exports provided: using */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "using", function() { return using; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from */ "./node_modules/rxjs/_esm2015/internal/observable/from.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/_esm2015/internal/observable/empty.js");



function using(resourceFactory, observableFactory) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
        let resource;
        try {
            resource = resourceFactory();
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        let result;
        try {
            result = observableFactory(resource);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        const source = result ? Object(_from__WEBPACK_IMPORTED_MODULE_1__["from"])(result) : _empty__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
        const subscription = source.subscribe(subscriber);
        return () => {
            subscription.unsubscribe();
            if (resource) {
                resource.unsubscribe();
            }
        };
    });
}
//# sourceMappingURL=using.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/observable/zip.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/zip.js ***!
  \***************************************************************/
/*! exports provided: zip, ZipOperator, ZipSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return zip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZipOperator", function() { return ZipOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZipSubscriber", function() { return ZipSubscriber; });
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/_esm2015/internal/observable/fromArray.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm2015/internal/util/isArray.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm2015/internal/OuterSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js");
/* harmony import */ var _internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../internal/symbol/iterator */ "./node_modules/rxjs/_esm2015/internal/symbol/iterator.js");






function zip(...observables) {
    const resultSelector = observables[observables.length - 1];
    if (typeof resultSelector === 'function') {
        observables.pop();
    }
    return Object(_fromArray__WEBPACK_IMPORTED_MODULE_0__["fromArray"])(observables, undefined).lift(new ZipOperator(resultSelector));
}
class ZipOperator {
    constructor(resultSelector) {
        this.resultSelector = resultSelector;
    }
    call(subscriber, source) {
        return source.subscribe(new ZipSubscriber(subscriber, this.resultSelector));
    }
}
class ZipSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_2__["Subscriber"] {
    constructor(destination, resultSelector, values = Object.create(null)) {
        super(destination);
        this.iterators = [];
        this.active = 0;
        this.resultSelector = (typeof resultSelector === 'function') ? resultSelector : null;
        this.values = values;
    }
    _next(value) {
        const iterators = this.iterators;
        if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(value)) {
            iterators.push(new StaticArrayIterator(value));
        }
        else if (typeof value[_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_5__["iterator"]] === 'function') {
            iterators.push(new StaticIterator(value[_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_5__["iterator"]]()));
        }
        else {
            iterators.push(new ZipBufferIterator(this.destination, this, value));
        }
    }
    _complete() {
        const iterators = this.iterators;
        const len = iterators.length;
        this.unsubscribe();
        if (len === 0) {
            this.destination.complete();
            return;
        }
        this.active = len;
        for (let i = 0; i < len; i++) {
            let iterator = iterators[i];
            if (iterator.stillUnsubscribed) {
                const destination = this.destination;
                destination.add(iterator.subscribe(iterator, i));
            }
            else {
                this.active--;
            }
        }
    }
    notifyInactive() {
        this.active--;
        if (this.active === 0) {
            this.destination.complete();
        }
    }
    checkIterators() {
        const iterators = this.iterators;
        const len = iterators.length;
        const destination = this.destination;
        for (let i = 0; i < len; i++) {
            let iterator = iterators[i];
            if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
                return;
            }
        }
        let shouldComplete = false;
        const args = [];
        for (let i = 0; i < len; i++) {
            let iterator = iterators[i];
            let result = iterator.next();
            if (iterator.hasCompleted()) {
                shouldComplete = true;
            }
            if (result.done) {
                destination.complete();
                return;
            }
            args.push(result.value);
        }
        if (this.resultSelector) {
            this._tryresultSelector(args);
        }
        else {
            destination.next(args);
        }
        if (shouldComplete) {
            destination.complete();
        }
    }
    _tryresultSelector(args) {
        let result;
        try {
            result = this.resultSelector.apply(this, args);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    }
}
class StaticIterator {
    constructor(iterator) {
        this.iterator = iterator;
        this.nextResult = iterator.next();
    }
    hasValue() {
        return true;
    }
    next() {
        const result = this.nextResult;
        this.nextResult = this.iterator.next();
        return result;
    }
    hasCompleted() {
        const nextResult = this.nextResult;
        return nextResult && nextResult.done;
    }
}
class StaticArrayIterator {
    constructor(array) {
        this.array = array;
        this.index = 0;
        this.length = 0;
        this.length = array.length;
    }
    [_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_5__["iterator"]]() {
        return this;
    }
    next(value) {
        const i = this.index++;
        const array = this.array;
        return i < this.length ? { value: array[i], done: false } : { value: null, done: true };
    }
    hasValue() {
        return this.array.length > this.index;
    }
    hasCompleted() {
        return this.array.length === this.index;
    }
}
class ZipBufferIterator extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_3__["OuterSubscriber"] {
    constructor(destination, parent, observable) {
        super(destination);
        this.parent = parent;
        this.observable = observable;
        this.stillUnsubscribed = true;
        this.buffer = [];
        this.isComplete = false;
    }
    [_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_5__["iterator"]]() {
        return this;
    }
    next() {
        const buffer = this.buffer;
        if (buffer.length === 0 && this.isComplete) {
            return { value: null, done: true };
        }
        else {
            return { value: buffer.shift(), done: false };
        }
    }
    hasValue() {
        return this.buffer.length > 0;
    }
    hasCompleted() {
        return this.buffer.length === 0 && this.isComplete;
    }
    notifyComplete() {
        if (this.buffer.length > 0) {
            this.isComplete = true;
            this.parent.notifyInactive();
        }
        else {
            this.destination.complete();
        }
    }
    notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.buffer.push(innerValue);
        this.parent.checkIterators();
    }
    subscribe(value, index) {
        return Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_4__["subscribeToResult"])(this, this.observable, this, index);
    }
}
//# sourceMappingURL=zip.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/audit.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/audit.js ***!
  \****************************************************************/
/*! exports provided: audit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "audit", function() { return audit; });
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm2015/internal/OuterSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js");


function audit(durationSelector) {
    return function auditOperatorFunction(source) {
        return source.lift(new AuditOperator(durationSelector));
    };
}
class AuditOperator {
    constructor(durationSelector) {
        this.durationSelector = durationSelector;
    }
    call(subscriber, source) {
        return source.subscribe(new AuditSubscriber(subscriber, this.durationSelector));
    }
}
class AuditSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__["OuterSubscriber"] {
    constructor(destination, durationSelector) {
        super(destination);
        this.durationSelector = durationSelector;
        this.hasValue = false;
    }
    _next(value) {
        this.value = value;
        this.hasValue = true;
        if (!this.throttled) {
            let duration;
            try {
                const { durationSelector } = this;
                duration = durationSelector(value);
            }
            catch (err) {
                return this.destination.error(err);
            }
            const innerSubscription = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__["subscribeToResult"])(this, duration);
            if (!innerSubscription || innerSubscription.closed) {
                this.clearThrottle();
            }
            else {
                this.add(this.throttled = innerSubscription);
            }
        }
    }
    clearThrottle() {
        const { value, hasValue, throttled } = this;
        if (throttled) {
            this.remove(throttled);
            this.throttled = null;
            throttled.unsubscribe();
        }
        if (hasValue) {
            this.value = null;
            this.hasValue = false;
            this.destination.next(value);
        }
    }
    notifyNext(outerValue, innerValue, outerIndex, innerIndex) {
        this.clearThrottle();
    }
    notifyComplete() {
        this.clearThrottle();
    }
}
//# sourceMappingURL=audit.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/auditTime.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/auditTime.js ***!
  \********************************************************************/
/*! exports provided: auditTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auditTime", function() { return auditTime; });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/_esm2015/internal/scheduler/async.js");
/* harmony import */ var _audit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audit */ "./node_modules/rxjs/_esm2015/internal/operators/audit.js");
/* harmony import */ var _observable_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/timer */ "./node_modules/rxjs/_esm2015/internal/observable/timer.js");



function auditTime(duration, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__["async"]) {
    return Object(_audit__WEBPACK_IMPORTED_MODULE_1__["audit"])(() => Object(_observable_timer__WEBPACK_IMPORTED_MODULE_2__["timer"])(duration, scheduler));
}
//# sourceMappingURL=auditTime.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/buffer.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/buffer.js ***!
  \*****************************************************************/
/*! exports provided: buffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buffer", function() { return buffer; });
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm2015/internal/OuterSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js");


function buffer(closingNotifier) {
    return function bufferOperatorFunction(source) {
        return source.lift(new BufferOperator(closingNotifier));
    };
}
class BufferOperator {
    constructor(closingNotifier) {
        this.closingNotifier = closingNotifier;
    }
    call(subscriber, source) {
        return source.subscribe(new BufferSubscriber(subscriber, this.closingNotifier));
    }
}
class BufferSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__["OuterSubscriber"] {
    constructor(destination, closingNotifier) {
        super(destination);
        this.buffer = [];
        this.add(Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__["subscribeToResult"])(this, closingNotifier));
    }
    _next(value) {
        this.buffer.push(value);
    }
    notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        const buffer = this.buffer;
        this.buffer = [];
        this.destination.next(buffer);
    }
}
//# sourceMappingURL=buffer.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/bufferCount.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/bufferCount.js ***!
  \**********************************************************************/
/*! exports provided: bufferCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bufferCount", function() { return bufferCount; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");

function bufferCount(bufferSize, startBufferEvery = null) {
    return function bufferCountOperatorFunction(source) {
        return source.lift(new BufferCountOperator(bufferSize, startBufferEvery));
    };
}
class BufferCountOperator {
    constructor(bufferSize, startBufferEvery) {
        this.bufferSize = bufferSize;
        this.startBufferEvery = startBufferEvery;
        if (!startBufferEvery || bufferSize === startBufferEvery) {
            this.subscriberClass = BufferCountSubscriber;
        }
        else {
            this.subscriberClass = BufferSkipCountSubscriber;
        }
    }
    call(subscriber, source) {
        return source.subscribe(new this.subscriberClass(subscriber, this.bufferSize, this.startBufferEvery));
    }
}
class BufferCountSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, bufferSize) {
        super(destination);
        this.bufferSize = bufferSize;
        this.buffer = [];
    }
    _next(value) {
        const buffer = this.buffer;
        buffer.push(value);
        if (buffer.length == this.bufferSize) {
            this.destination.next(buffer);
            this.buffer = [];
        }
    }
    _complete() {
        const buffer = this.buffer;
        if (buffer.length > 0) {
            this.destination.next(buffer);
        }
        super._complete();
    }
}
class BufferSkipCountSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, bufferSize, startBufferEvery) {
        super(destination);
        this.bufferSize = bufferSize;
        this.startBufferEvery = startBufferEvery;
        this.buffers = [];
        this.count = 0;
    }
    _next(value) {
        const { bufferSize, startBufferEvery, buffers, count } = this;
        this.count++;
        if (count % startBufferEvery === 0) {
            buffers.push([]);
        }
        for (let i = buffers.length; i--;) {
            const buffer = buffers[i];
            buffer.push(value);
            if (buffer.length === bufferSize) {
                buffers.splice(i, 1);
                this.destination.next(buffer);
            }
        }
    }
    _complete() {
        const { buffers, destination } = this;
        while (buffers.length > 0) {
            let buffer = buffers.shift();
            if (buffer.length > 0) {
                destination.next(buffer);
            }
        }
        super._complete();
    }
}
//# sourceMappingURL=bufferCount.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/bufferTime.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/bufferTime.js ***!
  \*********************************************************************/
/*! exports provided: bufferTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bufferTime", function() { return bufferTime; });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/_esm2015/internal/scheduler/async.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm2015/internal/util/isScheduler.js");



function bufferTime(bufferTimeSpan) {
    let length = arguments.length;
    let scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__["async"];
    if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_2__["isScheduler"])(arguments[arguments.length - 1])) {
        scheduler = arguments[arguments.length - 1];
        length--;
    }
    let bufferCreationInterval = null;
    if (length >= 2) {
        bufferCreationInterval = arguments[1];
    }
    let maxBufferSize = Number.POSITIVE_INFINITY;
    if (length >= 3) {
        maxBufferSize = arguments[2];
    }
    return function bufferTimeOperatorFunction(source) {
        return source.lift(new BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler));
    };
}
class BufferTimeOperator {
    constructor(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
        this.bufferTimeSpan = bufferTimeSpan;
        this.bufferCreationInterval = bufferCreationInterval;
        this.maxBufferSize = maxBufferSize;
        this.scheduler = scheduler;
    }
    call(subscriber, source) {
        return source.subscribe(new BufferTimeSubscriber(subscriber, this.bufferTimeSpan, this.bufferCreationInterval, this.maxBufferSize, this.scheduler));
    }
}
class Context {
    constructor() {
        this.buffer = [];
    }
}
class BufferTimeSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"] {
    constructor(destination, bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
        super(destination);
        this.bufferTimeSpan = bufferTimeSpan;
        this.bufferCreationInterval = bufferCreationInterval;
        this.maxBufferSize = maxBufferSize;
        this.scheduler = scheduler;
        this.contexts = [];
        const context = this.openContext();
        this.timespanOnly = bufferCreationInterval == null || bufferCreationInterval < 0;
        if (this.timespanOnly) {
            const timeSpanOnlyState = { subscriber: this, context, bufferTimeSpan };
            this.add(context.closeAction = scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
        }
        else {
            const closeState = { subscriber: this, context };
            const creationState = { bufferTimeSpan, bufferCreationInterval, subscriber: this, scheduler };
            this.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, closeState));
            this.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, creationState));
        }
    }
    _next(value) {
        const contexts = this.contexts;
        const len = contexts.length;
        let filledBufferContext;
        for (let i = 0; i < len; i++) {
            const context = contexts[i];
            const buffer = context.buffer;
            buffer.push(value);
            if (buffer.length == this.maxBufferSize) {
                filledBufferContext = context;
            }
        }
        if (filledBufferContext) {
            this.onBufferFull(filledBufferContext);
        }
    }
    _error(err) {
        this.contexts.length = 0;
        super._error(err);
    }
    _complete() {
        const { contexts, destination } = this;
        while (contexts.length > 0) {
            const context = contexts.shift();
            destination.next(context.buffer);
        }
        super._complete();
    }
    _unsubscribe() {
        this.contexts = null;
    }
    onBufferFull(context) {
        this.closeContext(context);
        const closeAction = context.closeAction;
        closeAction.unsubscribe();
        this.remove(closeAction);
        if (!this.closed && this.timespanOnly) {
            context = this.openContext();
            const bufferTimeSpan = this.bufferTimeSpan;
            const timeSpanOnlyState = { subscriber: this, context, bufferTimeSpan };
            this.add(context.closeAction = this.scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
        }
    }
    openContext() {
        const context = new Context();
        this.contexts.push(context);
        return context;
    }
    closeContext(context) {
        this.destination.next(context.buffer);
        const contexts = this.contexts;
        const spliceIndex = contexts ? contexts.indexOf(context) : -1;
        if (spliceIndex >= 0) {
            contexts.splice(contexts.indexOf(context), 1);
        }
    }
}
function dispatchBufferTimeSpanOnly(state) {
    const subscriber = state.subscriber;
    const prevContext = state.context;
    if (prevContext) {
        subscriber.closeContext(prevContext);
    }
    if (!subscriber.closed) {
        state.context = subscriber.openContext();
        state.context.closeAction = this.schedule(state, state.bufferTimeSpan);
    }
}
function dispatchBufferCreation(state) {
    const { bufferCreationInterval, bufferTimeSpan, subscriber, scheduler } = state;
    const context = subscriber.openContext();
    const action = this;
    if (!subscriber.closed) {
        subscriber.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, { subscriber, context }));
        action.schedule(state, bufferCreationInterval);
    }
}
function dispatchBufferClose(arg) {
    const { subscriber, context } = arg;
    subscriber.closeContext(context);
}
//# sourceMappingURL=bufferTime.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/bufferToggle.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/bufferToggle.js ***!
  \***********************************************************************/
/*! exports provided: bufferToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bufferToggle", function() { return bufferToggle; });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm2015/internal/Subscription.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm2015/internal/OuterSubscriber.js");



function bufferToggle(openings, closingSelector) {
    return function bufferToggleOperatorFunction(source) {
        return source.lift(new BufferToggleOperator(openings, closingSelector));
    };
}
class BufferToggleOperator {
    constructor(openings, closingSelector) {
        this.openings = openings;
        this.closingSelector = closingSelector;
    }
    call(subscriber, source) {
        return source.subscribe(new BufferToggleSubscriber(subscriber, this.openings, this.closingSelector));
    }
}
class BufferToggleSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__["OuterSubscriber"] {
    constructor(destination, openings, closingSelector) {
        super(destination);
        this.openings = openings;
        this.closingSelector = closingSelector;
        this.contexts = [];
        this.add(Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__["subscribeToResult"])(this, openings));
    }
    _next(value) {
        const contexts = this.contexts;
        const len = contexts.length;
        for (let i = 0; i < len; i++) {
            contexts[i].buffer.push(value);
        }
    }
    _error(err) {
        const contexts = this.contexts;
        while (contexts.length > 0) {
            const context = contexts.shift();
            context.subscription.unsubscribe();
            context.buffer = null;
            context.subscription = null;
        }
        this.contexts = null;
        super._error(err);
    }
    _complete() {
        const contexts = this.contexts;
        while (contexts.length > 0) {
            const context = contexts.shift();
            this.destination.next(context.buffer);
            context.subscription.unsubscribe();
            context.buffer = null;
            context.subscription = null;
        }
        this.contexts = null;
        super._complete();
    }
    notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        outerValue ? this.closeBuffer(outerValue) : this.openBuffer(innerValue);
    }
    notifyComplete(innerSub) {
        this.closeBuffer(innerSub.context);
    }
    openBuffer(value) {
        try {
            const closingSelector = this.closingSelector;
            const closingNotifier = closingSelector.call(this, value);
            if (closingNotifier) {
                this.trySubscribe(closingNotifier);
            }
        }
        catch (err) {
            this._error(err);
        }
    }
    closeBuffer(context) {
        const contexts = this.contexts;
        if (contexts && context) {
            const { buffer, subscription } = context;
            this.destination.next(buffer);
            contexts.splice(contexts.indexOf(context), 1);
            this.remove(subscription);
            subscription.unsubscribe();
        }
    }
    trySubscribe(closingNotifier) {
        const contexts = this.contexts;
        const buffer = [];
        const subscription = new _Subscription__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
        const context = { buffer, subscription };
        contexts.push(context);
        const innerSubscription = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__["subscribeToResult"])(this, closingNotifier, context);
        if (!innerSubscription || innerSubscription.closed) {
            this.closeBuffer(context);
        }
        else {
            innerSubscription.context = context;
            this.add(innerSubscription);
            subscription.add(innerSubscription);
        }
    }
}
//# sourceMappingURL=bufferToggle.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/bufferWhen.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/bufferWhen.js ***!
  \*********************************************************************/
/*! exports provided: bufferWhen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bufferWhen", function() { return bufferWhen; });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm2015/internal/Subscription.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm2015/internal/OuterSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js");



function bufferWhen(closingSelector) {
    return function (source) {
        return source.lift(new BufferWhenOperator(closingSelector));
    };
}
class BufferWhenOperator {
    constructor(closingSelector) {
        this.closingSelector = closingSelector;
    }
    call(subscriber, source) {
        return source.subscribe(new BufferWhenSubscriber(subscriber, this.closingSelector));
    }
}
class BufferWhenSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_1__["OuterSubscriber"] {
    constructor(destination, closingSelector) {
        super(destination);
        this.closingSelector = closingSelector;
        this.subscribing = false;
        this.openBuffer();
    }
    _next(value) {
        this.buffer.push(value);
    }
    _complete() {
        const buffer = this.buffer;
        if (buffer) {
            this.destination.next(buffer);
        }
        super._complete();
    }
    _unsubscribe() {
        this.buffer = null;
        this.subscribing = false;
    }
    notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.openBuffer();
    }
    notifyComplete() {
        if (this.subscribing) {
            this.complete();
        }
        else {
            this.openBuffer();
        }
    }
    openBuffer() {
        let { closingSubscription } = this;
        if (closingSubscription) {
            this.remove(closingSubscription);
            closingSubscription.unsubscribe();
        }
        const buffer = this.buffer;
        if (this.buffer) {
            this.destination.next(buffer);
        }
        this.buffer = [];
        let closingNotifier;
        try {
            const { closingSelector } = this;
            closingNotifier = closingSelector();
        }
        catch (err) {
            return this.error(err);
        }
        closingSubscription = new _Subscription__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
        this.closingSubscription = closingSubscription;
        this.add(closingSubscription);
        this.subscribing = true;
        closingSubscription.add(Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_2__["subscribeToResult"])(this, closingNotifier));
        this.subscribing = false;
    }
}
//# sourceMappingURL=bufferWhen.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/catchError.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/catchError.js ***!
  \*********************************************************************/
/*! exports provided: catchError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "catchError", function() { return catchError; });
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm2015/internal/OuterSubscriber.js");
/* harmony import */ var _InnerSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../InnerSubscriber */ "./node_modules/rxjs/_esm2015/internal/InnerSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js");



function catchError(selector) {
    return function catchErrorOperatorFunction(source) {
        const operator = new CatchOperator(selector);
        const caught = source.lift(operator);
        return (operator.caught = caught);
    };
}
class CatchOperator {
    constructor(selector) {
        this.selector = selector;
    }
    call(subscriber, source) {
        return source.subscribe(new CatchSubscriber(subscriber, this.selector, this.caught));
    }
}
class CatchSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__["OuterSubscriber"] {
    constructor(destination, selector, caught) {
        super(destination);
        this.selector = selector;
        this.caught = caught;
    }
    error(err) {
        if (!this.isStopped) {
            let result;
            try {
                result = this.selector(err, this.caught);
            }
            catch (err2) {
                super.error(err2);
                return;
            }
            this._unsubscribeAndRecycle();
            const innerSubscriber = new _InnerSubscriber__WEBPACK_IMPORTED_MODULE_1__["InnerSubscriber"](this, undefined, undefined);
            this.add(innerSubscriber);
            Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_2__["subscribeToResult"])(this, result, undefined, undefined, innerSubscriber);
        }
    }
}
//# sourceMappingURL=catchError.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/combineAll.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/combineAll.js ***!
  \*********************************************************************/
/*! exports provided: combineAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineAll", function() { return combineAll; });
/* harmony import */ var _observable_combineLatest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/combineLatest */ "./node_modules/rxjs/_esm2015/internal/observable/combineLatest.js");

function combineAll(project) {
    return (source) => source.lift(new _observable_combineLatest__WEBPACK_IMPORTED_MODULE_0__["CombineLatestOperator"](project));
}
//# sourceMappingURL=combineAll.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/combineLatest.js":
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/combineLatest.js ***!
  \************************************************************************/
/*! exports provided: combineLatest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineLatest", function() { return combineLatest; });
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm2015/internal/util/isArray.js");
/* harmony import */ var _observable_combineLatest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/combineLatest */ "./node_modules/rxjs/_esm2015/internal/observable/combineLatest.js");
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/from */ "./node_modules/rxjs/_esm2015/internal/observable/from.js");



const none = {};
function combineLatest(...observables) {
    let project = null;
    if (typeof observables[observables.length - 1] === 'function') {
        project = observables.pop();
    }
    if (observables.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_0__["isArray"])(observables[0])) {
        observables = observables[0].slice();
    }
    return (source) => source.lift.call(Object(_observable_from__WEBPACK_IMPORTED_MODULE_2__["from"])([source, ...observables]), new _observable_combineLatest__WEBPACK_IMPORTED_MODULE_1__["CombineLatestOperator"](project));
}
//# sourceMappingURL=combineLatest.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/concat.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/concat.js ***!
  \*****************************************************************/
/*! exports provided: concat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony import */ var _observable_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/concat */ "./node_modules/rxjs/_esm2015/internal/observable/concat.js");

function concat(...observables) {
    return (source) => source.lift.call(Object(_observable_concat__WEBPACK_IMPORTED_MODULE_0__["concat"])(source, ...observables));
}
//# sourceMappingURL=concat.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/concatAll.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/concatAll.js ***!
  \********************************************************************/
/*! exports provided: concatAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatAll", function() { return concatAll; });
/* harmony import */ var _mergeAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeAll */ "./node_modules/rxjs/_esm2015/internal/operators/mergeAll.js");

function concatAll() {
    return Object(_mergeAll__WEBPACK_IMPORTED_MODULE_0__["mergeAll"])(1);
}
//# sourceMappingURL=concatAll.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/concatMap.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/concatMap.js ***!
  \********************************************************************/
/*! exports provided: concatMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatMap", function() { return concatMap; });
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeMap */ "./node_modules/rxjs/_esm2015/internal/operators/mergeMap.js");

function concatMap(project, resultSelector) {
    return Object(_mergeMap__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(project, resultSelector, 1);
}
//# sourceMappingURL=concatMap.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/concatMapTo.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/concatMapTo.js ***!
  \**********************************************************************/
/*! exports provided: concatMapTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatMapTo", function() { return concatMapTo; });
/* harmony import */ var _concatMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./concatMap */ "./node_modules/rxjs/_esm2015/internal/operators/concatMap.js");

function concatMapTo(innerObservable, resultSelector) {
    return Object(_concatMap__WEBPACK_IMPORTED_MODULE_0__["concatMap"])(() => innerObservable, resultSelector);
}
//# sourceMappingURL=concatMapTo.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/count.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/count.js ***!
  \****************************************************************/
/*! exports provided: count */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "count", function() { return count; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");

function count(predicate) {
    return (source) => source.lift(new CountOperator(predicate, source));
}
class CountOperator {
    constructor(predicate, source) {
        this.predicate = predicate;
        this.source = source;
    }
    call(subscriber, source) {
        return source.subscribe(new CountSubscriber(subscriber, this.predicate, this.source));
    }
}
class CountSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, predicate, source) {
        super(destination);
        this.predicate = predicate;
        this.source = source;
        this.count = 0;
        this.index = 0;
    }
    _next(value) {
        if (this.predicate) {
            this._tryPredicate(value);
        }
        else {
            this.count++;
        }
    }
    _tryPredicate(value) {
        let result;
        try {
            result = this.predicate(value, this.index++, this.source);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this.count++;
        }
    }
    _complete() {
        this.destination.next(this.count);
        this.destination.complete();
    }
}
//# sourceMappingURL=count.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/debounce.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/debounce.js ***!
  \*******************************************************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm2015/internal/OuterSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js");


function debounce(durationSelector) {
    return (source) => source.lift(new DebounceOperator(durationSelector));
}
class DebounceOperator {
    constructor(durationSelector) {
        this.durationSelector = durationSelector;
    }
    call(subscriber, source) {
        return source.subscribe(new DebounceSubscriber(subscriber, this.durationSelector));
    }
}
class DebounceSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__["OuterSubscriber"] {
    constructor(destination, durationSelector) {
        super(destination);
        this.durationSelector = durationSelector;
        this.hasValue = false;
        this.durationSubscription = null;
    }
    _next(value) {
        try {
            const result = this.durationSelector.call(this, value);
            if (result) {
                this._tryNext(value, result);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    }
    _complete() {
        this.emitValue();
        this.destination.complete();
    }
    _tryNext(value, duration) {
        let subscription = this.durationSubscription;
        this.value = value;
        this.hasValue = true;
        if (subscription) {
            subscription.unsubscribe();
            this.remove(subscription);
        }
        subscription = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__["subscribeToResult"])(this, duration);
        if (subscription && !subscription.closed) {
            this.add(this.durationSubscription = subscription);
        }
    }
    notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.emitValue();
    }
    notifyComplete() {
        this.emitValue();
    }
    emitValue() {
        if (this.hasValue) {
            const value = this.value;
            const subscription = this.durationSubscription;
            if (subscription) {
                this.durationSubscription = null;
                subscription.unsubscribe();
                this.remove(subscription);
            }
            this.value = null;
            this.hasValue = false;
            super._next(value);
        }
    }
}
//# sourceMappingURL=debounce.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/debounceTime.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/debounceTime.js ***!
  \***********************************************************************/
/*! exports provided: debounceTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounceTime", function() { return debounceTime; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/_esm2015/internal/scheduler/async.js");


function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"]) {
    return (source) => source.lift(new DebounceTimeOperator(dueTime, scheduler));
}
class DebounceTimeOperator {
    constructor(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    call(subscriber, source) {
        return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    }
}
class DebounceTimeSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, dueTime, scheduler) {
        super(destination);
        this.dueTime = dueTime;
        this.scheduler = scheduler;
        this.debouncedSubscription = null;
        this.lastValue = null;
        this.hasValue = false;
    }
    _next(value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    }
    _complete() {
        this.debouncedNext();
        this.destination.complete();
    }
    debouncedNext() {
        this.clearDebounce();
        if (this.hasValue) {
            const { lastValue } = this;
            this.lastValue = null;
            this.hasValue = false;
            this.destination.next(lastValue);
        }
    }
    clearDebounce() {
        const debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
            this.remove(debouncedSubscription);
            debouncedSubscription.unsubscribe();
            this.debouncedSubscription = null;
        }
    }
}
function dispatchNext(subscriber) {
    subscriber.debouncedNext();
}
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/defaultIfEmpty.js":
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/defaultIfEmpty.js ***!
  \*************************************************************************/
/*! exports provided: defaultIfEmpty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultIfEmpty", function() { return defaultIfEmpty; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");

function defaultIfEmpty(defaultValue = null) {
    return (source) => source.lift(new DefaultIfEmptyOperator(defaultValue));
}
class DefaultIfEmptyOperator {
    constructor(defaultValue) {
        this.defaultValue = defaultValue;
    }
    call(subscriber, source) {
        return source.subscribe(new DefaultIfEmptySubscriber(subscriber, this.defaultValue));
    }
}
class DefaultIfEmptySubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, defaultValue) {
        super(destination);
        this.defaultValue = defaultValue;
        this.isEmpty = true;
    }
    _next(value) {
        this.isEmpty = false;
        this.destination.next(value);
    }
    _complete() {
        if (this.isEmpty) {
            this.destination.next(this.defaultValue);
        }
        this.destination.complete();
    }
}
//# sourceMappingURL=defaultIfEmpty.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/delay.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/delay.js ***!
  \****************************************************************/
/*! exports provided: delay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return delay; });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/_esm2015/internal/scheduler/async.js");
/* harmony import */ var _util_isDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isDate */ "./node_modules/rxjs/_esm2015/internal/util/isDate.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Notification */ "./node_modules/rxjs/_esm2015/internal/Notification.js");




function delay(delay, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__["async"]) {
    const absoluteDelay = Object(_util_isDate__WEBPACK_IMPORTED_MODULE_1__["isDate"])(delay);
    const delayFor = absoluteDelay ? (+delay - scheduler.now()) : Math.abs(delay);
    return (source) => source.lift(new DelayOperator(delayFor, scheduler));
}
class DelayOperator {
    constructor(delay, scheduler) {
        this.delay = delay;
        this.scheduler = scheduler;
    }
    call(subscriber, source) {
        return source.subscribe(new DelaySubscriber(subscriber, this.delay, this.scheduler));
    }
}
class DelaySubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_2__["Subscriber"] {
    constructor(destination, delay, scheduler) {
        super(destination);
        this.delay = delay;
        this.scheduler = scheduler;
        this.queue = [];
        this.active = false;
        this.errored = false;
    }
    static dispatch(state) {
        const source = state.source;
        const queue = source.queue;
        const scheduler = state.scheduler;
        const destination = state.destination;
        while (queue.length > 0 && (queue[0].time - scheduler.now()) <= 0) {
            queue.shift().notification.observe(destination);
        }
        if (queue.length > 0) {
            const delay = Math.max(0, queue[0].time - scheduler.now());
            this.schedule(state, delay);
        }
        else {
            this.unsubscribe();
            source.active = false;
        }
    }
    _schedule(scheduler) {
        this.active = true;
        const destination = this.destination;
        destination.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
            source: this, destination: this.destination, scheduler: scheduler
        }));
    }
    scheduleNotification(notification) {
        if (this.errored === true) {
            return;
        }
        const scheduler = this.scheduler;
        const message = new DelayMessage(scheduler.now() + this.delay, notification);
        this.queue.push(message);
        if (this.active === false) {
            this._schedule(scheduler);
        }
    }
    _next(value) {
        this.scheduleNotification(_Notification__WEBPACK_IMPORTED_MODULE_3__["Notification"].createNext(value));
    }
    _error(err) {
        this.errored = true;
        this.queue = [];
        this.destination.error(err);
        this.unsubscribe();
    }
    _complete() {
        this.scheduleNotification(_Notification__WEBPACK_IMPORTED_MODULE_3__["Notification"].createComplete());
        this.unsubscribe();
    }
}
class DelayMessage {
    constructor(time, notification) {
        this.time = time;
        this.notification = notification;
    }
}
//# sourceMappingURL=delay.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/delayWhen.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/delayWhen.js ***!
  \********************************************************************/
/*! exports provided: delayWhen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delayWhen", function() { return delayWhen; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm2015/internal/OuterSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js");




function delayWhen(delayDurationSelector, subscriptionDelay) {
    if (subscriptionDelay) {
        return (source) => new SubscriptionDelayObservable(source, subscriptionDelay)
            .lift(new DelayWhenOperator(delayDurationSelector));
    }
    return (source) => source.lift(new DelayWhenOperator(delayDurationSelector));
}
class DelayWhenOperator {
    constructor(delayDurationSelector) {
        this.delayDurationSelector = delayDurationSelector;
    }
    call(subscriber, source) {
        return source.subscribe(new DelayWhenSubscriber(subscriber, this.delayDurationSelector));
    }
}
class DelayWhenSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__["OuterSubscriber"] {
    constructor(destination, delayDurationSelector) {
        super(destination);
        this.delayDurationSelector = delayDurationSelector;
        this.completed = false;
        this.delayNotifierSubscriptions = [];
        this.index = 0;
    }
    notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(outerValue);
        this.removeSubscription(innerSub);
        this.tryComplete();
    }
    notifyError(error, innerSub) {
        this._error(error);
    }
    notifyComplete(innerSub) {
        const value = this.removeSubscription(innerSub);
        if (value) {
            this.destination.next(value);
        }
        this.tryComplete();
    }
    _next(value) {
        const index = this.index++;
        try {
            const delayNotifier = this.delayDurationSelector(value, index);
            if (delayNotifier) {
                this.tryDelay(delayNotifier, value);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    }
    _complete() {
        this.completed = true;
        this.tryComplete();
        this.unsubscribe();
    }
    removeSubscription(subscription) {
        subscription.unsubscribe();
        const subscriptionIdx = this.delayNotifierSubscriptions.indexOf(subscription);
        if (subscriptionIdx !== -1) {
            this.delayNotifierSubscriptions.splice(subscriptionIdx, 1);
        }
        return subscription.outerValue;
    }
    tryDelay(delayNotifier, value) {
        const notifierSubscription = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__["subscribeToResult"])(this, delayNotifier, value);
        if (notifierSubscription && !notifierSubscription.closed) {
            const destination = this.destination;
            destination.add(notifierSubscription);
            this.delayNotifierSubscriptions.push(notifierSubscription);
        }
    }
    tryComplete() {
        if (this.completed && this.delayNotifierSubscriptions.length === 0) {
            this.destination.complete();
        }
    }
}
class SubscriptionDelayObservable extends _Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"] {
    constructor(source, subscriptionDelay) {
        super();
        this.source = source;
        this.subscriptionDelay = subscriptionDelay;
    }
    _subscribe(subscriber) {
        this.subscriptionDelay.subscribe(new SubscriptionDelaySubscriber(subscriber, this.source));
    }
}
class SubscriptionDelaySubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(parent, source) {
        super();
        this.parent = parent;
        this.source = source;
        this.sourceSubscribed = false;
    }
    _next(unused) {
        this.subscribeToSource();
    }
    _error(err) {
        this.unsubscribe();
        this.parent.error(err);
    }
    _complete() {
        this.unsubscribe();
        this.subscribeToSource();
    }
    subscribeToSource() {
        if (!this.sourceSubscribed) {
            this.sourceSubscribed = true;
            this.unsubscribe();
            this.source.subscribe(this.parent);
        }
    }
}
//# sourceMappingURL=delayWhen.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/dematerialize.js":
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/dematerialize.js ***!
  \************************************************************************/
/*! exports provided: dematerialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dematerialize", function() { return dematerialize; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");

function dematerialize() {
    return function dematerializeOperatorFunction(source) {
        return source.lift(new DeMaterializeOperator());
    };
}
class DeMaterializeOperator {
    call(subscriber, source) {
        return source.subscribe(new DeMaterializeSubscriber(subscriber));
    }
}
class DeMaterializeSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination) {
        super(destination);
    }
    _next(value) {
        value.observe(this.destination);
    }
}
//# sourceMappingURL=dematerialize.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/distinct.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/distinct.js ***!
  \*******************************************************************/
/*! exports provided: distinct, DistinctSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distinct", function() { return distinct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistinctSubscriber", function() { return DistinctSubscriber; });
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm2015/internal/OuterSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js");


function distinct(keySelector, flushes) {
    return (source) => source.lift(new DistinctOperator(keySelector, flushes));
}
class DistinctOperator {
    constructor(keySelector, flushes) {
        this.keySelector = keySelector;
        this.flushes = flushes;
    }
    call(subscriber, source) {
        return source.subscribe(new DistinctSubscriber(subscriber, this.keySelector, this.flushes));
    }
}
class DistinctSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__["OuterSubscriber"] {
    constructor(destination, keySelector, flushes) {
        super(destination);
        this.keySelector = keySelector;
        this.values = new Set();
        if (flushes) {
            this.add(Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__["subscribeToResult"])(this, flushes));
        }
    }
    notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.values.clear();
    }
    notifyError(error, innerSub) {
        this._error(error);
    }
    _next(value) {
        if (this.keySelector) {
            this._useKeySelector(value);
        }
        else {
            this._finalizeNext(value, value);
        }
    }
    _useKeySelector(value) {
        let key;
        const { destination } = this;
        try {
            key = this.keySelector(value);
        }
        catch (err) {
            destination.error(err);
            return;
        }
        this._finalizeNext(key, value);
    }
    _finalizeNext(key, value) {
        const { values } = this;
        if (!values.has(key)) {
            values.add(key);
            this.destination.next(value);
        }
    }
}
//# sourceMappingURL=distinct.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/distinctUntilChanged.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/distinctUntilChanged.js ***!
  \*******************************************************************************/
/*! exports provided: distinctUntilChanged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distinctUntilChanged", function() { return distinctUntilChanged; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");

function distinctUntilChanged(compare, keySelector) {
    return (source) => source.lift(new DistinctUntilChangedOperator(compare, keySelector));
}
class DistinctUntilChangedOperator {
    constructor(compare, keySelector) {
        this.compare = compare;
        this.keySelector = keySelector;
    }
    call(subscriber, source) {
        return source.subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
    }
}
class DistinctUntilChangedSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, compare, keySelector) {
        super(destination);
        this.keySelector = keySelector;
        this.hasKey = false;
        if (typeof compare === 'function') {
            this.compare = compare;
        }
    }
    compare(x, y) {
        return x === y;
    }
    _next(value) {
        let key;
        try {
            const { keySelector } = this;
            key = keySelector ? keySelector(value) : value;
        }
        catch (err) {
            return this.destination.error(err);
        }
        let result = false;
        if (this.hasKey) {
            try {
                const { compare } = this;
                result = compare(this.key, key);
            }
            catch (err) {
                return this.destination.error(err);
            }
        }
        else {
            this.hasKey = true;
        }
        if (!result) {
            this.key = key;
            this.destination.next(value);
        }
    }
}
//# sourceMappingURL=distinctUntilChanged.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/distinctUntilKeyChanged.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/distinctUntilKeyChanged.js ***!
  \**********************************************************************************/
/*! exports provided: distinctUntilKeyChanged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distinctUntilKeyChanged", function() { return distinctUntilKeyChanged; });
/* harmony import */ var _distinctUntilChanged__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./distinctUntilChanged */ "./node_modules/rxjs/_esm2015/internal/operators/distinctUntilChanged.js");

function distinctUntilKeyChanged(key, compare) {
    return Object(_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])((x, y) => compare ? compare(x[key], y[key]) : x[key] === y[key]);
}
//# sourceMappingURL=distinctUntilKeyChanged.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/elementAt.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/elementAt.js ***!
  \********************************************************************/
/*! exports provided: elementAt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementAt", function() { return elementAt; });
/* harmony import */ var _util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/ArgumentOutOfRangeError */ "./node_modules/rxjs/_esm2015/internal/util/ArgumentOutOfRangeError.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter */ "./node_modules/rxjs/_esm2015/internal/operators/filter.js");
/* harmony import */ var _throwIfEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./throwIfEmpty */ "./node_modules/rxjs/_esm2015/internal/operators/throwIfEmpty.js");
/* harmony import */ var _defaultIfEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultIfEmpty */ "./node_modules/rxjs/_esm2015/internal/operators/defaultIfEmpty.js");
/* harmony import */ var _take__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./take */ "./node_modules/rxjs/_esm2015/internal/operators/take.js");





function elementAt(index, defaultValue) {
    if (index < 0) {
        throw new _util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_0__["ArgumentOutOfRangeError"]();
    }
    const hasDefaultValue = arguments.length >= 2;
    return (source) => source.pipe(Object(_filter__WEBPACK_IMPORTED_MODULE_1__["filter"])((v, i) => i === index), Object(_take__WEBPACK_IMPORTED_MODULE_4__["take"])(1), hasDefaultValue
        ? Object(_defaultIfEmpty__WEBPACK_IMPORTED_MODULE_3__["defaultIfEmpty"])(defaultValue)
        : Object(_throwIfEmpty__WEBPACK_IMPORTED_MODULE_2__["throwIfEmpty"])(() => new _util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_0__["ArgumentOutOfRangeError"]()));
}
//# sourceMappingURL=elementAt.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/endWith.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/endWith.js ***!
  \******************************************************************/
/*! exports provided: endWith */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endWith", function() { return endWith; });
/* harmony import */ var _observable_fromArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/fromArray */ "./node_modules/rxjs/_esm2015/internal/observable/fromArray.js");
/* harmony import */ var _observable_scalar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/scalar */ "./node_modules/rxjs/_esm2015/internal/observable/scalar.js");
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/empty */ "./node_modules/rxjs/_esm2015/internal/observable/empty.js");
/* harmony import */ var _observable_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../observable/concat */ "./node_modules/rxjs/_esm2015/internal/observable/concat.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm2015/internal/util/isScheduler.js");





function endWith(...array) {
    return (source) => {
        let scheduler = array[array.length - 1];
        if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_4__["isScheduler"])(scheduler)) {
            array.pop();
        }
        else {
            scheduler = null;
        }
        const len = array.length;
        if (len === 1 && !scheduler) {
            return Object(_observable_concat__WEBPACK_IMPORTED_MODULE_3__["concat"])(source, Object(_observable_scalar__WEBPACK_IMPORTED_MODULE_1__["scalar"])(array[0]));
        }
        else if (len > 0) {
            return Object(_observable_concat__WEBPACK_IMPORTED_MODULE_3__["concat"])(source, Object(_observable_fromArray__WEBPACK_IMPORTED_MODULE_0__["fromArray"])(array, scheduler));
        }
        else {
            return Object(_observable_concat__WEBPACK_IMPORTED_MODULE_3__["concat"])(source, Object(_observable_empty__WEBPACK_IMPORTED_MODULE_2__["empty"])(scheduler));
        }
    };
}
//# sourceMappingURL=endWith.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/every.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/every.js ***!
  \****************************************************************/
/*! exports provided: every */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "every", function() { return every; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");

function every(predicate, thisArg) {
    return (source) => source.lift(new EveryOperator(predicate, thisArg, source));
}
class EveryOperator {
    constructor(predicate, thisArg, source) {
        this.predicate = predicate;
        this.thisArg = thisArg;
        this.source = source;
    }
    call(observer, source) {
        return source.subscribe(new EverySubscriber(observer, this.predicate, this.thisArg, this.source));
    }
}
class EverySubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, predicate, thisArg, source) {
        super(destination);
        this.predicate = predicate;
        this.thisArg = thisArg;
        this.source = source;
        this.index = 0;
        this.thisArg = thisArg || this;
    }
    notifyComplete(everyValueMatch) {
        this.destination.next(everyValueMatch);
        this.destination.complete();
    }
    _next(value) {
        let result = false;
        try {
            result = this.predicate.call(this.thisArg, value, this.index++, this.source);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (!result) {
            this.notifyComplete(false);
        }
    }
    _complete() {
        this.notifyComplete(true);
    }
}
//# sourceMappingURL=every.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/exhaust.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/exhaust.js ***!
  \******************************************************************/
/*! exports provided: exhaust */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exhaust", function() { return exhaust; });
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm2015/internal/OuterSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js");


function exhaust() {
    return (source) => source.lift(new SwitchFirstOperator());
}
class SwitchFirstOperator {
    call(subscriber, source) {
        return source.subscribe(new SwitchFirstSubscriber(subscriber));
    }
}
class SwitchFirstSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__["OuterSubscriber"] {
    constructor(destination) {
        super(destination);
        this.hasCompleted = false;
        this.hasSubscription = false;
    }
    _next(value) {
        if (!this.hasSubscription) {
            this.hasSubscription = true;
            this.add(Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__["subscribeToResult"])(this, value));
        }
    }
    _complete() {
        this.hasCompleted = true;
        if (!this.hasSubscription) {
            this.destination.complete();
        }
    }
    notifyComplete(innerSub) {
        this.remove(innerSub);
        this.hasSubscription = false;
        if (this.hasCompleted) {
            this.destination.complete();
        }
    }
}
//# sourceMappingURL=exhaust.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/exhaustMap.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/exhaustMap.js ***!
  \*********************************************************************/
/*! exports provided: exhaustMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exhaustMap", function() { return exhaustMap; });
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm2015/internal/OuterSubscriber.js");
/* harmony import */ var _InnerSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../InnerSubscriber */ "./node_modules/rxjs/_esm2015/internal/InnerSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map */ "./node_modules/rxjs/_esm2015/internal/operators/map.js");
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../observable/from */ "./node_modules/rxjs/_esm2015/internal/observable/from.js");





function exhaustMap(project, resultSelector) {
    if (resultSelector) {
        return (source) => source.pipe(exhaustMap((a, i) => Object(_observable_from__WEBPACK_IMPORTED_MODULE_4__["from"])(project(a, i)).pipe(Object(_map__WEBPACK_IMPORTED_MODULE_3__["map"])((b, ii) => resultSelector(a, b, i, ii)))));
    }
    return (source) => source.lift(new ExhaustMapOperator(project));
}
class ExhaustMapOperator {
    constructor(project) {
        this.project = project;
    }
    call(subscriber, source) {
        return source.subscribe(new ExhaustMapSubscriber(subscriber, this.project));
    }
}
class ExhaustMapSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__["OuterSubscriber"] {
    constructor(destination, project) {
        super(destination);
        this.project = project;
        this.hasSubscription = false;
        this.hasCompleted = false;
        this.index = 0;
    }
    _next(value) {
        if (!this.hasSubscription) {
            this.tryNext(value);
        }
    }
    tryNext(value) {
        let result;
        const index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.hasSubscription = true;
        this._innerSub(result, value, index);
    }
    _innerSub(result, value, index) {
        const innerSubscriber = new _InnerSubscriber__WEBPACK_IMPORTED_MODULE_1__["InnerSubscriber"](this, undefined, undefined);
        const destination = this.destination;
        destination.add(innerSubscriber);
        Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_2__["subscribeToResult"])(this, result, value, index, innerSubscriber);
    }
    _complete() {
        this.hasCompleted = true;
        if (!this.hasSubscription) {
            this.destination.complete();
        }
        this.unsubscribe();
    }
    notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    }
    notifyError(err) {
        this.destination.error(err);
    }
    notifyComplete(innerSub) {
        const destination = this.destination;
        destination.remove(innerSub);
        this.hasSubscription = false;
        if (this.hasCompleted) {
            this.destination.complete();
        }
    }
}
//# sourceMappingURL=exhaustMap.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/expand.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/expand.js ***!
  \*****************************************************************/
/*! exports provided: expand, ExpandOperator, ExpandSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expand", function() { return expand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandOperator", function() { return ExpandOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandSubscriber", function() { return ExpandSubscriber; });
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm2015/internal/OuterSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js");


function expand(project, concurrent = Number.POSITIVE_INFINITY, scheduler = undefined) {
    concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
    return (source) => source.lift(new ExpandOperator(project, concurrent, scheduler));
}
class ExpandOperator {
    constructor(project, concurrent, scheduler) {
        this.project = project;
        this.concurrent = concurrent;
        this.scheduler = scheduler;
    }
    call(subscriber, source) {
        return source.subscribe(new ExpandSubscriber(subscriber, this.project, this.concurrent, this.scheduler));
    }
}
class ExpandSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__["OuterSubscriber"] {
    constructor(destination, project, concurrent, scheduler) {
        super(destination);
        this.project = project;
        this.concurrent = concurrent;
        this.scheduler = scheduler;
        this.index = 0;
        this.active = 0;
        this.hasCompleted = false;
        if (concurrent < Number.POSITIVE_INFINITY) {
            this.buffer = [];
        }
    }
    static dispatch(arg) {
        const { subscriber, result, value, index } = arg;
        subscriber.subscribeToProjection(result, value, index);
    }
    _next(value) {
        const destination = this.destination;
        if (destination.closed) {
            this._complete();
            return;
        }
        const index = this.index++;
        if (this.active < this.concurrent) {
            destination.next(value);
            try {
                const { project } = this;
                const result = project(value, index);
                if (!this.scheduler) {
                    this.subscribeToProjection(result, value, index);
                }
                else {
                    const state = { subscriber: this, result, value, index };
                    const destination = this.destination;
                    destination.add(this.scheduler.schedule(ExpandSubscriber.dispatch, 0, state));
                }
            }
            catch (e) {
                destination.error(e);
            }
        }
        else {
            this.buffer.push(value);
        }
    }
    subscribeToProjection(result, value, index) {
        this.active++;
        const destination = this.destination;
        destination.add(Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__["subscribeToResult"])(this, result, value, index));
    }
    _complete() {
        this.hasCompleted = true;
        if (this.hasCompleted && this.active === 0) {
            this.destination.complete();
        }
        this.unsubscribe();
    }
    notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this._next(innerValue);
    }
    notifyComplete(innerSub) {
        const buffer = this.buffer;
        const destination = this.destination;
        destination.remove(innerSub);
        this.active--;
        if (buffer && buffer.length > 0) {
            this._next(buffer.shift());
        }
        if (this.hasCompleted && this.active === 0) {
            this.destination.complete();
        }
    }
}
//# sourceMappingURL=expand.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/filter.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/filter.js ***!
  \*****************************************************************/
/*! exports provided: filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");

function filter(predicate, thisArg) {
    return function filterOperatorFunction(source) {
        return source.lift(new FilterOperator(predicate, thisArg));
    };
}
class FilterOperator {
    constructor(predicate, thisArg) {
        this.predicate = predicate;
        this.thisArg = thisArg;
    }
    call(subscriber, source) {
        return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
    }
}
class FilterSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, predicate, thisArg) {
        super(destination);
        this.predicate = predicate;
        this.thisArg = thisArg;
        this.count = 0;
    }
    _next(value) {
        let result;
        try {
            result = this.predicate.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this.destination.next(value);
        }
    }
}
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/finalize.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/finalize.js ***!
  \*******************************************************************/
/*! exports provided: finalize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finalize", function() { return finalize; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm2015/internal/Subscription.js");


function finalize(callback) {
    return (source) => source.lift(new FinallyOperator(callback));
}
class FinallyOperator {
    constructor(callback) {
        this.callback = callback;
    }
    call(subscriber, source) {
        return source.subscribe(new FinallySubscriber(subscriber, this.callback));
    }
}
class FinallySubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, callback) {
        super(destination);
        this.add(new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"](callback));
    }
}
//# sourceMappingURL=finalize.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/find.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/find.js ***!
  \***************************************************************/
/*! exports provided: find, FindValueOperator, FindValueSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindValueOperator", function() { return FindValueOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindValueSubscriber", function() { return FindValueSubscriber; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");

function find(predicate, thisArg) {
    if (typeof predicate !== 'function') {
        throw new TypeError('predicate is not a function');
    }
    return (source) => source.lift(new FindValueOperator(predicate, source, false, thisArg));
}
class FindValueOperator {
    constructor(predicate, source, yieldIndex, thisArg) {
        this.predicate = predicate;
        this.source = source;
        this.yieldIndex = yieldIndex;
        this.thisArg = thisArg;
    }
    call(observer, source) {
        return source.subscribe(new FindValueSubscriber(observer, this.predicate, this.source, this.yieldIndex, this.thisArg));
    }
}
class FindValueSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, predicate, source, yieldIndex, thisArg) {
        super(destination);
        this.predicate = predicate;
        this.source = source;
        this.yieldIndex = yieldIndex;
        this.thisArg = thisArg;
        this.index = 0;
    }
    notifyComplete(value) {
        const destination = this.destination;
        destination.next(value);
        destination.complete();
        this.unsubscribe();
    }
    _next(value) {
        const { predicate, thisArg } = this;
        const index = this.index++;
        try {
            const result = predicate.call(thisArg || this, value, index, this.source);
            if (result) {
                this.notifyComplete(this.yieldIndex ? index : value);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    }
    _complete() {
        this.notifyComplete(this.yieldIndex ? -1 : undefined);
    }
}
//# sourceMappingURL=find.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/findIndex.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/findIndex.js ***!
  \********************************************************************/
/*! exports provided: findIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return findIndex; });
/* harmony import */ var _operators_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../operators/find */ "./node_modules/rxjs/_esm2015/internal/operators/find.js");

function findIndex(predicate, thisArg) {
    return (source) => source.lift(new _operators_find__WEBPACK_IMPORTED_MODULE_0__["FindValueOperator"](predicate, source, true, thisArg));
}
//# sourceMappingURL=findIndex.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/first.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/first.js ***!
  \****************************************************************/
/*! exports provided: first */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "first", function() { return first; });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/EmptyError */ "./node_modules/rxjs/_esm2015/internal/util/EmptyError.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter */ "./node_modules/rxjs/_esm2015/internal/operators/filter.js");
/* harmony import */ var _take__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./take */ "./node_modules/rxjs/_esm2015/internal/operators/take.js");
/* harmony import */ var _defaultIfEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultIfEmpty */ "./node_modules/rxjs/_esm2015/internal/operators/defaultIfEmpty.js");
/* harmony import */ var _throwIfEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./throwIfEmpty */ "./node_modules/rxjs/_esm2015/internal/operators/throwIfEmpty.js");
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/identity */ "./node_modules/rxjs/_esm2015/internal/util/identity.js");






function first(predicate, defaultValue) {
    const hasDefaultValue = arguments.length >= 2;
    return (source) => source.pipe(predicate ? Object(_filter__WEBPACK_IMPORTED_MODULE_1__["filter"])((v, i) => predicate(v, i, source)) : _util_identity__WEBPACK_IMPORTED_MODULE_5__["identity"], Object(_take__WEBPACK_IMPORTED_MODULE_2__["take"])(1), hasDefaultValue ? Object(_defaultIfEmpty__WEBPACK_IMPORTED_MODULE_3__["defaultIfEmpty"])(defaultValue) : Object(_throwIfEmpty__WEBPACK_IMPORTED_MODULE_4__["throwIfEmpty"])(() => new _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__["EmptyError"]()));
}
//# sourceMappingURL=first.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/groupBy.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/groupBy.js ***!
  \******************************************************************/
/*! exports provided: groupBy, GroupedObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupedObservable", function() { return GroupedObservable; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm2015/internal/Subscription.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Subject */ "./node_modules/rxjs/_esm2015/internal/Subject.js");




function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
    return (source) => source.lift(new GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector));
}
class GroupByOperator {
    constructor(keySelector, elementSelector, durationSelector, subjectSelector) {
        this.keySelector = keySelector;
        this.elementSelector = elementSelector;
        this.durationSelector = durationSelector;
        this.subjectSelector = subjectSelector;
    }
    call(subscriber, source) {
        return source.subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
    }
}
class GroupBySubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
        super(destination);
        this.keySelector = keySelector;
        this.elementSelector = elementSelector;
        this.durationSelector = durationSelector;
        this.subjectSelector = subjectSelector;
        this.groups = null;
        this.attemptedToUnsubscribe = false;
        this.count = 0;
    }
    _next(value) {
        let key;
        try {
            key = this.keySelector(value);
        }
        catch (err) {
            this.error(err);
            return;
        }
        this._group(value, key);
    }
    _group(value, key) {
        let groups = this.groups;
        if (!groups) {
            groups = this.groups = new Map();
        }
        let group = groups.get(key);
        let element;
        if (this.elementSelector) {
            try {
                element = this.elementSelector(value);
            }
            catch (err) {
                this.error(err);
            }
        }
        else {
            element = value;
        }
        if (!group) {
            group = (this.subjectSelector ? this.subjectSelector() : new _Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]());
            groups.set(key, group);
            const groupedObservable = new GroupedObservable(key, group, this);
            this.destination.next(groupedObservable);
            if (this.durationSelector) {
                let duration;
                try {
                    duration = this.durationSelector(new GroupedObservable(key, group));
                }
                catch (err) {
                    this.error(err);
                    return;
                }
                this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
            }
        }
        if (!group.closed) {
            group.next(element);
        }
    }
    _error(err) {
        const groups = this.groups;
        if (groups) {
            groups.forEach((group, key) => {
                group.error(err);
            });
            groups.clear();
        }
        this.destination.error(err);
    }
    _complete() {
        const groups = this.groups;
        if (groups) {
            groups.forEach((group, key) => {
                group.complete();
            });
            groups.clear();
        }
        this.destination.complete();
    }
    removeGroup(key) {
        this.groups.delete(key);
    }
    unsubscribe() {
        if (!this.closed) {
            this.attemptedToUnsubscribe = true;
            if (this.count === 0) {
                super.unsubscribe();
            }
        }
    }
}
class GroupDurationSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(key, group, parent) {
        super(group);
        this.key = key;
        this.group = group;
        this.parent = parent;
    }
    _next(value) {
        this.complete();
    }
    _unsubscribe() {
        const { parent, key } = this;
        this.key = this.parent = null;
        if (parent) {
            parent.removeGroup(key);
        }
    }
}
class GroupedObservable extends _Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"] {
    constructor(key, groupSubject, refCountSubscription) {
        super();
        this.key = key;
        this.groupSubject = groupSubject;
        this.refCountSubscription = refCountSubscription;
    }
    _subscribe(subscriber) {
        const subscription = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        const { refCountSubscription, groupSubject } = this;
        if (refCountSubscription && !refCountSubscription.closed) {
            subscription.add(new InnerRefCountSubscription(refCountSubscription));
        }
        subscription.add(groupSubject.subscribe(subscriber));
        return subscription;
    }
}
class InnerRefCountSubscription extends _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"] {
    constructor(parent) {
        super();
        this.parent = parent;
        parent.count++;
    }
    unsubscribe() {
        const parent = this.parent;
        if (!parent.closed && !this.closed) {
            super.unsubscribe();
            parent.count -= 1;
            if (parent.count === 0 && parent.attemptedToUnsubscribe) {
                parent.unsubscribe();
            }
        }
    }
}
//# sourceMappingURL=groupBy.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/ignoreElements.js":
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/ignoreElements.js ***!
  \*************************************************************************/
/*! exports provided: ignoreElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ignoreElements", function() { return ignoreElements; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");

function ignoreElements() {
    return function ignoreElementsOperatorFunction(source) {
        return source.lift(new IgnoreElementsOperator());
    };
}
class IgnoreElementsOperator {
    call(subscriber, source) {
        return source.subscribe(new IgnoreElementsSubscriber(subscriber));
    }
}
class IgnoreElementsSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    _next(unused) {
    }
}
//# sourceMappingURL=ignoreElements.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/isEmpty.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/isEmpty.js ***!
  \******************************************************************/
/*! exports provided: isEmpty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");

function isEmpty() {
    return (source) => source.lift(new IsEmptyOperator());
}
class IsEmptyOperator {
    call(observer, source) {
        return source.subscribe(new IsEmptySubscriber(observer));
    }
}
class IsEmptySubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination) {
        super(destination);
    }
    notifyComplete(isEmpty) {
        const destination = this.destination;
        destination.next(isEmpty);
        destination.complete();
    }
    _next(value) {
        this.notifyComplete(false);
    }
    _complete() {
        this.notifyComplete(true);
    }
}
//# sourceMappingURL=isEmpty.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/last.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/last.js ***!
  \***************************************************************/
/*! exports provided: last */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "last", function() { return last; });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/EmptyError */ "./node_modules/rxjs/_esm2015/internal/util/EmptyError.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter */ "./node_modules/rxjs/_esm2015/internal/operators/filter.js");
/* harmony import */ var _takeLast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./takeLast */ "./node_modules/rxjs/_esm2015/internal/operators/takeLast.js");
/* harmony import */ var _throwIfEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./throwIfEmpty */ "./node_modules/rxjs/_esm2015/internal/operators/throwIfEmpty.js");
/* harmony import */ var _defaultIfEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defaultIfEmpty */ "./node_modules/rxjs/_esm2015/internal/operators/defaultIfEmpty.js");
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/identity */ "./node_modules/rxjs/_esm2015/internal/util/identity.js");






function last(predicate, defaultValue) {
    const hasDefaultValue = arguments.length >= 2;
    return (source) => source.pipe(predicate ? Object(_filter__WEBPACK_IMPORTED_MODULE_1__["filter"])((v, i) => predicate(v, i, source)) : _util_identity__WEBPACK_IMPORTED_MODULE_5__["identity"], Object(_takeLast__WEBPACK_IMPORTED_MODULE_2__["takeLast"])(1), hasDefaultValue ? Object(_defaultIfEmpty__WEBPACK_IMPORTED_MODULE_4__["defaultIfEmpty"])(defaultValue) : Object(_throwIfEmpty__WEBPACK_IMPORTED_MODULE_3__["throwIfEmpty"])(() => new _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__["EmptyError"]()));
}
//# sourceMappingURL=last.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/map.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/map.js ***!
  \**************************************************************/
/*! exports provided: map, MapOperator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapOperator", function() { return MapOperator; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");

function map(project, thisArg) {
    return function mapOperation(source) {
        if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }
        return source.lift(new MapOperator(project, thisArg));
    };
}
class MapOperator {
    constructor(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    call(subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    }
}
class MapSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, project, thisArg) {
        super(destination);
        this.project = project;
        this.count = 0;
        this.thisArg = thisArg || this;
    }
    _next(value) {
        let result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    }
}
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/mapTo.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/mapTo.js ***!
  \****************************************************************/
/*! exports provided: mapTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapTo", function() { return mapTo; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");

function mapTo(value) {
    return (source) => source.lift(new MapToOperator(value));
}
class MapToOperator {
    constructor(value) {
        this.value = value;
    }
    call(subscriber, source) {
        return source.subscribe(new MapToSubscriber(subscriber, this.value));
    }
}
class MapToSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, value) {
        super(destination);
        this.value = value;
    }
    _next(x) {
        this.destination.next(this.value);
    }
}
//# sourceMappingURL=mapTo.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/materialize.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/materialize.js ***!
  \**********************************************************************/
/*! exports provided: materialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "materialize", function() { return materialize; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Notification */ "./node_modules/rxjs/_esm2015/internal/Notification.js");


function materialize() {
    return function materializeOperatorFunction(source) {
        return source.lift(new MaterializeOperator());
    };
}
class MaterializeOperator {
    call(subscriber, source) {
        return source.subscribe(new MaterializeSubscriber(subscriber));
    }
}
class MaterializeSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination) {
        super(destination);
    }
    _next(value) {
        this.destination.next(_Notification__WEBPACK_IMPORTED_MODULE_1__["Notification"].createNext(value));
    }
    _error(err) {
        const destination = this.destination;
        destination.next(_Notification__WEBPACK_IMPORTED_MODULE_1__["Notification"].createError(err));
        destination.complete();
    }
    _complete() {
        const destination = this.destination;
        destination.next(_Notification__WEBPACK_IMPORTED_MODULE_1__["Notification"].createComplete());
        destination.complete();
    }
}
//# sourceMappingURL=materialize.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/max.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/max.js ***!
  \**************************************************************/
/*! exports provided: max */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reduce */ "./node_modules/rxjs/_esm2015/internal/operators/reduce.js");

function max(comparer) {
    const max = (typeof comparer === 'function')
        ? (x, y) => comparer(x, y) > 0 ? x : y
        : (x, y) => x > y ? x : y;
    return Object(_reduce__WEBPACK_IMPORTED_MODULE_0__["reduce"])(max);
}
//# sourceMappingURL=max.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/merge.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/merge.js ***!
  \****************************************************************/
/*! exports provided: merge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony import */ var _observable_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/merge */ "./node_modules/rxjs/_esm2015/internal/observable/merge.js");

function merge(...observables) {
    return (source) => source.lift.call(Object(_observable_merge__WEBPACK_IMPORTED_MODULE_0__["merge"])(source, ...observables));
}
//# sourceMappingURL=merge.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/mergeAll.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/mergeAll.js ***!
  \*******************************************************************/
/*! exports provided: mergeAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeAll", function() { return mergeAll; });
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeMap */ "./node_modules/rxjs/_esm2015/internal/operators/mergeMap.js");
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/identity */ "./node_modules/rxjs/_esm2015/internal/util/identity.js");


function mergeAll(concurrent = Number.POSITIVE_INFINITY) {
    return Object(_mergeMap__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_util_identity__WEBPACK_IMPORTED_MODULE_1__["identity"], concurrent);
}
//# sourceMappingURL=mergeAll.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/mergeMap.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/mergeMap.js ***!
  \*******************************************************************/
/*! exports provided: mergeMap, MergeMapOperator, MergeMapSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeMap", function() { return mergeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergeMapOperator", function() { return MergeMapOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergeMapSubscriber", function() { return MergeMapSubscriber; });
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm2015/internal/OuterSubscriber.js");
/* harmony import */ var _InnerSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../InnerSubscriber */ "./node_modules/rxjs/_esm2015/internal/InnerSubscriber.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map */ "./node_modules/rxjs/_esm2015/internal/operators/map.js");
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../observable/from */ "./node_modules/rxjs/_esm2015/internal/observable/from.js");





function mergeMap(project, resultSelector, concurrent = Number.POSITIVE_INFINITY) {
    if (typeof resultSelector === 'function') {
        return (source) => source.pipe(mergeMap((a, i) => Object(_observable_from__WEBPACK_IMPORTED_MODULE_4__["from"])(project(a, i)).pipe(Object(_map__WEBPACK_IMPORTED_MODULE_3__["map"])((b, ii) => resultSelector(a, b, i, ii))), concurrent));
    }
    else if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return (source) => source.lift(new MergeMapOperator(project, concurrent));
}
class MergeMapOperator {
    constructor(project, concurrent = Number.POSITIVE_INFINITY) {
        this.project = project;
        this.concurrent = concurrent;
    }
    call(observer, source) {
        return source.subscribe(new MergeMapSubscriber(observer, this.project, this.concurrent));
    }
}
class MergeMapSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_1__["OuterSubscriber"] {
    constructor(destination, project, concurrent = Number.POSITIVE_INFINITY) {
        super(destination);
        this.project = project;
        this.concurrent = concurrent;
        this.hasCompleted = false;
        this.buffer = [];
        this.active = 0;
        this.index = 0;
    }
    _next(value) {
        if (this.active < this.concurrent) {
            this._tryNext(value);
        }
        else {
            this.buffer.push(value);
        }
    }
    _tryNext(value) {
        let result;
        const index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.active++;
        this._innerSub(result, value, index);
    }
    _innerSub(ish, value, index) {
        const innerSubscriber = new _InnerSubscriber__WEBPACK_IMPORTED_MODULE_2__["InnerSubscriber"](this, undefined, undefined);
        const destination = this.destination;
        destination.add(innerSubscriber);
        Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_0__["subscribeToResult"])(this, ish, value, index, innerSubscriber);
    }
    _complete() {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            this.destination.complete();
        }
        this.unsubscribe();
    }
    notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    }
    notifyComplete(innerSub) {
        const buffer = this.buffer;
        this.remove(innerSub);
        this.active--;
        if (buffer.length > 0) {
            this._next(buffer.shift());
        }
        else if (this.active === 0 && this.hasCompleted) {
            this.destination.complete();
        }
    }
}
//# sourceMappingURL=mergeMap.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/mergeMapTo.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/mergeMapTo.js ***!
  \*********************************************************************/
/*! exports provided: mergeMapTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeMapTo", function() { return mergeMapTo; });
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeMap */ "./node_modules/rxjs/_esm2015/internal/operators/mergeMap.js");

function mergeMapTo(innerObservable, resultSelector, concurrent = Number.POSITIVE_INFINITY) {
    if (typeof resultSelector === 'function') {
        return Object(_mergeMap__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(() => innerObservable, resultSelector, concurrent);
    }
    if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return Object(_mergeMap__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(() => innerObservable, concurrent);
}
//# sourceMappingURL=mergeMapTo.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/mergeScan.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/mergeScan.js ***!
  \********************************************************************/
/*! exports provided: mergeScan, MergeScanOperator, MergeScanSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeScan", function() { return mergeScan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergeScanOperator", function() { return MergeScanOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergeScanSubscriber", function() { return MergeScanSubscriber; });
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm2015/internal/OuterSubscriber.js");
/* harmony import */ var _InnerSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../InnerSubscriber */ "./node_modules/rxjs/_esm2015/internal/InnerSubscriber.js");



function mergeScan(accumulator, seed, concurrent = Number.POSITIVE_INFINITY) {
    return (source) => source.lift(new MergeScanOperator(accumulator, seed, concurrent));
}
class MergeScanOperator {
    constructor(accumulator, seed, concurrent) {
        this.accumulator = accumulator;
        this.seed = seed;
        this.concurrent = concurrent;
    }
    call(subscriber, source) {
        return source.subscribe(new MergeScanSubscriber(subscriber, this.accumulator, this.seed, this.concurrent));
    }
}
class MergeScanSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_1__["OuterSubscriber"] {
    constructor(destination, accumulator, acc, concurrent) {
        super(destination);
        this.accumulator = accumulator;
        this.acc = acc;
        this.concurrent = concurrent;
        this.hasValue = false;
        this.hasCompleted = false;
        this.buffer = [];
        this.active = 0;
        this.index = 0;
    }
    _next(value) {
        if (this.active < this.concurrent) {
            const index = this.index++;
            const destination = this.destination;
            let ish;
            try {
                const { accumulator } = this;
                ish = accumulator(this.acc, value, index);
            }
            catch (e) {
                return destination.error(e);
            }
            this.active++;
            this._innerSub(ish, value, index);
        }
        else {
            this.buffer.push(value);
        }
    }
    _innerSub(ish, value, index) {
        const innerSubscriber = new _InnerSubscriber__WEBPACK_IMPORTED_MODULE_2__["InnerSubscriber"](this, undefined, undefined);
        const destination = this.destination;
        destination.add(innerSubscriber);
        Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_0__["subscribeToResult"])(this, ish, value, index, innerSubscriber);
    }
    _complete() {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            if (this.hasValue === false) {
                this.destination.next(this.acc);
            }
            this.destination.complete();
        }
        this.unsubscribe();
    }
    notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        const { destination } = this;
        this.acc = innerValue;
        this.hasValue = true;
        destination.next(innerValue);
    }
    notifyComplete(innerSub) {
        const buffer = this.buffer;
        const destination = this.destination;
        destination.remove(innerSub);
        this.active--;
        if (buffer.length > 0) {
            this._next(buffer.shift());
        }
        else if (this.active === 0 && this.hasCompleted) {
            if (this.hasValue === false) {
                this.destination.next(this.acc);
            }
            this.destination.complete();
        }
    }
}
//# sourceMappingURL=mergeScan.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/min.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/min.js ***!
  \**************************************************************/
/*! exports provided: min */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reduce */ "./node_modules/rxjs/_esm2015/internal/operators/reduce.js");

function min(comparer) {
    const min = (typeof comparer === 'function')
        ? (x, y) => comparer(x, y) < 0 ? x : y
        : (x, y) => x < y ? x : y;
    return Object(_reduce__WEBPACK_IMPORTED_MODULE_0__["reduce"])(min);
}
//# sourceMappingURL=min.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/multicast.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/multicast.js ***!
  \********************************************************************/
/*! exports provided: multicast, MulticastOperator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multicast", function() { return multicast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MulticastOperator", function() { return MulticastOperator; });
/* harmony import */ var _observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/ConnectableObservable */ "./node_modules/rxjs/_esm2015/internal/observable/ConnectableObservable.js");

function multicast(subjectOrSubjectFactory, selector) {
    return function multicastOperatorFunction(source) {
        let subjectFactory;
        if (typeof subjectOrSubjectFactory === 'function') {
            subjectFactory = subjectOrSubjectFactory;
        }
        else {
            subjectFactory = function subjectFactory() {
                return subjectOrSubjectFactory;
            };
        }
        if (typeof selector === 'function') {
            return source.lift(new MulticastOperator(subjectFactory, selector));
        }
        const connectable = Object.create(source, _observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_0__["connectableObservableDescriptor"]);
        connectable.source = source;
        connectable.subjectFactory = subjectFactory;
        return connectable;
    };
}
class MulticastOperator {
    constructor(subjectFactory, selector) {
        this.subjectFactory = subjectFactory;
        this.selector = selector;
    }
    call(subscriber, source) {
        const { selector } = this;
        const subject = this.subjectFactory();
        const subscription = selector(subject).subscribe(subscriber);
        subscription.add(source.subscribe(subject));
        return subscription;
    }
}
//# sourceMappingURL=multicast.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/observeOn.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/observeOn.js ***!
  \********************************************************************/
/*! exports provided: observeOn, ObserveOnOperator, ObserveOnSubscriber, ObserveOnMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observeOn", function() { return observeOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserveOnOperator", function() { return ObserveOnOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserveOnSubscriber", function() { return ObserveOnSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserveOnMessage", function() { return ObserveOnMessage; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Notification */ "./node_modules/rxjs/_esm2015/internal/Notification.js");


function observeOn(scheduler, delay = 0) {
    return function observeOnOperatorFunction(source) {
        return source.lift(new ObserveOnOperator(scheduler, delay));
    };
}
class ObserveOnOperator {
    constructor(scheduler, delay = 0) {
        this.scheduler = scheduler;
        this.delay = delay;
    }
    call(subscriber, source) {
        return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
    }
}
class ObserveOnSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, scheduler, delay = 0) {
        super(destination);
        this.scheduler = scheduler;
        this.delay = delay;
    }
    static dispatch(arg) {
        const { notification, destination } = arg;
        notification.observe(destination);
        this.unsubscribe();
    }
    scheduleMessage(notification) {
        const destination = this.destination;
        destination.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
    }
    _next(value) {
        this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_1__["Notification"].createNext(value));
    }
    _error(err) {
        this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_1__["Notification"].createError(err));
        this.unsubscribe();
    }
    _complete() {
        this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_1__["Notification"].createComplete());
        this.unsubscribe();
    }
}
class ObserveOnMessage {
    constructor(notification, destination) {
        this.notification = notification;
        this.destination = destination;
    }
}
//# sourceMappingURL=observeOn.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/onErrorResumeNext.js":
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/onErrorResumeNext.js ***!
  \****************************************************************************/
/*! exports provided: onErrorResumeNext, onErrorResumeNextStatic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onErrorResumeNext", function() { return onErrorResumeNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onErrorResumeNextStatic", function() { return onErrorResumeNextStatic; });
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/from */ "./node_modules/rxjs/_esm2015/internal/observable/from.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm2015/internal/util/isArray.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm2015/internal/OuterSubscriber.js");
/* harmony import */ var _InnerSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../InnerSubscriber */ "./node_modules/rxjs/_esm2015/internal/InnerSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js");





function onErrorResumeNext(...nextSources) {
    if (nextSources.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(nextSources[0])) {
        nextSources = nextSources[0];
    }
    return (source) => source.lift(new OnErrorResumeNextOperator(nextSources));
}
function onErrorResumeNextStatic(...nextSources) {
    let source = null;
    if (nextSources.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(nextSources[0])) {
        nextSources = nextSources[0];
    }
    source = nextSources.shift();
    return Object(_observable_from__WEBPACK_IMPORTED_MODULE_0__["from"])(source, null).lift(new OnErrorResumeNextOperator(nextSources));
}
class OnErrorResumeNextOperator {
    constructor(nextSources) {
        this.nextSources = nextSources;
    }
    call(subscriber, source) {
        return source.subscribe(new OnErrorResumeNextSubscriber(subscriber, this.nextSources));
    }
}
class OnErrorResumeNextSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__["OuterSubscriber"] {
    constructor(destination, nextSources) {
        super(destination);
        this.destination = destination;
        this.nextSources = nextSources;
    }
    notifyError(error, innerSub) {
        this.subscribeToNextSource();
    }
    notifyComplete(innerSub) {
        this.subscribeToNextSource();
    }
    _error(err) {
        this.subscribeToNextSource();
        this.unsubscribe();
    }
    _complete() {
        this.subscribeToNextSource();
        this.unsubscribe();
    }
    subscribeToNextSource() {
        const next = this.nextSources.shift();
        if (!!next) {
            const innerSubscriber = new _InnerSubscriber__WEBPACK_IMPORTED_MODULE_3__["InnerSubscriber"](this, undefined, undefined);
            const destination = this.destination;
            destination.add(innerSubscriber);
            Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_4__["subscribeToResult"])(this, next, undefined, undefined, innerSubscriber);
        }
        else {
            this.destination.complete();
        }
    }
}
//# sourceMappingURL=onErrorResumeNext.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/pairwise.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/pairwise.js ***!
  \*******************************************************************/
/*! exports provided: pairwise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pairwise", function() { return pairwise; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");

function pairwise() {
    return (source) => source.lift(new PairwiseOperator());
}
class PairwiseOperator {
    call(subscriber, source) {
        return source.subscribe(new PairwiseSubscriber(subscriber));
    }
}
class PairwiseSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination) {
        super(destination);
        this.hasPrev = false;
    }
    _next(value) {
        if (this.hasPrev) {
            this.destination.next([this.prev, value]);
        }
        else {
            this.hasPrev = true;
        }
        this.prev = value;
    }
}
//# sourceMappingURL=pairwise.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/partition.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/partition.js ***!
  \********************************************************************/
/*! exports provided: partition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return partition; });
/* harmony import */ var _util_not__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/not */ "./node_modules/rxjs/_esm2015/internal/util/not.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter */ "./node_modules/rxjs/_esm2015/internal/operators/filter.js");


function partition(predicate, thisArg) {
    return (source) => [
        Object(_filter__WEBPACK_IMPORTED_MODULE_1__["filter"])(predicate, thisArg)(source),
        Object(_filter__WEBPACK_IMPORTED_MODULE_1__["filter"])(Object(_util_not__WEBPACK_IMPORTED_MODULE_0__["not"])(predicate, thisArg))(source)
    ];
}
//# sourceMappingURL=partition.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/pluck.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/pluck.js ***!
  \****************************************************************/
/*! exports provided: pluck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pluck", function() { return pluck; });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ "./node_modules/rxjs/_esm2015/internal/operators/map.js");

function pluck(...properties) {
    const length = properties.length;
    if (length === 0) {
        throw new Error('list of properties cannot be empty.');
    }
    return (source) => Object(_map__WEBPACK_IMPORTED_MODULE_0__["map"])(plucker(properties, length))(source);
}
function plucker(props, length) {
    const mapper = (x) => {
        let currentProp = x;
        for (let i = 0; i < length; i++) {
            const p = currentProp[props[i]];
            if (typeof p !== 'undefined') {
                currentProp = p;
            }
            else {
                return undefined;
            }
        }
        return currentProp;
    };
    return mapper;
}
//# sourceMappingURL=pluck.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/publish.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/publish.js ***!
  \******************************************************************/
/*! exports provided: publish */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publish", function() { return publish; });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subject */ "./node_modules/rxjs/_esm2015/internal/Subject.js");
/* harmony import */ var _multicast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multicast */ "./node_modules/rxjs/_esm2015/internal/operators/multicast.js");


function publish(selector) {
    return selector ?
        Object(_multicast__WEBPACK_IMPORTED_MODULE_1__["multicast"])(() => new _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"](), selector) :
        Object(_multicast__WEBPACK_IMPORTED_MODULE_1__["multicast"])(new _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]());
}
//# sourceMappingURL=publish.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/publishBehavior.js":
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/publishBehavior.js ***!
  \**************************************************************************/
/*! exports provided: publishBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publishBehavior", function() { return publishBehavior; });
/* harmony import */ var _BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BehaviorSubject */ "./node_modules/rxjs/_esm2015/internal/BehaviorSubject.js");
/* harmony import */ var _multicast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multicast */ "./node_modules/rxjs/_esm2015/internal/operators/multicast.js");


function publishBehavior(value) {
    return (source) => Object(_multicast__WEBPACK_IMPORTED_MODULE_1__["multicast"])(new _BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](value))(source);
}
//# sourceMappingURL=publishBehavior.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/publishLast.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/publishLast.js ***!
  \**********************************************************************/
/*! exports provided: publishLast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publishLast", function() { return publishLast; });
/* harmony import */ var _AsyncSubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AsyncSubject */ "./node_modules/rxjs/_esm2015/internal/AsyncSubject.js");
/* harmony import */ var _multicast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multicast */ "./node_modules/rxjs/_esm2015/internal/operators/multicast.js");


function publishLast() {
    return (source) => Object(_multicast__WEBPACK_IMPORTED_MODULE_1__["multicast"])(new _AsyncSubject__WEBPACK_IMPORTED_MODULE_0__["AsyncSubject"]())(source);
}
//# sourceMappingURL=publishLast.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/publishReplay.js":
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/publishReplay.js ***!
  \************************************************************************/
/*! exports provided: publishReplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publishReplay", function() { return publishReplay; });
/* harmony import */ var _ReplaySubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ReplaySubject */ "./node_modules/rxjs/_esm2015/internal/ReplaySubject.js");
/* harmony import */ var _multicast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multicast */ "./node_modules/rxjs/_esm2015/internal/operators/multicast.js");


function publishReplay(bufferSize, windowTime, selectorOrScheduler, scheduler) {
    if (selectorOrScheduler && typeof selectorOrScheduler !== 'function') {
        scheduler = selectorOrScheduler;
    }
    const selector = typeof selectorOrScheduler === 'function' ? selectorOrScheduler : undefined;
    const subject = new _ReplaySubject__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](bufferSize, windowTime, scheduler);
    return (source) => Object(_multicast__WEBPACK_IMPORTED_MODULE_1__["multicast"])(() => subject, selector)(source);
}
//# sourceMappingURL=publishReplay.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/race.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/race.js ***!
  \***************************************************************/
/*! exports provided: race */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "race", function() { return race; });
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm2015/internal/util/isArray.js");
/* harmony import */ var _observable_race__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/race */ "./node_modules/rxjs/_esm2015/internal/observable/race.js");


function race(...observables) {
    return function raceOperatorFunction(source) {
        if (observables.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_0__["isArray"])(observables[0])) {
            observables = observables[0];
        }
        return source.lift.call(Object(_observable_race__WEBPACK_IMPORTED_MODULE_1__["race"])(source, ...observables));
    };
}
//# sourceMappingURL=race.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/reduce.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/reduce.js ***!
  \*****************************************************************/
/*! exports provided: reduce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return reduce; });
/* harmony import */ var _scan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scan */ "./node_modules/rxjs/_esm2015/internal/operators/scan.js");
/* harmony import */ var _takeLast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./takeLast */ "./node_modules/rxjs/_esm2015/internal/operators/takeLast.js");
/* harmony import */ var _defaultIfEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultIfEmpty */ "./node_modules/rxjs/_esm2015/internal/operators/defaultIfEmpty.js");
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/pipe */ "./node_modules/rxjs/_esm2015/internal/util/pipe.js");




function reduce(accumulator, seed) {
    if (arguments.length >= 2) {
        return function reduceOperatorFunctionWithSeed(source) {
            return Object(_util_pipe__WEBPACK_IMPORTED_MODULE_3__["pipe"])(Object(_scan__WEBPACK_IMPORTED_MODULE_0__["scan"])(accumulator, seed), Object(_takeLast__WEBPACK_IMPORTED_MODULE_1__["takeLast"])(1), Object(_defaultIfEmpty__WEBPACK_IMPORTED_MODULE_2__["defaultIfEmpty"])(seed))(source);
        };
    }
    return function reduceOperatorFunction(source) {
        return Object(_util_pipe__WEBPACK_IMPORTED_MODULE_3__["pipe"])(Object(_scan__WEBPACK_IMPORTED_MODULE_0__["scan"])((acc, value, index) => accumulator(acc, value, index + 1)), Object(_takeLast__WEBPACK_IMPORTED_MODULE_1__["takeLast"])(1))(source);
    };
}
//# sourceMappingURL=reduce.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/refCount.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/refCount.js ***!
  \*******************************************************************/
/*! exports provided: refCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refCount", function() { return refCount; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");

function refCount() {
    return function refCountOperatorFunction(source) {
        return source.lift(new RefCountOperator(source));
    };
}
class RefCountOperator {
    constructor(connectable) {
        this.connectable = connectable;
    }
    call(subscriber, source) {
        const { connectable } = this;
        connectable._refCount++;
        const refCounter = new RefCountSubscriber(subscriber, connectable);
        const subscription = source.subscribe(refCounter);
        if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
        }
        return subscription;
    }
}
class RefCountSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, connectable) {
        super(destination);
        this.connectable = connectable;
    }
    _unsubscribe() {
        const { connectable } = this;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        const refCount = connectable._refCount;
        if (refCount <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount - 1;
        if (refCount > 1) {
            this.connection = null;
            return;
        }
        const { connection } = this;
        const sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
        }
    }
}
//# sourceMappingURL=refCount.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/repeat.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/repeat.js ***!
  \*****************************************************************/
/*! exports provided: repeat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return repeat; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/empty */ "./node_modules/rxjs/_esm2015/internal/observable/empty.js");


function repeat(count = -1) {
    return (source) => {
        if (count === 0) {
            return Object(_observable_empty__WEBPACK_IMPORTED_MODULE_1__["empty"])();
        }
        else if (count < 0) {
            return source.lift(new RepeatOperator(-1, source));
        }
        else {
            return source.lift(new RepeatOperator(count - 1, source));
        }
    };
}
class RepeatOperator {
    constructor(count, source) {
        this.count = count;
        this.source = source;
    }
    call(subscriber, source) {
        return source.subscribe(new RepeatSubscriber(subscriber, this.count, this.source));
    }
}
class RepeatSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, count, source) {
        super(destination);
        this.count = count;
        this.source = source;
    }
    complete() {
        if (!this.isStopped) {
            const { source, count } = this;
            if (count === 0) {
                return super.complete();
            }
            else if (count > -1) {
                this.count = count - 1;
            }
            source.subscribe(this._unsubscribeAndRecycle());
        }
    }
}
//# sourceMappingURL=repeat.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/repeatWhen.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/repeatWhen.js ***!
  \*********************************************************************/
/*! exports provided: repeatWhen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeatWhen", function() { return repeatWhen; });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subject */ "./node_modules/rxjs/_esm2015/internal/Subject.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm2015/internal/OuterSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js");



function repeatWhen(notifier) {
    return (source) => source.lift(new RepeatWhenOperator(notifier));
}
class RepeatWhenOperator {
    constructor(notifier) {
        this.notifier = notifier;
    }
    call(subscriber, source) {
        return source.subscribe(new RepeatWhenSubscriber(subscriber, this.notifier, source));
    }
}
class RepeatWhenSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_1__["OuterSubscriber"] {
    constructor(destination, notifier, source) {
        super(destination);
        this.notifier = notifier;
        this.source = source;
        this.sourceIsBeingSubscribedTo = true;
    }
    notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.sourceIsBeingSubscribedTo = true;
        this.source.subscribe(this);
    }
    notifyComplete(innerSub) {
        if (this.sourceIsBeingSubscribedTo === false) {
            return super.complete();
        }
    }
    complete() {
        this.sourceIsBeingSubscribedTo = false;
        if (!this.isStopped) {
            if (!this.retries) {
                this.subscribeToRetries();
            }
            if (!this.retriesSubscription || this.retriesSubscription.closed) {
                return super.complete();
            }
            this._unsubscribeAndRecycle();
            this.notifications.next();
        }
    }
    _unsubscribe() {
        const { notifications, retriesSubscription } = this;
        if (notifications) {
            notifications.unsubscribe();
            this.notifications = null;
        }
        if (retriesSubscription) {
            retriesSubscription.unsubscribe();
            this.retriesSubscription = null;
        }
        this.retries = null;
    }
    _unsubscribeAndRecycle() {
        const { _unsubscribe } = this;
        this._unsubscribe = null;
        super._unsubscribeAndRecycle();
        this._unsubscribe = _unsubscribe;
        return this;
    }
    subscribeToRetries() {
        this.notifications = new _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        let retries;
        try {
            const { notifier } = this;
            retries = notifier(this.notifications);
        }
        catch (e) {
            return super.complete();
        }
        this.retries = retries;
        this.retriesSubscription = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_2__["subscribeToResult"])(this, retries);
    }
}
//# sourceMappingURL=repeatWhen.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/retry.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/retry.js ***!
  \****************************************************************/
/*! exports provided: retry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retry", function() { return retry; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");

function retry(count = -1) {
    return (source) => source.lift(new RetryOperator(count, source));
}
class RetryOperator {
    constructor(count, source) {
        this.count = count;
        this.source = source;
    }
    call(subscriber, source) {
        return source.subscribe(new RetrySubscriber(subscriber, this.count, this.source));
    }
}
class RetrySubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, count, source) {
        super(destination);
        this.count = count;
        this.source = source;
    }
    error(err) {
        if (!this.isStopped) {
            const { source, count } = this;
            if (count === 0) {
                return super.error(err);
            }
            else if (count > -1) {
                this.count = count - 1;
            }
            source.subscribe(this._unsubscribeAndRecycle());
        }
    }
}
//# sourceMappingURL=retry.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/retryWhen.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/retryWhen.js ***!
  \********************************************************************/
/*! exports provided: retryWhen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retryWhen", function() { return retryWhen; });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subject */ "./node_modules/rxjs/_esm2015/internal/Subject.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm2015/internal/OuterSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js");



function retryWhen(notifier) {
    return (source) => source.lift(new RetryWhenOperator(notifier, source));
}
class RetryWhenOperator {
    constructor(notifier, source) {
        this.notifier = notifier;
        this.source = source;
    }
    call(subscriber, source) {
        return source.subscribe(new RetryWhenSubscriber(subscriber, this.notifier, this.source));
    }
}
class RetryWhenSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_1__["OuterSubscriber"] {
    constructor(destination, notifier, source) {
        super(destination);
        this.notifier = notifier;
        this.source = source;
    }
    error(err) {
        if (!this.isStopped) {
            let errors = this.errors;
            let retries = this.retries;
            let retriesSubscription = this.retriesSubscription;
            if (!retries) {
                errors = new _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
                try {
                    const { notifier } = this;
                    retries = notifier(errors);
                }
                catch (e) {
                    return super.error(e);
                }
                retriesSubscription = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_2__["subscribeToResult"])(this, retries);
            }
            else {
                this.errors = null;
                this.retriesSubscription = null;
            }
            this._unsubscribeAndRecycle();
            this.errors = errors;
            this.retries = retries;
            this.retriesSubscription = retriesSubscription;
            errors.next(err);
        }
    }
    _unsubscribe() {
        const { errors, retriesSubscription } = this;
        if (errors) {
            errors.unsubscribe();
            this.errors = null;
        }
        if (retriesSubscription) {
            retriesSubscription.unsubscribe();
            this.retriesSubscription = null;
        }
        this.retries = null;
    }
    notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        const { _unsubscribe } = this;
        this._unsubscribe = null;
        this._unsubscribeAndRecycle();
        this._unsubscribe = _unsubscribe;
        this.source.subscribe(this);
    }
}
//# sourceMappingURL=retryWhen.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/sample.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/sample.js ***!
  \*****************************************************************/
/*! exports provided: sample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sample", function() { return sample; });
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm2015/internal/OuterSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js");


function sample(notifier) {
    return (source) => source.lift(new SampleOperator(notifier));
}
class SampleOperator {
    constructor(notifier) {
        this.notifier = notifier;
    }
    call(subscriber, source) {
        const sampleSubscriber = new SampleSubscriber(subscriber);
        const subscription = source.subscribe(sampleSubscriber);
        subscription.add(Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__["subscribeToResult"])(sampleSubscriber, this.notifier));
        return subscription;
    }
}
class SampleSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__["OuterSubscriber"] {
    constructor() {
        super(...arguments);
        this.hasValue = false;
    }
    _next(value) {
        this.value = value;
        this.hasValue = true;
    }
    notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.emitValue();
    }
    notifyComplete() {
        this.emitValue();
    }
    emitValue() {
        if (this.hasValue) {
            this.hasValue = false;
            this.destination.next(this.value);
        }
    }
}
//# sourceMappingURL=sample.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/sampleTime.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/sampleTime.js ***!
  \*********************************************************************/
/*! exports provided: sampleTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sampleTime", function() { return sampleTime; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/_esm2015/internal/scheduler/async.js");


function sampleTime(period, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"]) {
    return (source) => source.lift(new SampleTimeOperator(period, scheduler));
}
class SampleTimeOperator {
    constructor(period, scheduler) {
        this.period = period;
        this.scheduler = scheduler;
    }
    call(subscriber, source) {
        return source.subscribe(new SampleTimeSubscriber(subscriber, this.period, this.scheduler));
    }
}
class SampleTimeSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, period, scheduler) {
        super(destination);
        this.period = period;
        this.scheduler = scheduler;
        this.hasValue = false;
        this.add(scheduler.schedule(dispatchNotification, period, { subscriber: this, period }));
    }
    _next(value) {
        this.lastValue = value;
        this.hasValue = true;
    }
    notifyNext() {
        if (this.hasValue) {
            this.hasValue = false;
            this.destination.next(this.lastValue);
        }
    }
}
function dispatchNotification(state) {
    let { subscriber, period } = state;
    subscriber.notifyNext();
    this.schedule(state, period);
}
//# sourceMappingURL=sampleTime.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/scan.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/scan.js ***!
  \***************************************************************/
/*! exports provided: scan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return scan; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");

function scan(accumulator, seed) {
    let hasSeed = false;
    if (arguments.length >= 2) {
        hasSeed = true;
    }
    return function scanOperatorFunction(source) {
        return source.lift(new ScanOperator(accumulator, seed, hasSeed));
    };
}
class ScanOperator {
    constructor(accumulator, seed, hasSeed = false) {
        this.accumulator = accumulator;
        this.seed = seed;
        this.hasSeed = hasSeed;
    }
    call(subscriber, source) {
        return source.subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed, this.hasSeed));
    }
}
class ScanSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, accumulator, _seed, hasSeed) {
        super(destination);
        this.accumulator = accumulator;
        this._seed = _seed;
        this.hasSeed = hasSeed;
        this.index = 0;
    }
    get seed() {
        return this._seed;
    }
    set seed(value) {
        this.hasSeed = true;
        this._seed = value;
    }
    _next(value) {
        if (!this.hasSeed) {
            this.seed = value;
            this.destination.next(value);
        }
        else {
            return this._tryNext(value);
        }
    }
    _tryNext(value) {
        const index = this.index++;
        let result;
        try {
            result = this.accumulator(this.seed, value, index);
        }
        catch (err) {
            this.destination.error(err);
        }
        this.seed = result;
        this.destination.next(result);
    }
}
//# sourceMappingURL=scan.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/sequenceEqual.js":
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/sequenceEqual.js ***!
  \************************************************************************/
/*! exports provided: sequenceEqual, SequenceEqualOperator, SequenceEqualSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequenceEqual", function() { return sequenceEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SequenceEqualOperator", function() { return SequenceEqualOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SequenceEqualSubscriber", function() { return SequenceEqualSubscriber; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");

function sequenceEqual(compareTo, comparator) {
    return (source) => source.lift(new SequenceEqualOperator(compareTo, comparator));
}
class SequenceEqualOperator {
    constructor(compareTo, comparator) {
        this.compareTo = compareTo;
        this.comparator = comparator;
    }
    call(subscriber, source) {
        return source.subscribe(new SequenceEqualSubscriber(subscriber, this.compareTo, this.comparator));
    }
}
class SequenceEqualSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, compareTo, comparator) {
        super(destination);
        this.compareTo = compareTo;
        this.comparator = comparator;
        this._a = [];
        this._b = [];
        this._oneComplete = false;
        this.destination.add(compareTo.subscribe(new SequenceEqualCompareToSubscriber(destination, this)));
    }
    _next(value) {
        if (this._oneComplete && this._b.length === 0) {
            this.emit(false);
        }
        else {
            this._a.push(value);
            this.checkValues();
        }
    }
    _complete() {
        if (this._oneComplete) {
            this.emit(this._a.length === 0 && this._b.length === 0);
        }
        else {
            this._oneComplete = true;
        }
        this.unsubscribe();
    }
    checkValues() {
        const { _a, _b, comparator } = this;
        while (_a.length > 0 && _b.length > 0) {
            let a = _a.shift();
            let b = _b.shift();
            let areEqual = false;
            try {
                areEqual = comparator ? comparator(a, b) : a === b;
            }
            catch (e) {
                this.destination.error(e);
            }
            if (!areEqual) {
                this.emit(false);
            }
        }
    }
    emit(value) {
        const { destination } = this;
        destination.next(value);
        destination.complete();
    }
    nextB(value) {
        if (this._oneComplete && this._a.length === 0) {
            this.emit(false);
        }
        else {
            this._b.push(value);
            this.checkValues();
        }
    }
    completeB() {
        if (this._oneComplete) {
            this.emit(this._a.length === 0 && this._b.length === 0);
        }
        else {
            this._oneComplete = true;
        }
    }
}
class SequenceEqualCompareToSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, parent) {
        super(destination);
        this.parent = parent;
    }
    _next(value) {
        this.parent.nextB(value);
    }
    _error(err) {
        this.parent.error(err);
        this.unsubscribe();
    }
    _complete() {
        this.parent.completeB();
        this.unsubscribe();
    }
}
//# sourceMappingURL=sequenceEqual.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/share.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/share.js ***!
  \****************************************************************/
/*! exports provided: share */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "share", function() { return share; });
/* harmony import */ var _multicast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multicast */ "./node_modules/rxjs/_esm2015/internal/operators/multicast.js");
/* harmony import */ var _refCount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refCount */ "./node_modules/rxjs/_esm2015/internal/operators/refCount.js");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Subject */ "./node_modules/rxjs/_esm2015/internal/Subject.js");



function shareSubjectFactory() {
    return new _Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
}
function share() {
    return (source) => Object(_refCount__WEBPACK_IMPORTED_MODULE_1__["refCount"])()(Object(_multicast__WEBPACK_IMPORTED_MODULE_0__["multicast"])(shareSubjectFactory)(source));
}
//# sourceMappingURL=share.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/shareReplay.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/shareReplay.js ***!
  \**********************************************************************/
/*! exports provided: shareReplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shareReplay", function() { return shareReplay; });
/* harmony import */ var _ReplaySubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ReplaySubject */ "./node_modules/rxjs/_esm2015/internal/ReplaySubject.js");

function shareReplay(configOrBufferSize, windowTime, scheduler) {
    let config;
    if (configOrBufferSize && typeof configOrBufferSize === 'object') {
        config = configOrBufferSize;
    }
    else {
        config = {
            bufferSize: configOrBufferSize,
            windowTime,
            refCount: false,
            scheduler
        };
    }
    return (source) => source.lift(shareReplayOperator(config));
}
function shareReplayOperator({ bufferSize = Number.POSITIVE_INFINITY, windowTime = Number.POSITIVE_INFINITY, refCount: useRefCount, scheduler }) {
    let subject;
    let refCount = 0;
    let subscription;
    let hasError = false;
    let isComplete = false;
    return function shareReplayOperation(source) {
        refCount++;
        if (!subject || hasError) {
            hasError = false;
            subject = new _ReplaySubject__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](bufferSize, windowTime, scheduler);
            subscription = source.subscribe({
                next(value) { subject.next(value); },
                error(err) {
                    hasError = true;
                    subject.error(err);
                },
                complete() {
                    isComplete = true;
                    subject.complete();
                },
            });
        }
        const innerSub = subject.subscribe(this);
        this.add(() => {
            refCount--;
            innerSub.unsubscribe();
            if (subscription && !isComplete && useRefCount && refCount === 0) {
                subscription.unsubscribe();
                subscription = undefined;
                subject = undefined;
            }
        });
    };
}
//# sourceMappingURL=shareReplay.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/single.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/single.js ***!
  \*****************************************************************/
/*! exports provided: single */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "single", function() { return single; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/EmptyError */ "./node_modules/rxjs/_esm2015/internal/util/EmptyError.js");


function single(predicate) {
    return (source) => source.lift(new SingleOperator(predicate, source));
}
class SingleOperator {
    constructor(predicate, source) {
        this.predicate = predicate;
        this.source = source;
    }
    call(subscriber, source) {
        return source.subscribe(new SingleSubscriber(subscriber, this.predicate, this.source));
    }
}
class SingleSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, predicate, source) {
        super(destination);
        this.predicate = predicate;
        this.source = source;
        this.seenValue = false;
        this.index = 0;
    }
    applySingleValue(value) {
        if (this.seenValue) {
            this.destination.error('Sequence contains more than one element');
        }
        else {
            this.seenValue = true;
            this.singleValue = value;
        }
    }
    _next(value) {
        const index = this.index++;
        if (this.predicate) {
            this.tryNext(value, index);
        }
        else {
            this.applySingleValue(value);
        }
    }
    tryNext(value, index) {
        try {
            if (this.predicate(value, index, this.source)) {
                this.applySingleValue(value);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    }
    _complete() {
        const destination = this.destination;
        if (this.index > 0) {
            destination.next(this.seenValue ? this.singleValue : undefined);
            destination.complete();
        }
        else {
            destination.error(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__["EmptyError"]);
        }
    }
}
//# sourceMappingURL=single.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/skip.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/skip.js ***!
  \***************************************************************/
/*! exports provided: skip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skip", function() { return skip; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");

function skip(count) {
    return (source) => source.lift(new SkipOperator(count));
}
class SkipOperator {
    constructor(total) {
        this.total = total;
    }
    call(subscriber, source) {
        return source.subscribe(new SkipSubscriber(subscriber, this.total));
    }
}
class SkipSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, total) {
        super(destination);
        this.total = total;
        this.count = 0;
    }
    _next(x) {
        if (++this.count > this.total) {
            this.destination.next(x);
        }
    }
}
//# sourceMappingURL=skip.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/skipLast.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/skipLast.js ***!
  \*******************************************************************/
/*! exports provided: skipLast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skipLast", function() { return skipLast; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");
/* harmony import */ var _util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/ArgumentOutOfRangeError */ "./node_modules/rxjs/_esm2015/internal/util/ArgumentOutOfRangeError.js");


function skipLast(count) {
    return (source) => source.lift(new SkipLastOperator(count));
}
class SkipLastOperator {
    constructor(_skipCount) {
        this._skipCount = _skipCount;
        if (this._skipCount < 0) {
            throw new _util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_1__["ArgumentOutOfRangeError"];
        }
    }
    call(subscriber, source) {
        if (this._skipCount === 0) {
            return source.subscribe(new _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"](subscriber));
        }
        else {
            return source.subscribe(new SkipLastSubscriber(subscriber, this._skipCount));
        }
    }
}
class SkipLastSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, _skipCount) {
        super(destination);
        this._skipCount = _skipCount;
        this._count = 0;
        this._ring = new Array(_skipCount);
    }
    _next(value) {
        const skipCount = this._skipCount;
        const count = this._count++;
        if (count < skipCount) {
            this._ring[count] = value;
        }
        else {
            const currentIndex = count % skipCount;
            const ring = this._ring;
            const oldValue = ring[currentIndex];
            ring[currentIndex] = value;
            this.destination.next(oldValue);
        }
    }
}
//# sourceMappingURL=skipLast.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/skipUntil.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/skipUntil.js ***!
  \********************************************************************/
/*! exports provided: skipUntil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skipUntil", function() { return skipUntil; });
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm2015/internal/OuterSubscriber.js");
/* harmony import */ var _InnerSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../InnerSubscriber */ "./node_modules/rxjs/_esm2015/internal/InnerSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js");



function skipUntil(notifier) {
    return (source) => source.lift(new SkipUntilOperator(notifier));
}
class SkipUntilOperator {
    constructor(notifier) {
        this.notifier = notifier;
    }
    call(destination, source) {
        return source.subscribe(new SkipUntilSubscriber(destination, this.notifier));
    }
}
class SkipUntilSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__["OuterSubscriber"] {
    constructor(destination, notifier) {
        super(destination);
        this.hasValue = false;
        const innerSubscriber = new _InnerSubscriber__WEBPACK_IMPORTED_MODULE_1__["InnerSubscriber"](this, undefined, undefined);
        this.add(innerSubscriber);
        this.innerSubscription = innerSubscriber;
        Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_2__["subscribeToResult"])(this, notifier, undefined, undefined, innerSubscriber);
    }
    _next(value) {
        if (this.hasValue) {
            super._next(value);
        }
    }
    notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.hasValue = true;
        if (this.innerSubscription) {
            this.innerSubscription.unsubscribe();
        }
    }
    notifyComplete() {
    }
}
//# sourceMappingURL=skipUntil.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/skipWhile.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/skipWhile.js ***!
  \********************************************************************/
/*! exports provided: skipWhile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skipWhile", function() { return skipWhile; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");

function skipWhile(predicate) {
    return (source) => source.lift(new SkipWhileOperator(predicate));
}
class SkipWhileOperator {
    constructor(predicate) {
        this.predicate = predicate;
    }
    call(subscriber, source) {
        return source.subscribe(new SkipWhileSubscriber(subscriber, this.predicate));
    }
}
class SkipWhileSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, predicate) {
        super(destination);
        this.predicate = predicate;
        this.skipping = true;
        this.index = 0;
    }
    _next(value) {
        const destination = this.destination;
        if (this.skipping) {
            this.tryCallPredicate(value);
        }
        if (!this.skipping) {
            destination.next(value);
        }
    }
    tryCallPredicate(value) {
        try {
            const result = this.predicate(value, this.index++);
            this.skipping = Boolean(result);
        }
        catch (err) {
            this.destination.error(err);
        }
    }
}
//# sourceMappingURL=skipWhile.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/startWith.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/startWith.js ***!
  \********************************************************************/
/*! exports provided: startWith */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startWith", function() { return startWith; });
/* harmony import */ var _observable_fromArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/fromArray */ "./node_modules/rxjs/_esm2015/internal/observable/fromArray.js");
/* harmony import */ var _observable_scalar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/scalar */ "./node_modules/rxjs/_esm2015/internal/observable/scalar.js");
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/empty */ "./node_modules/rxjs/_esm2015/internal/observable/empty.js");
/* harmony import */ var _observable_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../observable/concat */ "./node_modules/rxjs/_esm2015/internal/observable/concat.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm2015/internal/util/isScheduler.js");





function startWith(...array) {
    return (source) => {
        let scheduler = array[array.length - 1];
        if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_4__["isScheduler"])(scheduler)) {
            array.pop();
        }
        else {
            scheduler = null;
        }
        const len = array.length;
        if (len === 1 && !scheduler) {
            return Object(_observable_concat__WEBPACK_IMPORTED_MODULE_3__["concat"])(Object(_observable_scalar__WEBPACK_IMPORTED_MODULE_1__["scalar"])(array[0]), source);
        }
        else if (len > 0) {
            return Object(_observable_concat__WEBPACK_IMPORTED_MODULE_3__["concat"])(Object(_observable_fromArray__WEBPACK_IMPORTED_MODULE_0__["fromArray"])(array, scheduler), source);
        }
        else {
            return Object(_observable_concat__WEBPACK_IMPORTED_MODULE_3__["concat"])(Object(_observable_empty__WEBPACK_IMPORTED_MODULE_2__["empty"])(scheduler), source);
        }
    };
}
//# sourceMappingURL=startWith.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/subscribeOn.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/subscribeOn.js ***!
  \**********************************************************************/
/*! exports provided: subscribeOn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeOn", function() { return subscribeOn; });
/* harmony import */ var _observable_SubscribeOnObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/SubscribeOnObservable */ "./node_modules/rxjs/_esm2015/internal/observable/SubscribeOnObservable.js");

function subscribeOn(scheduler, delay = 0) {
    return function subscribeOnOperatorFunction(source) {
        return source.lift(new SubscribeOnOperator(scheduler, delay));
    };
}
class SubscribeOnOperator {
    constructor(scheduler, delay) {
        this.scheduler = scheduler;
        this.delay = delay;
    }
    call(subscriber, source) {
        return new _observable_SubscribeOnObservable__WEBPACK_IMPORTED_MODULE_0__["SubscribeOnObservable"](source, this.delay, this.scheduler).subscribe(subscriber);
    }
}
//# sourceMappingURL=subscribeOn.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/switchAll.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/switchAll.js ***!
  \********************************************************************/
/*! exports provided: switchAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchAll", function() { return switchAll; });
/* harmony import */ var _switchMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switchMap */ "./node_modules/rxjs/_esm2015/internal/operators/switchMap.js");
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/identity */ "./node_modules/rxjs/_esm2015/internal/util/identity.js");


function switchAll() {
    return Object(_switchMap__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(_util_identity__WEBPACK_IMPORTED_MODULE_1__["identity"]);
}
//# sourceMappingURL=switchAll.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/switchMap.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/switchMap.js ***!
  \********************************************************************/
/*! exports provided: switchMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchMap", function() { return switchMap; });
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm2015/internal/OuterSubscriber.js");
/* harmony import */ var _InnerSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../InnerSubscriber */ "./node_modules/rxjs/_esm2015/internal/InnerSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map */ "./node_modules/rxjs/_esm2015/internal/operators/map.js");
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../observable/from */ "./node_modules/rxjs/_esm2015/internal/observable/from.js");





function switchMap(project, resultSelector) {
    if (typeof resultSelector === 'function') {
        return (source) => source.pipe(switchMap((a, i) => Object(_observable_from__WEBPACK_IMPORTED_MODULE_4__["from"])(project(a, i)).pipe(Object(_map__WEBPACK_IMPORTED_MODULE_3__["map"])((b, ii) => resultSelector(a, b, i, ii)))));
    }
    return (source) => source.lift(new SwitchMapOperator(project));
}
class SwitchMapOperator {
    constructor(project) {
        this.project = project;
    }
    call(subscriber, source) {
        return source.subscribe(new SwitchMapSubscriber(subscriber, this.project));
    }
}
class SwitchMapSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__["OuterSubscriber"] {
    constructor(destination, project) {
        super(destination);
        this.project = project;
        this.index = 0;
    }
    _next(value) {
        let result;
        const index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (error) {
            this.destination.error(error);
            return;
        }
        this._innerSub(result, value, index);
    }
    _innerSub(result, value, index) {
        const innerSubscription = this.innerSubscription;
        if (innerSubscription) {
            innerSubscription.unsubscribe();
        }
        const innerSubscriber = new _InnerSubscriber__WEBPACK_IMPORTED_MODULE_1__["InnerSubscriber"](this, undefined, undefined);
        const destination = this.destination;
        destination.add(innerSubscriber);
        this.innerSubscription = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_2__["subscribeToResult"])(this, result, value, index, innerSubscriber);
    }
    _complete() {
        const { innerSubscription } = this;
        if (!innerSubscription || innerSubscription.closed) {
            super._complete();
        }
        this.unsubscribe();
    }
    _unsubscribe() {
        this.innerSubscription = null;
    }
    notifyComplete(innerSub) {
        const destination = this.destination;
        destination.remove(innerSub);
        this.innerSubscription = null;
        if (this.isStopped) {
            super._complete();
        }
    }
    notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    }
}
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/switchMapTo.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/switchMapTo.js ***!
  \**********************************************************************/
/*! exports provided: switchMapTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchMapTo", function() { return switchMapTo; });
/* harmony import */ var _switchMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switchMap */ "./node_modules/rxjs/_esm2015/internal/operators/switchMap.js");

function switchMapTo(innerObservable, resultSelector) {
    return resultSelector ? Object(_switchMap__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(() => innerObservable, resultSelector) : Object(_switchMap__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(() => innerObservable);
}
//# sourceMappingURL=switchMapTo.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/take.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/take.js ***!
  \***************************************************************/
/*! exports provided: take */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "take", function() { return take; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");
/* harmony import */ var _util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/ArgumentOutOfRangeError */ "./node_modules/rxjs/_esm2015/internal/util/ArgumentOutOfRangeError.js");
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/empty */ "./node_modules/rxjs/_esm2015/internal/observable/empty.js");



function take(count) {
    return (source) => {
        if (count === 0) {
            return Object(_observable_empty__WEBPACK_IMPORTED_MODULE_2__["empty"])();
        }
        else {
            return source.lift(new TakeOperator(count));
        }
    };
}
class TakeOperator {
    constructor(total) {
        this.total = total;
        if (this.total < 0) {
            throw new _util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_1__["ArgumentOutOfRangeError"];
        }
    }
    call(subscriber, source) {
        return source.subscribe(new TakeSubscriber(subscriber, this.total));
    }
}
class TakeSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, total) {
        super(destination);
        this.total = total;
        this.count = 0;
    }
    _next(value) {
        const total = this.total;
        const count = ++this.count;
        if (count <= total) {
            this.destination.next(value);
            if (count === total) {
                this.destination.complete();
                this.unsubscribe();
            }
        }
    }
}
//# sourceMappingURL=take.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/takeLast.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/takeLast.js ***!
  \*******************************************************************/
/*! exports provided: takeLast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeLast", function() { return takeLast; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");
/* harmony import */ var _util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/ArgumentOutOfRangeError */ "./node_modules/rxjs/_esm2015/internal/util/ArgumentOutOfRangeError.js");
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/empty */ "./node_modules/rxjs/_esm2015/internal/observable/empty.js");



function takeLast(count) {
    return function takeLastOperatorFunction(source) {
        if (count === 0) {
            return Object(_observable_empty__WEBPACK_IMPORTED_MODULE_2__["empty"])();
        }
        else {
            return source.lift(new TakeLastOperator(count));
        }
    };
}
class TakeLastOperator {
    constructor(total) {
        this.total = total;
        if (this.total < 0) {
            throw new _util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_1__["ArgumentOutOfRangeError"];
        }
    }
    call(subscriber, source) {
        return source.subscribe(new TakeLastSubscriber(subscriber, this.total));
    }
}
class TakeLastSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, total) {
        super(destination);
        this.total = total;
        this.ring = new Array();
        this.count = 0;
    }
    _next(value) {
        const ring = this.ring;
        const total = this.total;
        const count = this.count++;
        if (ring.length < total) {
            ring.push(value);
        }
        else {
            const index = count % total;
            ring[index] = value;
        }
    }
    _complete() {
        const destination = this.destination;
        let count = this.count;
        if (count > 0) {
            const total = this.count >= this.total ? this.total : this.count;
            const ring = this.ring;
            for (let i = 0; i < total; i++) {
                const idx = (count++) % total;
                destination.next(ring[idx]);
            }
        }
        destination.complete();
    }
}
//# sourceMappingURL=takeLast.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/takeUntil.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/takeUntil.js ***!
  \********************************************************************/
/*! exports provided: takeUntil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeUntil", function() { return takeUntil; });
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm2015/internal/OuterSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js");


function takeUntil(notifier) {
    return (source) => source.lift(new TakeUntilOperator(notifier));
}
class TakeUntilOperator {
    constructor(notifier) {
        this.notifier = notifier;
    }
    call(subscriber, source) {
        const takeUntilSubscriber = new TakeUntilSubscriber(subscriber);
        const notifierSubscription = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__["subscribeToResult"])(takeUntilSubscriber, this.notifier);
        if (notifierSubscription && !takeUntilSubscriber.seenValue) {
            takeUntilSubscriber.add(notifierSubscription);
            return source.subscribe(takeUntilSubscriber);
        }
        return takeUntilSubscriber;
    }
}
class TakeUntilSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__["OuterSubscriber"] {
    constructor(destination) {
        super(destination);
        this.seenValue = false;
    }
    notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.seenValue = true;
        this.complete();
    }
    notifyComplete() {
    }
}
//# sourceMappingURL=takeUntil.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/takeWhile.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/takeWhile.js ***!
  \********************************************************************/
/*! exports provided: takeWhile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeWhile", function() { return takeWhile; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");

function takeWhile(predicate, inclusive = false) {
    return (source) => source.lift(new TakeWhileOperator(predicate, inclusive));
}
class TakeWhileOperator {
    constructor(predicate, inclusive) {
        this.predicate = predicate;
        this.inclusive = inclusive;
    }
    call(subscriber, source) {
        return source.subscribe(new TakeWhileSubscriber(subscriber, this.predicate, this.inclusive));
    }
}
class TakeWhileSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, predicate, inclusive) {
        super(destination);
        this.predicate = predicate;
        this.inclusive = inclusive;
        this.index = 0;
    }
    _next(value) {
        const destination = this.destination;
        let result;
        try {
            result = this.predicate(value, this.index++);
        }
        catch (err) {
            destination.error(err);
            return;
        }
        this.nextOrComplete(value, result);
    }
    nextOrComplete(value, predicateResult) {
        const destination = this.destination;
        if (Boolean(predicateResult)) {
            destination.next(value);
        }
        else {
            if (this.inclusive) {
                destination.next(value);
            }
            destination.complete();
        }
    }
}
//# sourceMappingURL=takeWhile.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/tap.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/tap.js ***!
  \**************************************************************/
/*! exports provided: tap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tap", function() { return tap; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/noop */ "./node_modules/rxjs/_esm2015/internal/util/noop.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isFunction */ "./node_modules/rxjs/_esm2015/internal/util/isFunction.js");



function tap(nextOrObserver, error, complete) {
    return function tapOperatorFunction(source) {
        return source.lift(new DoOperator(nextOrObserver, error, complete));
    };
}
class DoOperator {
    constructor(nextOrObserver, error, complete) {
        this.nextOrObserver = nextOrObserver;
        this.error = error;
        this.complete = complete;
    }
    call(subscriber, source) {
        return source.subscribe(new TapSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
    }
}
class TapSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, observerOrNext, error, complete) {
        super(destination);
        this._tapNext = _util_noop__WEBPACK_IMPORTED_MODULE_1__["noop"];
        this._tapError = _util_noop__WEBPACK_IMPORTED_MODULE_1__["noop"];
        this._tapComplete = _util_noop__WEBPACK_IMPORTED_MODULE_1__["noop"];
        this._tapError = error || _util_noop__WEBPACK_IMPORTED_MODULE_1__["noop"];
        this._tapComplete = complete || _util_noop__WEBPACK_IMPORTED_MODULE_1__["noop"];
        if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(observerOrNext)) {
            this._context = this;
            this._tapNext = observerOrNext;
        }
        else if (observerOrNext) {
            this._context = observerOrNext;
            this._tapNext = observerOrNext.next || _util_noop__WEBPACK_IMPORTED_MODULE_1__["noop"];
            this._tapError = observerOrNext.error || _util_noop__WEBPACK_IMPORTED_MODULE_1__["noop"];
            this._tapComplete = observerOrNext.complete || _util_noop__WEBPACK_IMPORTED_MODULE_1__["noop"];
        }
    }
    _next(value) {
        try {
            this._tapNext.call(this._context, value);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(value);
    }
    _error(err) {
        try {
            this._tapError.call(this._context, err);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.error(err);
    }
    _complete() {
        try {
            this._tapComplete.call(this._context);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        return this.destination.complete();
    }
}
//# sourceMappingURL=tap.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/throttle.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/throttle.js ***!
  \*******************************************************************/
/*! exports provided: defaultThrottleConfig, throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultThrottleConfig", function() { return defaultThrottleConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm2015/internal/OuterSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js");


const defaultThrottleConfig = {
    leading: true,
    trailing: false
};
function throttle(durationSelector, config = defaultThrottleConfig) {
    return (source) => source.lift(new ThrottleOperator(durationSelector, config.leading, config.trailing));
}
class ThrottleOperator {
    constructor(durationSelector, leading, trailing) {
        this.durationSelector = durationSelector;
        this.leading = leading;
        this.trailing = trailing;
    }
    call(subscriber, source) {
        return source.subscribe(new ThrottleSubscriber(subscriber, this.durationSelector, this.leading, this.trailing));
    }
}
class ThrottleSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__["OuterSubscriber"] {
    constructor(destination, durationSelector, _leading, _trailing) {
        super(destination);
        this.destination = destination;
        this.durationSelector = durationSelector;
        this._leading = _leading;
        this._trailing = _trailing;
        this._hasValue = false;
    }
    _next(value) {
        this._hasValue = true;
        this._sendValue = value;
        if (!this._throttled) {
            if (this._leading) {
                this.send();
            }
            else {
                this.throttle(value);
            }
        }
    }
    send() {
        const { _hasValue, _sendValue } = this;
        if (_hasValue) {
            this.destination.next(_sendValue);
            this.throttle(_sendValue);
        }
        this._hasValue = false;
        this._sendValue = null;
    }
    throttle(value) {
        const duration = this.tryDurationSelector(value);
        if (!!duration) {
            this.add(this._throttled = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__["subscribeToResult"])(this, duration));
        }
    }
    tryDurationSelector(value) {
        try {
            return this.durationSelector(value);
        }
        catch (err) {
            this.destination.error(err);
            return null;
        }
    }
    throttlingDone() {
        const { _throttled, _trailing } = this;
        if (_throttled) {
            _throttled.unsubscribe();
        }
        this._throttled = null;
        if (_trailing) {
            this.send();
        }
    }
    notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.throttlingDone();
    }
    notifyComplete() {
        this.throttlingDone();
    }
}
//# sourceMappingURL=throttle.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/throttleTime.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/throttleTime.js ***!
  \***********************************************************************/
/*! exports provided: throttleTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttleTime", function() { return throttleTime; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/_esm2015/internal/scheduler/async.js");
/* harmony import */ var _throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./throttle */ "./node_modules/rxjs/_esm2015/internal/operators/throttle.js");



function throttleTime(duration, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"], config = _throttle__WEBPACK_IMPORTED_MODULE_2__["defaultThrottleConfig"]) {
    return (source) => source.lift(new ThrottleTimeOperator(duration, scheduler, config.leading, config.trailing));
}
class ThrottleTimeOperator {
    constructor(duration, scheduler, leading, trailing) {
        this.duration = duration;
        this.scheduler = scheduler;
        this.leading = leading;
        this.trailing = trailing;
    }
    call(subscriber, source) {
        return source.subscribe(new ThrottleTimeSubscriber(subscriber, this.duration, this.scheduler, this.leading, this.trailing));
    }
}
class ThrottleTimeSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, duration, scheduler, leading, trailing) {
        super(destination);
        this.duration = duration;
        this.scheduler = scheduler;
        this.leading = leading;
        this.trailing = trailing;
        this._hasTrailingValue = false;
        this._trailingValue = null;
    }
    _next(value) {
        if (this.throttled) {
            if (this.trailing) {
                this._trailingValue = value;
                this._hasTrailingValue = true;
            }
        }
        else {
            this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.duration, { subscriber: this }));
            if (this.leading) {
                this.destination.next(value);
            }
        }
    }
    _complete() {
        if (this._hasTrailingValue) {
            this.destination.next(this._trailingValue);
            this.destination.complete();
        }
        else {
            this.destination.complete();
        }
    }
    clearThrottle() {
        const throttled = this.throttled;
        if (throttled) {
            if (this.trailing && this._hasTrailingValue) {
                this.destination.next(this._trailingValue);
                this._trailingValue = null;
                this._hasTrailingValue = false;
            }
            throttled.unsubscribe();
            this.remove(throttled);
            this.throttled = null;
        }
    }
}
function dispatchNext(arg) {
    const { subscriber } = arg;
    subscriber.clearThrottle();
}
//# sourceMappingURL=throttleTime.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/throwIfEmpty.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/throwIfEmpty.js ***!
  \***********************************************************************/
/*! exports provided: throwIfEmpty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfEmpty", function() { return throwIfEmpty; });
/* harmony import */ var _tap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tap */ "./node_modules/rxjs/_esm2015/internal/operators/tap.js");
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/EmptyError */ "./node_modules/rxjs/_esm2015/internal/util/EmptyError.js");


const throwIfEmpty = (errorFactory = defaultErrorFactory) => Object(_tap__WEBPACK_IMPORTED_MODULE_0__["tap"])({
    hasValue: false,
    next() { this.hasValue = true; },
    complete() {
        if (!this.hasValue) {
            throw errorFactory();
        }
    }
});
function defaultErrorFactory() {
    return new _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__["EmptyError"]();
}
//# sourceMappingURL=throwIfEmpty.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/timeInterval.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/timeInterval.js ***!
  \***********************************************************************/
/*! exports provided: timeInterval, TimeInterval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeInterval", function() { return timeInterval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeInterval", function() { return TimeInterval; });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/_esm2015/internal/scheduler/async.js");
/* harmony import */ var _scan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scan */ "./node_modules/rxjs/_esm2015/internal/operators/scan.js");
/* harmony import */ var _observable_defer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/defer */ "./node_modules/rxjs/_esm2015/internal/observable/defer.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map */ "./node_modules/rxjs/_esm2015/internal/operators/map.js");




function timeInterval(scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__["async"]) {
    return (source) => Object(_observable_defer__WEBPACK_IMPORTED_MODULE_2__["defer"])(() => {
        return source.pipe(Object(_scan__WEBPACK_IMPORTED_MODULE_1__["scan"])(({ current }, value) => ({ value, current: scheduler.now(), last: current }), { current: scheduler.now(), value: undefined, last: undefined }), Object(_map__WEBPACK_IMPORTED_MODULE_3__["map"])(({ current, last, value }) => new TimeInterval(value, current - last)));
    });
}
class TimeInterval {
    constructor(value, interval) {
        this.value = value;
        this.interval = interval;
    }
}
//# sourceMappingURL=timeInterval.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/timeout.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/timeout.js ***!
  \******************************************************************/
/*! exports provided: timeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return timeout; });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/_esm2015/internal/scheduler/async.js");
/* harmony import */ var _util_TimeoutError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/TimeoutError */ "./node_modules/rxjs/_esm2015/internal/util/TimeoutError.js");
/* harmony import */ var _timeoutWith__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timeoutWith */ "./node_modules/rxjs/_esm2015/internal/operators/timeoutWith.js");
/* harmony import */ var _observable_throwError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../observable/throwError */ "./node_modules/rxjs/_esm2015/internal/observable/throwError.js");




function timeout(due, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__["async"]) {
    return Object(_timeoutWith__WEBPACK_IMPORTED_MODULE_2__["timeoutWith"])(due, Object(_observable_throwError__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _util_TimeoutError__WEBPACK_IMPORTED_MODULE_1__["TimeoutError"]()), scheduler);
}
//# sourceMappingURL=timeout.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/timeoutWith.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/timeoutWith.js ***!
  \**********************************************************************/
/*! exports provided: timeoutWith */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeoutWith", function() { return timeoutWith; });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/_esm2015/internal/scheduler/async.js");
/* harmony import */ var _util_isDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isDate */ "./node_modules/rxjs/_esm2015/internal/util/isDate.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm2015/internal/OuterSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js");




function timeoutWith(due, withObservable, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__["async"]) {
    return (source) => {
        let absoluteTimeout = Object(_util_isDate__WEBPACK_IMPORTED_MODULE_1__["isDate"])(due);
        let waitFor = absoluteTimeout ? (+due - scheduler.now()) : Math.abs(due);
        return source.lift(new TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler));
    };
}
class TimeoutWithOperator {
    constructor(waitFor, absoluteTimeout, withObservable, scheduler) {
        this.waitFor = waitFor;
        this.absoluteTimeout = absoluteTimeout;
        this.withObservable = withObservable;
        this.scheduler = scheduler;
    }
    call(subscriber, source) {
        return source.subscribe(new TimeoutWithSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler));
    }
}
class TimeoutWithSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__["OuterSubscriber"] {
    constructor(destination, absoluteTimeout, waitFor, withObservable, scheduler) {
        super(destination);
        this.absoluteTimeout = absoluteTimeout;
        this.waitFor = waitFor;
        this.withObservable = withObservable;
        this.scheduler = scheduler;
        this.action = null;
        this.scheduleTimeout();
    }
    static dispatchTimeout(subscriber) {
        const { withObservable } = subscriber;
        subscriber._unsubscribeAndRecycle();
        subscriber.add(Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__["subscribeToResult"])(subscriber, withObservable));
    }
    scheduleTimeout() {
        const { action } = this;
        if (action) {
            this.action = action.schedule(this, this.waitFor);
        }
        else {
            this.add(this.action = this.scheduler.schedule(TimeoutWithSubscriber.dispatchTimeout, this.waitFor, this));
        }
    }
    _next(value) {
        if (!this.absoluteTimeout) {
            this.scheduleTimeout();
        }
        super._next(value);
    }
    _unsubscribe() {
        this.action = null;
        this.scheduler = null;
        this.withObservable = null;
    }
}
//# sourceMappingURL=timeoutWith.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/timestamp.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/timestamp.js ***!
  \********************************************************************/
/*! exports provided: timestamp, Timestamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timestamp", function() { return timestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timestamp", function() { return Timestamp; });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/_esm2015/internal/scheduler/async.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ "./node_modules/rxjs/_esm2015/internal/operators/map.js");


function timestamp(scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__["async"]) {
    return Object(_map__WEBPACK_IMPORTED_MODULE_1__["map"])((value) => new Timestamp(value, scheduler.now()));
}
class Timestamp {
    constructor(value, timestamp) {
        this.value = value;
        this.timestamp = timestamp;
    }
}
//# sourceMappingURL=timestamp.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/toArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/toArray.js ***!
  \******************************************************************/
/*! exports provided: toArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reduce */ "./node_modules/rxjs/_esm2015/internal/operators/reduce.js");

function toArrayReducer(arr, item, index) {
    if (index === 0) {
        return [item];
    }
    arr.push(item);
    return arr;
}
function toArray() {
    return Object(_reduce__WEBPACK_IMPORTED_MODULE_0__["reduce"])(toArrayReducer, []);
}
//# sourceMappingURL=toArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/window.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/window.js ***!
  \*****************************************************************/
/*! exports provided: window */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return window; });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subject */ "./node_modules/rxjs/_esm2015/internal/Subject.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm2015/internal/OuterSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js");



function window(windowBoundaries) {
    return function windowOperatorFunction(source) {
        return source.lift(new WindowOperator(windowBoundaries));
    };
}
class WindowOperator {
    constructor(windowBoundaries) {
        this.windowBoundaries = windowBoundaries;
    }
    call(subscriber, source) {
        const windowSubscriber = new WindowSubscriber(subscriber);
        const sourceSubscription = source.subscribe(windowSubscriber);
        if (!sourceSubscription.closed) {
            windowSubscriber.add(Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_2__["subscribeToResult"])(windowSubscriber, this.windowBoundaries));
        }
        return sourceSubscription;
    }
}
class WindowSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_1__["OuterSubscriber"] {
    constructor(destination) {
        super(destination);
        this.window = new _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        destination.next(this.window);
    }
    notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.openWindow();
    }
    notifyError(error, innerSub) {
        this._error(error);
    }
    notifyComplete(innerSub) {
        this._complete();
    }
    _next(value) {
        this.window.next(value);
    }
    _error(err) {
        this.window.error(err);
        this.destination.error(err);
    }
    _complete() {
        this.window.complete();
        this.destination.complete();
    }
    _unsubscribe() {
        this.window = null;
    }
    openWindow() {
        const prevWindow = this.window;
        if (prevWindow) {
            prevWindow.complete();
        }
        const destination = this.destination;
        const newWindow = this.window = new _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        destination.next(newWindow);
    }
}
//# sourceMappingURL=window.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/windowCount.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/windowCount.js ***!
  \**********************************************************************/
/*! exports provided: windowCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowCount", function() { return windowCount; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subject */ "./node_modules/rxjs/_esm2015/internal/Subject.js");


function windowCount(windowSize, startWindowEvery = 0) {
    return function windowCountOperatorFunction(source) {
        return source.lift(new WindowCountOperator(windowSize, startWindowEvery));
    };
}
class WindowCountOperator {
    constructor(windowSize, startWindowEvery) {
        this.windowSize = windowSize;
        this.startWindowEvery = startWindowEvery;
    }
    call(subscriber, source) {
        return source.subscribe(new WindowCountSubscriber(subscriber, this.windowSize, this.startWindowEvery));
    }
}
class WindowCountSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, windowSize, startWindowEvery) {
        super(destination);
        this.destination = destination;
        this.windowSize = windowSize;
        this.startWindowEvery = startWindowEvery;
        this.windows = [new _Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]()];
        this.count = 0;
        destination.next(this.windows[0]);
    }
    _next(value) {
        const startWindowEvery = (this.startWindowEvery > 0) ? this.startWindowEvery : this.windowSize;
        const destination = this.destination;
        const windowSize = this.windowSize;
        const windows = this.windows;
        const len = windows.length;
        for (let i = 0; i < len && !this.closed; i++) {
            windows[i].next(value);
        }
        const c = this.count - windowSize + 1;
        if (c >= 0 && c % startWindowEvery === 0 && !this.closed) {
            windows.shift().complete();
        }
        if (++this.count % startWindowEvery === 0 && !this.closed) {
            const window = new _Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
            windows.push(window);
            destination.next(window);
        }
    }
    _error(err) {
        const windows = this.windows;
        if (windows) {
            while (windows.length > 0 && !this.closed) {
                windows.shift().error(err);
            }
        }
        this.destination.error(err);
    }
    _complete() {
        const windows = this.windows;
        if (windows) {
            while (windows.length > 0 && !this.closed) {
                windows.shift().complete();
            }
        }
        this.destination.complete();
    }
    _unsubscribe() {
        this.count = 0;
        this.windows = null;
    }
}
//# sourceMappingURL=windowCount.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/windowTime.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/windowTime.js ***!
  \*********************************************************************/
/*! exports provided: windowTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowTime", function() { return windowTime; });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subject */ "./node_modules/rxjs/_esm2015/internal/Subject.js");
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/_esm2015/internal/scheduler/async.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isNumeric */ "./node_modules/rxjs/_esm2015/internal/util/isNumeric.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm2015/internal/util/isScheduler.js");





function windowTime(windowTimeSpan) {
    let scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"];
    let windowCreationInterval = null;
    let maxWindowSize = Number.POSITIVE_INFINITY;
    if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_4__["isScheduler"])(arguments[3])) {
        scheduler = arguments[3];
    }
    if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_4__["isScheduler"])(arguments[2])) {
        scheduler = arguments[2];
    }
    else if (Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_3__["isNumeric"])(arguments[2])) {
        maxWindowSize = arguments[2];
    }
    if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_4__["isScheduler"])(arguments[1])) {
        scheduler = arguments[1];
    }
    else if (Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_3__["isNumeric"])(arguments[1])) {
        windowCreationInterval = arguments[1];
    }
    return function windowTimeOperatorFunction(source) {
        return source.lift(new WindowTimeOperator(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler));
    };
}
class WindowTimeOperator {
    constructor(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
        this.windowTimeSpan = windowTimeSpan;
        this.windowCreationInterval = windowCreationInterval;
        this.maxWindowSize = maxWindowSize;
        this.scheduler = scheduler;
    }
    call(subscriber, source) {
        return source.subscribe(new WindowTimeSubscriber(subscriber, this.windowTimeSpan, this.windowCreationInterval, this.maxWindowSize, this.scheduler));
    }
}
class CountedSubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"] {
    constructor() {
        super(...arguments);
        this._numberOfNextedValues = 0;
    }
    next(value) {
        this._numberOfNextedValues++;
        super.next(value);
    }
    get numberOfNextedValues() {
        return this._numberOfNextedValues;
    }
}
class WindowTimeSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_2__["Subscriber"] {
    constructor(destination, windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
        super(destination);
        this.destination = destination;
        this.windowTimeSpan = windowTimeSpan;
        this.windowCreationInterval = windowCreationInterval;
        this.maxWindowSize = maxWindowSize;
        this.scheduler = scheduler;
        this.windows = [];
        const window = this.openWindow();
        if (windowCreationInterval !== null && windowCreationInterval >= 0) {
            const closeState = { subscriber: this, window, context: null };
            const creationState = { windowTimeSpan, windowCreationInterval, subscriber: this, scheduler };
            this.add(scheduler.schedule(dispatchWindowClose, windowTimeSpan, closeState));
            this.add(scheduler.schedule(dispatchWindowCreation, windowCreationInterval, creationState));
        }
        else {
            const timeSpanOnlyState = { subscriber: this, window, windowTimeSpan };
            this.add(scheduler.schedule(dispatchWindowTimeSpanOnly, windowTimeSpan, timeSpanOnlyState));
        }
    }
    _next(value) {
        const windows = this.windows;
        const len = windows.length;
        for (let i = 0; i < len; i++) {
            const window = windows[i];
            if (!window.closed) {
                window.next(value);
                if (window.numberOfNextedValues >= this.maxWindowSize) {
                    this.closeWindow(window);
                }
            }
        }
    }
    _error(err) {
        const windows = this.windows;
        while (windows.length > 0) {
            windows.shift().error(err);
        }
        this.destination.error(err);
    }
    _complete() {
        const windows = this.windows;
        while (windows.length > 0) {
            const window = windows.shift();
            if (!window.closed) {
                window.complete();
            }
        }
        this.destination.complete();
    }
    openWindow() {
        const window = new CountedSubject();
        this.windows.push(window);
        const destination = this.destination;
        destination.next(window);
        return window;
    }
    closeWindow(window) {
        window.complete();
        const windows = this.windows;
        windows.splice(windows.indexOf(window), 1);
    }
}
function dispatchWindowTimeSpanOnly(state) {
    const { subscriber, windowTimeSpan, window } = state;
    if (window) {
        subscriber.closeWindow(window);
    }
    state.window = subscriber.openWindow();
    this.schedule(state, windowTimeSpan);
}
function dispatchWindowCreation(state) {
    const { windowTimeSpan, subscriber, scheduler, windowCreationInterval } = state;
    const window = subscriber.openWindow();
    const action = this;
    let context = { action, subscription: null };
    const timeSpanState = { subscriber, window, context };
    context.subscription = scheduler.schedule(dispatchWindowClose, windowTimeSpan, timeSpanState);
    action.add(context.subscription);
    action.schedule(state, windowCreationInterval);
}
function dispatchWindowClose(state) {
    const { subscriber, window, context } = state;
    if (context && context.action && context.subscription) {
        context.action.remove(context.subscription);
    }
    subscriber.closeWindow(window);
}
//# sourceMappingURL=windowTime.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/windowToggle.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/windowToggle.js ***!
  \***********************************************************************/
/*! exports provided: windowToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowToggle", function() { return windowToggle; });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subject */ "./node_modules/rxjs/_esm2015/internal/Subject.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm2015/internal/Subscription.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm2015/internal/OuterSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js");




function windowToggle(openings, closingSelector) {
    return (source) => source.lift(new WindowToggleOperator(openings, closingSelector));
}
class WindowToggleOperator {
    constructor(openings, closingSelector) {
        this.openings = openings;
        this.closingSelector = closingSelector;
    }
    call(subscriber, source) {
        return source.subscribe(new WindowToggleSubscriber(subscriber, this.openings, this.closingSelector));
    }
}
class WindowToggleSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__["OuterSubscriber"] {
    constructor(destination, openings, closingSelector) {
        super(destination);
        this.openings = openings;
        this.closingSelector = closingSelector;
        this.contexts = [];
        this.add(this.openSubscription = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__["subscribeToResult"])(this, openings, openings));
    }
    _next(value) {
        const { contexts } = this;
        if (contexts) {
            const len = contexts.length;
            for (let i = 0; i < len; i++) {
                contexts[i].window.next(value);
            }
        }
    }
    _error(err) {
        const { contexts } = this;
        this.contexts = null;
        if (contexts) {
            const len = contexts.length;
            let index = -1;
            while (++index < len) {
                const context = contexts[index];
                context.window.error(err);
                context.subscription.unsubscribe();
            }
        }
        super._error(err);
    }
    _complete() {
        const { contexts } = this;
        this.contexts = null;
        if (contexts) {
            const len = contexts.length;
            let index = -1;
            while (++index < len) {
                const context = contexts[index];
                context.window.complete();
                context.subscription.unsubscribe();
            }
        }
        super._complete();
    }
    _unsubscribe() {
        const { contexts } = this;
        this.contexts = null;
        if (contexts) {
            const len = contexts.length;
            let index = -1;
            while (++index < len) {
                const context = contexts[index];
                context.window.unsubscribe();
                context.subscription.unsubscribe();
            }
        }
    }
    notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (outerValue === this.openings) {
            let closingNotifier;
            try {
                const { closingSelector } = this;
                closingNotifier = closingSelector(innerValue);
            }
            catch (e) {
                return this.error(e);
            }
            const window = new _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
            const subscription = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
            const context = { window, subscription };
            this.contexts.push(context);
            const innerSubscription = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__["subscribeToResult"])(this, closingNotifier, context);
            if (innerSubscription.closed) {
                this.closeWindow(this.contexts.length - 1);
            }
            else {
                innerSubscription.context = context;
                subscription.add(innerSubscription);
            }
            this.destination.next(window);
        }
        else {
            this.closeWindow(this.contexts.indexOf(outerValue));
        }
    }
    notifyError(err) {
        this.error(err);
    }
    notifyComplete(inner) {
        if (inner !== this.openSubscription) {
            this.closeWindow(this.contexts.indexOf(inner.context));
        }
    }
    closeWindow(index) {
        if (index === -1) {
            return;
        }
        const { contexts } = this;
        const context = contexts[index];
        const { window, subscription } = context;
        contexts.splice(index, 1);
        window.complete();
        subscription.unsubscribe();
    }
}
//# sourceMappingURL=windowToggle.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/windowWhen.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/windowWhen.js ***!
  \*********************************************************************/
/*! exports provided: windowWhen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowWhen", function() { return windowWhen; });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subject */ "./node_modules/rxjs/_esm2015/internal/Subject.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm2015/internal/OuterSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js");



function windowWhen(closingSelector) {
    return function windowWhenOperatorFunction(source) {
        return source.lift(new WindowOperator(closingSelector));
    };
}
class WindowOperator {
    constructor(closingSelector) {
        this.closingSelector = closingSelector;
    }
    call(subscriber, source) {
        return source.subscribe(new WindowSubscriber(subscriber, this.closingSelector));
    }
}
class WindowSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_1__["OuterSubscriber"] {
    constructor(destination, closingSelector) {
        super(destination);
        this.destination = destination;
        this.closingSelector = closingSelector;
        this.openWindow();
    }
    notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.openWindow(innerSub);
    }
    notifyError(error, innerSub) {
        this._error(error);
    }
    notifyComplete(innerSub) {
        this.openWindow(innerSub);
    }
    _next(value) {
        this.window.next(value);
    }
    _error(err) {
        this.window.error(err);
        this.destination.error(err);
        this.unsubscribeClosingNotification();
    }
    _complete() {
        this.window.complete();
        this.destination.complete();
        this.unsubscribeClosingNotification();
    }
    unsubscribeClosingNotification() {
        if (this.closingNotification) {
            this.closingNotification.unsubscribe();
        }
    }
    openWindow(innerSub = null) {
        if (innerSub) {
            this.remove(innerSub);
            innerSub.unsubscribe();
        }
        const prevWindow = this.window;
        if (prevWindow) {
            prevWindow.complete();
        }
        const window = this.window = new _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.destination.next(window);
        let closingNotifier;
        try {
            const { closingSelector } = this;
            closingNotifier = closingSelector();
        }
        catch (e) {
            this.destination.error(e);
            this.window.error(e);
            return;
        }
        this.add(this.closingNotification = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_2__["subscribeToResult"])(this, closingNotifier));
    }
}
//# sourceMappingURL=windowWhen.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/withLatestFrom.js":
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/withLatestFrom.js ***!
  \*************************************************************************/
/*! exports provided: withLatestFrom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withLatestFrom", function() { return withLatestFrom; });
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm2015/internal/OuterSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js");


function withLatestFrom(...args) {
    return (source) => {
        let project;
        if (typeof args[args.length - 1] === 'function') {
            project = args.pop();
        }
        const observables = args;
        return source.lift(new WithLatestFromOperator(observables, project));
    };
}
class WithLatestFromOperator {
    constructor(observables, project) {
        this.observables = observables;
        this.project = project;
    }
    call(subscriber, source) {
        return source.subscribe(new WithLatestFromSubscriber(subscriber, this.observables, this.project));
    }
}
class WithLatestFromSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__["OuterSubscriber"] {
    constructor(destination, observables, project) {
        super(destination);
        this.observables = observables;
        this.project = project;
        this.toRespond = [];
        const len = observables.length;
        this.values = new Array(len);
        for (let i = 0; i < len; i++) {
            this.toRespond.push(i);
        }
        for (let i = 0; i < len; i++) {
            let observable = observables[i];
            this.add(Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__["subscribeToResult"])(this, observable, observable, i));
        }
    }
    notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.values[outerIndex] = innerValue;
        const toRespond = this.toRespond;
        if (toRespond.length > 0) {
            const found = toRespond.indexOf(outerIndex);
            if (found !== -1) {
                toRespond.splice(found, 1);
            }
        }
    }
    notifyComplete() {
    }
    _next(value) {
        if (this.toRespond.length === 0) {
            const args = [value, ...this.values];
            if (this.project) {
                this._tryProject(args);
            }
            else {
                this.destination.next(args);
            }
        }
    }
    _tryProject(args) {
        let result;
        try {
            result = this.project.apply(this, args);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    }
}
//# sourceMappingURL=withLatestFrom.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/zip.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/zip.js ***!
  \**************************************************************/
/*! exports provided: zip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return zip; });
/* harmony import */ var _observable_zip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/zip */ "./node_modules/rxjs/_esm2015/internal/observable/zip.js");

function zip(...observables) {
    return function zipOperatorFunction(source) {
        return source.lift.call(Object(_observable_zip__WEBPACK_IMPORTED_MODULE_0__["zip"])(source, ...observables));
    };
}
//# sourceMappingURL=zip.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/operators/zipAll.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/zipAll.js ***!
  \*****************************************************************/
/*! exports provided: zipAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zipAll", function() { return zipAll; });
/* harmony import */ var _observable_zip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/zip */ "./node_modules/rxjs/_esm2015/internal/observable/zip.js");

function zipAll(project) {
    return (source) => source.lift(new _observable_zip__WEBPACK_IMPORTED_MODULE_0__["ZipOperator"](project));
}
//# sourceMappingURL=zipAll.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/scheduler/Action.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/Action.js ***!
  \*****************************************************************/
/*! exports provided: Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm2015/internal/Subscription.js");

class Action extends _Subscription__WEBPACK_IMPORTED_MODULE_0__["Subscription"] {
    constructor(scheduler, work) {
        super();
    }
    schedule(state, delay = 0) {
        return this;
    }
}
//# sourceMappingURL=Action.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/scheduler/AnimationFrameAction.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AnimationFrameAction.js ***!
  \*******************************************************************************/
/*! exports provided: AnimationFrameAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationFrameAction", function() { return AnimationFrameAction; });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js");

class AnimationFrameAction extends _AsyncAction__WEBPACK_IMPORTED_MODULE_0__["AsyncAction"] {
    constructor(scheduler, work) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    requestAsyncId(scheduler, id, delay = 0) {
        if (delay !== null && delay > 0) {
            return super.requestAsyncId(scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(() => scheduler.flush(null)));
    }
    recycleAsyncId(scheduler, id, delay = 0) {
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return super.recycleAsyncId(scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            cancelAnimationFrame(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    }
}
//# sourceMappingURL=AnimationFrameAction.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/scheduler/AnimationFrameScheduler.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AnimationFrameScheduler.js ***!
  \**********************************************************************************/
/*! exports provided: AnimationFrameScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationFrameScheduler", function() { return AnimationFrameScheduler; });
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js");

class AnimationFrameScheduler extends _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__["AsyncScheduler"] {
    flush(action) {
        this.active = true;
        this.scheduled = undefined;
        const { actions } = this;
        let error;
        let index = -1;
        let count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    }
}
//# sourceMappingURL=AnimationFrameScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/scheduler/AsapAction.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsapAction.js ***!
  \*********************************************************************/
/*! exports provided: AsapAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsapAction", function() { return AsapAction; });
/* harmony import */ var _util_Immediate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Immediate */ "./node_modules/rxjs/_esm2015/internal/util/Immediate.js");
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js");


class AsapAction extends _AsyncAction__WEBPACK_IMPORTED_MODULE_1__["AsyncAction"] {
    constructor(scheduler, work) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    requestAsyncId(scheduler, id, delay = 0) {
        if (delay !== null && delay > 0) {
            return super.requestAsyncId(scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = _util_Immediate__WEBPACK_IMPORTED_MODULE_0__["Immediate"].setImmediate(scheduler.flush.bind(scheduler, null)));
    }
    recycleAsyncId(scheduler, id, delay = 0) {
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return super.recycleAsyncId(scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            _util_Immediate__WEBPACK_IMPORTED_MODULE_0__["Immediate"].clearImmediate(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    }
}
//# sourceMappingURL=AsapAction.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/scheduler/AsapScheduler.js":
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsapScheduler.js ***!
  \************************************************************************/
/*! exports provided: AsapScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsapScheduler", function() { return AsapScheduler; });
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js");

class AsapScheduler extends _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__["AsyncScheduler"] {
    flush(action) {
        this.active = true;
        this.scheduled = undefined;
        const { actions } = this;
        let error;
        let index = -1;
        let count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    }
}
//# sourceMappingURL=AsapScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js ***!
  \**********************************************************************/
/*! exports provided: AsyncAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncAction", function() { return AsyncAction; });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ "./node_modules/rxjs/_esm2015/internal/scheduler/Action.js");

class AsyncAction extends _Action__WEBPACK_IMPORTED_MODULE_0__["Action"] {
    constructor(scheduler, work) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.pending = false;
    }
    schedule(state, delay = 0) {
        if (this.closed) {
            return this;
        }
        this.state = state;
        const id = this.id;
        const scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    }
    requestAsyncId(scheduler, id, delay = 0) {
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    }
    recycleAsyncId(scheduler, id, delay = 0) {
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
        return undefined;
    }
    execute(state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        const error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    }
    _execute(state, delay) {
        let errored = false;
        let errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    }
    _unsubscribe() {
        const id = this.id;
        const scheduler = this.scheduler;
        const actions = scheduler.actions;
        const index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    }
}
//# sourceMappingURL=AsyncAction.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js":
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js ***!
  \*************************************************************************/
/*! exports provided: AsyncScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncScheduler", function() { return AsyncScheduler; });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scheduler */ "./node_modules/rxjs/_esm2015/internal/Scheduler.js");

class AsyncScheduler extends _Scheduler__WEBPACK_IMPORTED_MODULE_0__["Scheduler"] {
    constructor(SchedulerAction, now = _Scheduler__WEBPACK_IMPORTED_MODULE_0__["Scheduler"].now) {
        super(SchedulerAction, () => {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        });
        this.actions = [];
        this.active = false;
        this.scheduled = undefined;
    }
    schedule(work, delay = 0, state) {
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
            return super.schedule(work, delay, state);
        }
    }
    flush(action) {
        const { actions } = this;
        if (this.active) {
            actions.push(action);
            return;
        }
        let error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    }
}
//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/scheduler/QueueAction.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/QueueAction.js ***!
  \**********************************************************************/
/*! exports provided: QueueAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueAction", function() { return QueueAction; });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js");

class QueueAction extends _AsyncAction__WEBPACK_IMPORTED_MODULE_0__["AsyncAction"] {
    constructor(scheduler, work) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    schedule(state, delay = 0) {
        if (delay > 0) {
            return super.schedule(state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    }
    execute(state, delay) {
        return (delay > 0 || this.closed) ?
            super.execute(state, delay) :
            this._execute(state, delay);
    }
    requestAsyncId(scheduler, id, delay = 0) {
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return super.requestAsyncId(scheduler, id, delay);
        }
        return scheduler.flush(this);
    }
}
//# sourceMappingURL=QueueAction.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/scheduler/QueueScheduler.js":
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/QueueScheduler.js ***!
  \*************************************************************************/
/*! exports provided: QueueScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueScheduler", function() { return QueueScheduler; });
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js");

class QueueScheduler extends _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__["AsyncScheduler"] {
}
//# sourceMappingURL=QueueScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/scheduler/VirtualTimeScheduler.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/VirtualTimeScheduler.js ***!
  \*******************************************************************************/
/*! exports provided: VirtualTimeScheduler, VirtualAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualTimeScheduler", function() { return VirtualTimeScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualAction", function() { return VirtualAction; });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js");
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js");


class VirtualTimeScheduler extends _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__["AsyncScheduler"] {
    constructor(SchedulerAction = VirtualAction, maxFrames = Number.POSITIVE_INFINITY) {
        super(SchedulerAction, () => this.frame);
        this.maxFrames = maxFrames;
        this.frame = 0;
        this.index = -1;
    }
    flush() {
        const { actions, maxFrames } = this;
        let error, action;
        while ((action = actions[0]) && action.delay <= maxFrames) {
            actions.shift();
            this.frame = action.delay;
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        }
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    }
}
VirtualTimeScheduler.frameTimeFactor = 10;
class VirtualAction extends _AsyncAction__WEBPACK_IMPORTED_MODULE_0__["AsyncAction"] {
    constructor(scheduler, work, index = scheduler.index += 1) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.index = index;
        this.active = true;
        this.index = scheduler.index = index;
    }
    schedule(state, delay = 0) {
        if (!this.id) {
            return super.schedule(state, delay);
        }
        this.active = false;
        const action = new VirtualAction(this.scheduler, this.work);
        this.add(action);
        return action.schedule(state, delay);
    }
    requestAsyncId(scheduler, id, delay = 0) {
        this.delay = scheduler.frame + delay;
        const { actions } = scheduler;
        actions.push(this);
        actions.sort(VirtualAction.sortActions);
        return true;
    }
    recycleAsyncId(scheduler, id, delay = 0) {
        return undefined;
    }
    _execute(state, delay) {
        if (this.active === true) {
            return super._execute(state, delay);
        }
    }
    static sortActions(a, b) {
        if (a.delay === b.delay) {
            if (a.index === b.index) {
                return 0;
            }
            else if (a.index > b.index) {
                return 1;
            }
            else {
                return -1;
            }
        }
        else if (a.delay > b.delay) {
            return 1;
        }
        else {
            return -1;
        }
    }
}
//# sourceMappingURL=VirtualTimeScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/scheduler/animationFrame.js":
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/animationFrame.js ***!
  \*************************************************************************/
/*! exports provided: animationFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationFrame", function() { return animationFrame; });
/* harmony import */ var _AnimationFrameAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimationFrameAction */ "./node_modules/rxjs/_esm2015/internal/scheduler/AnimationFrameAction.js");
/* harmony import */ var _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimationFrameScheduler */ "./node_modules/rxjs/_esm2015/internal/scheduler/AnimationFrameScheduler.js");


const animationFrame = new _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_1__["AnimationFrameScheduler"](_AnimationFrameAction__WEBPACK_IMPORTED_MODULE_0__["AnimationFrameAction"]);
//# sourceMappingURL=animationFrame.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/scheduler/asap.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/asap.js ***!
  \***************************************************************/
/*! exports provided: asap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asap", function() { return asap; });
/* harmony import */ var _AsapAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsapAction */ "./node_modules/rxjs/_esm2015/internal/scheduler/AsapAction.js");
/* harmony import */ var _AsapScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsapScheduler */ "./node_modules/rxjs/_esm2015/internal/scheduler/AsapScheduler.js");


const asap = new _AsapScheduler__WEBPACK_IMPORTED_MODULE_1__["AsapScheduler"](_AsapAction__WEBPACK_IMPORTED_MODULE_0__["AsapAction"]);
//# sourceMappingURL=asap.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/scheduler/async.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/async.js ***!
  \****************************************************************/
/*! exports provided: async */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "async", function() { return async; });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js");
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js");


const async = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__["AsyncScheduler"](_AsyncAction__WEBPACK_IMPORTED_MODULE_0__["AsyncAction"]);
//# sourceMappingURL=async.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/scheduler/queue.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/queue.js ***!
  \****************************************************************/
/*! exports provided: queue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queue", function() { return queue; });
/* harmony import */ var _QueueAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QueueAction */ "./node_modules/rxjs/_esm2015/internal/scheduler/QueueAction.js");
/* harmony import */ var _QueueScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueueScheduler */ "./node_modules/rxjs/_esm2015/internal/scheduler/QueueScheduler.js");


const queue = new _QueueScheduler__WEBPACK_IMPORTED_MODULE_1__["QueueScheduler"](_QueueAction__WEBPACK_IMPORTED_MODULE_0__["QueueAction"]);
//# sourceMappingURL=queue.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/symbol/iterator.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/symbol/iterator.js ***!
  \****************************************************************/
/*! exports provided: getSymbolIterator, iterator, $$iterator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSymbolIterator", function() { return getSymbolIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterator", function() { return iterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$iterator", function() { return $$iterator; });
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
const iterator = getSymbolIterator();
const $$iterator = iterator;
//# sourceMappingURL=iterator.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/symbol/observable.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/symbol/observable.js ***!
  \******************************************************************/
/*! exports provided: observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return observable; });
const observable = typeof Symbol === 'function' && Symbol.observable || '@@observable';
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/symbol/rxSubscriber.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/symbol/rxSubscriber.js ***!
  \********************************************************************/
/*! exports provided: rxSubscriber, $$rxSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rxSubscriber", function() { return rxSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$rxSubscriber", function() { return $$rxSubscriber; });
const rxSubscriber = typeof Symbol === 'function'
    ? Symbol('rxSubscriber')
    : '@@rxSubscriber_' + Math.random();
const $$rxSubscriber = rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/util/ArgumentOutOfRangeError.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/ArgumentOutOfRangeError.js ***!
  \*****************************************************************************/
/*! exports provided: ArgumentOutOfRangeError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArgumentOutOfRangeError", function() { return ArgumentOutOfRangeError; });
function ArgumentOutOfRangeErrorImpl() {
    Error.call(this);
    this.message = 'argument out of range';
    this.name = 'ArgumentOutOfRangeError';
    return this;
}
ArgumentOutOfRangeErrorImpl.prototype = Object.create(Error.prototype);
const ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;
//# sourceMappingURL=ArgumentOutOfRangeError.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/util/EmptyError.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/EmptyError.js ***!
  \****************************************************************/
/*! exports provided: EmptyError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyError", function() { return EmptyError; });
function EmptyErrorImpl() {
    Error.call(this);
    this.message = 'no elements in sequence';
    this.name = 'EmptyError';
    return this;
}
EmptyErrorImpl.prototype = Object.create(Error.prototype);
const EmptyError = EmptyErrorImpl;
//# sourceMappingURL=EmptyError.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/util/Immediate.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/Immediate.js ***!
  \***************************************************************/
/*! exports provided: Immediate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Immediate", function() { return Immediate; });
let nextHandle = 1;
const tasksByHandle = {};
function runIfPresent(handle) {
    const cb = tasksByHandle[handle];
    if (cb) {
        cb();
    }
}
const Immediate = {
    setImmediate(cb) {
        const handle = nextHandle++;
        tasksByHandle[handle] = cb;
        Promise.resolve().then(() => runIfPresent(handle));
        return handle;
    },
    clearImmediate(handle) {
        delete tasksByHandle[handle];
    },
};
//# sourceMappingURL=Immediate.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/util/ObjectUnsubscribedError.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/ObjectUnsubscribedError.js ***!
  \*****************************************************************************/
/*! exports provided: ObjectUnsubscribedError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectUnsubscribedError", function() { return ObjectUnsubscribedError; });
function ObjectUnsubscribedErrorImpl() {
    Error.call(this);
    this.message = 'object unsubscribed';
    this.name = 'ObjectUnsubscribedError';
    return this;
}
ObjectUnsubscribedErrorImpl.prototype = Object.create(Error.prototype);
const ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;
//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/util/TimeoutError.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/TimeoutError.js ***!
  \******************************************************************/
/*! exports provided: TimeoutError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return TimeoutError; });
function TimeoutErrorImpl() {
    Error.call(this);
    this.message = 'Timeout has occurred';
    this.name = 'TimeoutError';
    return this;
}
TimeoutErrorImpl.prototype = Object.create(Error.prototype);
const TimeoutError = TimeoutErrorImpl;
//# sourceMappingURL=TimeoutError.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/util/UnsubscriptionError.js":
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/UnsubscriptionError.js ***!
  \*************************************************************************/
/*! exports provided: UnsubscriptionError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsubscriptionError", function() { return UnsubscriptionError; });
function UnsubscriptionErrorImpl(errors) {
    Error.call(this);
    this.message = errors ?
        `${errors.length} errors occurred during unsubscription:
${errors.map((err, i) => `${i + 1}) ${err.toString()}`).join('\n  ')}` : '';
    this.name = 'UnsubscriptionError';
    this.errors = errors;
    return this;
}
UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
const UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/util/canReportError.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/canReportError.js ***!
  \********************************************************************/
/*! exports provided: canReportError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canReportError", function() { return canReportError; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");

function canReportError(observer) {
    while (observer) {
        const { closed, destination, isStopped } = observer;
        if (closed || isStopped) {
            return false;
        }
        else if (destination && destination instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}
//# sourceMappingURL=canReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/util/hostReportError.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/hostReportError.js ***!
  \*********************************************************************/
/*! exports provided: hostReportError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hostReportError", function() { return hostReportError; });
function hostReportError(err) {
    setTimeout(() => { throw err; });
}
//# sourceMappingURL=hostReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/util/identity.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/identity.js ***!
  \**************************************************************/
/*! exports provided: identity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
function identity(x) {
    return x;
}
//# sourceMappingURL=identity.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/util/isArray.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/isArray.js ***!
  \*************************************************************/
/*! exports provided: isArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
const isArray = Array.isArray || ((x) => x && typeof x.length === 'number');
//# sourceMappingURL=isArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/util/isArrayLike.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/isArrayLike.js ***!
  \*****************************************************************/
/*! exports provided: isArrayLike */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayLike", function() { return isArrayLike; });
const isArrayLike = ((x) => x && typeof x.length === 'number' && typeof x !== 'function');
//# sourceMappingURL=isArrayLike.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/util/isDate.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/isDate.js ***!
  \************************************************************/
/*! exports provided: isDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return isDate; });
function isDate(value) {
    return value instanceof Date && !isNaN(+value);
}
//# sourceMappingURL=isDate.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/util/isFunction.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/isFunction.js ***!
  \****************************************************************/
/*! exports provided: isFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
function isFunction(x) {
    return typeof x === 'function';
}
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/util/isInteropObservable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/isInteropObservable.js ***!
  \*************************************************************************/
/*! exports provided: isInteropObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInteropObservable", function() { return isInteropObservable; });
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/_esm2015/internal/symbol/observable.js");

function isInteropObservable(input) {
    return input && typeof input[_symbol_observable__WEBPACK_IMPORTED_MODULE_0__["observable"]] === 'function';
}
//# sourceMappingURL=isInteropObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/util/isIterable.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/isIterable.js ***!
  \****************************************************************/
/*! exports provided: isIterable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return isIterable; });
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/_esm2015/internal/symbol/iterator.js");

function isIterable(input) {
    return input && typeof input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__["iterator"]] === 'function';
}
//# sourceMappingURL=isIterable.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/util/isNumeric.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/isNumeric.js ***!
  \***************************************************************/
/*! exports provided: isNumeric */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumeric", function() { return isNumeric; });
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray */ "./node_modules/rxjs/_esm2015/internal/util/isArray.js");

function isNumeric(val) {
    return !Object(_isArray__WEBPACK_IMPORTED_MODULE_0__["isArray"])(val) && (val - parseFloat(val) + 1) >= 0;
}
//# sourceMappingURL=isNumeric.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/util/isObject.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/isObject.js ***!
  \**************************************************************/
/*! exports provided: isObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
function isObject(x) {
    return x !== null && typeof x === 'object';
}
//# sourceMappingURL=isObject.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/util/isObservable.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/isObservable.js ***!
  \******************************************************************/
/*! exports provided: isObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return isObservable; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm2015/internal/Observable.js");

function isObservable(obj) {
    return !!obj && (obj instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"] || (typeof obj.lift === 'function' && typeof obj.subscribe === 'function'));
}
//# sourceMappingURL=isObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/util/isPromise.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/isPromise.js ***!
  \***************************************************************/
/*! exports provided: isPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return isPromise; });
function isPromise(value) {
    return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}
//# sourceMappingURL=isPromise.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/util/isScheduler.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/isScheduler.js ***!
  \*****************************************************************/
/*! exports provided: isScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScheduler", function() { return isScheduler; });
function isScheduler(value) {
    return value && typeof value.schedule === 'function';
}
//# sourceMappingURL=isScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/util/noop.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/noop.js ***!
  \**********************************************************/
/*! exports provided: noop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
function noop() { }
//# sourceMappingURL=noop.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/util/not.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/not.js ***!
  \*********************************************************/
/*! exports provided: not */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not", function() { return not; });
function not(pred, thisArg) {
    function notPred() {
        return !(notPred.pred.apply(notPred.thisArg, arguments));
    }
    notPred.pred = pred;
    notPred.thisArg = thisArg;
    return notPred;
}
//# sourceMappingURL=not.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/util/pipe.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/pipe.js ***!
  \**********************************************************/
/*! exports provided: pipe, pipeFromArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipeFromArray", function() { return pipeFromArray; });
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noop */ "./node_modules/rxjs/_esm2015/internal/util/noop.js");

function pipe(...fns) {
    return pipeFromArray(fns);
}
function pipeFromArray(fns) {
    if (!fns) {
        return _noop__WEBPACK_IMPORTED_MODULE_0__["noop"];
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce((prev, fn) => fn(prev), input);
    };
}
//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/util/subscribeTo.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/subscribeTo.js ***!
  \*****************************************************************/
/*! exports provided: subscribeTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeTo", function() { return subscribeTo; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _subscribeToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscribeToArray */ "./node_modules/rxjs/_esm2015/internal/util/subscribeToArray.js");
/* harmony import */ var _subscribeToPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscribeToPromise */ "./node_modules/rxjs/_esm2015/internal/util/subscribeToPromise.js");
/* harmony import */ var _subscribeToIterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscribeToIterable */ "./node_modules/rxjs/_esm2015/internal/util/subscribeToIterable.js");
/* harmony import */ var _subscribeToObservable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subscribeToObservable */ "./node_modules/rxjs/_esm2015/internal/util/subscribeToObservable.js");
/* harmony import */ var _isArrayLike__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isArrayLike */ "./node_modules/rxjs/_esm2015/internal/util/isArrayLike.js");
/* harmony import */ var _isPromise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isPromise */ "./node_modules/rxjs/_esm2015/internal/util/isPromise.js");
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./isObject */ "./node_modules/rxjs/_esm2015/internal/util/isObject.js");
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/_esm2015/internal/symbol/iterator.js");
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/_esm2015/internal/symbol/observable.js");










const subscribeTo = (result) => {
    if (result instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]) {
        return (subscriber) => {
            if (result._isScalar) {
                subscriber.next(result.value);
                subscriber.complete();
                return undefined;
            }
            else {
                return result.subscribe(subscriber);
            }
        };
    }
    else if (!!result && typeof result[_symbol_observable__WEBPACK_IMPORTED_MODULE_9__["observable"]] === 'function') {
        return Object(_subscribeToObservable__WEBPACK_IMPORTED_MODULE_4__["subscribeToObservable"])(result);
    }
    else if (Object(_isArrayLike__WEBPACK_IMPORTED_MODULE_5__["isArrayLike"])(result)) {
        return Object(_subscribeToArray__WEBPACK_IMPORTED_MODULE_1__["subscribeToArray"])(result);
    }
    else if (Object(_isPromise__WEBPACK_IMPORTED_MODULE_6__["isPromise"])(result)) {
        return Object(_subscribeToPromise__WEBPACK_IMPORTED_MODULE_2__["subscribeToPromise"])(result);
    }
    else if (!!result && typeof result[_symbol_iterator__WEBPACK_IMPORTED_MODULE_8__["iterator"]] === 'function') {
        return Object(_subscribeToIterable__WEBPACK_IMPORTED_MODULE_3__["subscribeToIterable"])(result);
    }
    else {
        const value = Object(_isObject__WEBPACK_IMPORTED_MODULE_7__["isObject"])(result) ? 'an invalid object' : `'${result}'`;
        const msg = `You provided ${value} where a stream was expected.`
            + ' You can provide an Observable, Promise, Array, or Iterable.';
        throw new TypeError(msg);
    }
};
//# sourceMappingURL=subscribeTo.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/util/subscribeToArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/subscribeToArray.js ***!
  \**********************************************************************/
/*! exports provided: subscribeToArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToArray", function() { return subscribeToArray; });
const subscribeToArray = (array) => (subscriber) => {
    for (let i = 0, len = array.length; i < len && !subscriber.closed; i++) {
        subscriber.next(array[i]);
    }
    if (!subscriber.closed) {
        subscriber.complete();
    }
};
//# sourceMappingURL=subscribeToArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/util/subscribeToIterable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/subscribeToIterable.js ***!
  \*************************************************************************/
/*! exports provided: subscribeToIterable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToIterable", function() { return subscribeToIterable; });
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/_esm2015/internal/symbol/iterator.js");

const subscribeToIterable = (iterable) => (subscriber) => {
    const iterator = iterable[_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__["iterator"]]();
    do {
        const item = iterator.next();
        if (item.done) {
            subscriber.complete();
            break;
        }
        subscriber.next(item.value);
        if (subscriber.closed) {
            break;
        }
    } while (true);
    if (typeof iterator.return === 'function') {
        subscriber.add(() => {
            if (iterator.return) {
                iterator.return();
            }
        });
    }
    return subscriber;
};
//# sourceMappingURL=subscribeToIterable.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/util/subscribeToObservable.js":
/*!***************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/subscribeToObservable.js ***!
  \***************************************************************************/
/*! exports provided: subscribeToObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToObservable", function() { return subscribeToObservable; });
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/_esm2015/internal/symbol/observable.js");

const subscribeToObservable = (obj) => (subscriber) => {
    const obs = obj[_symbol_observable__WEBPACK_IMPORTED_MODULE_0__["observable"]]();
    if (typeof obs.subscribe !== 'function') {
        throw new TypeError('Provided object does not correctly implement Symbol.observable');
    }
    else {
        return obs.subscribe(subscriber);
    }
};
//# sourceMappingURL=subscribeToObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/util/subscribeToPromise.js":
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/subscribeToPromise.js ***!
  \************************************************************************/
/*! exports provided: subscribeToPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToPromise", function() { return subscribeToPromise; });
/* harmony import */ var _hostReportError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hostReportError */ "./node_modules/rxjs/_esm2015/internal/util/hostReportError.js");

const subscribeToPromise = (promise) => (subscriber) => {
    promise.then((value) => {
        if (!subscriber.closed) {
            subscriber.next(value);
            subscriber.complete();
        }
    }, (err) => subscriber.error(err))
        .then(null, _hostReportError__WEBPACK_IMPORTED_MODULE_0__["hostReportError"]);
    return subscriber;
};
//# sourceMappingURL=subscribeToPromise.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js ***!
  \***********************************************************************/
/*! exports provided: subscribeToResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToResult", function() { return subscribeToResult; });
/* harmony import */ var _InnerSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../InnerSubscriber */ "./node_modules/rxjs/_esm2015/internal/InnerSubscriber.js");
/* harmony import */ var _subscribeTo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscribeTo */ "./node_modules/rxjs/_esm2015/internal/util/subscribeTo.js");


function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, destination = new _InnerSubscriber__WEBPACK_IMPORTED_MODULE_0__["InnerSubscriber"](outerSubscriber, outerValue, outerIndex)) {
    if (destination.closed) {
        return;
    }
    return Object(_subscribeTo__WEBPACK_IMPORTED_MODULE_1__["subscribeTo"])(result)(destination);
}
//# sourceMappingURL=subscribeToResult.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/internal/util/toSubscriber.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/toSubscriber.js ***!
  \******************************************************************/
/*! exports provided: toSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSubscriber", function() { return toSubscriber; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm2015/internal/Subscriber.js");
/* harmony import */ var _symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbol/rxSubscriber */ "./node_modules/rxjs/_esm2015/internal/symbol/rxSubscriber.js");
/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observer */ "./node_modules/rxjs/_esm2015/internal/Observer.js");



function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]) {
            return nextOrObserver;
        }
        if (nextOrObserver[_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__["rxSubscriber"]]) {
            return nextOrObserver[_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__["rxSubscriber"]]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"](_Observer__WEBPACK_IMPORTED_MODULE_2__["empty"]);
    }
    return new _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"](nextOrObserver, error, complete);
}
//# sourceMappingURL=toSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm2015/operators/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/operators/index.js ***!
  \*******************************************************/
/*! exports provided: audit, auditTime, buffer, bufferCount, bufferTime, bufferToggle, bufferWhen, catchError, combineAll, combineLatest, concat, concatAll, concatMap, concatMapTo, count, debounce, debounceTime, defaultIfEmpty, delay, delayWhen, dematerialize, distinct, distinctUntilChanged, distinctUntilKeyChanged, elementAt, endWith, every, exhaust, exhaustMap, expand, filter, finalize, find, findIndex, first, groupBy, ignoreElements, isEmpty, last, map, mapTo, materialize, max, merge, mergeAll, mergeMap, flatMap, mergeMapTo, mergeScan, min, multicast, observeOn, onErrorResumeNext, pairwise, partition, pluck, publish, publishBehavior, publishLast, publishReplay, race, reduce, repeat, repeatWhen, retry, retryWhen, refCount, sample, sampleTime, scan, sequenceEqual, share, shareReplay, single, skip, skipLast, skipUntil, skipWhile, startWith, subscribeOn, switchAll, switchMap, switchMapTo, take, takeLast, takeUntil, takeWhile, tap, throttle, throttleTime, throwIfEmpty, timeInterval, timeout, timeoutWith, timestamp, toArray, window, windowCount, windowTime, windowToggle, windowWhen, withLatestFrom, zip, zipAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_operators_audit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internal/operators/audit */ "./node_modules/rxjs/_esm2015/internal/operators/audit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "audit", function() { return _internal_operators_audit__WEBPACK_IMPORTED_MODULE_0__["audit"]; });

/* harmony import */ var _internal_operators_auditTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../internal/operators/auditTime */ "./node_modules/rxjs/_esm2015/internal/operators/auditTime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "auditTime", function() { return _internal_operators_auditTime__WEBPACK_IMPORTED_MODULE_1__["auditTime"]; });

/* harmony import */ var _internal_operators_buffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../internal/operators/buffer */ "./node_modules/rxjs/_esm2015/internal/operators/buffer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buffer", function() { return _internal_operators_buffer__WEBPACK_IMPORTED_MODULE_2__["buffer"]; });

/* harmony import */ var _internal_operators_bufferCount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../internal/operators/bufferCount */ "./node_modules/rxjs/_esm2015/internal/operators/bufferCount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bufferCount", function() { return _internal_operators_bufferCount__WEBPACK_IMPORTED_MODULE_3__["bufferCount"]; });

/* harmony import */ var _internal_operators_bufferTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../internal/operators/bufferTime */ "./node_modules/rxjs/_esm2015/internal/operators/bufferTime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bufferTime", function() { return _internal_operators_bufferTime__WEBPACK_IMPORTED_MODULE_4__["bufferTime"]; });

/* harmony import */ var _internal_operators_bufferToggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../internal/operators/bufferToggle */ "./node_modules/rxjs/_esm2015/internal/operators/bufferToggle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bufferToggle", function() { return _internal_operators_bufferToggle__WEBPACK_IMPORTED_MODULE_5__["bufferToggle"]; });

/* harmony import */ var _internal_operators_bufferWhen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../internal/operators/bufferWhen */ "./node_modules/rxjs/_esm2015/internal/operators/bufferWhen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bufferWhen", function() { return _internal_operators_bufferWhen__WEBPACK_IMPORTED_MODULE_6__["bufferWhen"]; });

/* harmony import */ var _internal_operators_catchError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../internal/operators/catchError */ "./node_modules/rxjs/_esm2015/internal/operators/catchError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "catchError", function() { return _internal_operators_catchError__WEBPACK_IMPORTED_MODULE_7__["catchError"]; });

/* harmony import */ var _internal_operators_combineAll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../internal/operators/combineAll */ "./node_modules/rxjs/_esm2015/internal/operators/combineAll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combineAll", function() { return _internal_operators_combineAll__WEBPACK_IMPORTED_MODULE_8__["combineAll"]; });

/* harmony import */ var _internal_operators_combineLatest__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../internal/operators/combineLatest */ "./node_modules/rxjs/_esm2015/internal/operators/combineLatest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combineLatest", function() { return _internal_operators_combineLatest__WEBPACK_IMPORTED_MODULE_9__["combineLatest"]; });

/* harmony import */ var _internal_operators_concat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../internal/operators/concat */ "./node_modules/rxjs/_esm2015/internal/operators/concat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return _internal_operators_concat__WEBPACK_IMPORTED_MODULE_10__["concat"]; });

/* harmony import */ var _internal_operators_concatAll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../internal/operators/concatAll */ "./node_modules/rxjs/_esm2015/internal/operators/concatAll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatAll", function() { return _internal_operators_concatAll__WEBPACK_IMPORTED_MODULE_11__["concatAll"]; });

/* harmony import */ var _internal_operators_concatMap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../internal/operators/concatMap */ "./node_modules/rxjs/_esm2015/internal/operators/concatMap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatMap", function() { return _internal_operators_concatMap__WEBPACK_IMPORTED_MODULE_12__["concatMap"]; });

/* harmony import */ var _internal_operators_concatMapTo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../internal/operators/concatMapTo */ "./node_modules/rxjs/_esm2015/internal/operators/concatMapTo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatMapTo", function() { return _internal_operators_concatMapTo__WEBPACK_IMPORTED_MODULE_13__["concatMapTo"]; });

/* harmony import */ var _internal_operators_count__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../internal/operators/count */ "./node_modules/rxjs/_esm2015/internal/operators/count.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "count", function() { return _internal_operators_count__WEBPACK_IMPORTED_MODULE_14__["count"]; });

/* harmony import */ var _internal_operators_debounce__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../internal/operators/debounce */ "./node_modules/rxjs/_esm2015/internal/operators/debounce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _internal_operators_debounce__WEBPACK_IMPORTED_MODULE_15__["debounce"]; });

/* harmony import */ var _internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../internal/operators/debounceTime */ "./node_modules/rxjs/_esm2015/internal/operators/debounceTime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounceTime", function() { return _internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_16__["debounceTime"]; });

/* harmony import */ var _internal_operators_defaultIfEmpty__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../internal/operators/defaultIfEmpty */ "./node_modules/rxjs/_esm2015/internal/operators/defaultIfEmpty.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultIfEmpty", function() { return _internal_operators_defaultIfEmpty__WEBPACK_IMPORTED_MODULE_17__["defaultIfEmpty"]; });

/* harmony import */ var _internal_operators_delay__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../internal/operators/delay */ "./node_modules/rxjs/_esm2015/internal/operators/delay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return _internal_operators_delay__WEBPACK_IMPORTED_MODULE_18__["delay"]; });

/* harmony import */ var _internal_operators_delayWhen__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../internal/operators/delayWhen */ "./node_modules/rxjs/_esm2015/internal/operators/delayWhen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delayWhen", function() { return _internal_operators_delayWhen__WEBPACK_IMPORTED_MODULE_19__["delayWhen"]; });

/* harmony import */ var _internal_operators_dematerialize__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../internal/operators/dematerialize */ "./node_modules/rxjs/_esm2015/internal/operators/dematerialize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dematerialize", function() { return _internal_operators_dematerialize__WEBPACK_IMPORTED_MODULE_20__["dematerialize"]; });

/* harmony import */ var _internal_operators_distinct__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../internal/operators/distinct */ "./node_modules/rxjs/_esm2015/internal/operators/distinct.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "distinct", function() { return _internal_operators_distinct__WEBPACK_IMPORTED_MODULE_21__["distinct"]; });

/* harmony import */ var _internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../internal/operators/distinctUntilChanged */ "./node_modules/rxjs/_esm2015/internal/operators/distinctUntilChanged.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "distinctUntilChanged", function() { return _internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_22__["distinctUntilChanged"]; });

/* harmony import */ var _internal_operators_distinctUntilKeyChanged__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../internal/operators/distinctUntilKeyChanged */ "./node_modules/rxjs/_esm2015/internal/operators/distinctUntilKeyChanged.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "distinctUntilKeyChanged", function() { return _internal_operators_distinctUntilKeyChanged__WEBPACK_IMPORTED_MODULE_23__["distinctUntilKeyChanged"]; });

/* harmony import */ var _internal_operators_elementAt__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../internal/operators/elementAt */ "./node_modules/rxjs/_esm2015/internal/operators/elementAt.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementAt", function() { return _internal_operators_elementAt__WEBPACK_IMPORTED_MODULE_24__["elementAt"]; });

/* harmony import */ var _internal_operators_endWith__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../internal/operators/endWith */ "./node_modules/rxjs/_esm2015/internal/operators/endWith.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endWith", function() { return _internal_operators_endWith__WEBPACK_IMPORTED_MODULE_25__["endWith"]; });

/* harmony import */ var _internal_operators_every__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../internal/operators/every */ "./node_modules/rxjs/_esm2015/internal/operators/every.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "every", function() { return _internal_operators_every__WEBPACK_IMPORTED_MODULE_26__["every"]; });

/* harmony import */ var _internal_operators_exhaust__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../internal/operators/exhaust */ "./node_modules/rxjs/_esm2015/internal/operators/exhaust.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exhaust", function() { return _internal_operators_exhaust__WEBPACK_IMPORTED_MODULE_27__["exhaust"]; });

/* harmony import */ var _internal_operators_exhaustMap__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../internal/operators/exhaustMap */ "./node_modules/rxjs/_esm2015/internal/operators/exhaustMap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exhaustMap", function() { return _internal_operators_exhaustMap__WEBPACK_IMPORTED_MODULE_28__["exhaustMap"]; });

/* harmony import */ var _internal_operators_expand__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../internal/operators/expand */ "./node_modules/rxjs/_esm2015/internal/operators/expand.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "expand", function() { return _internal_operators_expand__WEBPACK_IMPORTED_MODULE_29__["expand"]; });

/* harmony import */ var _internal_operators_filter__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../internal/operators/filter */ "./node_modules/rxjs/_esm2015/internal/operators/filter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _internal_operators_filter__WEBPACK_IMPORTED_MODULE_30__["filter"]; });

/* harmony import */ var _internal_operators_finalize__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../internal/operators/finalize */ "./node_modules/rxjs/_esm2015/internal/operators/finalize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "finalize", function() { return _internal_operators_finalize__WEBPACK_IMPORTED_MODULE_31__["finalize"]; });

/* harmony import */ var _internal_operators_find__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../internal/operators/find */ "./node_modules/rxjs/_esm2015/internal/operators/find.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "find", function() { return _internal_operators_find__WEBPACK_IMPORTED_MODULE_32__["find"]; });

/* harmony import */ var _internal_operators_findIndex__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../internal/operators/findIndex */ "./node_modules/rxjs/_esm2015/internal/operators/findIndex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return _internal_operators_findIndex__WEBPACK_IMPORTED_MODULE_33__["findIndex"]; });

/* harmony import */ var _internal_operators_first__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../internal/operators/first */ "./node_modules/rxjs/_esm2015/internal/operators/first.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "first", function() { return _internal_operators_first__WEBPACK_IMPORTED_MODULE_34__["first"]; });

/* harmony import */ var _internal_operators_groupBy__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../internal/operators/groupBy */ "./node_modules/rxjs/_esm2015/internal/operators/groupBy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return _internal_operators_groupBy__WEBPACK_IMPORTED_MODULE_35__["groupBy"]; });

/* harmony import */ var _internal_operators_ignoreElements__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../internal/operators/ignoreElements */ "./node_modules/rxjs/_esm2015/internal/operators/ignoreElements.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ignoreElements", function() { return _internal_operators_ignoreElements__WEBPACK_IMPORTED_MODULE_36__["ignoreElements"]; });

/* harmony import */ var _internal_operators_isEmpty__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../internal/operators/isEmpty */ "./node_modules/rxjs/_esm2015/internal/operators/isEmpty.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return _internal_operators_isEmpty__WEBPACK_IMPORTED_MODULE_37__["isEmpty"]; });

/* harmony import */ var _internal_operators_last__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../internal/operators/last */ "./node_modules/rxjs/_esm2015/internal/operators/last.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "last", function() { return _internal_operators_last__WEBPACK_IMPORTED_MODULE_38__["last"]; });

/* harmony import */ var _internal_operators_map__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../internal/operators/map */ "./node_modules/rxjs/_esm2015/internal/operators/map.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return _internal_operators_map__WEBPACK_IMPORTED_MODULE_39__["map"]; });

/* harmony import */ var _internal_operators_mapTo__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../internal/operators/mapTo */ "./node_modules/rxjs/_esm2015/internal/operators/mapTo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapTo", function() { return _internal_operators_mapTo__WEBPACK_IMPORTED_MODULE_40__["mapTo"]; });

/* harmony import */ var _internal_operators_materialize__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../internal/operators/materialize */ "./node_modules/rxjs/_esm2015/internal/operators/materialize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "materialize", function() { return _internal_operators_materialize__WEBPACK_IMPORTED_MODULE_41__["materialize"]; });

/* harmony import */ var _internal_operators_max__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../internal/operators/max */ "./node_modules/rxjs/_esm2015/internal/operators/max.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "max", function() { return _internal_operators_max__WEBPACK_IMPORTED_MODULE_42__["max"]; });

/* harmony import */ var _internal_operators_merge__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../internal/operators/merge */ "./node_modules/rxjs/_esm2015/internal/operators/merge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _internal_operators_merge__WEBPACK_IMPORTED_MODULE_43__["merge"]; });

/* harmony import */ var _internal_operators_mergeAll__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../internal/operators/mergeAll */ "./node_modules/rxjs/_esm2015/internal/operators/mergeAll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeAll", function() { return _internal_operators_mergeAll__WEBPACK_IMPORTED_MODULE_44__["mergeAll"]; });

/* harmony import */ var _internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../internal/operators/mergeMap */ "./node_modules/rxjs/_esm2015/internal/operators/mergeMap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeMap", function() { return _internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_45__["mergeMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flatMap", function() { return _internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_45__["mergeMap"]; });

/* harmony import */ var _internal_operators_mergeMapTo__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../internal/operators/mergeMapTo */ "./node_modules/rxjs/_esm2015/internal/operators/mergeMapTo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeMapTo", function() { return _internal_operators_mergeMapTo__WEBPACK_IMPORTED_MODULE_46__["mergeMapTo"]; });

/* harmony import */ var _internal_operators_mergeScan__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../internal/operators/mergeScan */ "./node_modules/rxjs/_esm2015/internal/operators/mergeScan.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeScan", function() { return _internal_operators_mergeScan__WEBPACK_IMPORTED_MODULE_47__["mergeScan"]; });

/* harmony import */ var _internal_operators_min__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../internal/operators/min */ "./node_modules/rxjs/_esm2015/internal/operators/min.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "min", function() { return _internal_operators_min__WEBPACK_IMPORTED_MODULE_48__["min"]; });

/* harmony import */ var _internal_operators_multicast__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../internal/operators/multicast */ "./node_modules/rxjs/_esm2015/internal/operators/multicast.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "multicast", function() { return _internal_operators_multicast__WEBPACK_IMPORTED_MODULE_49__["multicast"]; });

/* harmony import */ var _internal_operators_observeOn__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../internal/operators/observeOn */ "./node_modules/rxjs/_esm2015/internal/operators/observeOn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "observeOn", function() { return _internal_operators_observeOn__WEBPACK_IMPORTED_MODULE_50__["observeOn"]; });

/* harmony import */ var _internal_operators_onErrorResumeNext__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../internal/operators/onErrorResumeNext */ "./node_modules/rxjs/_esm2015/internal/operators/onErrorResumeNext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onErrorResumeNext", function() { return _internal_operators_onErrorResumeNext__WEBPACK_IMPORTED_MODULE_51__["onErrorResumeNext"]; });

/* harmony import */ var _internal_operators_pairwise__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../internal/operators/pairwise */ "./node_modules/rxjs/_esm2015/internal/operators/pairwise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairwise", function() { return _internal_operators_pairwise__WEBPACK_IMPORTED_MODULE_52__["pairwise"]; });

/* harmony import */ var _internal_operators_partition__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../internal/operators/partition */ "./node_modules/rxjs/_esm2015/internal/operators/partition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return _internal_operators_partition__WEBPACK_IMPORTED_MODULE_53__["partition"]; });

/* harmony import */ var _internal_operators_pluck__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../internal/operators/pluck */ "./node_modules/rxjs/_esm2015/internal/operators/pluck.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pluck", function() { return _internal_operators_pluck__WEBPACK_IMPORTED_MODULE_54__["pluck"]; });

/* harmony import */ var _internal_operators_publish__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../internal/operators/publish */ "./node_modules/rxjs/_esm2015/internal/operators/publish.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "publish", function() { return _internal_operators_publish__WEBPACK_IMPORTED_MODULE_55__["publish"]; });

/* harmony import */ var _internal_operators_publishBehavior__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../internal/operators/publishBehavior */ "./node_modules/rxjs/_esm2015/internal/operators/publishBehavior.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "publishBehavior", function() { return _internal_operators_publishBehavior__WEBPACK_IMPORTED_MODULE_56__["publishBehavior"]; });

/* harmony import */ var _internal_operators_publishLast__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../internal/operators/publishLast */ "./node_modules/rxjs/_esm2015/internal/operators/publishLast.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "publishLast", function() { return _internal_operators_publishLast__WEBPACK_IMPORTED_MODULE_57__["publishLast"]; });

/* harmony import */ var _internal_operators_publishReplay__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../internal/operators/publishReplay */ "./node_modules/rxjs/_esm2015/internal/operators/publishReplay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "publishReplay", function() { return _internal_operators_publishReplay__WEBPACK_IMPORTED_MODULE_58__["publishReplay"]; });

/* harmony import */ var _internal_operators_race__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../internal/operators/race */ "./node_modules/rxjs/_esm2015/internal/operators/race.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "race", function() { return _internal_operators_race__WEBPACK_IMPORTED_MODULE_59__["race"]; });

/* harmony import */ var _internal_operators_reduce__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../internal/operators/reduce */ "./node_modules/rxjs/_esm2015/internal/operators/reduce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return _internal_operators_reduce__WEBPACK_IMPORTED_MODULE_60__["reduce"]; });

/* harmony import */ var _internal_operators_repeat__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ../internal/operators/repeat */ "./node_modules/rxjs/_esm2015/internal/operators/repeat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return _internal_operators_repeat__WEBPACK_IMPORTED_MODULE_61__["repeat"]; });

/* harmony import */ var _internal_operators_repeatWhen__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ../internal/operators/repeatWhen */ "./node_modules/rxjs/_esm2015/internal/operators/repeatWhen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "repeatWhen", function() { return _internal_operators_repeatWhen__WEBPACK_IMPORTED_MODULE_62__["repeatWhen"]; });

/* harmony import */ var _internal_operators_retry__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ../internal/operators/retry */ "./node_modules/rxjs/_esm2015/internal/operators/retry.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "retry", function() { return _internal_operators_retry__WEBPACK_IMPORTED_MODULE_63__["retry"]; });

/* harmony import */ var _internal_operators_retryWhen__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ../internal/operators/retryWhen */ "./node_modules/rxjs/_esm2015/internal/operators/retryWhen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "retryWhen", function() { return _internal_operators_retryWhen__WEBPACK_IMPORTED_MODULE_64__["retryWhen"]; });

/* harmony import */ var _internal_operators_refCount__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ../internal/operators/refCount */ "./node_modules/rxjs/_esm2015/internal/operators/refCount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "refCount", function() { return _internal_operators_refCount__WEBPACK_IMPORTED_MODULE_65__["refCount"]; });

/* harmony import */ var _internal_operators_sample__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ../internal/operators/sample */ "./node_modules/rxjs/_esm2015/internal/operators/sample.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sample", function() { return _internal_operators_sample__WEBPACK_IMPORTED_MODULE_66__["sample"]; });

/* harmony import */ var _internal_operators_sampleTime__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ../internal/operators/sampleTime */ "./node_modules/rxjs/_esm2015/internal/operators/sampleTime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sampleTime", function() { return _internal_operators_sampleTime__WEBPACK_IMPORTED_MODULE_67__["sampleTime"]; });

/* harmony import */ var _internal_operators_scan__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ../internal/operators/scan */ "./node_modules/rxjs/_esm2015/internal/operators/scan.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return _internal_operators_scan__WEBPACK_IMPORTED_MODULE_68__["scan"]; });

/* harmony import */ var _internal_operators_sequenceEqual__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ../internal/operators/sequenceEqual */ "./node_modules/rxjs/_esm2015/internal/operators/sequenceEqual.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sequenceEqual", function() { return _internal_operators_sequenceEqual__WEBPACK_IMPORTED_MODULE_69__["sequenceEqual"]; });

/* harmony import */ var _internal_operators_share__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ../internal/operators/share */ "./node_modules/rxjs/_esm2015/internal/operators/share.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "share", function() { return _internal_operators_share__WEBPACK_IMPORTED_MODULE_70__["share"]; });

/* harmony import */ var _internal_operators_shareReplay__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ../internal/operators/shareReplay */ "./node_modules/rxjs/_esm2015/internal/operators/shareReplay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shareReplay", function() { return _internal_operators_shareReplay__WEBPACK_IMPORTED_MODULE_71__["shareReplay"]; });

/* harmony import */ var _internal_operators_single__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ../internal/operators/single */ "./node_modules/rxjs/_esm2015/internal/operators/single.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "single", function() { return _internal_operators_single__WEBPACK_IMPORTED_MODULE_72__["single"]; });

/* harmony import */ var _internal_operators_skip__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ../internal/operators/skip */ "./node_modules/rxjs/_esm2015/internal/operators/skip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skip", function() { return _internal_operators_skip__WEBPACK_IMPORTED_MODULE_73__["skip"]; });

/* harmony import */ var _internal_operators_skipLast__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ../internal/operators/skipLast */ "./node_modules/rxjs/_esm2015/internal/operators/skipLast.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skipLast", function() { return _internal_operators_skipLast__WEBPACK_IMPORTED_MODULE_74__["skipLast"]; });

/* harmony import */ var _internal_operators_skipUntil__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ../internal/operators/skipUntil */ "./node_modules/rxjs/_esm2015/internal/operators/skipUntil.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skipUntil", function() { return _internal_operators_skipUntil__WEBPACK_IMPORTED_MODULE_75__["skipUntil"]; });

/* harmony import */ var _internal_operators_skipWhile__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ../internal/operators/skipWhile */ "./node_modules/rxjs/_esm2015/internal/operators/skipWhile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skipWhile", function() { return _internal_operators_skipWhile__WEBPACK_IMPORTED_MODULE_76__["skipWhile"]; });

/* harmony import */ var _internal_operators_startWith__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ../internal/operators/startWith */ "./node_modules/rxjs/_esm2015/internal/operators/startWith.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startWith", function() { return _internal_operators_startWith__WEBPACK_IMPORTED_MODULE_77__["startWith"]; });

/* harmony import */ var _internal_operators_subscribeOn__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ../internal/operators/subscribeOn */ "./node_modules/rxjs/_esm2015/internal/operators/subscribeOn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subscribeOn", function() { return _internal_operators_subscribeOn__WEBPACK_IMPORTED_MODULE_78__["subscribeOn"]; });

/* harmony import */ var _internal_operators_switchAll__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ../internal/operators/switchAll */ "./node_modules/rxjs/_esm2015/internal/operators/switchAll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchAll", function() { return _internal_operators_switchAll__WEBPACK_IMPORTED_MODULE_79__["switchAll"]; });

/* harmony import */ var _internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ../internal/operators/switchMap */ "./node_modules/rxjs/_esm2015/internal/operators/switchMap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchMap", function() { return _internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_80__["switchMap"]; });

/* harmony import */ var _internal_operators_switchMapTo__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ../internal/operators/switchMapTo */ "./node_modules/rxjs/_esm2015/internal/operators/switchMapTo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchMapTo", function() { return _internal_operators_switchMapTo__WEBPACK_IMPORTED_MODULE_81__["switchMapTo"]; });

/* harmony import */ var _internal_operators_take__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ../internal/operators/take */ "./node_modules/rxjs/_esm2015/internal/operators/take.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "take", function() { return _internal_operators_take__WEBPACK_IMPORTED_MODULE_82__["take"]; });

/* harmony import */ var _internal_operators_takeLast__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ../internal/operators/takeLast */ "./node_modules/rxjs/_esm2015/internal/operators/takeLast.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeLast", function() { return _internal_operators_takeLast__WEBPACK_IMPORTED_MODULE_83__["takeLast"]; });

/* harmony import */ var _internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ../internal/operators/takeUntil */ "./node_modules/rxjs/_esm2015/internal/operators/takeUntil.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeUntil", function() { return _internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_84__["takeUntil"]; });

/* harmony import */ var _internal_operators_takeWhile__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ../internal/operators/takeWhile */ "./node_modules/rxjs/_esm2015/internal/operators/takeWhile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeWhile", function() { return _internal_operators_takeWhile__WEBPACK_IMPORTED_MODULE_85__["takeWhile"]; });

/* harmony import */ var _internal_operators_tap__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ../internal/operators/tap */ "./node_modules/rxjs/_esm2015/internal/operators/tap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tap", function() { return _internal_operators_tap__WEBPACK_IMPORTED_MODULE_86__["tap"]; });

/* harmony import */ var _internal_operators_throttle__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ../internal/operators/throttle */ "./node_modules/rxjs/_esm2015/internal/operators/throttle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return _internal_operators_throttle__WEBPACK_IMPORTED_MODULE_87__["throttle"]; });

/* harmony import */ var _internal_operators_throttleTime__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ../internal/operators/throttleTime */ "./node_modules/rxjs/_esm2015/internal/operators/throttleTime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttleTime", function() { return _internal_operators_throttleTime__WEBPACK_IMPORTED_MODULE_88__["throttleTime"]; });

/* harmony import */ var _internal_operators_throwIfEmpty__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ../internal/operators/throwIfEmpty */ "./node_modules/rxjs/_esm2015/internal/operators/throwIfEmpty.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwIfEmpty", function() { return _internal_operators_throwIfEmpty__WEBPACK_IMPORTED_MODULE_89__["throwIfEmpty"]; });

/* harmony import */ var _internal_operators_timeInterval__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ../internal/operators/timeInterval */ "./node_modules/rxjs/_esm2015/internal/operators/timeInterval.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeInterval", function() { return _internal_operators_timeInterval__WEBPACK_IMPORTED_MODULE_90__["timeInterval"]; });

/* harmony import */ var _internal_operators_timeout__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ../internal/operators/timeout */ "./node_modules/rxjs/_esm2015/internal/operators/timeout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return _internal_operators_timeout__WEBPACK_IMPORTED_MODULE_91__["timeout"]; });

/* harmony import */ var _internal_operators_timeoutWith__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ../internal/operators/timeoutWith */ "./node_modules/rxjs/_esm2015/internal/operators/timeoutWith.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeoutWith", function() { return _internal_operators_timeoutWith__WEBPACK_IMPORTED_MODULE_92__["timeoutWith"]; });

/* harmony import */ var _internal_operators_timestamp__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ../internal/operators/timestamp */ "./node_modules/rxjs/_esm2015/internal/operators/timestamp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timestamp", function() { return _internal_operators_timestamp__WEBPACK_IMPORTED_MODULE_93__["timestamp"]; });

/* harmony import */ var _internal_operators_toArray__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ../internal/operators/toArray */ "./node_modules/rxjs/_esm2015/internal/operators/toArray.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return _internal_operators_toArray__WEBPACK_IMPORTED_MODULE_94__["toArray"]; });

/* harmony import */ var _internal_operators_window__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ../internal/operators/window */ "./node_modules/rxjs/_esm2015/internal/operators/window.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "window", function() { return _internal_operators_window__WEBPACK_IMPORTED_MODULE_95__["window"]; });

/* harmony import */ var _internal_operators_windowCount__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ../internal/operators/windowCount */ "./node_modules/rxjs/_esm2015/internal/operators/windowCount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "windowCount", function() { return _internal_operators_windowCount__WEBPACK_IMPORTED_MODULE_96__["windowCount"]; });

/* harmony import */ var _internal_operators_windowTime__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ../internal/operators/windowTime */ "./node_modules/rxjs/_esm2015/internal/operators/windowTime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "windowTime", function() { return _internal_operators_windowTime__WEBPACK_IMPORTED_MODULE_97__["windowTime"]; });

/* harmony import */ var _internal_operators_windowToggle__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ../internal/operators/windowToggle */ "./node_modules/rxjs/_esm2015/internal/operators/windowToggle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "windowToggle", function() { return _internal_operators_windowToggle__WEBPACK_IMPORTED_MODULE_98__["windowToggle"]; });

/* harmony import */ var _internal_operators_windowWhen__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ../internal/operators/windowWhen */ "./node_modules/rxjs/_esm2015/internal/operators/windowWhen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "windowWhen", function() { return _internal_operators_windowWhen__WEBPACK_IMPORTED_MODULE_99__["windowWhen"]; });

/* harmony import */ var _internal_operators_withLatestFrom__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ../internal/operators/withLatestFrom */ "./node_modules/rxjs/_esm2015/internal/operators/withLatestFrom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withLatestFrom", function() { return _internal_operators_withLatestFrom__WEBPACK_IMPORTED_MODULE_100__["withLatestFrom"]; });

/* harmony import */ var _internal_operators_zip__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ../internal/operators/zip */ "./node_modules/rxjs/_esm2015/internal/operators/zip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return _internal_operators_zip__WEBPACK_IMPORTED_MODULE_101__["zip"]; });

/* harmony import */ var _internal_operators_zipAll__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ../internal/operators/zipAll */ "./node_modules/rxjs/_esm2015/internal/operators/zipAll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zipAll", function() { return _internal_operators_zipAll__WEBPACK_IMPORTED_MODULE_102__["zipAll"]; });









































































































//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'projeto final';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard */ "./src/app/dashboard/index.ts");
/* harmony import */ var _calculadora__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./calculadora */ "./src/app/calculadora/index.ts");
/* harmony import */ var _conversor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./conversor */ "./src/app/conversor/index.ts");
/* harmony import */ var _tarefas__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tarefas */ "./src/app/tarefas/index.js");
/* harmony import */ var _jogo_da_velha_jogo_da_velha_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./jogo-da-velha/jogo-da-velha.module */ "./src/app/jogo-da-velha/jogo-da-velha.module.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _dashboard__WEBPACK_IMPORTED_MODULE_7__["DashboardModule"],
            _calculadora__WEBPACK_IMPORTED_MODULE_8__["CalculadoraModule"],
            _conversor__WEBPACK_IMPORTED_MODULE_9__["ConversorModule"],
            _tarefas__WEBPACK_IMPORTED_MODULE_10__["TarefasModule"],
            _jogo_da_velha_jogo_da_velha_module__WEBPACK_IMPORTED_MODULE_11__["JogoDaVelhaModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/calculadora/calculadora-routing.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/calculadora/calculadora-routing.component.ts ***!
  \**************************************************************/
/*! exports provided: CalculadoraRoutingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculadoraRoutingComponent", function() { return CalculadoraRoutingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CalculadoraRoutingComponent = class CalculadoraRoutingComponent {
};
CalculadoraRoutingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: '<router-outlet></router-outlet>'
    })
], CalculadoraRoutingComponent);



/***/ }),

/***/ "./src/app/calculadora/calculadora.module.ts":
/*!***************************************************!*\
  !*** ./src/app/calculadora/calculadora.module.ts ***!
  \***************************************************/
/*! exports provided: CalculadoraModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculadoraModule", function() { return CalculadoraModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/app/calculadora/components/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services */ "./src/app/calculadora/services/index.ts");
/* harmony import */ var _calculadora_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calculadora.routing.module */ "./src/app/calculadora/calculadora.routing.module.ts");
/* harmony import */ var _calculadora_routing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calculadora-routing.component */ "./src/app/calculadora/calculadora-routing.component.ts");







let CalculadoraModule = class CalculadoraModule {
};
CalculadoraModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components__WEBPACK_IMPORTED_MODULE_3__["CalculadoraComponent"], _calculadora_routing_component__WEBPACK_IMPORTED_MODULE_6__["CalculadoraRoutingComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _calculadora_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalculadoraRoutingModules"]],
        exports: [_components__WEBPACK_IMPORTED_MODULE_3__["CalculadoraComponent"]],
        providers: [_services__WEBPACK_IMPORTED_MODULE_4__["CalculadoraService"]]
    })
], CalculadoraModule);



/***/ }),

/***/ "./src/app/calculadora/calculadora.routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/calculadora/calculadora.routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CalculadoraRoutes, CalculadoraRoutingModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculadoraRoutes", function() { return CalculadoraRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculadoraRoutingModules", function() { return CalculadoraRoutingModules; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/app/calculadora/components/index.ts");
/* harmony import */ var _calculadora_routing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calculadora-routing.component */ "./src/app/calculadora/calculadora-routing.component.ts");





const CalculadoraRoutes = [
    {
        path: 'calculadora',
        component: _calculadora_routing_component__WEBPACK_IMPORTED_MODULE_4__["CalculadoraRoutingComponent"],
        children: [
            {
                path: '',
                component: _components__WEBPACK_IMPORTED_MODULE_3__["CalculadoraComponent"]
            }
        ]
    }
];
let CalculadoraRoutingModules = class CalculadoraRoutingModules {
};
CalculadoraRoutingModules = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(CalculadoraRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CalculadoraRoutingModules);



/***/ }),

/***/ "./src/app/calculadora/components/calculadora.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/calculadora/components/calculadora.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".kz-btn {\n  width: 90%;\n  margin: 4px;\n}\n\n.kz-input-text {\n  margin-top: 3px;\n  width: 96%;\n  margin-left: 6px;\n}\n\n.kz-pad-20 {\n  padding: 20px;\n}\n\n.col-xs-3,\n.col-xs-9 {\n  padding: 0px;\n}\n\nbutton {\n  margin-right: 10rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsY3VsYWRvcmEvY29tcG9uZW50cy9DOlxcbGFic1xcYW5ndWxhclxcZm9ybWFjYW8tYW5ndWxhclxccHJvamV0b3NcXHByb2pldG8tZmluYWwvc3JjXFxhcHBcXGNhbGN1bGFkb3JhXFxjb21wb25lbnRzXFxjYWxjdWxhZG9yYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2FsY3VsYWRvcmEvY29tcG9uZW50cy9jYWxjdWxhZG9yYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDRUY7O0FEQUE7RUFDRSxhQUFBO0FDR0Y7O0FEREE7O0VBRUUsWUFBQTtBQ0lGOztBRERBO0VBQ0UsbUJBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL2NhbGN1bGFkb3JhL2NvbXBvbmVudHMvY2FsY3VsYWRvcmEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIua3otYnRuIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogNHB4O1xyXG59XHJcbi5rei1pbnB1dC10ZXh0IHtcclxuICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgd2lkdGg6IDk2JTtcclxuICBtYXJnaW4tbGVmdDogNnB4O1xyXG59XHJcbi5rei1wYWQtMjAge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLmNvbC14cy0zLFxyXG4uY29sLXhzLTkge1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcmVtO1xyXG59XHJcbiIsIi5rei1idG4ge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDRweDtcbn1cblxuLmt6LWlucHV0LXRleHQge1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIHdpZHRoOiA5NiU7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG5cbi5rei1wYWQtMjAge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uY29sLXhzLTMsXG4uY29sLXhzLTkge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMTByZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/calculadora/components/calculadora.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/calculadora/components/calculadora.component.ts ***!
  \*****************************************************************/
/*! exports provided: CalculadoraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculadoraComponent", function() { return CalculadoraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./src/app/calculadora/services/index.ts");



let CalculadoraComponent = class CalculadoraComponent {
    constructor(calculadoraService) {
        this.calculadoraService = calculadoraService;
    }
    ngOnInit() {
        this.limpar();
    }
    /**
     * Inicializa todos os operadores para os valores padrão
     * @return void
     */
    limpar() {
        this.numero1 = '0';
        this.numero2 = null;
        this.resultado = null;
        this.operacao = null;
    }
    /**
     * Adiciona o número selecionado para o cálculo posteriormente
     * @param string numero
     * @return void
     */
    adicionarNumero(numero) {
        if (this.operacao === null) {
            this.numero1 = this.concatenarNumero(this.numero1, numero);
        }
        else {
            this.numero2 = this.concatenarNumero(this.numero2, numero);
        }
    }
    /**
     * Retorna o valor concatenado. Trata o separador decimal
     * @param string numAtual
     * @param string numConcat
     * @return string
     */
    concatenarNumero(numAtual, numConcat) {
        if (numAtual === '0' || numAtual === null) {
            numAtual = '';
        }
        if (numConcat === '.' && numAtual === '') {
            return '0';
        }
        if (numConcat === '.' && numAtual.indexOf('.') > -1) {
            return numAtual;
        }
        return numAtual + numConcat;
    }
    /**
     * Executa lógica quando um operador dor selecionado
     * Caso já possua uma operação selecionada, executa a
     * operação anterior, e define a nova operação
     * @param string operacao
     * @return void
     */
    definirOperacao(operacao) {
        if (this.operacao === null) {
            this.operacao = operacao;
            return;
        }
        if (this.numero2 !== null) {
            this.resultado = this.calculadoraService.calcular(parseFloat(this.numero1), parseFloat(this.numero2), this.operacao);
            this.operacao = operacao;
            this.numero1 = this.resultado.toString();
            this.numero2 = null;
            this.resultado = null;
            this.operacao = null;
        }
    }
    /**
     * Efetua o cálculo de uma operação
     * @return void
     */
    calcular() {
        if (this.numero2 === null) {
            return;
        }
        this.resultado = this.calculadoraService.calcular(parseFloat(this.numero1), parseFloat(this.numero2), this.operacao);
    }
    /**
     * Retorna o valor a ser exibido na tela da calculadora
     * @return string
     */
    get display() {
        if (this.resultado !== null) {
            return this.resultado.toString();
        }
        if (this.numero2 !== null) {
            return this.numero2;
        }
        return this.numero1;
    }
};
CalculadoraComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["CalculadoraService"] }
];
CalculadoraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calculadora',
        template: __webpack_require__(/*! raw-loader!./calculadora.component.html */ "./node_modules/raw-loader/index.js!./src/app/calculadora/components/calculadora.component.html"),
        styles: [__webpack_require__(/*! ./calculadora.component.scss */ "./src/app/calculadora/components/calculadora.component.scss")]
    })
], CalculadoraComponent);



/***/ }),

/***/ "./src/app/calculadora/components/index.ts":
/*!*************************************************!*\
  !*** ./src/app/calculadora/components/index.ts ***!
  \*************************************************/
/*! exports provided: CalculadoraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calculadora_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculadora.component */ "./src/app/calculadora/components/calculadora.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalculadoraComponent", function() { return _calculadora_component__WEBPACK_IMPORTED_MODULE_0__["CalculadoraComponent"]; });




/***/ }),

/***/ "./src/app/calculadora/index.ts":
/*!**************************************!*\
  !*** ./src/app/calculadora/index.ts ***!
  \**************************************/
/*! exports provided: CalculadoraModule, CalculadoraComponent, CalculadoraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calculadora_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculadora.module */ "./src/app/calculadora/calculadora.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalculadoraModule", function() { return _calculadora_module__WEBPACK_IMPORTED_MODULE_0__["CalculadoraModule"]; });

/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./src/app/calculadora/components/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalculadoraComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["CalculadoraComponent"]; });

/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "./src/app/calculadora/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalculadoraService", function() { return _services__WEBPACK_IMPORTED_MODULE_2__["CalculadoraService"]; });






/***/ }),

/***/ "./src/app/calculadora/services/calculadora.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/calculadora/services/calculadora.service.ts ***!
  \*************************************************************/
/*! exports provided: CalculadoraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculadoraService", function() { return CalculadoraService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/**
 *Serviço responsável por executar as operações da calculadora
 *
 *@author Douglas Gomes Modesto
 *@since 1.0.0
 */
var CalculadoraService_1;


let CalculadoraService = CalculadoraService_1 = class CalculadoraService {
    constructor() { }
    /**
     * Método que calcula uma operação matemática dado dois números
     * Suporta operações soma, subtração, divisão e multiplicação
     * @params num1
     * @params num2
     * @params operacao
     * @return number Resultado da operação
     */
    calcular(num1, num2, operacao) {
        let resultado; // armazena o resultado da operação
        switch (operacao) {
            case CalculadoraService_1.SOMA:
                resultado = num1 + num2;
                break;
            case CalculadoraService_1.SUBTRACAO:
                resultado = num1 - num2;
                break;
            case CalculadoraService_1.DIVISAO:
                resultado = num1 / num2;
                break;
            case CalculadoraService_1.MULTIPLICACAO:
                resultado = num1 * num2;
                break;
            default:
                resultado = 0;
        }
        return resultado;
    }
};
/* Define constantes utilziadas
  para identificar as operações de cálculo */
CalculadoraService.SOMA = '+';
CalculadoraService.SUBTRACAO = '-';
CalculadoraService.DIVISAO = '/';
CalculadoraService.MULTIPLICACAO = '*';
CalculadoraService = CalculadoraService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CalculadoraService);



/***/ }),

/***/ "./src/app/calculadora/services/index.ts":
/*!***********************************************!*\
  !*** ./src/app/calculadora/services/index.ts ***!
  \***********************************************/
/*! exports provided: CalculadoraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calculadora_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculadora.service */ "./src/app/calculadora/services/calculadora.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalculadoraService", function() { return _calculadora_service__WEBPACK_IMPORTED_MODULE_0__["CalculadoraService"]; });




/***/ }),

/***/ "./src/app/conversor/Models/conversao-response.model.ts":
/*!**************************************************************!*\
  !*** ./src/app/conversor/Models/conversao-response.model.ts ***!
  \**************************************************************/
/*! exports provided: ConversaoResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversaoResponse", function() { return ConversaoResponse; });
class ConversaoResponse {
    constructor(base, date, rates) {
        this.base = base;
        this.date = date;
        this.rates = rates;
    }
}
ConversaoResponse.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: undefined }
];


/***/ }),

/***/ "./src/app/conversor/Models/conversao.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/conversor/Models/conversao.model.ts ***!
  \*****************************************************/
/*! exports provided: Conversao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Conversao", function() { return Conversao; });
class Conversao {
    constructor(moedaDe, moedaPara, valor) {
        this.moedaDe = moedaDe;
        this.moedaPara = moedaPara;
        this.valor = valor;
    }
}
Conversao.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: Number }
];


/***/ }),

/***/ "./src/app/conversor/Models/index.ts":
/*!*******************************************!*\
  !*** ./src/app/conversor/Models/index.ts ***!
  \*******************************************/
/*! exports provided: Moeda, Conversao, ConversaoResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moeda_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moeda.model */ "./src/app/conversor/Models/moeda.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Moeda", function() { return _moeda_model__WEBPACK_IMPORTED_MODULE_0__["Moeda"]; });

/* harmony import */ var _conversao_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conversao.model */ "./src/app/conversor/Models/conversao.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Conversao", function() { return _conversao_model__WEBPACK_IMPORTED_MODULE_1__["Conversao"]; });

/* harmony import */ var _conversao_response_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conversao-response.model */ "./src/app/conversor/Models/conversao-response.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConversaoResponse", function() { return _conversao_response_model__WEBPACK_IMPORTED_MODULE_2__["ConversaoResponse"]; });






/***/ }),

/***/ "./src/app/conversor/Models/moeda.model.ts":
/*!*************************************************!*\
  !*** ./src/app/conversor/Models/moeda.model.ts ***!
  \*************************************************/
/*! exports provided: Moeda */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Moeda", function() { return Moeda; });
class Moeda {
    constructor(sigla, descricao) {
        this.sigla = sigla;
        this.descricao = descricao;
    }
}
Moeda.ctorParameters = () => [
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./src/app/conversor/component.routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/conversor/component.routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ConversorRoutes, ConversorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversorRoutes", function() { return ConversorRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversorRoutingModule", function() { return ConversorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/app/conversor/components/index.ts");
/* harmony import */ var _conversor_routing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./conversor-routing.component */ "./src/app/conversor/conversor-routing.component.ts");





const ConversorRoutes = [
    {
        path: 'conversor-moedas',
        component: _conversor_routing_component__WEBPACK_IMPORTED_MODULE_4__["ConversorRoutingComponent"],
        children: [
            {
                path: '',
                component: _components__WEBPACK_IMPORTED_MODULE_3__["ConversorComponent"]
            }
        ]
    }
];
let ConversorRoutingModule = class ConversorRoutingModule {
};
ConversorRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ConversorRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ConversorRoutingModule);



/***/ }),

/***/ "./src/app/conversor/components/conversor.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/conversor/components/conversor.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnZlcnNvci9jb21wb25lbnRzL2NvbnZlcnNvci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/conversor/components/conversor.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/conversor/components/conversor.component.ts ***!
  \*************************************************************/
/*! exports provided: ConversorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversorComponent", function() { return ConversorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./src/app/conversor/services/index.ts");
/* harmony import */ var _Models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Models */ "./src/app/conversor/Models/index.ts");




let ConversorComponent = class ConversorComponent {
    constructor(moedaService, conversorService) {
        this.moedaService = moedaService;
        this.conversorService = conversorService;
    }
    ngOnInit() {
        this.moedas = this.moedaService.listarTodas();
        this.init();
    }
    /**
     * Efetua a chamada para a conversão dos valores
     * @return void
     */
    init() {
        this.conversao = new _Models__WEBPACK_IMPORTED_MODULE_3__["Conversao"]('EUR', 'BRL', null);
        this.possuiErro = false;
    }
    /**
     * Efetua a chamada para a conversão dos vlaor
     */
    converter() {
        if (this.conversaoForm.form.valid) {
            // alert('Convertendo: ' + JSON.stringify(this.conversao));
            this.conversorService
                .converter(this.conversao)
                .subscribe(response => (this.conversaoResponse = response), error => (this.possuiErro = true));
        }
    }
};
ConversorComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["MoedaService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["ConversorService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('conversaoForm', { static: true })
], ConversorComponent.prototype, "conversaoForm", void 0);
ConversorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-conversor',
        template: __webpack_require__(/*! raw-loader!./conversor.component.html */ "./node_modules/raw-loader/index.js!./src/app/conversor/components/conversor.component.html"),
        providers: [_services__WEBPACK_IMPORTED_MODULE_2__["ConversorService"]],
        styles: [__webpack_require__(/*! ./conversor.component.scss */ "./src/app/conversor/components/conversor.component.scss")]
    })
], ConversorComponent);



/***/ }),

/***/ "./src/app/conversor/components/index.ts":
/*!***********************************************!*\
  !*** ./src/app/conversor/components/index.ts ***!
  \***********************************************/
/*! exports provided: ConversorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _conversor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversor.component */ "./src/app/conversor/components/conversor.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConversorComponent", function() { return _conversor_component__WEBPACK_IMPORTED_MODULE_0__["ConversorComponent"]; });




/***/ }),

/***/ "./src/app/conversor/conversor-routing.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/conversor/conversor-routing.component.ts ***!
  \**********************************************************/
/*! exports provided: ConversorRoutingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversorRoutingComponent", function() { return ConversorRoutingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ConversorRoutingComponent = class ConversorRoutingComponent {
};
ConversorRoutingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: '<router-outlet></router-outlet>'
    })
], ConversorRoutingComponent);



/***/ }),

/***/ "./src/app/conversor/conversor.module.ts":
/*!***********************************************!*\
  !*** ./src/app/conversor/conversor.module.ts ***!
  \***********************************************/
/*! exports provided: ConversorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversorModule", function() { return ConversorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/app/conversor/components/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives */ "./src/app/conversor/directives/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./src/app/conversor/utils/index.ts");
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes */ "./src/app/conversor/pipes/index.ts");
/* harmony import */ var _conversor_routing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./conversor-routing.component */ "./src/app/conversor/conversor-routing.component.ts");
/* harmony import */ var _component_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component.routing.module */ "./src/app/conversor/component.routing.module.ts");










let ConversorModule = class ConversorModule {
};
ConversorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components__WEBPACK_IMPORTED_MODULE_3__["ConversorComponent"],
            _directives__WEBPACK_IMPORTED_MODULE_5__["NumeroDirective"],
            _utils__WEBPACK_IMPORTED_MODULE_6__["ModalCotacaoComponent"],
            _pipes__WEBPACK_IMPORTED_MODULE_7__["DataBrPipe"],
            _conversor_routing_component__WEBPACK_IMPORTED_MODULE_8__["ConversorRoutingComponent"]
        ],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _component_routing_module__WEBPACK_IMPORTED_MODULE_9__["ConversorRoutingModule"]],
        exports: [_components__WEBPACK_IMPORTED_MODULE_3__["ConversorComponent"]]
    })
], ConversorModule);



/***/ }),

/***/ "./src/app/conversor/directives/index.ts":
/*!***********************************************!*\
  !*** ./src/app/conversor/directives/index.ts ***!
  \***********************************************/
/*! exports provided: NumeroDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _numero_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numero.directive */ "./src/app/conversor/directives/numero.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumeroDirective", function() { return _numero_directive__WEBPACK_IMPORTED_MODULE_0__["NumeroDirective"]; });




/***/ }),

/***/ "./src/app/conversor/directives/numero.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/conversor/directives/numero.directive.ts ***!
  \**********************************************************/
/*! exports provided: NumeroDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumeroDirective", function() { return NumeroDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var NumeroDirective_1;



let NumeroDirective = NumeroDirective_1 = class NumeroDirective {
    constructor(el) {
        this.el = el;
    }
    /**
     * Implementa evetnod okeyup para o elemento da diretiva
     * @param $event
     */
    onkeyup($event) {
        let valor = $event.target.value;
        const posDecimais = valor.indexOf('.');
        valor = valor.replace(/[\D]/g, '');
        if (posDecimais > 0) {
            valor = valor.substr(0, posDecimais) + '.' + valor.substr(posDecimais);
        }
        $event.target.value = valor;
        this.onChange(valor);
    }
    /**
     * Registra função a ser chamada para atualizar valor na model
     * @params valor
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * Registra função a ser chamada para atualizar valor na model para evento touched
     * @params fn
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Obtém o valor contido na model
     * @params value
     */
    writeValue(value) {
        this.el.nativeElement.value = value;
    }
    setDisabledState(isDisabled) {
        throw new Error('Method not implemented.');
    }
};
NumeroDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keyup', ['$event'])
], NumeroDirective.prototype, "onkeyup", null);
NumeroDirective = NumeroDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appNumero]',
        providers: [
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: NumeroDirective_1,
                multi: true
            }
        ]
    })
], NumeroDirective);



/***/ }),

/***/ "./src/app/conversor/index.ts":
/*!************************************!*\
  !*** ./src/app/conversor/index.ts ***!
  \************************************/
/*! exports provided: ConversorModule, Moeda, Conversao, ConversaoResponse, ConversorComponent, MoedaService, ConversorService, NumeroDirective, ModalCotacaoComponent, DataBrPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _conversor_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversor.module */ "./src/app/conversor/conversor.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConversorModule", function() { return _conversor_module__WEBPACK_IMPORTED_MODULE_0__["ConversorModule"]; });

/* harmony import */ var _Models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Models */ "./src/app/conversor/Models/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Moeda", function() { return _Models__WEBPACK_IMPORTED_MODULE_1__["Moeda"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Conversao", function() { return _Models__WEBPACK_IMPORTED_MODULE_1__["Conversao"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConversaoResponse", function() { return _Models__WEBPACK_IMPORTED_MODULE_1__["ConversaoResponse"]; });

/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/app/conversor/components/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConversorComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["ConversorComponent"]; });

/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services */ "./src/app/conversor/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MoedaService", function() { return _services__WEBPACK_IMPORTED_MODULE_3__["MoedaService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConversorService", function() { return _services__WEBPACK_IMPORTED_MODULE_3__["ConversorService"]; });

/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives */ "./src/app/conversor/directives/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumeroDirective", function() { return _directives__WEBPACK_IMPORTED_MODULE_4__["NumeroDirective"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./src/app/conversor/utils/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalCotacaoComponent", function() { return _utils__WEBPACK_IMPORTED_MODULE_5__["ModalCotacaoComponent"]; });

/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes */ "./src/app/conversor/pipes/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataBrPipe", function() { return _pipes__WEBPACK_IMPORTED_MODULE_6__["DataBrPipe"]; });










/***/ }),

/***/ "./src/app/conversor/pipes/data-br.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/conversor/pipes/data-br.pipe.ts ***!
  \*************************************************/
/*! exports provided: DataBrPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataBrPipe", function() { return DataBrPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DataBrPipe = class DataBrPipe {
    /**
     * Aplica formtacao para a data
     * @param string dataEn
     * @return string data no formato dd/mm/yyyy
     */
    transform(dataEn) {
        if (!dataEn) {
            return '';
        }
        const dataArr = dataEn.split('-');
        if (dataArr.length !== 3) {
            return dataEn;
        }
        return dataArr[2] + '/' + dataArr[1] + '/' + dataArr[0];
    }
};
DataBrPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'dataBr'
    })
], DataBrPipe);



/***/ }),

/***/ "./src/app/conversor/pipes/index.ts":
/*!******************************************!*\
  !*** ./src/app/conversor/pipes/index.ts ***!
  \******************************************/
/*! exports provided: DataBrPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_br_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-br.pipe */ "./src/app/conversor/pipes/data-br.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataBrPipe", function() { return _data_br_pipe__WEBPACK_IMPORTED_MODULE_0__["DataBrPipe"]; });




/***/ }),

/***/ "./src/app/conversor/services/conversor.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/conversor/services/conversor.service.ts ***!
  \*********************************************************/
/*! exports provided: ConversorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversorService", function() { return ConversorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


// Importamos o HttpClient ao invés do Http para o Angular 7
//import { Http } from '@angular/http';

let ConversorService = class ConversorService {
    constructor(http) {
        this.http = http;
        // Nova url do fixer.io, que adiciona o parâmetro access_key, que é a chave de autenticação
        // private readonly BASE_URL = "http://api.fixer.io/latest";
        this.BASE_URL = 'http://data.fixer.io/api/latest?access_key=eba7130a5b2d720ce43eb5fcddd47cc3';
    }
    /**
     * Realiza a chamada para a API de conversão de moedas.
     *
     * @param Conversao conversao
     * @return Observable<ConversaoResponse>
     */
    converter(conversao) {
        // Na linha abaixo altere a '?' por '&'
        let params = `&base=${conversao.moedaDe}&symbols=${conversao.moedaPara}`;
        return this.http.get(this.BASE_URL + params);
        // No Angular 6 as duas próximas linha não são mais necessárias
        // .map(response => response.json() as ConversaoResponse)
        // .catch(error => Observable.throw(error));
    }
    /**
     * Retorna a cotação para dado uma response.
     *
     * @param ConversaoResponse conversaoResponse
     * @param Conversao conversao
     * @return number
     */
    cotacaoPara(conversaoResponse, conversao) {
        if (conversaoResponse === undefined) {
            return 0;
        }
        return conversaoResponse.rates[conversao.moedaPara];
    }
    /**
     * Retorna a cotação de dado uma response.
     *
     * @param ConversaoResponse conversaoResponse
     * @param Conversao conversao
     * @return string
     */
    cotacaoDe(conversaoResponse, conversao) {
        if (conversaoResponse === undefined) {
            return '0';
        }
        return (1 / conversaoResponse.rates[conversao.moedaPara]).toFixed(4);
    }
    /**
     * Retorna a data da cotação dado uma response.
     *
     * @param ConversaoResponse conversaoResponse
     * @return string
     */
    dataCotacao(conversaoResponse) {
        if (conversaoResponse === undefined) {
            return '';
        }
        return conversaoResponse.date;
    }
};
ConversorService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ConversorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ConversorService);



/***/ }),

/***/ "./src/app/conversor/services/index.ts":
/*!*********************************************!*\
  !*** ./src/app/conversor/services/index.ts ***!
  \*********************************************/
/*! exports provided: MoedaService, ConversorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moeda_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moeda.service */ "./src/app/conversor/services/moeda.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MoedaService", function() { return _moeda_service__WEBPACK_IMPORTED_MODULE_0__["MoedaService"]; });

/* harmony import */ var _conversor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conversor.service */ "./src/app/conversor/services/conversor.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConversorService", function() { return _conversor_service__WEBPACK_IMPORTED_MODULE_1__["ConversorService"]; });





/***/ }),

/***/ "./src/app/conversor/services/moeda.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/conversor/services/moeda.service.ts ***!
  \*****************************************************/
/*! exports provided: MoedaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoedaService", function() { return MoedaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models */ "./src/app/conversor/Models/index.ts");



let MoedaService = class MoedaService {
    constructor() {
        this.moedasObj = [
            //http://fixer.io
            { sigla: "AUD", descricao: "Dólar australiano" },
            { sigla: "BGN", descricao: "Lev búlgaro" },
            { sigla: "BRL", descricao: "Real brasileiro" },
            { sigla: "CAD", descricao: "Dólar canadense" },
            { sigla: "CHF", descricao: "Franco suíço" },
            { sigla: "CNY", descricao: "Yuan Chinês" },
            { sigla: "CZK", descricao: "Coroa República Tcheca" },
            { sigla: "DKK", descricao: "Coroa dinamarquesa" },
            { sigla: "EUR", descricao: "Euro" },
            { sigla: "GBP", descricao: "Libra Esterlina" },
            { sigla: "HKD", descricao: "Dólar de Hong Kong" },
            { sigla: "HRK", descricao: "Coroa Croácia" },
            { sigla: "HUF", descricao: "Florim húngaro" },
            { sigla: "IDR", descricao: "Rupia indonésia" },
            { sigla: "ILS", descricao: "Novo shekel israelense" },
            { sigla: "INR", descricao: "Rupia indiana" },
            { sigla: "JPY", descricao: "Iene japonês" },
            { sigla: "KRW", descricao: "Won sul-coreano" },
            { sigla: "MXN", descricao: "Peso mexicano" },
            { sigla: "MYR", descricao: "Malásia Ringgit" },
            { sigla: "NOK", descricao: "Coroa Noruega" },
            { sigla: "NZD", descricao: "Dólar da Nova Zelândia" },
            { sigla: "PHP", descricao: "Peso filipino" },
            { sigla: "PLN", descricao: "Złoty Polónia" },
            { sigla: "RON", descricao: "Leu romeno" },
            { sigla: "RUB", descricao: "Belarus Ruble" },
            { sigla: "SEK", descricao: "Coroa Suécia" },
            { sigla: "SGD", descricao: "Dólar de Singapura" },
            { sigla: "THB", descricao: "Baht Tailândia" },
            { sigla: "TRY", descricao: "Lira turca" },
            { sigla: "USD", descricao: "Dólar dos Estados Unidos" },
            { sigla: "ZAR", descricao: "Rand África do Sul" }
        ];
    }
    listarTodas() {
        if (this.moedas) {
            return this.moedas;
        }
        this.moedas = [];
        for (const moedaObj of this.moedasObj) {
            const moeda = new _Models__WEBPACK_IMPORTED_MODULE_2__["Moeda"]();
            Object.assign(moeda, moedaObj);
            this.moedas.push(moeda);
        }
        return this.moedas;
    }
};
MoedaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], MoedaService);



/***/ }),

/***/ "./src/app/conversor/utils/index.ts":
/*!******************************************!*\
  !*** ./src/app/conversor/utils/index.ts ***!
  \******************************************/
/*! exports provided: ModalCotacaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_cotacao_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-cotacao.component */ "./src/app/conversor/utils/modal-cotacao.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalCotacaoComponent", function() { return _modal_cotacao_component__WEBPACK_IMPORTED_MODULE_0__["ModalCotacaoComponent"]; });




/***/ }),

/***/ "./src/app/conversor/utils/modal-cotacao.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/conversor/utils/modal-cotacao.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnZlcnNvci91dGlscy9tb2RhbC1jb3RhY2FvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/conversor/utils/modal-cotacao.component.ts":
/*!************************************************************!*\
  !*** ./src/app/conversor/utils/modal-cotacao.component.ts ***!
  \************************************************************/
/*! exports provided: ModalCotacaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCotacaoComponent", function() { return ModalCotacaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models */ "./src/app/conversor/Models/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./src/app/conversor/services/index.ts");




let ModalCotacaoComponent = class ModalCotacaoComponent {
    constructor(conversorService) {
        this.conversorService = conversorService;
        this.conversao = new _Models__WEBPACK_IMPORTED_MODULE_2__["Conversao"]();
        this.confirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    novaConsulta() {
        this.confirm.emit();
    }
    get valorConvertido() {
        if (this.conversaoResponse === undefined) {
            return '0';
        }
        return (this.conversao.valor *
            this.conversaoResponse.rates[this.conversao.moedaPara]).toFixed(2);
    }
    get cotacaoPara() {
        return this.conversorService.cotacaoPara(this.conversaoResponse, this.conversao);
    }
    get cotacaoDe() {
        return this.conversorService.cotacaoDe(this.conversaoResponse, this.conversao);
    }
    get dataCotacao() {
        return this.conversorService.dataCotacao(this.conversaoResponse);
    }
};
ModalCotacaoComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["ConversorService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ModalCotacaoComponent.prototype, "id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ModalCotacaoComponent.prototype, "conversaoResponse", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ModalCotacaoComponent.prototype, "conversao", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ModalCotacaoComponent.prototype, "confirm", void 0);
ModalCotacaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-cotacao',
        template: __webpack_require__(/*! raw-loader!./modal-cotacao.component.html */ "./node_modules/raw-loader/index.js!./src/app/conversor/utils/modal-cotacao.component.html"),
        providers: [_services__WEBPACK_IMPORTED_MODULE_3__["ConversorService"]],
        styles: [__webpack_require__(/*! ./modal-cotacao.component.scss */ "./src/app/conversor/utils/modal-cotacao.component.scss")]
    })
], ModalCotacaoComponent);



/***/ }),

/***/ "./src/app/dashboard/dados.service.ts":
/*!********************************************!*\
  !*** ./src/app/dashboard/dados.service.ts ***!
  \********************************************/
/*! exports provided: DadosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DadosService", function() { return DadosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm2015/Observable.js");



let DadosService = class DadosService {
    constructor() {
        this.dados = [
            ['Janeiro', 33],
            ['Fevereiro', 68],
            ['Março', 49],
            ['Abril', 15],
            ['Maio', 80],
            ['Junho', 27]
        ];
    }
    /**
     * Retorna um observable contendo os dados a serem exibidos no gráfico.
     * @return Observable<any>
     */
    obterDados() {
        return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](observable => {
            observable.next(this.dados);
            observable.complete();
        });
    }
};
DadosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DadosService);



/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardRoutingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingComponent", function() { return DashboardRoutingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardRoutingComponent = class DashboardRoutingComponent {
};
DashboardRoutingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: '<router-outlet></router-outlet>'
    })
], DashboardRoutingComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0M6XFxsYWJzXFxhbmd1bGFyXFxmb3JtYWNhby1hbmd1bGFyXFxwcm9qZXRvc1xccHJvamV0by1maW5hbC9zcmNcXGFwcFxcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4iLCJkaXYge1xuICBmbG9hdDogbGVmdDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dados_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dados.service */ "./src/app/dashboard/dados.service.ts");



let DashboardComponent = class DashboardComponent {
    constructor(dadosService) {
        this.dadosService = dadosService;
    }
    ngOnInit() {
        this.dadosService.obterDados().subscribe(dados => {
            this.dados = dados;
            this.init();
        });
    }
    /**
     * Inicializa a API de gráficos com delay de 1 segundo,
     * o quer permite a integração da API com o Angular.
     * @return void
     */
    init() {
        debugger;
        if (typeof google !== 'undefined') {
            google.charts.load('current', { packages: ['corechart'] });
            setTimeout(() => {
                google.charts.setOnLoadCallback(this.exibirGraficos());
            }, 1000);
        }
    }
    /**
     * Método chamado assim que a API de gráficos é incializada.
     * Responsável por chamar os métodos geradors dos gráficosbundleRenderer.renderToStream
     * @return void
     */
    exibirGraficos() {
        this.exibirPieChart();
        this.exibir3dPieChart();
        this.exibirBarChart();
        this.exibirLineChart();
        this.exibirColumnChart();
        this.exibirDonutChart();
    }
    /**
     * Retorna as opções do gráfico, que incluem o título
     * e tamnho do gráfico
     *
     * @return any
     */
    ObterOpcoes() {
        return {
            title: 'Quantidade de cadastros primeiro semestre',
            width: 400,
            height: 300
        };
    }
    /**
     * Cria e retorna o objeto DataTable da API  de gráficos,
     * responsável por definir os dados do gráfico
     *
     * @return any
     */
    obterDataTable() {
        const data = new google.visualization.DataTable();
        data.addColumn('string', 'Mes');
        data.addColumn('number', 'Quantidade');
        data.addRows(this.dados);
        return data;
    }
    /**
     * Exibe o gráfico Pie Chart
     * @return void
     */
    exibirPieChart() {
        const el = document.getElementById('pie_chart');
        const chart = new google.visualization.PieChart(el);
        chart.draw(this.obterDataTable(), this.ObterOpcoes());
    }
    /**
     * Exibe o gráfico Pie Chart
     * @return void
     */
    exibir3dPieChart() {
        const el = document.getElementById('3d_pie_chart');
        const chart = new google.visualization.PieChart(el);
        const opcoes = this.ObterOpcoes();
        opcoes.is3D = true;
        chart.draw(this.obterDataTable(), opcoes);
    }
    /**
     * Exibe o gráfico Bar Chart
     * @return void
     */
    exibirBarChart() {
        const el = document.getElementById('bar_chart');
        const chart = new google.visualization.BarChart(el);
        const opcoes = this.ObterOpcoes();
        chart.draw(this.obterDataTable(), opcoes);
    }
    /**
     * Exibe o gráfico Line Chart
     * @return void
     */
    exibirLineChart() {
        const el = document.getElementById('line_chart');
        const chart = new google.visualization.LineChart(el);
        chart.draw(this.obterDataTable(), this.ObterOpcoes());
    }
    /**
     * Exibe o gráfico Donut Chart
     * @return void
     */
    exibirDonutChart() {
        const el = document.getElementById('donut_chart');
        const chart = new google.visualization.PieChart(el);
        const opcoes = this.ObterOpcoes();
        opcoes.pieHole = 0.4;
        chart.draw(this.obterDataTable(), opcoes);
    }
    /**
     * Exibe o gráfico Column Chart
     * @return void
     */
    exibirColumnChart() {
        const el = document.getElementById('column_chart');
        const chart = new google.visualization.ColumnChart(el);
        chart.draw(this.obterDataTable(), this.ObterOpcoes());
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _dados_service__WEBPACK_IMPORTED_MODULE_2__["DadosService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
        providers: [_dados_service__WEBPACK_IMPORTED_MODULE_2__["DadosService"]],
        styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dados_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dados.service */ "./src/app/dashboard/dados.service.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.routing.module */ "./src/app/dashboard/dashboard.routing.module.ts");
/* harmony import */ var _dashboard_routing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-routing.component */ "./src/app/dashboard/dashboard-routing.component.ts");







let DashboardModule = class DashboardModule {
};
DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _dashboard_routing_component__WEBPACK_IMPORTED_MODULE_6__["DashboardRoutingComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardRoutingModule"]],
        exports: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]],
        providers: [_dados_service__WEBPACK_IMPORTED_MODULE_4__["DadosService"]]
    })
], DashboardModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard.routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutes, DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutes", function() { return DashboardRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_routing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-routing.component */ "./src/app/dashboard/dashboard-routing.component.ts");





const DashboardRoutes = [
    {
        path: 'dashboard',
        component: _dashboard_routing_component__WEBPACK_IMPORTED_MODULE_4__["DashboardRoutingComponent"],
        children: [
            {
                path: '',
                component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
            }
        ]
    }
];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(DashboardRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DashboardRoutingModule);



/***/ }),

/***/ "./src/app/dashboard/index.ts":
/*!************************************!*\
  !*** ./src/app/dashboard/index.ts ***!
  \************************************/
/*! exports provided: DashboardModule, DashboardComponent, DadosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return _dashboard_module__WEBPACK_IMPORTED_MODULE_0__["DashboardModule"]; });

/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return _dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"]; });

/* harmony import */ var _dados_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dados.service */ "./src/app/dashboard/dados.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DadosService", function() { return _dados_service__WEBPACK_IMPORTED_MODULE_2__["DadosService"]; });






/***/ }),

/***/ "./src/app/jogo-da-velha/jogo-da-velha-routing.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/jogo-da-velha/jogo-da-velha-routing.component.ts ***!
  \******************************************************************/
/*! exports provided: JogoDaVelhaRoutingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JogoDaVelhaRoutingComponent", function() { return JogoDaVelhaRoutingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let JogoDaVelhaRoutingComponent = class JogoDaVelhaRoutingComponent {
};
JogoDaVelhaRoutingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: '<router-outlet></router-outlet>'
    })
], JogoDaVelhaRoutingComponent);



/***/ }),

/***/ "./src/app/jogo-da-velha/jogo-da-velha-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/jogo-da-velha/jogo-da-velha-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: JogoDaVelhaRoutes, JogoDaVelhaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JogoDaVelhaRoutes", function() { return JogoDaVelhaRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JogoDaVelhaRoutingModule", function() { return JogoDaVelhaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _jogo_da_velha_routing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jogo-da-velha-routing.component */ "./src/app/jogo-da-velha/jogo-da-velha-routing.component.ts");
/* harmony import */ var _jogo_da_velha_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jogo-da-velha.component */ "./src/app/jogo-da-velha/jogo-da-velha.component.ts");





const JogoDaVelhaRoutes = [
    {
        path: 'jogo-da-velha',
        component: _jogo_da_velha_routing_component__WEBPACK_IMPORTED_MODULE_3__["JogoDaVelhaRoutingComponent"],
        children: [
            {
                path: '',
                component: _jogo_da_velha_component__WEBPACK_IMPORTED_MODULE_4__["JogoDaVelhaComponent"]
            }
        ]
    }
];
let JogoDaVelhaRoutingModule = class JogoDaVelhaRoutingModule {
};
JogoDaVelhaRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(JogoDaVelhaRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], JogoDaVelhaRoutingModule);



/***/ }),

/***/ "./src/app/jogo-da-velha/jogo-da-velha.component.scss":
/*!************************************************************!*\
  !*** ./src/app/jogo-da-velha/jogo-da-velha.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  width: 400px;\n  height: 400px;\n  text-align: center;\n  font-family: \"Press Start 2P\", cursive;\n}\n\ndiv.principal {\n  margin-top: 100px;\n}\n\na.botao {\n  margin-top: 100px;\n  font-size: 20px;\n  background-color: lightgreen;\n  padding: 15px;\n}\n\na:link,\na:visited {\n  background-color: white;\n  color: green;\n  text-decoration: none;\n  border: 4px solid green;\n}\n\na:hover,\na:active {\n  background-color: lightgreen;\n  color: green;\n  border: 4px solid green;\n}\n\nul li {\n  list-style: none;\n  width: 110px;\n  height: 110px;\n  float: left;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  cursor: pointer;\n}\n\n.kz-border-bottom {\n  border-bottom: 8px solid #333;\n}\n\n.kz-border-right {\n  border-right: 8px solid #333;\n}\n\n.kz-img-x {\n  background-image: url(\"/assets/imagens/x.png\");\n}\n\n.kz-img-o {\n  background-image: url(\"/assets/imagens/o.png\");\n}\n\n.kz-cor-vitoria {\n  background-color: lightgreen;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9nby1kYS12ZWxoYS9DOlxcbGFic1xcYW5ndWxhclxcZm9ybWFjYW8tYW5ndWxhclxccHJvamV0b3NcXHByb2pldG8tZmluYWwvc3JjXFxhcHBcXGpvZ28tZGEtdmVsaGFcXGpvZ28tZGEtdmVsaGEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2pvZ28tZGEtdmVsaGEvam9nby1kYS12ZWxoYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBOztFQUVFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTs7RUFFRSw0QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSw2QkFBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7QUNDRjs7QURFQTtFQUNFLDhDQUFBO0FDQ0Y7O0FERUE7RUFDRSw4Q0FBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2pvZ28tZGEtdmVsaGEvam9nby1kYS12ZWxoYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlByZXNzIFN0YXJ0IDJQXCIsIGN1cnNpdmU7XHJcbn1cclxuXHJcbmRpdi5wcmluY2lwYWwge1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcblxyXG5hLmJvdGFvIHtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG5hOmxpbmssXHJcbmE6dmlzaXRlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBib3JkZXI6IDRweCBzb2xpZCBncmVlbjtcclxufVxyXG5cclxuYTpob3ZlcixcclxuYTphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XHJcbiAgY29sb3I6IGdyZWVuO1xyXG4gIGJvcmRlcjogNHB4IHNvbGlkIGdyZWVuO1xyXG59XHJcblxyXG51bCBsaSB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB3aWR0aDogMTEwcHg7XHJcbiAgaGVpZ2h0OiAxMTBweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5rei1ib3JkZXItYm90dG9tIHtcclxuICBib3JkZXItYm90dG9tOiA4cHggc29saWQgIzMzMztcclxufVxyXG5cclxuLmt6LWJvcmRlci1yaWdodCB7XHJcbiAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgIzMzMztcclxufVxyXG5cclxuLmt6LWltZy14IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlbnMveC5wbmdcIik7XHJcbn1cclxuXHJcbi5rei1pbWctbyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZW5zL28ucG5nXCIpO1xyXG59XHJcblxyXG4ua3otY29yLXZpdG9yaWEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XHJcbn1cclxuIiwiZGl2IHtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlByZXNzIFN0YXJ0IDJQXCIsIGN1cnNpdmU7XG59XG5cbmRpdi5wcmluY2lwYWwge1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuYS5ib3RhbyB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbmE6bGluayxcbmE6dmlzaXRlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogZ3JlZW47XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyOiA0cHggc29saWQgZ3JlZW47XG59XG5cbmE6aG92ZXIsXG5hOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XG4gIGNvbG9yOiBncmVlbjtcbiAgYm9yZGVyOiA0cHggc29saWQgZ3JlZW47XG59XG5cbnVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgd2lkdGg6IDExMHB4O1xuICBoZWlnaHQ6IDExMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ua3otYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCAjMzMzO1xufVxuXG4ua3otYm9yZGVyLXJpZ2h0IHtcbiAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgIzMzMztcbn1cblxuLmt6LWltZy14IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZW5zL3gucG5nXCIpO1xufVxuXG4ua3otaW1nLW8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlbnMvby5wbmdcIik7XG59XG5cbi5rei1jb3Itdml0b3JpYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XG59Il19 */"

/***/ }),

/***/ "./src/app/jogo-da-velha/jogo-da-velha.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/jogo-da-velha/jogo-da-velha.component.ts ***!
  \**********************************************************/
/*! exports provided: JogoDaVelhaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JogoDaVelhaComponent", function() { return JogoDaVelhaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_jogo_da_velha_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/jogo-da-velha.service */ "./src/app/jogo-da-velha/shared/jogo-da-velha.service.ts");



let JogoDaVelhaComponent = class JogoDaVelhaComponent {
    constructor(jogoDaVelhaService) {
        this.jogoDaVelhaService = jogoDaVelhaService;
    }
    ngOnInit() {
        this.jogoDaVelhaService.inicializar();
    }
    /**
     * Retorna se a tela de início deve ser exibida.
     *
     * @return boolean
     */
    get showInicio() {
        return this.jogoDaVelhaService.showInicio;
    }
    /**
     * Retorna se o tabuleiro deve ser exibido.
     *
     * @return boolean
     */
    get showTabuleiro() {
        return this.jogoDaVelhaService.showTabuleiro;
    }
    /**
     * Retorna se a tela de fim de jogo deve ser exibida.
     *
     * @return boolean
     */
    get showFinal() {
        return this.jogoDaVelhaService.showFinal;
    }
    /**
     * Inicializa os dados de um novo jogo.
     *
     * @return void
     */
    iniciarJogo($event) {
        $event.preventDefault();
        this.jogoDaVelhaService.iniciarJogo();
    }
    /**
     * Realiza uma jogada ao clicar um local no tabuleiro.
     *
     * @param number posX
     * @param number posY
     * @return void
     */
    jogar(posX, posY) {
        this.jogoDaVelhaService.jogar(posX, posY);
    }
    /**
     * Retorna se a peça X deve ser exibida para a
     * coordena informada.
     *
     * @param number posX
     * @param number posY
     * @return boolean
     */
    exibirX(posX, posY) {
        return this.jogoDaVelhaService.exibirX(posX, posY);
    }
    /**
     * Retorna se a peça O deve ser exibida para a
     * coordena informada.
     *
     * @param number posX
     * @param number posY
     * @return boolean
     */
    exibirO(posX, posY) {
        return this.jogoDaVelhaService.exibirO(posX, posY);
    }
    /**
     * Retorna se a marcação de vitória deve ser exibida para a
     * coordena informada.
     *
     * @param number posX
     * @param number posY
     * @return boolean
     */
    exibirVitoria(posX, posY) {
        return this.jogoDaVelhaService.exibirVitoria(posX, posY);
    }
    /**
     * Retorna o número do jogador a jogar.
     *
     * @return number
     */
    get jogador() {
        return this.jogoDaVelhaService.jogador;
    }
    /**
     * Inicia um novo jogo.
     *
     * @return void
     */
    novoJogo($event) {
        $event.preventDefault();
        this.jogoDaVelhaService.novoJogo();
    }
};
JogoDaVelhaComponent.ctorParameters = () => [
    { type: _shared_jogo_da_velha_service__WEBPACK_IMPORTED_MODULE_2__["JogoDaVelhaService"] }
];
JogoDaVelhaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-jogo-da-velha',
        template: __webpack_require__(/*! raw-loader!./jogo-da-velha.component.html */ "./node_modules/raw-loader/index.js!./src/app/jogo-da-velha/jogo-da-velha.component.html"),
        styles: [__webpack_require__(/*! ./jogo-da-velha.component.scss */ "./src/app/jogo-da-velha/jogo-da-velha.component.scss")]
    })
], JogoDaVelhaComponent);



/***/ }),

/***/ "./src/app/jogo-da-velha/jogo-da-velha.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/jogo-da-velha/jogo-da-velha.module.ts ***!
  \*******************************************************/
/*! exports provided: JogoDaVelhaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JogoDaVelhaModule", function() { return JogoDaVelhaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _jogo_da_velha_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jogo-da-velha.component */ "./src/app/jogo-da-velha/jogo-da-velha.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared */ "./src/app/jogo-da-velha/shared/index.js");
/* harmony import */ var _jogo_da_velha_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jogo-da-velha-routing.module */ "./src/app/jogo-da-velha/jogo-da-velha-routing.module.ts");
/* harmony import */ var _jogo_da_velha_routing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jogo-da-velha-routing.component */ "./src/app/jogo-da-velha/jogo-da-velha-routing.component.ts");







let JogoDaVelhaModule = class JogoDaVelhaModule {
};
JogoDaVelhaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_jogo_da_velha_component__WEBPACK_IMPORTED_MODULE_3__["JogoDaVelhaComponent"], _jogo_da_velha_routing_component__WEBPACK_IMPORTED_MODULE_6__["JogoDaVelhaRoutingComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _jogo_da_velha_routing_module__WEBPACK_IMPORTED_MODULE_5__["JogoDaVelhaRoutingModule"]],
        exports: [_jogo_da_velha_component__WEBPACK_IMPORTED_MODULE_3__["JogoDaVelhaComponent"]],
        providers: [_shared__WEBPACK_IMPORTED_MODULE_4__["JogoDaVelhaService"]]
    })
], JogoDaVelhaModule);



/***/ }),

/***/ "./src/app/jogo-da-velha/shared/index.js":
/*!***********************************************!*\
  !*** ./src/app/jogo-da-velha/shared/index.js ***!
  \***********************************************/
/*! exports provided: JogoDaVelhaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jogo_da_velha_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jogo-da-velha.service */ "./src/app/jogo-da-velha/shared/jogo-da-velha.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JogoDaVelhaService", function() { return _jogo_da_velha_service__WEBPACK_IMPORTED_MODULE_0__["JogoDaVelhaService"]; });




/***/ }),

/***/ "./src/app/jogo-da-velha/shared/jogo-da-velha.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/jogo-da-velha/shared/jogo-da-velha.service.ts ***!
  \***************************************************************/
/*! exports provided: JogoDaVelhaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JogoDaVelhaService", function() { return JogoDaVelhaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let JogoDaVelhaService = class JogoDaVelhaService {
    constructor() {
        this.TAM_TAB = 3;
        this.X = 1;
        this.O = 2;
        this.VAZIO = 0;
    }
    /**
     * Inicializa o jogo. Define exibição da tela inicial
     * @return void
     */
    inicializar() {
        this._showInicio = true;
        this._showTabuleiro = false;
        this._showFinal = false;
        this.numMovimentos = 0;
        this._jogador = this.X;
        this.vitoria = false;
        this.inicializarTabuleiro();
    }
    /**
     * Inicializa posições do jogo com vazio para todas as posições
     * @return void
     */
    inicializarTabuleiro() {
        this.tabuleiro = [this.TAM_TAB];
        for (let i = 0; i < this.TAM_TAB; i++) {
            this.tabuleiro[i] = [this.VAZIO, this.VAZIO, this.VAZIO];
        }
    }
    /**
     * Retorna se a tela início deve ser exibida.
     * @return boolean
     */
    get showInicio() {
        return this._showInicio;
    }
    /**
     * Retorna se o tabuleiro deve ser exibido
     * @return boolean
     */
    get showTabuleiro() {
        return this._showTabuleiro;
    }
    /**
     * Retorna se a tela de fim de jogo deve ser exibida
     * @return boolean
     */
    get showFinal() {
        return this._showFinal;
    }
    /**
     * Retorna o numero do jogador a jogar
     * @return number
     */
    get jogador() {
        return this._jogador;
    }
    /**
     * Exibe tabulerio
     * @return void
     */
    iniciarJogo() {
        this._showInicio = false;
        this._showTabuleiro = true;
    }
    /**
     * Realiza uma jogada dado as coordenadas do tabuleiro
     * @param number posX
     * @param number posY
     * @return void
     */
    jogar(posX, posY) {
        debugger;
        // jogada invalida
        if (this.tabuleiro[posX][posY] !== this.VAZIO || this.vitoria) {
            return;
        }
        this.tabuleiro[posX][posY] = this._jogador;
        this.numMovimentos++;
        this.vitoria = this.fimJogo(posX, posY, this.tabuleiro, this._jogador);
        this._jogador = this._jogador === this.X ? this.O : this.X;
        if (!this.vitoria && this.numMovimentos < 9) {
            this.cpuJogar();
        }
        // houve vitoria
        if (this.vitoria !== false) {
            this._showFinal = true;
        }
        // empate
        if (!this.vitoria && this.numMovimentos === 9) {
            this._jogador = 0;
            this._showFinal = true;
        }
    }
    fimJogo(linha, coluna, tabulerio, jogador) {
        let fim = false;
        // valida a linha
        if (tabulerio[linha][0] === jogador &&
            tabulerio[linha][1] === jogador &&
            tabulerio[linha][2] === jogador) {
            fim = [[linha, 0], [linha, 1], [linha, 2]];
        }
        // valida a colunha
        if (tabulerio[0][coluna] === jogador &&
            tabulerio[1][coluna] === jogador &&
            tabulerio[2][coluna] === jogador) {
            fim = [[0, coluna], [1, coluna], [2, coluna]];
        }
        // valida a diagonais
        if (tabulerio[0][0] === jogador &&
            tabulerio[1][1] === jogador &&
            tabulerio[2][2] === jogador) {
            fim = [[0, 0], [1, 1], [2, 2]];
        }
        if (tabulerio[0][2] === jogador &&
            tabulerio[1][1] === jogador &&
            tabulerio[2][0] === jogador) {
            fim = [[0, 2], [1, 1], [2, 0]];
        }
        return fim;
    }
    /**
     * Lógica para simular jogada do computador em modo aleatório.
     */
    cpuJogar() {
        // verifica jogada de vitória
        let jogada = this.obterJogada(this.O);
        if (jogada.length <= 0) {
            // tenta jogar para evitar derrota
            jogada = this.obterJogada(this.X);
        }
        if (jogada.length <= 0) {
            // joga aleatório
            let jogadas = [];
            for (let i = 0; i < this.TAM_TAB; i++) {
                for (let j = 0; j < this.TAM_TAB; j++) {
                    if (this.tabuleiro[i][j] === this.VAZIO) {
                        jogadas.push([i, j]);
                    }
                }
            }
            let k = Math.floor(Math.random() * (jogadas.length - 1));
            jogada = [jogadas[k][0], jogadas[k][1]];
        }
        this.tabuleiro[jogada[0]][jogada[1]] = this._jogador;
        this.numMovimentos++;
        this.vitoria = this.fimJogo(jogada[0], jogada[1], this.tabuleiro, this._jogador);
        this._jogador = this._jogador === this.X ? this.O : this.X;
    }
    /**
     * Obtém uma jogada válida para vitória de um jogador.
     *
     * @param number jogador
     * @return nomber[]
     */
    obterJogada(jogador) {
        const tab = this.tabuleiro;
        for (let lin = 0; lin < this.TAM_TAB; lin++) {
            for (let col = 0; col < this.TAM_TAB; col++) {
                if (tab[lin][col] !== this.VAZIO) {
                    continue;
                }
                tab[lin][col] = jogador;
                if (this.fimJogo(lin, col, tab, jogador)) {
                    return [lin, col];
                }
                tab[lin][col] = this.VAZIO;
            }
        }
        return [];
    }
    /**
     * Retorna se a peça X deve ser exibida para a
     * coordena informada.
     *
     * @param number posX
     * @param number posY
     * @return boolean
     */
    exibirX(posX, posY) {
        return this.tabuleiro[posX][posY] === this.X;
    }
    /**
     * Retorna se a peça O deve ser exibida para a
     * coordena informada.
     *
     * @param number posX
     * @param number posY
     * @return boolean
     */
    exibirO(posX, posY) {
        return this.tabuleiro[posX][posY] === this.O;
    }
    /**
     * Retorna se a marcação de vitória deve ser exibida para a
     * coordena informada.
     *
     * @param number posX
     * @param number posY
     * @return boolean
     */
    exibirVitoria(posX, posY) {
        let exibirVitoria = false;
        if (!this.vitoria) {
            return exibirVitoria;
        }
        for (const pos of this.vitoria) {
            if (pos[0] === posX && pos[1] === posY) {
                exibirVitoria = true;
                break;
            }
        }
        return exibirVitoria;
    }
    /**
     * Inicializa um novo jogo, assim como exibe o tabuleiro.
     *
     * @return void
     */
    novoJogo() {
        this.inicializar();
        this._showFinal = false;
        this._showInicio = false;
        this._showTabuleiro = true;
    }
};
JogoDaVelhaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], JogoDaVelhaService);



/***/ }),

/***/ "./src/app/tarefas/cadastrar/cadastrar-tarefas.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/tarefas/cadastrar/cadastrar-tarefas.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhcmVmYXMvY2FkYXN0cmFyL2NhZGFzdHJhci10YXJlZmFzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/tarefas/cadastrar/cadastrar-tarefas.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/tarefas/cadastrar/cadastrar-tarefas.component.ts ***!
  \******************************************************************/
/*! exports provided: CadastrarTarefasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastrarTarefasComponent", function() { return CadastrarTarefasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_tarefa_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/tarefa.model */ "./src/app/tarefas/shared/tarefa.model.ts");
/* harmony import */ var _shared_tarefa_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/tarefa.service */ "./src/app/tarefas/shared/tarefa.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let CadastrarTarefasComponent = class CadastrarTarefasComponent {
    constructor(tarefaService, router) {
        this.tarefaService = tarefaService;
        this.router = router;
    }
    ngOnInit() {
        this.tarefa = new _shared_tarefa_model__WEBPACK_IMPORTED_MODULE_2__["Tarefa"]();
    }
    cadastrar() {
        if (this.formTarefa.form.valid) {
            this.tarefaService.cadastrar(this.tarefa);
            this.router.navigate(['/tarefas']);
        }
    }
};
CadastrarTarefasComponent.ctorParameters = () => [
    { type: _shared_tarefa_service__WEBPACK_IMPORTED_MODULE_3__["TarefaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('formTarefa', { static: true })
], CadastrarTarefasComponent.prototype, "formTarefa", void 0);
CadastrarTarefasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cadastrar-tarefas',
        template: __webpack_require__(/*! raw-loader!./cadastrar-tarefas.component.html */ "./node_modules/raw-loader/index.js!./src/app/tarefas/cadastrar/cadastrar-tarefas.component.html"),
        styles: [__webpack_require__(/*! ./cadastrar-tarefas.component.scss */ "./src/app/tarefas/cadastrar/cadastrar-tarefas.component.scss")]
    })
], CadastrarTarefasComponent);



/***/ }),

/***/ "./src/app/tarefas/cadastrar/index.js":
/*!********************************************!*\
  !*** ./src/app/tarefas/cadastrar/index.js ***!
  \********************************************/
/*! exports provided: CadastrarTarefasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cadastrar_tarefas_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cadastrar-tarefas.component */ "./src/app/tarefas/cadastrar/cadastrar-tarefas.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CadastrarTarefasComponent", function() { return _cadastrar_tarefas_component__WEBPACK_IMPORTED_MODULE_0__["CadastrarTarefasComponent"]; });




/***/ }),

/***/ "./src/app/tarefas/editar/editar-tarefa.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/tarefas/editar/editar-tarefa.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhcmVmYXMvZWRpdGFyL2VkaXRhci10YXJlZmEuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tarefas/editar/editar-tarefa.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/tarefas/editar/editar-tarefa.component.ts ***!
  \***********************************************************/
/*! exports provided: EditarTarefaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarTarefaComponent", function() { return EditarTarefaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_tarefa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/tarefa.service */ "./src/app/tarefas/shared/tarefa.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let EditarTarefaComponent = class EditarTarefaComponent {
    constructor(tarefaService, route, router) {
        this.tarefaService = tarefaService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        const id = +this.route.snapshot.params.id;
        this.tarefa = this.tarefaService.buscarPorId(id);
    }
    atualizar() {
        if (this.formTarefa.form.valid) {
            this.tarefaService.atualizar(this.tarefa);
            this.router.navigate(["/tarefas"]);
        }
    }
};
EditarTarefaComponent.ctorParameters = () => [
    { type: _shared_tarefa_service__WEBPACK_IMPORTED_MODULE_2__["TarefaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("formTarefa", { static: true })
], EditarTarefaComponent.prototype, "formTarefa", void 0);
EditarTarefaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-editar-tarefa",
        template: __webpack_require__(/*! raw-loader!./editar-tarefa.component.html */ "./node_modules/raw-loader/index.js!./src/app/tarefas/editar/editar-tarefa.component.html"),
        styles: [__webpack_require__(/*! ./editar-tarefa.component.scss */ "./src/app/tarefas/editar/editar-tarefa.component.scss")]
    })
], EditarTarefaComponent);



/***/ }),

/***/ "./src/app/tarefas/editar/index.js":
/*!*****************************************!*\
  !*** ./src/app/tarefas/editar/index.js ***!
  \*****************************************/
/*! exports provided: EditarTarefaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editar_tarefa_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editar-tarefa.component */ "./src/app/tarefas/editar/editar-tarefa.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditarTarefaComponent", function() { return _editar_tarefa_component__WEBPACK_IMPORTED_MODULE_0__["EditarTarefaComponent"]; });




/***/ }),

/***/ "./src/app/tarefas/index.js":
/*!**********************************!*\
  !*** ./src/app/tarefas/index.js ***!
  \**********************************/
/*! exports provided: TarefasModule, TarefasRoutes, TarefasRoutingModule, Tarefa, TarefaService, CadastrarTarefasComponent, EditarTarefaComponent, TarefaConcluidaDirective, ListarTarefaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarefas_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tarefas.module */ "./src/app/tarefas/tarefas.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TarefasModule", function() { return _tarefas_module__WEBPACK_IMPORTED_MODULE_0__["TarefasModule"]; });

/* harmony import */ var _tarefas_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tarefas-routing.module */ "./src/app/tarefas/tarefas-routing.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TarefasRoutes", function() { return _tarefas_routing_module__WEBPACK_IMPORTED_MODULE_1__["TarefasRoutes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TarefasRoutingModule", function() { return _tarefas_routing_module__WEBPACK_IMPORTED_MODULE_1__["TarefasRoutingModule"]; });

/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared */ "./src/app/tarefas/shared/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tarefa", function() { return _shared__WEBPACK_IMPORTED_MODULE_2__["Tarefa"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TarefaService", function() { return _shared__WEBPACK_IMPORTED_MODULE_2__["TarefaService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TarefaConcluidaDirective", function() { return _shared__WEBPACK_IMPORTED_MODULE_2__["TarefaConcluidaDirective"]; });

/* harmony import */ var _listar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listar */ "./src/app/tarefas/listar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListarTarefaComponent", function() { return _listar__WEBPACK_IMPORTED_MODULE_3__["ListarTarefaComponent"]; });

/* harmony import */ var _cadastrar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cadastrar */ "./src/app/tarefas/cadastrar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CadastrarTarefasComponent", function() { return _cadastrar__WEBPACK_IMPORTED_MODULE_4__["CadastrarTarefasComponent"]; });

/* harmony import */ var _editar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editar */ "./src/app/tarefas/editar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditarTarefaComponent", function() { return _editar__WEBPACK_IMPORTED_MODULE_5__["EditarTarefaComponent"]; });









/***/ }),

/***/ "./src/app/tarefas/listar/index.js":
/*!*****************************************!*\
  !*** ./src/app/tarefas/listar/index.js ***!
  \*****************************************/
/*! exports provided: ListarTarefaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _listar_tarefa_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listar-tarefa.component */ "./src/app/tarefas/listar/listar-tarefa.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListarTarefaComponent", function() { return _listar_tarefa_component__WEBPACK_IMPORTED_MODULE_0__["ListarTarefaComponent"]; });




/***/ }),

/***/ "./src/app/tarefas/listar/listar-tarefa.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/tarefas/listar/listar-tarefa.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhcmVmYXMvbGlzdGFyL2xpc3Rhci10YXJlZmEuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tarefas/listar/listar-tarefa.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/tarefas/listar/listar-tarefa.component.ts ***!
  \***********************************************************/
/*! exports provided: ListarTarefaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarTarefaComponent", function() { return ListarTarefaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_tarefa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/tarefa.service */ "./src/app/tarefas/shared/tarefa.service.ts");



let ListarTarefaComponent = class ListarTarefaComponent {
    constructor(tarefaService) {
        this.tarefaService = tarefaService;
    }
    ngOnInit() {
        this.tarefas = this.listarTodos();
        // this.tarefas = [
        //   new Tarefa(1, "Tarefa 1", false),
        //   new Tarefa(1, "Tarefa 2", true)
        // ];
    }
    listarTodos() {
        return this.tarefaService.listarTodos();
    }
    remover($event, tarefa) {
        $event.preventDefault();
        if (confirm('Deseja remover a tarefa "' + tarefa.nome + '"?')) {
            this.tarefaService.remover(tarefa.id);
            this.tarefas = this.tarefaService.listarTodos();
        }
    }
    alterarStatus(tarefa) {
        if (confirm("Deseja alterar status da tarefa: " + tarefa.nome + "?")) {
            this.tarefaService.alterarStatus(tarefa.id);
            this.tarefas = this.tarefaService.listarTodos();
        }
    }
};
ListarTarefaComponent.ctorParameters = () => [
    { type: _shared_tarefa_service__WEBPACK_IMPORTED_MODULE_2__["TarefaService"] }
];
ListarTarefaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-listar-tarefa",
        template: __webpack_require__(/*! raw-loader!./listar-tarefa.component.html */ "./node_modules/raw-loader/index.js!./src/app/tarefas/listar/listar-tarefa.component.html"),
        styles: [__webpack_require__(/*! ./listar-tarefa.component.scss */ "./src/app/tarefas/listar/listar-tarefa.component.scss")]
    })
], ListarTarefaComponent);



/***/ }),

/***/ "./src/app/tarefas/shared/index.js":
/*!*****************************************!*\
  !*** ./src/app/tarefas/shared/index.js ***!
  \*****************************************/
/*! exports provided: Tarefa, TarefaService, TarefaConcluidaDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarefa_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tarefa.model */ "./src/app/tarefas/shared/tarefa.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tarefa", function() { return _tarefa_model__WEBPACK_IMPORTED_MODULE_0__["Tarefa"]; });

/* harmony import */ var _tarefa_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tarefa.service */ "./src/app/tarefas/shared/tarefa.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TarefaService", function() { return _tarefa_service__WEBPACK_IMPORTED_MODULE_1__["TarefaService"]; });

/* harmony import */ var _tarefa_concluida_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tarefa-concluida.directive */ "./src/app/tarefas/shared/tarefa-concluida.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TarefaConcluidaDirective", function() { return _tarefa_concluida_directive__WEBPACK_IMPORTED_MODULE_2__["TarefaConcluidaDirective"]; });






/***/ }),

/***/ "./src/app/tarefas/shared/tarefa-concluida.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/tarefas/shared/tarefa-concluida.directive.ts ***!
  \**************************************************************/
/*! exports provided: TarefaConcluidaDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TarefaConcluidaDirective", function() { return TarefaConcluidaDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TarefaConcluidaDirective = class TarefaConcluidaDirective {
    constructor(el) {
        this.el = el;
    }
    ngOnInit() {
        if (this.tarefaConcluida) {
            this.el.nativeElement.style.textDecoration = "line-through";
        }
    }
};
TarefaConcluidaDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TarefaConcluidaDirective.prototype, "tarefaConcluida", void 0);
TarefaConcluidaDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        // tslint:disable-next-line: directive-selector
        selector: "[tarefaConcluida]"
    })
], TarefaConcluidaDirective);



/***/ }),

/***/ "./src/app/tarefas/shared/tarefa.model.ts":
/*!************************************************!*\
  !*** ./src/app/tarefas/shared/tarefa.model.ts ***!
  \************************************************/
/*! exports provided: Tarefa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tarefa", function() { return Tarefa; });
class Tarefa {
    constructor(id, nome, concluida) {
        this.id = id;
        this.nome = nome;
        this.concluida = concluida;
    }
}
Tarefa.ctorParameters = () => [
    { type: Number },
    { type: String },
    { type: Boolean }
];


/***/ }),

/***/ "./src/app/tarefas/shared/tarefa.service.ts":
/*!**************************************************!*\
  !*** ./src/app/tarefas/shared/tarefa.service.ts ***!
  \**************************************************/
/*! exports provided: TarefaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TarefaService", function() { return TarefaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TarefaService = class TarefaService {
    constructor() { }
    listarTodos() {
        const tarefas = localStorage.tarefas;
        return tarefas ? JSON.parse(tarefas) : [];
    }
    cadastrar(tarefa) {
        const tarefas = this.listarTodos();
        tarefa.id = new Date().getTime();
        tarefa.concluida = false;
        tarefas.push(tarefa);
        localStorage.tarefas = JSON.stringify(tarefas);
    }
    buscarPorId(id) {
        const tarefas = this.listarTodos();
        return tarefas.find(tarefa => tarefa.id === id);
    }
    atualizar(tarefa) {
        const tarefas = this.listarTodos();
        tarefas.forEach((obj, index, objs) => {
            if (tarefa.id === obj.id) {
                objs[index] = tarefa;
            }
        });
        localStorage.tarefas = JSON.stringify(tarefas);
    }
    remover(id) {
        let tarefas = this.listarTodos();
        tarefas = tarefas.filter(tarefa => tarefa.id !== id);
        localStorage.tarefas = JSON.stringify(tarefas);
    }
    alterarStatus(id) {
        const tarefas = this.listarTodos();
        tarefas.forEach((obj, index, objs) => {
            if (id === obj.id) {
                objs[index].concluida = !obj.concluida;
            }
        });
        localStorage.tarefas = JSON.stringify(tarefas);
    }
};
TarefaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], TarefaService);



/***/ }),

/***/ "./src/app/tarefas/tarefas-routing.component.ts":
/*!******************************************************!*\
  !*** ./src/app/tarefas/tarefas-routing.component.ts ***!
  \******************************************************/
/*! exports provided: TarefasRoutingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TarefasRoutingComponent", function() { return TarefasRoutingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TarefasRoutingComponent = class TarefasRoutingComponent {
};
TarefasRoutingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: '<router-outlet></router-outlet>'
    })
], TarefasRoutingComponent);



/***/ }),

/***/ "./src/app/tarefas/tarefas-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/tarefas/tarefas-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TarefasRoutes, TarefasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TarefasRoutes", function() { return TarefasRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TarefasRoutingModule", function() { return TarefasRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _listar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listar */ "./src/app/tarefas/listar/index.js");
/* harmony import */ var _cadastrar_cadastrar_tarefas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadastrar/cadastrar-tarefas.component */ "./src/app/tarefas/cadastrar/cadastrar-tarefas.component.ts");
/* harmony import */ var _editar_editar_tarefa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editar/editar-tarefa.component */ "./src/app/tarefas/editar/editar-tarefa.component.ts");
/* harmony import */ var _tarefas_routing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tarefas-routing.component */ "./src/app/tarefas/tarefas-routing.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");







const TarefasRoutes = [
    {
        path: 'tarefas',
        component: _tarefas_routing_component__WEBPACK_IMPORTED_MODULE_5__["TarefasRoutingComponent"],
        children: [
            {
                path: '',
                component: _listar__WEBPACK_IMPORTED_MODULE_2__["ListarTarefaComponent"]
            },
            {
                path: 'cadastrar',
                component: _cadastrar_cadastrar_tarefas_component__WEBPACK_IMPORTED_MODULE_3__["CadastrarTarefasComponent"]
            },
            {
                path: 'editar/:id',
                component: _editar_editar_tarefa_component__WEBPACK_IMPORTED_MODULE_4__["EditarTarefaComponent"]
            }
        ]
    }
];
let TarefasRoutingModule = class TarefasRoutingModule {
};
TarefasRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(TarefasRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], TarefasRoutingModule);



/***/ }),

/***/ "./src/app/tarefas/tarefas.module.ts":
/*!*******************************************!*\
  !*** ./src/app/tarefas/tarefas.module.ts ***!
  \*******************************************/
/*! exports provided: TarefasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TarefasModule", function() { return TarefasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared */ "./src/app/tarefas/shared/index.js");
/* harmony import */ var _listar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listar */ "./src/app/tarefas/listar/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cadastrar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cadastrar */ "./src/app/tarefas/cadastrar/index.js");
/* harmony import */ var _editar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editar */ "./src/app/tarefas/editar/index.js");
/* harmony import */ var _tarefas_routing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tarefas-routing.component */ "./src/app/tarefas/tarefas-routing.component.ts");
/* harmony import */ var _tarefas_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tarefas-routing.module */ "./src/app/tarefas/tarefas-routing.module.ts");











let TarefasModule = class TarefasModule {
};
TarefasModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _listar__WEBPACK_IMPORTED_MODULE_4__["ListarTarefaComponent"],
            _cadastrar__WEBPACK_IMPORTED_MODULE_7__["CadastrarTarefasComponent"],
            _editar__WEBPACK_IMPORTED_MODULE_8__["EditarTarefaComponent"],
            _shared__WEBPACK_IMPORTED_MODULE_3__["TarefaConcluidaDirective"],
            _tarefas_routing_component__WEBPACK_IMPORTED_MODULE_9__["TarefasRoutingComponent"]
        ],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _tarefas_routing_module__WEBPACK_IMPORTED_MODULE_10__["TarefasRoutingModule"]],
        providers: [_shared__WEBPACK_IMPORTED_MODULE_3__["TarefaService"]]
    })
], TarefasModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\labs\angular\formacao-angular\projetos\projeto-final\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map