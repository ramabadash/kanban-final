/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/directives/addTask.js":
/*!***********************************!*\
  !*** ./src/directives/addTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask)\n/* harmony export */ });\n/* harmony import */ var _services_tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/tasks */ \"./src/services/tasks.js\");\n/* harmony import */ var _services_localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/localStorage */ \"./src/services/localStorage.js\");\n/* harmony import */ var _services_vadilator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/vadilator */ \"./src/services/vadilator.js\");\n/* harmony import */ var _services_DOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/DOM */ \"./src/services/DOM.js\");\n\n\n\n // Add a new task to the list where we pressed on the button\n\nfunction addTask(event) {\n  var currentButton = event.target;\n  var taskList = currentButton.nextElementSibling;\n  var input = currentButton.previousElementSibling;\n  var taskText = (0,_services_vadilator__WEBPACK_IMPORTED_MODULE_2__.inputVadilator)(input.value); // Insert new task element\n\n  var newTaskElem = (0,_services_DOM__WEBPACK_IMPORTED_MODULE_3__.createListElement)(taskText);\n  (0,_services_tasks__WEBPACK_IMPORTED_MODULE_0__.taskOnTop)(newTaskElem, taskList);\n  input.value = ''; // save on local storage\n\n  (0,_services_localStorage__WEBPACK_IMPORTED_MODULE_1__.saveNewDataLocal)(taskList.id, taskList); // taskList.id = tasks[keys]\n}\n\n//# sourceURL=webpack://final/./src/directives/addTask.js?");

/***/ }),

/***/ "./src/directives/altMoveTask.js":
/*!***************************************!*\
  !*** ./src/directives/altMoveTask.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeTaskList\": () => (/* binding */ changeTaskList)\n/* harmony export */ });\n/* harmony import */ var _services_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/localStorage */ \"./src/services/localStorage.js\");\n/* harmony import */ var _services_tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/tasks */ \"./src/services/tasks.js\");\n/* harmony import */ var _services_taskList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/taskList */ \"./src/services/taskList.js\");\n\n\n // Change task list by alt+1-3\n\nfunction changeTaskList(e) {\n  var mouseEvent = e;\n  var currentTask = mouseEvent.target;\n  var previousList = currentTask.parentElement;\n\n  document.onkeydown = function (event) {\n    var nextList = (0,_services_taskList__WEBPACK_IMPORTED_MODULE_2__.nextListByKey)(event);\n    if (!nextList) return; // there is not net list\n\n    if (nextList.id === previousList.id) return; // If it is the same list\n\n    (0,_services_tasks__WEBPACK_IMPORTED_MODULE_1__.taskOnTop)(currentTask, nextList); // save new arrangement\n\n    (0,_services_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveNewDataLocal)(previousList.id, previousList); // save old list changes to local\n\n    (0,_services_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveNewDataLocal)(nextList.id, nextList); // save new list changes to local\n\n    mouseEvent = {};\n    currentTask = mouseEvent.target;\n  };\n}\n\n//# sourceURL=webpack://final/./src/directives/altMoveTask.js?");

/***/ }),

/***/ "./src/directives/buttonsMainHandler.js":
/*!**********************************************!*\
  !*** ./src/directives/buttonsMainHandler.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTask */ \"./src/directives/addTask.js\");\n/* harmony import */ var _networkButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./networkButtons */ \"./src/directives/networkButtons.js\");\n/* harmony import */ var _services_DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/DOM */ \"./src/services/DOM.js\");\n\n\n // create spesific handler to every button group\n\nfunction buttonsHandler(event) {\n  var parantElem = event.target.parentElement;\n  var elementId = event.target.id;\n  if (parantElem.tagName === 'DIV') (0,_addTask__WEBPACK_IMPORTED_MODULE_0__.addTask)(event); // add task buttons\n  else if (elementId === 'save-btn') (0,_networkButtons__WEBPACK_IMPORTED_MODULE_1__.saveToApi)(); // save button\n  else if (elementId === 'load-btn') (0,_networkButtons__WEBPACK_IMPORTED_MODULE_1__.loadFromApi)(); // load button\n  else if (elementId === 'clear-btn') (0,_services_DOM__WEBPACK_IMPORTED_MODULE_2__.clearPage)(); // clear tasks from DOM and local storage\n}\n\nvar addButtons = document.querySelectorAll('button');\naddButtons.forEach(function (button) {\n  return button.addEventListener('click', buttonsHandler);\n});\n\n//# sourceURL=webpack://final/./src/directives/buttonsMainHandler.js?");

