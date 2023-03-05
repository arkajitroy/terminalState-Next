"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/BlogCard.tsx":
/*!*************************************!*\
  !*** ./src/components/BlogCard.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\n\n\n\nconst BACKEND_URL = process.env.API_BASE_URL;\nconst BlogCard = (param)=>{\n    let { article  } = param;\n    const AUTHOR_IMAGE = article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url;\n    const AUTHOR_FIRST_NAME = article.attributes.author.data.attributes.firstname;\n    const AUTHOR_LAST_NAME = article.attributes.author.data.attributes.lastname;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"#\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-xl text-gray-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer\",\n                    children: article.attributes.title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\arkaj\\\\Desktop\\\\terminalState\\\\client_next_server\\\\src\\\\components\\\\BlogCard.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"bg-gray-600 text-white w-fit pl-2 pr-2 h-4\",\n                    children: \"Tags\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\arkaj\\\\Desktop\\\\terminalState\\\\client_next_server\\\\src\\\\components\\\\BlogCard.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center my-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mr-4 rounded-lg overflow-hidden flex items-center justify-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: \"http://127.0.0.1:1337\".concat(AUTHOR_IMAGE),\n                                alt: \"\",\n                                height: 20,\n                                width: 20\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\arkaj\\\\Desktop\\\\terminalState\\\\client_next_server\\\\src\\\\components\\\\BlogCard.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\arkaj\\\\Desktop\\\\terminalState\\\\client_next_server\\\\src\\\\components\\\\BlogCard.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-sm font-bold text-gray-600 mr-4\",\n                            children: [\n                                AUTHOR_FIRST_NAME,\n                                \" \",\n                                AUTHOR_LAST_NAME\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\arkaj\\\\Desktop\\\\terminalState\\\\client_next_server\\\\src\\\\components\\\\BlogCard.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-gray-400\",\n                            children: article.attributes.createdAt\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\arkaj\\\\Desktop\\\\terminalState\\\\client_next_server\\\\src\\\\components\\\\BlogCard.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\arkaj\\\\Desktop\\\\terminalState\\\\client_next_server\\\\src\\\\components\\\\BlogCard.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-justify text-gray-500\",\n                    children: article.attributes.body\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\arkaj\\\\Desktop\\\\terminalState\\\\client_next_server\\\\src\\\\components\\\\BlogCard.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\arkaj\\\\Desktop\\\\terminalState\\\\client_next_server\\\\src\\\\components\\\\BlogCard.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c = BlogCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogCard);\nvar _c;\n$RefreshReg$(_c, \"BlogCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CbG9nQ2FyZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDMEI7QUFDRztBQUNFO0FBTS9CLE1BQU1HLGNBQWNDLE9BQU9BLENBQUNDLEdBQUcsQ0FBQ0MsWUFBWTtBQUU1QyxNQUFNQyxXQUFXLFNBQTRCO1FBQTNCLEVBQUVDLFFBQU8sRUFBYTtJQUN0QyxNQUFNQyxlQUNKRCxRQUFRRSxVQUFVLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDRixVQUFVLENBQUNHLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDRixVQUFVLENBQUNJLE9BQU8sQ0FDckVDLFNBQVMsQ0FBQ0MsR0FBRztJQUVsQixNQUFNQyxvQkFBb0JULFFBQVFFLFVBQVUsQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNGLFVBQVUsQ0FBQ1EsU0FBUztJQUM3RSxNQUFNQyxtQkFBbUJYLFFBQVFFLFVBQVUsQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNGLFVBQVUsQ0FBQ1UsUUFBUTtJQUUzRSxxQkFDRTtrQkFDRSw0RUFBQ25CLGtEQUFJQTtZQUFDb0IsTUFBSzs7OEJBQ1QsOERBQUNDO29CQUFHQyxXQUFVOzhCQUNYZixRQUFRRSxVQUFVLENBQUNjLEtBQUs7Ozs7Ozs4QkFFM0IsOERBQUNDO29CQUFLRixXQUFVOzhCQUE2Qzs7Ozs7OzhCQUU3RCw4REFBQ0c7b0JBQUlILFdBQVU7O3NDQUNiLDhEQUFDRzs0QkFBSUgsV0FBVTtzQ0FDYiw0RUFBQ3JCLG1EQUFLQTtnQ0FDSnlCLEtBQUssd0JBQXFDLE9BQWJsQjtnQ0FDN0JtQixLQUFJO2dDQUNKQyxRQUFRO2dDQUNSQyxPQUFPOzs7Ozs7Ozs7OztzQ0FHWCw4REFBQ0w7NEJBQUtGLFdBQVU7O2dDQUNiTjtnQ0FBa0I7Z0NBQUVFOzs7Ozs7O3NDQUV2Qiw4REFBQ007NEJBQUtGLFdBQVU7c0NBQWlCZixRQUFRRSxVQUFVLENBQUNxQixTQUFTOzs7Ozs7Ozs7Ozs7OEJBRy9ELDhEQUFDQztvQkFBRVQsV0FBVTs4QkFBOEJmLFFBQVFFLFVBQVUsQ0FBQ3VCLElBQUk7Ozs7Ozs7Ozs7Ozs7QUFJMUU7S0FuQ00xQjtBQXFDTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9CbG9nQ2FyZC50c3g/Yjk0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQXJ0aWNsZSB9IGZyb20gXCJAL0ludGVyZmFjZS9BcnRpY2xlLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BUeXBlIHtcclxuICBhcnRpY2xlOiBJQXJ0aWNsZTtcclxufVxyXG5cclxuY29uc3QgQkFDS0VORF9VUkwgPSBwcm9jZXNzLmVudi5BUElfQkFTRV9VUkw7XHJcblxyXG5jb25zdCBCbG9nQ2FyZCA9ICh7IGFydGljbGUgfTogSVByb3BUeXBlKSA9PiB7XHJcbiAgY29uc3QgQVVUSE9SX0lNQUdFID1cclxuICAgIGFydGljbGUuYXR0cmlidXRlcy5hdXRob3IuZGF0YS5hdHRyaWJ1dGVzLmF2YXRhci5kYXRhLmF0dHJpYnV0ZXMuZm9ybWF0c1xyXG4gICAgICAudGh1bWJuYWlsLnVybDtcclxuXHJcbiAgY29uc3QgQVVUSE9SX0ZJUlNUX05BTUUgPSBhcnRpY2xlLmF0dHJpYnV0ZXMuYXV0aG9yLmRhdGEuYXR0cmlidXRlcy5maXJzdG5hbWU7XHJcbiAgY29uc3QgQVVUSE9SX0xBU1RfTkFNRSA9IGFydGljbGUuYXR0cmlidXRlcy5hdXRob3IuZGF0YS5hdHRyaWJ1dGVzLmxhc3RuYW1lO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LWdyYXktNjAwIGZvbnQtYm9sZCBob3ZlcjpkZWNvcmF0aW9uLTIgaG92ZXI6dW5kZXJsaW5lIGhvdmVyOmN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICB7YXJ0aWNsZS5hdHRyaWJ1dGVzLnRpdGxlfVxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctZ3JheS02MDAgdGV4dC13aGl0ZSB3LWZpdCBwbC0yIHByLTIgaC00XCI+VGFnczwvc3Bhbj5cclxuICAgICAgICB7LyogSU5GT1JNQVRJT04tU0VDVElPTiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG15LTRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItNCByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e2BodHRwOi8vMTI3LjAuMC4xOjEzMzcke0FVVEhPUl9JTUFHRX1gfVxyXG4gICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cclxuICAgICAgICAgICAgICB3aWR0aD17MjB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtZ3JheS02MDAgbXItNFwiPlxyXG4gICAgICAgICAgICB7QVVUSE9SX0ZJUlNUX05BTUV9IHtBVVRIT1JfTEFTVF9OQU1FfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMFwiPnthcnRpY2xlLmF0dHJpYnV0ZXMuY3JlYXRlZEF0fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogQkxPRy1CT0RZLVNFQ1RJT04gKi99XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1qdXN0aWZ5IHRleHQtZ3JheS01MDBcIj57YXJ0aWNsZS5hdHRyaWJ1dGVzLmJvZHl9PC9wPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZ0NhcmQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJJbWFnZSIsIkJBQ0tFTkRfVVJMIiwicHJvY2VzcyIsImVudiIsIkFQSV9CQVNFX1VSTCIsIkJsb2dDYXJkIiwiYXJ0aWNsZSIsIkFVVEhPUl9JTUFHRSIsImF0dHJpYnV0ZXMiLCJhdXRob3IiLCJkYXRhIiwiYXZhdGFyIiwiZm9ybWF0cyIsInRodW1ibmFpbCIsInVybCIsIkFVVEhPUl9GSVJTVF9OQU1FIiwiZmlyc3RuYW1lIiwiQVVUSE9SX0xBU1RfTkFNRSIsImxhc3RuYW1lIiwiaHJlZiIsImgxIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJzcGFuIiwiZGl2Iiwic3JjIiwiYWx0IiwiaGVpZ2h0Iiwid2lkdGgiLCJjcmVhdGVkQXQiLCJwIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/BlogCard.tsx\n"));

/***/ })

});