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

/***/ "./src/components/Pagination.tsx":
/*!***************************************!*\
  !*** ./src/components/Pagination.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Pagination = (param)=>{\n    let { page , pageCount  } = param;\n    const isNextDisabled = ()=>{\n        return false;\n    };\n    const isPrevDisabled = ()=>{\n        return true;\n    };\n    const handlePaginate = (direction)=>{\n        if (direction === 1 && isNextDisabled()) return;\n        if (direction === -1 && isPrevDisabled()) return;\n    };\n    const active_btn = \"bg-gray-400 hover:bg-indigo-700 ml-4 py-2 px-4 text-white w-24 rounded\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center mt-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handlePaginate(-1),\n                className: \"\".concat(active_btn, \" \").concat(isPrevDisabled() ? \"disabled\" : \"\"),\n                children: \"Previous\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\arkaj\\\\Desktop\\\\terminalState\\\\client_next_server\\\\src\\\\components\\\\Pagination.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handlePaginate(1),\n                className: \"\".concat(active_btn, \" \").concat(isNextDisabled() ? \"disabled\" : \"\"),\n                children: \"Next\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\arkaj\\\\Desktop\\\\terminalState\\\\client_next_server\\\\src\\\\components\\\\Pagination.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\arkaj\\\\Desktop\\\\terminalState\\\\client_next_server\\\\src\\\\components\\\\Pagination.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Pagination;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pagination);\nvar _c;\n$RefreshReg$(_c, \"Pagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QYWdpbmF0aW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDMEI7QUFPMUIsTUFBTUMsYUFBYSxTQUFvQztRQUFuQyxFQUFFQyxLQUFJLEVBQUVDLFVBQVMsRUFBYTtJQUNoRCxNQUFNQyxpQkFBaUIsSUFBZTtRQUNwQyxPQUFPLEtBQUs7SUFDZDtJQUNBLE1BQU1DLGlCQUFpQixJQUFlO1FBQ3BDLE9BQU8sSUFBSTtJQUNiO0lBRUEsTUFBTUMsaUJBQWlCLENBQUNDLFlBQTBCO1FBQ2hELElBQUlBLGNBQWMsS0FBS0gsa0JBQWtCO1FBQ3pDLElBQUlHLGNBQWMsQ0FBQyxLQUFLRixrQkFBa0I7SUFDNUM7SUFFQSxNQUFNRyxhQUNKO0lBRUYscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFDQ0MsU0FBUyxJQUFNTixlQUFlLENBQUM7Z0JBQy9CSSxXQUFXLEdBQWlCTCxPQUFkRyxZQUFXLEtBQXNDLE9BQW5DSCxtQkFBbUIsYUFBYSxFQUFFOzBCQUMvRDs7Ozs7OzBCQUdELDhEQUFDTTtnQkFDQ0MsU0FBUyxJQUFNTixlQUFlO2dCQUM5QkksV0FBVyxHQUFpQk4sT0FBZEksWUFBVyxLQUFzQyxPQUFuQ0osbUJBQW1CLGFBQWEsRUFBRTswQkFDL0Q7Ozs7Ozs7Ozs7OztBQUtQO0tBaENNSDtBQWtDTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9QYWdpbmF0aW9uLnRzeD84MTViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFREaXJlY3Rpb24gfSBmcm9tIFwiQC90eXBlcy90eXBlcy9kaXJlY3Rpb24udHlwZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BUeXBlIHtcclxuICBwYWdlOiBudW1iZXI7XHJcbiAgcGFnZUNvdW50OiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IFBhZ2luYXRpb24gPSAoeyBwYWdlLCBwYWdlQ291bnQgfTogSVByb3BUeXBlKSA9PiB7XHJcbiAgY29uc3QgaXNOZXh0RGlzYWJsZWQgPSAoKTogYm9vbGVhbiA9PiB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfTtcclxuICBjb25zdCBpc1ByZXZEaXNhYmxlZCA9ICgpOiBib29sZWFuID0+IHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBhZ2luYXRlID0gKGRpcmVjdGlvbjogVERpcmVjdGlvbikgPT4ge1xyXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gMSAmJiBpc05leHREaXNhYmxlZCgpKSByZXR1cm47XHJcbiAgICBpZiAoZGlyZWN0aW9uID09PSAtMSAmJiBpc1ByZXZEaXNhYmxlZCgpKSByZXR1cm47XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWN0aXZlX2J0biA9XHJcbiAgICBcImJnLWdyYXktNDAwIGhvdmVyOmJnLWluZGlnby03MDAgbWwtNCBweS0yIHB4LTQgdGV4dC13aGl0ZSB3LTI0IHJvdW5kZWRcIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0yMFwiPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUGFnaW5hdGUoLTEpfVxyXG4gICAgICAgIGNsYXNzTmFtZT17YCR7YWN0aXZlX2J0bn0gJHtpc1ByZXZEaXNhYmxlZCgpID8gXCJkaXNhYmxlZFwiIDogXCJcIn1gfVxyXG4gICAgICA+XHJcbiAgICAgICAgUHJldmlvdXNcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQYWdpbmF0ZSgxKX1cclxuICAgICAgICBjbGFzc05hbWU9e2Ake2FjdGl2ZV9idG59ICR7aXNOZXh0RGlzYWJsZWQoKSA/IFwiZGlzYWJsZWRcIiA6IFwiXCJ9YH1cclxuICAgICAgPlxyXG4gICAgICAgIE5leHRcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUGFnaW5hdGlvbiIsInBhZ2UiLCJwYWdlQ291bnQiLCJpc05leHREaXNhYmxlZCIsImlzUHJldkRpc2FibGVkIiwiaGFuZGxlUGFnaW5hdGUiLCJkaXJlY3Rpb24iLCJhY3RpdmVfYnRuIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Pagination.tsx\n"));

/***/ })

});