/***/ }),

/***/ "./src/directives/dragAndDropTask.js":
/*!*******************************************!*\
  !*** ./src/directives/dragAndDropTask.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"draggableDataTransfer\": () => (/* binding */ draggableDataTransfer),\n/* harmony export */   \"taskDrop\": () => (/* binding */ taskDrop)\n/* harmony export */ });\n/* harmony import */ var _services_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/localStorage */ \"./src/services/localStorage.js\");\n/* harmony import */ var _services_tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/tasks */ \"./src/services/tasks.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n // Create a unique and temporary class and move it when dragging a task item\n\nfunction draggableDataTransfer(event) {\n  var draggableElem = event.target;\n  draggableElem.classList.add('draggable-task');\n  event.dataTransfer.setData('text/plain', draggableElem.classList[1]);\n  document.getElementById('delete').style.display = 'grid'; // display delete task area\n} // Task drop on a div section\n\nfunction taskDrop(event) {\n  try {\n    event.preventDefault(); // get the correct task\n\n    var droppedTaskClass = event.dataTransfer.getData('text/plain');\n    var droppedTask = document.querySelector(\".\".concat(droppedTaskClass));\n    var previousList = droppedTask.parentElement;\n    var nextList = event.target.lastElementChild; // If it is delete task erea\n\n    if (event.target.id === 'delete') {\n      droppedTask.remove(); // Task delete\n\n      (0,_services_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveNewDataLocal)(previousList.id, previousList); // save old list changes to local\n    } else {\n      (0,_services_tasks__WEBPACK_IMPORTED_MODULE_1__.taskOnTop)(droppedTask, nextList); // List transfer\n      // save new arrangement\n\n      (0,_services_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveNewDataLocal)(previousList.id, previousList); // save old list changes to local\n\n      (0,_services_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveNewDataLocal)(nextList.id, nextList); // save new list changes to local\n    }\n\n    droppedTask.classList.remove('draggable-task');\n    document.getElementById('delete').style.display = 'none'; // display delete task area\n  } catch (error) {\n    alert('Opps, Try to be more accurate');\n  }\n} // Drag and Drop\n\nvar allSections = document.querySelectorAll('.section'); // all 3 task sections\n\nvar _iterator = _createForOfIteratorHelper(allSections),\n    _step;\n\ntry {\n  for (_iterator.s(); !(_step = _iterator.n()).done;) {\n    var section = _step.value;\n    section.addEventListener('dragover', function (event) {\n      return event.preventDefault();\n    });\n    section.addEventListener('drop', taskDrop);\n  }\n} catch (err) {\n  _iterator.e(err);\n} finally {\n  _iterator.f();\n}\n\nvar deleteElem = document.querySelector('#delete');\ndeleteElem.addEventListener('dragover', function (event) {\n  return event.preventDefault();\n});\ndeleteElem.addEventListener('drop', taskDrop);\n\n//# sourceURL=webpack://final/./src/directives/dragAndDropTask.js?");

/***/ }),

