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

/***/ "./src/css/bootstrap.css":
/*!*******************************!*\
  !*** ./src/css/bootstrap.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack/./src/css/bootstrap.css?");

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack/./src/css/main.css?");

/***/ }),

/***/ "./src/js/createUptade.js":
/*!********************************!*\
  !*** ./src/js/createUptade.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ \"./src/js/request.js\");\n/* harmony import */ var _uptadeUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uptadeUI */ \"./src/js/uptadeUI.js\");\n/* harmony import */ var _reload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reload */ \"./src/js/reload.js\");\nconst createForm = document.querySelector('#create-form')\r\n;\r\n\r\n\r\ncreateForm.addEventListener('submit', (e) => {\r\n    e.preventDefault()\r\n    const color = createForm['create-car-color'].value\r\n    const name = createForm['create-car'].value\r\n    if (!name.trim()) {\r\n        alert('Enter car name or color!!!')\r\n    } else {\r\n        const newCar = { name, color }\r\n        ;(0,_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('http://127.0.0.1:3000/garage', \"POST\", newCar)\r\n            .then((data) => {\r\n                ;(0,_reload__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n            })\r\n            .catch((err) => {\r\n                console.log(err);\r\n            })\r\n    }\r\n    createForm.reset()\r\n})\n\n//# sourceURL=webpack://webpack/./src/js/createUptade.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_bootstrap_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/bootstrap.css */ \"./src/css/bootstrap.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request */ \"./src/js/request.js\");\n/* harmony import */ var _createUptade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createUptade */ \"./src/js/createUptade.js\");\n/* harmony import */ var _uptadeUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uptadeUI */ \"./src/js/uptadeUI.js\");\n/* harmony import */ var _reload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reload */ \"./src/js/reload.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_reload__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n\n//# sourceURL=webpack://webpack/./src/js/main.js?");

/***/ }),

/***/ "./src/js/reload.js":
/*!**************************!*\
  !*** ./src/js/reload.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ \"./src/js/request.js\");\n/* harmony import */ var _uptadeUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uptadeUI */ \"./src/js/uptadeUI.js\");\n\r\n\r\nfunction reload() {\r\n    (0,_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"http://127.0.0.1:3000/garage\")\r\n        .then((data) => {\r\n            (0,_uptadeUI__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\r\n        })\r\n        .catch((err) => {\r\n            console.log(err);\r\n        })\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reload);\n\n//# sourceURL=webpack://webpack/./src/js/reload.js?");

/***/ }),

/***/ "./src/js/request.js":
/*!***************************!*\
  !*** ./src/js/request.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst request = async (url, method = \"GET\", data) => {\r\n    const response = await fetch(url, {\r\n        method: method,\r\n        headers: {\r\n            \"Content-Type\": \"application/json\"\r\n        },\r\n        body: data ? JSON.stringify(data) : null,\r\n    })\r\n    return response.json()\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (request);\n\n//# sourceURL=webpack://webpack/./src/js/request.js?");

/***/ }),

