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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qs */ \"./node_modules/qs/lib/index.js\");\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Pagination = (param)=>{\n    let { page , pageCount , redirectURL =\"/\"  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const isPrevDisabled = ()=>{\n        return page <= 1;\n    };\n    const isNextDisabled = ()=>{\n        return page >= pageCount;\n    };\n    const handlePaginate = (direction)=>{\n        if (direction === 1 && isNextDisabled()) return;\n        if (direction === -1 && isPrevDisabled()) return;\n        const queryString = qs__WEBPACK_IMPORTED_MODULE_1___default().stringify({\n            ...router.query,\n            page: page + direction\n        });\n        router.push();\n    };\n    const active_btn = \"bg-gray-400 hover:bg-indigo-700 ml-4 py-2 px-4 text-white w-24 rounded\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center mt-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handlePaginate(-1),\n                className: \"\".concat(active_btn, \" \").concat(isPrevDisabled() ? \"disabled\" : \"\"),\n                children: \"Previous\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\arkaj\\\\Desktop\\\\terminalState\\\\client_next_server\\\\src\\\\components\\\\Pagination.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handlePaginate(1),\n                className: \"\".concat(active_btn, \" \").concat(isNextDisabled() ? \"disabled\" : \"\"),\n                children: \"Next\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\arkaj\\\\Desktop\\\\terminalState\\\\client_next_server\\\\src\\\\components\\\\Pagination.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\arkaj\\\\Desktop\\\\terminalState\\\\client_next_server\\\\src\\\\components\\\\Pagination.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Pagination, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Pagination;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pagination);\nvar _c;\n$RefreshReg$(_c, \"Pagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QYWdpbmF0aW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDNkI7QUFDVztBQU94QyxNQUFNRSxhQUFhLFNBQXVEO1FBQXRELEVBQUVDLEtBQUksRUFBRUMsVUFBUyxFQUFFQyxhQUFjLElBQUcsRUFBYTs7SUFDbkUsTUFBTUMsU0FBU0wsc0RBQVNBO0lBQ3hCLE1BQU1NLGlCQUFpQixJQUFlO1FBQ3BDLE9BQU9KLFFBQVE7SUFDakI7SUFFQSxNQUFNSyxpQkFBaUIsSUFBZTtRQUNwQyxPQUFPTCxRQUFRQztJQUNqQjtJQUVBLE1BQU1LLGlCQUFpQixDQUFDQyxZQUEwQjtRQUNoRCxJQUFJQSxjQUFjLEtBQUtGLGtCQUFrQjtRQUN6QyxJQUFJRSxjQUFjLENBQUMsS0FBS0gsa0JBQWtCO1FBRTFDLE1BQU1JLGNBQWNYLG1EQUFxQixDQUFDO1lBQ3hDLEdBQUdNLE9BQU9PLEtBQUs7WUFDZlYsTUFBTUEsT0FBT087UUFDZjtRQUVBSixPQUFPUSxJQUFJO0lBQ2I7SUFFQSxNQUFNQyxhQUNKO0lBRUYscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFDQ0MsU0FBUyxJQUFNVixlQUFlLENBQUM7Z0JBQy9CUSxXQUFXLEdBQWlCVixPQUFkUSxZQUFXLEtBQXNDLE9BQW5DUixtQkFBbUIsYUFBYSxFQUFFOzBCQUMvRDs7Ozs7OzBCQUdELDhEQUFDVztnQkFDQ0MsU0FBUyxJQUFNVixlQUFlO2dCQUM5QlEsV0FBVyxHQUFpQlQsT0FBZE8sWUFBVyxLQUFzQyxPQUFuQ1AsbUJBQW1CLGFBQWEsRUFBRTswQkFDL0Q7Ozs7Ozs7Ozs7OztBQUtQO0dBekNNTjs7UUFDV0Qsa0RBQVNBOzs7S0FEcEJDO0FBMkNOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BhZ2luYXRpb24udHN4PzgxNWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVERpcmVjdGlvbiB9IGZyb20gXCJAL3R5cGVzL3R5cGVzL2RpcmVjdGlvbi50eXBlXCI7XHJcbmltcG9ydCBRdWVyeVN0cmluZyBmcm9tIFwicXNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BUeXBlIHtcclxuICBwYWdlOiBudW1iZXI7XHJcbiAgcGFnZUNvdW50OiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IFBhZ2luYXRpb24gPSAoeyBwYWdlLCBwYWdlQ291bnQsIHJlZGlyZWN0VVJMID0gXCIvXCIgfTogSVByb3BUeXBlKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgaXNQcmV2RGlzYWJsZWQgPSAoKTogYm9vbGVhbiA9PiB7XHJcbiAgICByZXR1cm4gcGFnZSA8PSAxO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGlzTmV4dERpc2FibGVkID0gKCk6IGJvb2xlYW4gPT4ge1xyXG4gICAgcmV0dXJuIHBhZ2UgPj0gcGFnZUNvdW50O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBhZ2luYXRlID0gKGRpcmVjdGlvbjogVERpcmVjdGlvbikgPT4ge1xyXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gMSAmJiBpc05leHREaXNhYmxlZCgpKSByZXR1cm47XHJcbiAgICBpZiAoZGlyZWN0aW9uID09PSAtMSAmJiBpc1ByZXZEaXNhYmxlZCgpKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgcXVlcnlTdHJpbmcgPSBRdWVyeVN0cmluZy5zdHJpbmdpZnkoe1xyXG4gICAgICAuLi5yb3V0ZXIucXVlcnksXHJcbiAgICAgIHBhZ2U6IHBhZ2UgKyBkaXJlY3Rpb24sXHJcbiAgICB9KTtcclxuXHJcbiAgICByb3V0ZXIucHVzaCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFjdGl2ZV9idG4gPVxyXG4gICAgXCJiZy1ncmF5LTQwMCBob3ZlcjpiZy1pbmRpZ28tNzAwIG1sLTQgcHktMiBweC00IHRleHQtd2hpdGUgdy0yNCByb3VuZGVkXCI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtMjBcIj5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBhZ2luYXRlKC0xKX1cclxuICAgICAgICBjbGFzc05hbWU9e2Ake2FjdGl2ZV9idG59ICR7aXNQcmV2RGlzYWJsZWQoKSA/IFwiZGlzYWJsZWRcIiA6IFwiXCJ9YH1cclxuICAgICAgPlxyXG4gICAgICAgIFByZXZpb3VzXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUGFnaW5hdGUoMSl9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHthY3RpdmVfYnRufSAke2lzTmV4dERpc2FibGVkKCkgPyBcImRpc2FibGVkXCIgOiBcIlwifWB9XHJcbiAgICAgID5cclxuICAgICAgICBOZXh0XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb247XHJcbiJdLCJuYW1lcyI6WyJRdWVyeVN0cmluZyIsInVzZVJvdXRlciIsIlBhZ2luYXRpb24iLCJwYWdlIiwicGFnZUNvdW50IiwicmVkaXJlY3RVUkwiLCJyb3V0ZXIiLCJpc1ByZXZEaXNhYmxlZCIsImlzTmV4dERpc2FibGVkIiwiaGFuZGxlUGFnaW5hdGUiLCJkaXJlY3Rpb24iLCJxdWVyeVN0cmluZyIsInN0cmluZ2lmeSIsInF1ZXJ5IiwicHVzaCIsImFjdGl2ZV9idG4iLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Pagination.tsx\n"));

/***/ })

});