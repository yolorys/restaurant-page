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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// src/contact.js\n\nfunction createContactPage() {\n    const contentDiv = document.getElementById('content');\n    contentDiv.innerHTML = ''; // Clear existing content\n\n    const contactHeadline = document.createElement('h1');\n    contactHeadline.textContent = 'Contact Us';\n\n    const address = document.createElement('p');\n    address.textContent = 'Address: 123 Main Street, Anytown, USA';\n\n    const phone = document.createElement('p');\n    phone.textContent = 'Phone: (555) 123-4567';\n\n    const email = document.createElement('p');\n    email.textContent = 'Email: info@restaurant.com';\n\n    contentDiv.appendChild(contactHeadline);\n    contentDiv.appendChild(address);\n    contentDiv.appendChild(phone);\n    contentDiv.appendChild(email);\n\n    // add a class for styling\n    // contentDiv.classList.add('contact-page');\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactPage);\n\n//# sourceURL=webpack:///./src/contact.js?\n}");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// src/home.js\n\nfunction createHomePage() {\n    const contentDiv = document.getElementById('content'); \n    contentDiv.innerHTML = '';\n\n    const headline = document.createElement('h1');\n    headline.textContent = 'Welcome to Our Amazing Restaurant!';\n\n    const description = document.createElement('p');\n    description.textContent = 'Experience culinary delights like no other. Our dishes are crafted with passion and the freshest ingredients.';\n\n\n    contentDiv.appendChild(headline);\n    contentDiv.appendChild(description);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomePage);\n\n//# sourceURL=webpack:///./src/home.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n// src/index.js\n\n\n\n\n\nconst homeButton = document.querySelector('.home');\nconst menuButton = document.querySelector('.menu');\nconst contactButton = document.querySelector('.contact');\n\nconsole.log(\"Hello from index.js!\"); \n\ndocument.addEventListener('DOMContentLoaded', () => {\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n});\n\nhomeButton.addEventListener('click', () => {\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n});\n\nmenuButton.addEventListener('click', () => {\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\ncontactButton.addEventListener('click', () => {\n    (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n//# sourceURL=webpack:///./src/index.js?\n}");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// src/menu.js\n\nfunction createMenuPage() {\n    const contentDiv = document.getElementById('content');\n    contentDiv.innerHTML = ''; // Clear existing content\n\n    const menuHeadline = document.createElement('h1');\n    menuHeadline.textContent = 'Our Delicious Menu';\n\n    const menuItem1 = document.createElement('p');\n    menuItem1.textContent = 'Pizza: A classic, with fresh ingredients. $15';\n\n    const menuItem2 = document.createElement('p');\n    menuItem2.textContent = 'Pasta Carbonara: Creamy, rich, and satisfying. $18';\n\n    contentDiv.appendChild(menuHeadline);\n    contentDiv.appendChild(menuItem1);\n    contentDiv.appendChild(menuItem2);\n\n    // add a class for styling\n    // contentDiv.classList.add('menu-page');\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuPage);\n\n//# sourceURL=webpack:///./src/menu.js?\n}");

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