/***/ "./src/directives/networkButtons.js":
/*!******************************************!*\
  !*** ./src/directives/networkButtons.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"saveToApi\": () => (/* binding */ saveToApi),\n/* harmony export */   \"loadFromApi\": () => (/* binding */ loadFromApi)\n/* harmony export */ });\n/* harmony import */ var _services_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/DOM */ \"./src/services/DOM.js\");\n/* harmony import */ var _services_vadilator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/vadilator */ \"./src/services/vadilator.js\");\n/* harmony import */ var _services_taskList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/taskList */ \"./src/services/taskList.js\");\n/* harmony import */ var _services_localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/localStorage */ \"./src/services/localStorage.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n // save current information to API\n\nfunction saveToApi() {\n  return _saveToApi.apply(this, arguments);\n} // load information from API\n\nfunction _saveToApi() {\n  _saveToApi = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var response;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            (0,_services_DOM__WEBPACK_IMPORTED_MODULE_0__.playLoader)();\n            _context.next = 3;\n            return fetch('https://json-bins.herokuapp.com/bin/614b63eae352a453bebed50b', {\n              method: 'PUT',\n              body: JSON.stringify({\n                tasks: (0,_services_vadilator__WEBPACK_IMPORTED_MODULE_1__.localStorageValidator)()\n              }),\n              headers: {\n                'Content-Type': 'application/json'\n              }\n            });\n\n          case 3:\n            response = _context.sent;\n            if (!response.ok) alert('Please try again');\n            (0,_services_DOM__WEBPACK_IMPORTED_MODULE_0__.stopLoader)();\n\n          case 6:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _saveToApi.apply(this, arguments);\n}\n\nfunction loadFromApi() {\n  return _loadFromApi.apply(this, arguments);\n}\n\nfunction _loadFromApi() {\n  _loadFromApi = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n    var response, data;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            (0,_services_DOM__WEBPACK_IMPORTED_MODULE_0__.playLoader)();\n            _context2.next = 3;\n            return fetch('https://json-bins.herokuapp.com/bin/614b63eae352a453bebed50b');\n\n          case 3:\n            response = _context2.sent;\n            if (!response.ok) alert('Please try again');\n            _context2.next = 7;\n            return response.json();\n\n          case 7:\n            data = _context2.sent;\n            (0,_services_DOM__WEBPACK_IMPORTED_MODULE_0__.stopLoader)();\n            (0,_services_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveDataLocal)(data.tasks);\n            (0,_services_DOM__WEBPACK_IMPORTED_MODULE_0__.cleanDom)();\n            (0,_services_DOM__WEBPACK_IMPORTED_MODULE_0__.updateDom)();\n            (0,_services_taskList__WEBPACK_IMPORTED_MODULE_2__.updateTotal)();\n\n          case 13:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _loadFromApi.apply(this, arguments);\n}\n\n//# sourceURL=webpack://final/./src/directives/networkButtons.js?");

/***/ }),

/***/ "./src/directives/searchTask.js":
/*!**************************************!*\
  !*** ./src/directives/searchTask.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ \"./src/directives/tasks.js\");\n // Search case-insensitively so only tasks that match the search string are displayed.\n\nfunction searchBar() {\n  var searchStr = document.querySelector('#search').value.toLowerCase();\n  var allTasks = document.querySelectorAll('.task');\n\n  for (var i = 0; i < allTasks.length; i + 1) {\n    var task = allTasks[i];\n    (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.filterTasksByStr)(task, searchStr);\n  }\n}\n\ndocument.querySelector('#search').addEventListener('keyup', searchBar);\n\n//# sourceURL=webpack://final/./src/directives/searchTask.js?");

/***/ }),

/***/ "./src/directives/tasks.js":
/*!*********************************!*\
  !*** ./src/directives/tasks.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"editTask\": () => (/* binding */ editTask),\n/* harmony export */   \"filterTasksByStr\": () => (/* binding */ filterTasksByStr)\n/* harmony export */ });\n/* harmony import */ var _services_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/localStorage */ \"./src/services/localStorage.js\");\n // Edit task content\n\nfunction editTask(event) {\n  var currentTask = event.target;\n  var currentList = currentTask.parentElement;\n  currentTask.setAttribute('contenteditable', true);\n\n  currentTask.onblur = function () {\n    (0,_services_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveNewDataLocal)(currentList.id, currentList);\n    currentTask.setAttribute('contenteditable', false);\n  };\n} // Gets a task and a string. If it contains the string it will display the task otherwise it will disappear.\n\nfunction filterTasksByStr(taskElem, searchStr) {\n  var task = taskElem;\n  var taskContent = task.textContent.toLowerCase();\n\n  if (taskContent.includes(searchStr)) {\n    task.style.display = '';\n  } else {\n    task.style.display = 'none';\n  }\n}\n\n//# sourceURL=webpack://final/./src/directives/tasks.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_vadilator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/vadilator */ \"./src/services/vadilator.js\");\n/* harmony import */ var _services_DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/DOM */ \"./src/services/DOM.js\");\n/* harmony import */ var _services_taskList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/taskList */ \"./src/services/taskList.js\");\n/* harmony import */ var _services_timeIndicators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/timeIndicators */ \"./src/services/timeIndicators.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _services_localStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/localStorage */ \"./src/services/localStorage.js\");\n/* harmony import */ var _services_tasks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/tasks */ \"./src/services/tasks.js\");\n/* harmony import */ var _directives_addTask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/addTask */ \"./src/directives/addTask.js\");\n/* harmony import */ var _directives_altMoveTask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/altMoveTask */ \"./src/directives/altMoveTask.js\");\n/* harmony import */ var _directives_buttonsMainHandler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/buttonsMainHandler */ \"./src/directives/buttonsMainHandler.js\");\n/* harmony import */ var _directives_dragAndDropTask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/dragAndDropTask */ \"./src/directives/dragAndDropTask.js\");\n/* harmony import */ var _directives_networkButtons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/networkButtons */ \"./src/directives/networkButtons.js\");\n/* harmony import */ var _directives_searchTask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/searchTask */ \"./src/directives/searchTask.js\");\n/* harmony import */ var _directives_tasks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/tasks */ \"./src/directives/tasks.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction pageLoad() {\n  (0,_services_vadilator__WEBPACK_IMPORTED_MODULE_0__.localStorageValidator)(); // Create DOM by the Local Storage\n\n  (0,_services_DOM__WEBPACK_IMPORTED_MODULE_1__.updateDom)();\n  (0,_services_taskList__WEBPACK_IMPORTED_MODULE_2__.updateTotal)();\n  (0,_services_timeIndicators__WEBPACK_IMPORTED_MODULE_3__.openMessage)();\n  document.body.onload = 'startTime()';\n}\n\npageLoad();\n\n//# sourceURL=webpack://final/./src/index.js?");

