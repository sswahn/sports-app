"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunksports_app"] = self["webpackChunksports_app"] || []).push([["src_components_CreateDrill_CreateDrill_js"],{

/***/ "./src/components/CreateDrill/CreateDrill.js":
/*!***************************************************!*\
  !*** ./src/components/CreateDrill/CreateDrill.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Select_Select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Select/Select */ \"./src/components/Select/Select.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ \"./src/config.js\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nvar CreateDrill = function CreateDrill() {\n  var handleAges = function handleAges(event) {\n    console.log('event.target.value: ', event.target.value);\n  };\n  var handleCategories = function handleCategories(event) {\n    console.log('event.target.value: ', event.target.value);\n  };\n  return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"form\", null, /*#__PURE__*/React.createElement(\"input\", {\n    tyoe: \"text\",\n    placeholder: \"Title of drill\"\n  }), /*#__PURE__*/React.createElement(\"textarea\", {\n    placeholder: \"Description of drill.\"\n  }), /*#__PURE__*/React.createElement(\"input\", {\n    type: \"file\"\n  }), /*#__PURE__*/React.createElement(_Select_Select__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    options: _config__WEBPACK_IMPORTED_MODULE_1__.config.data.drills.ages,\n    onChange: handleAges\n  }), /*#__PURE__*/React.createElement(_Select_Select__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    options: _config__WEBPACK_IMPORTED_MODULE_1__.config.data.drills.categories,\n    onChange: handleCategories\n  }), /*#__PURE__*/React.createElement(\"button\", null, \"Preview\"), /*#__PURE__*/React.createElement(\"button\", {\n    type: \"submit\"\n  }, \"Submit\")));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateDrill);\n\n//# sourceURL=webpack://sports-app/./src/components/CreateDrill/CreateDrill.js?");

/***/ })

}]);