/***/ "./src/js/uptadeUI.js":
/*!****************************!*\
  !*** ./src/js/uptadeUI.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createUptade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createUptade */ \"./src/js/createUptade.js\");\n/* harmony import */ var _reload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reload */ \"./src/js/reload.js\");\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request */ \"./src/js/request.js\");\n\r\n\r\n\r\nconst uptadeForm = document.querySelector('#uptade-form')\r\nconst ul = document.querySelector('.cars')\r\nconst uptadeUI = (data) => {\r\n    ul.innerHTML = ''\r\n    data.forEach((car) => {\r\n        ul.innerHTML += `\r\n        <li>\r\n            <div class=\"top d-flex justify-content-between\">\r\n                <div class=\"btns fs-5\">\r\n                    <button id=\"start\" type=\"button\" class=\"btn btn-primary btn-sm\">Start</button>\r\n                    <button id=\"stop\" type=\"button\" class=\"btn btn-primary btn-sm\">Stop</button>\r\n                    <button id=\"select\" data-name=\"${car.name}\" data-color=\"${car.color}\" data-id=\"${car.id}\" type=\"button\" class=\"btn btn-primary btn-sm\">Select</button>\r\n                    <button id=\"delete\" data-id=\"${car.id}\" type=\"button\" class=\"btn btn-danger btn-sm\"><ion-icon\r\n                     name=\"trash-outline\"></ion-icon>\r\n                    </button>\r\n                </div>\r\n                <div class=\"name\">${car.name}</div>\r\n            </div>\r\n            <div class=\"bottom d-flex justify-content-between\">\r\n                        <svg style=\"color: ${car.color};\" class=\"svg-inline--fa fa-car-side\" aria-hidden=\"true\" focusable=\"false\"\r\n        data-prefix=\"fas\" data-icon=\"car-side\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 512\"\r\n        data-fa-i2svg=\"\">\r\n        <path fill=\"currentColor\"\r\n            d=\"M171.3 96H224v96H111.3l30.4-75.9C146.5 104 158.2 96 171.3 96zM272 192V96h81.2c9.7 0 18.9 4.4 25 12l67.2 84H272zm256.2 1L428.2 68c-18.2-22.8-45.8-36-75-36H171.3c-39.3 0-74.6 23.9-89.1 60.3L40.6 196.4C16.8 205.8 0 228.9 0 256V368c0 17.7 14.3 32 32 32H65.3c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80H385.3c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80H608c17.7 0 32-14.3 32-32V320c0-65.2-48.8-119-111.8-127zm-2.9 207c-6.6 18.6-24.4 32-45.3 32s-38.7-13.4-45.3-32c-1.8-5-2.7-10.4-2.7-16c0-26.5 21.5-48 48-48s48 21.5 48 48c0 5.6-1 11-2.7 16zM160 432c-20.9 0-38.7-13.4-45.3-32c-1.8-5-2.7-10.4-2.7-16c0-26.5 21.5-48 48-48s48 21.5 48 48c0 5.6-1 11-2.7 16c-6.6 18.6-24.4 32-45.3 32z\">\r\n        </path>\r\n    </svg>\r\n                        <ion-icon name=\"flag\"></ion-icon>\r\n            </div>\r\n        </li>\r\n        `\r\n    });\r\n    let deleteBtn = document.querySelectorAll('#delete')\r\n    deleteBtn.forEach((btn) => {\r\n        btn.addEventListener('click', () => {\r\n            ;(0,_request__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(`http://127.0.0.1:3000/garage/${btn.dataset.id}`, 'DELETE')\r\n                .then((data) => {\r\n                    ;(0,_reload__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n                })\r\n                .catch((err) => {\r\n                    console.log(err);\r\n                })\r\n        })\r\n    });\r\n    let selectBtn = document.querySelectorAll('#select')\r\n    selectBtn.forEach((btn) => {\r\n        btn.addEventListener('click', () => {\r\n            uptadeForm['uptade-car'].value = btn.dataset.name\r\n            uptadeForm['uptade-car-color'].value = btn.dataset.color\r\n        })\r\n        uptadeForm.addEventListener('submit', (e) => {\r\n            e.preventDefault()\r\n            let name = uptadeForm['uptade-car'].value\r\n            let color = uptadeForm['uptade-car-color'].value\r\n            if (!name.trim()) {\r\n                alert('Enter car name or car color!!!')\r\n            } else {\r\n                let uptadeCar = { name, color }\r\n                ;(0,_request__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(`http://127.0.0.1:3000/garage/${btn.dataset.id}`, 'PUT', uptadeCar)\r\n                ;(0,_reload__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n            }\r\n        })\r\n    });\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uptadeUI);\n\n//# sourceURL=webpack://webpack/./src/js/uptadeUI.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;