/***/ }),

/***/ "./src/services/DOM.js":
/*!*****************************!*\
  !*** ./src/services/DOM.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearPage\": () => (/* binding */ clearPage),\n/* harmony export */   \"playLoader\": () => (/* binding */ playLoader),\n/* harmony export */   \"stopLoader\": () => (/* binding */ stopLoader),\n/* harmony export */   \"updateDom\": () => (/* binding */ updateDom),\n/* harmony export */   \"cleanDom\": () => (/* binding */ cleanDom),\n/* harmony export */   \"createListElement\": () => (/* binding */ createListElement)\n/* harmony export */ });\n/* harmony import */ var _directives_altMoveTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../directives/altMoveTask */ \"./src/directives/altMoveTask.js\");\n/* harmony import */ var _directives_dragAndDropTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directives/dragAndDropTask */ \"./src/directives/dragAndDropTask.js\");\n/* harmony import */ var _directives_tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../directives/tasks */ \"./src/directives/tasks.js\");\n/* harmony import */ var _taskList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskList */ \"./src/services/taskList.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n // clear tasks from DOM and local storage\n\nfunction clearPage() {\n  cleanDom();\n  var tasks = {\n    todo: [],\n    'in-progress': [],\n    done: []\n  };\n  localStorage.setItem('tasks', JSON.stringify(tasks)); // delete local storage\n\n  (0,_taskList__WEBPACK_IMPORTED_MODULE_3__.updateTotal)();\n} // play loader\n\nfunction playLoader() {\n  var loader = document.querySelector('#loader');\n  loader.classList.add('loader');\n  loader.style.display = 'block';\n} // stop loader\n\nfunction stopLoader() {\n  var loader = document.querySelector('#loader');\n  loader.classList.remove('loader');\n  loader.style.display = 'none';\n} // Rebuilds the elements in DOM based on local storage\n\nfunction updateDom() {\n  var tasks = JSON.parse(localStorage.getItem('tasks'));\n\n  for (var key in tasks) {\n    var listElem = document.getElementById(key); // If there are existing tasks in memory you will create new elements\n\n    if (tasks[key].length > 0) {\n      var _iterator = _createForOfIteratorHelper(tasks[key]),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var content = _step.value;\n          var newTaskElem = createListElement(content);\n          listElem.appendChild(newTaskElem);\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    }\n  }\n} //\n\nfunction cleanDom() {\n  var allTaskElem = document.querySelectorAll('.task');\n\n  var _iterator2 = _createForOfIteratorHelper(allTaskElem),\n      _step2;\n\n  try {\n    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n      var task = _step2.value;\n      task.remove();\n    }\n  } catch (err) {\n    _iterator2.e(err);\n  } finally {\n    _iterator2.f();\n  }\n} // Create List Element\n\nfunction createListElement(innerText) {\n  var eventListeners = {\n    mouseover: _directives_altMoveTask__WEBPACK_IMPORTED_MODULE_0__.changeTaskList,\n    click: _directives_tasks__WEBPACK_IMPORTED_MODULE_2__.editTask,\n    dragstart: _directives_dragAndDropTask__WEBPACK_IMPORTED_MODULE_1__.draggableDataTransfer\n  };\n  return createElement('li', innerText, [], ['task'], {\n    draggable: true\n  }, eventListeners);\n} // Create Element\n\nfunction createElement(tagName, innerText) {\n  var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];\n  var classes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];\n  var attributes = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};\n  var eventListeners = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};\n  var newElement = document.createElement(tagName); // children\n\n  var _iterator3 = _createForOfIteratorHelper(children),\n      _step3;\n\n  try {\n    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n      var child = _step3.value;\n      newElement.append(child);\n    } // classes\n\n  } catch (err) {\n    _iterator3.e(err);\n  } finally {\n    _iterator3.f();\n  }\n\n  var _iterator4 = _createForOfIteratorHelper(classes),\n      _step4;\n\n  try {\n    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {\n      var clas = _step4.value;\n      newElement.classList.add(clas);\n    } // attributes\n\n  } catch (err) {\n    _iterator4.e(err);\n  } finally {\n    _iterator4.f();\n  }\n\n  var attributesKeys = Object.keys(attributes);\n  var attributesValues = Object.values(attributes);\n\n  for (var i = 0; i < attributesKeys.length; i + 1) {\n    newElement.setAttribute(attributesKeys[i], attributesValues[i]);\n  } // eventListeners\n\n\n  var eventListenersKeys = Object.keys(eventListeners);\n  var eventListenersValues = Object.values(eventListeners);\n\n  for (var _i = 0; _i < eventListenersKeys.length; _i + 1) {\n    newElement.addEventListener(eventListenersKeys[_i], eventListenersValues[_i]);\n  } // inner text\n\n\n  newElement.textContent = innerText;\n  return newElement;\n}\n\n//# sourceURL=webpack://final/./src/services/DOM.js?");

