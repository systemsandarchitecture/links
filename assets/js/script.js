/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

__webpack_require__(2);

__webpack_require__(3);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// links
var links = document.querySelector('#links');

// links structure
var linksStructure = '\n  <div class="container">\n    <div class="row">\n      <div class="content">\n        <div class="links"></div>\n      </div>\n    </div>\n  </div>\n';

if (links) {
  links.innerHTML = linksStructure;
}

// links class
var linksClass = document.querySelector('.links');

// data url
var dataUrl = './assets/data/links.json';

// getting data
function getData() {
  fetch(dataUrl).then(function (response) {
    return response.json();
  }).then(function (data) {
    displayData(data);
  });
}
getData();

// displaying data
function displayData(linksData) {

  var linksItems = '';

  for (var i in linksData) {

    var category = linksData[i].category;
    var items = linksData[i].items;

    for (var j in items) {

      linksItems += '\n        <div class="item">\n          <a href="' + items[j].url + '" target="_blank" rel="noopener">\n            <img src="./assets/images/' + category + '/' + items[j].image + '.png" alt="' + items[j].name + '" class="item-image">\n            <p class="item-name">' + items[j].name + '</p>\n          </a>\n        </div>\n      ';
    }
  }
  linksClass.innerHTML = linksItems;
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// footer
var footer = document.querySelector('#footer');

// footer structure
var footerStructure = '\n  <div class="container">\n    <div class="row">\n      <div class="content">\n        <hr>\n        <div class="footer-bottom">\n          <p>&copy; <span id="year"></span> <a href="https://sysandarc.com/" target="_blank" rel="noopener">Systems & Architecture LLC</a></p>\n          <p>All other trademarks or registered trademarks are property of their respective owners.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n';

if (footer) {
  footer.innerHTML = footerStructure;
}

// year
var year = new Date();
document.querySelector('#year').textContent = year.getFullYear();

/***/ })
/******/ ]);