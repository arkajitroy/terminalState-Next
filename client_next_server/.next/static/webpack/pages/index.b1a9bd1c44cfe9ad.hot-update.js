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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Pagination = ()=>{\n    const isNextDisabled = ()=>{\n        return true;\n    };\n    const isPrevDisabled = ()=>{\n        return true;\n    };\n    const handlePaginate = (direction)=>{\n        if (direction === 1 && isNextDisabled()) return;\n        if (direction === -1 && isPrevDisabled()) return;\n    };\n    const active_btn = \"bg-gray-400 hover:bg-indigo-700 ml-4 py-2 px-4 text-white w-24 rounded\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center mt-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handlePaginate(-1),\n                className: \"\".concat(active_btn),\n                children: \"Previous\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\arkaj\\\\Desktop\\\\terminalState\\\\client_next_server\\\\src\\\\components\\\\Pagination.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handlePaginate(1),\n                className: \"\".concat(active_btn),\n                children: \"Next\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\arkaj\\\\Desktop\\\\terminalState\\\\client_next_server\\\\src\\\\components\\\\Pagination.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\arkaj\\\\Desktop\\\\terminalState\\\\client_next_server\\\\src\\\\components\\\\Pagination.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Pagination;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pagination);\nvar _c;\n$RefreshReg$(_c, \"Pagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QYWdpbmF0aW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDMEI7QUFFMUIsTUFBTUMsYUFBYSxJQUFNO0lBQ3ZCLE1BQU1DLGlCQUFpQixJQUFlO1FBQ3BDLE9BQU8sSUFBSTtJQUNiO0lBQ0EsTUFBTUMsaUJBQWlCLElBQWU7UUFDcEMsT0FBTyxJQUFJO0lBQ2I7SUFFQSxNQUFNQyxpQkFBaUIsQ0FBQ0MsWUFBMEI7UUFDaEQsSUFBSUEsY0FBYyxLQUFLSCxrQkFBa0I7UUFDekMsSUFBSUcsY0FBYyxDQUFDLEtBQUtGLGtCQUFrQjtJQUM1QztJQUVBLE1BQU1HLGFBQ0o7SUFFRixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFPQyxTQUFTLElBQU1OLGVBQWUsQ0FBQztnQkFBSUksV0FBVyxHQUFjLE9BQVhGOzBCQUFjOzs7Ozs7MEJBR3ZFLDhEQUFDRztnQkFBT0MsU0FBUyxJQUFNTixlQUFlO2dCQUFJSSxXQUFXLEdBQWMsT0FBWEY7MEJBQWM7Ozs7Ozs7Ozs7OztBQUs1RTtLQTFCTUw7QUE0Qk4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGFnaW5hdGlvbi50c3g/ODE1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBURGlyZWN0aW9uIH0gZnJvbSBcIkAvdHlwZXMvdHlwZXMvZGlyZWN0aW9uLnR5cGVcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgUGFnaW5hdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCBpc05leHREaXNhYmxlZCA9ICgpOiBib29sZWFuID0+IHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH07XHJcbiAgY29uc3QgaXNQcmV2RGlzYWJsZWQgPSAoKTogYm9vbGVhbiA9PiB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVQYWdpbmF0ZSA9IChkaXJlY3Rpb246IFREaXJlY3Rpb24pID0+IHtcclxuICAgIGlmIChkaXJlY3Rpb24gPT09IDEgJiYgaXNOZXh0RGlzYWJsZWQoKSkgcmV0dXJuO1xyXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gLTEgJiYgaXNQcmV2RGlzYWJsZWQoKSkgcmV0dXJuO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFjdGl2ZV9idG4gPVxyXG4gICAgXCJiZy1ncmF5LTQwMCBob3ZlcjpiZy1pbmRpZ28tNzAwIG1sLTQgcHktMiBweC00IHRleHQtd2hpdGUgdy0yNCByb3VuZGVkXCI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtMjBcIj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQYWdpbmF0ZSgtMSl9IGNsYXNzTmFtZT17YCR7YWN0aXZlX2J0bn1gfT5cclxuICAgICAgICBQcmV2aW91c1xyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQYWdpbmF0ZSgxKX0gY2xhc3NOYW1lPXtgJHthY3RpdmVfYnRufWB9PlxyXG4gICAgICAgIE5leHRcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUGFnaW5hdGlvbiIsImlzTmV4dERpc2FibGVkIiwiaXNQcmV2RGlzYWJsZWQiLCJoYW5kbGVQYWdpbmF0ZSIsImRpcmVjdGlvbiIsImFjdGl2ZV9idG4iLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Pagination.tsx\n"));

/***/ })

});