/***/ }),

/***/ "./src/services/localStorage.js":
/*!**************************************!*\
  !*** ./src/services/localStorage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"saveDataLocal\": () => (/* binding */ saveDataLocal),\n/* harmony export */   \"saveNewDataLocal\": () => (/* binding */ saveNewDataLocal)\n/* harmony export */ });\n/* harmony import */ var _taskList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskList */ \"./src/services/taskList.js\");\n //\n\nfunction saveDataLocal(data) {\n  localStorage.setItem('tasks', JSON.stringify(data));\n} // Save to local all list new information\n\nfunction saveNewDataLocal(key, list) {\n  var taskList = list.childNodes;\n  var newTaskArray = []; // create an array of content\n\n  for (var i = 0; i < taskList.length; i + 1) {\n    var taskContent = taskList[i].textContent;\n    newTaskArray.push(taskContent);\n  }\n\n  var tasks = JSON.parse(localStorage.getItem('tasks'));\n  tasks[key] = newTaskArray;\n  localStorage.setItem('tasks', JSON.stringify(tasks));\n  (0,_taskList__WEBPACK_IMPORTED_MODULE_0__.updateTotal)();\n}\n\n//# sourceURL=webpack://final/./src/services/localStorage.js?");

/***/ }),

/***/ "./src/services/taskList.js":
/*!**********************************!*\
  !*** ./src/services/taskList.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"nextListByKey\": () => (/* binding */ nextListByKey),\n/* harmony export */   \"updateTotal\": () => (/* binding */ updateTotal)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n//\nfunction nextListByKey(event) {\n  var nextList;\n\n  if (event.altKey && event.key === '1') {\n    nextList = document.querySelector('.to-do-tasks');\n  } else if (event.altKey && event.key === '2') {\n    nextList = document.querySelector('.in-progress-tasks');\n  } else if (event.altKey && event.key === '3') {\n    nextList = document.querySelector('.done-tasks');\n  } else {\n    nextList = undefined;\n  }\n\n  return nextList;\n} // Updates total tasks based on local storage\n\nfunction updateTotal() {\n  var allListsElem = document.querySelectorAll('ul');\n  var data = JSON.parse(localStorage.getItem('tasks'));\n  var allLabel = document.querySelectorAll('label');\n  var i = 0;\n\n  var _iterator = _createForOfIteratorHelper(allListsElem),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var list = _step.value;\n      var totalNum = data[list.id].length; // data[list.id] = tasks[key]\n\n      var totalTasks = allLabel[i]; // Reaches total according to the selected list\n\n      totalTasks.textContent = \"Total: \".concat(totalNum);\n      i + 1;\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\n\n//# sourceURL=webpack://final/./src/services/taskList.js?");

/***/ }),

/***/ "./src/services/tasks.js":
/*!*******************************!*\
  !*** ./src/services/tasks.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskOnTop\": () => (/* binding */ taskOnTop)\n/* harmony export */ });\n// Show \"good job\" img and hidde after 2 seconds\nfunction goodJob() {\n  var imgElem = document.querySelector('img');\n  imgElem.style.display = 'flex'; // show img\n\n  setTimeout(function () {\n    return imgElem.style.display = 'none';\n  }, 2000); // hidde img\n} // Add task on top\n\n\nfunction taskOnTop(newTaskElem, taskList) {\n  if (!newTaskElem || !taskList) return;\n  if (taskList.id === 'done') goodJob();\n  taskList.insertBefore(newTaskElem, taskList.firstElementChild);\n}\n\n//# sourceURL=webpack://final/./src/services/tasks.js?");

/***/ }),

/***/ "./src/services/timeIndicators.js":
/*!****************************************!*\
  !*** ./src/services/timeIndicators.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openMessage\": () => (/* binding */ openMessage),\n/* harmony export */   \"startTime\": () => (/* binding */ startTime)\n/* harmony export */ });\n//\nfunction currentHour() {\n  var splitDate = Date().split(' ');\n  var splitTime = splitDate[4].split(':'); // get time and split to hour, min, sec\n\n  var hour = splitTime[0];\n  return hour;\n} // Returns the appropriate element to display according to the hour.\n\n\nfunction elemByDaySection(hour) {\n  var meseegeElem;\n\n  if (hour > 6 && hour < 12) {\n    meseegeElem = document.querySelector('.morning');\n  } else if (hour > 12 && hour < 18) {\n    meseegeElem = document.querySelector('.afternoon');\n  } else {\n    meseegeElem = document.querySelector('.night');\n  }\n\n  return meseegeElem;\n} // show and hidde opening messege - Depends on the hour\n\n\nfunction openMessage() {\n  var hour = currentHour();\n  var meseegeElem = elemByDaySection(hour);\n  meseegeElem.classList.add('display'); // show messege\n\n  setTimeout(function () {\n    return meseegeElem.classList.remove('display');\n  }, 3000); // hidde messege\n} // Add zero in front of numbers < 10\n\nfunction checkTime(i) {\n  if (i < 10) {\n    i = \"0\".concat(i);\n  } // add zero in front of numbers < 10\n\n\n  return i;\n} // Fixed clock\n\n\nfunction startTime() {\n  var today = new Date();\n  var h = today.getHours();\n  var m = today.getMinutes();\n  var s = today.getSeconds();\n  m = checkTime(m);\n  s = checkTime(s);\n  document.getElementById('clock').textContent = \"\".concat(h, \" : \").concat(m, \" : \").concat(s);\n  setTimeout(startTime, 1000);\n}\n\n//# sourceURL=webpack://final/./src/services/timeIndicators.js?");

/***/ }),

/***/ "./src/services/vadilator.js":
/*!***********************************!*\
  !*** ./src/services/vadilator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"localStorageValidator\": () => (/* binding */ localStorageValidator),\n/* harmony export */   \"inputVadilator\": () => (/* binding */ inputVadilator)\n/* harmony export */ });\n// Takes the information from the local storage, if the information is empty assign it an empty task template. Returns the updated content.\nfunction localStorageValidator() {\n  var primaryData = JSON.parse(window.localStorage.getItem('tasks')); // gets local primary data after refresh\n\n  if (primaryData === null) {\n    // There is no local storage -> define new empty one\n    var tasks = {\n      todo: [],\n      'in-progress': [],\n      done: []\n    };\n    localStorage.setItem('tasks', JSON.stringify(tasks));\n  }\n\n  return JSON.parse(window.localStorage.getItem('tasks'));\n} // If the input is blank it will throw a note to the user and otherwise return the input\n\nfunction inputVadilator(input) {\n  // Trying to submit empty tasks\n  if (input.length === 0) {\n    alert(\"Can't insert empty task. Try again\");\n  } else return input;\n}\n\n//# sourceURL=webpack://final/./src/services/vadilator.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://final/./src/styles.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;