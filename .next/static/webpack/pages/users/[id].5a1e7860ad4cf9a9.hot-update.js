"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users/[id]",{

/***/ "./pages/users/[id].js":
/*!*****************************!*\
  !*** ./pages/users/[id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Container */ \"./components/Container.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst User = (param)=>{\n    let { user  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id  } = router.query;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-md-6 offset-md3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-header text-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: user.avatar,\n                                alt: user.first_name,\n                                style: {\n                                    borderRadius: \"50%\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/ichigo/projects/nextproject/pages/users/[id].js\",\n                                lineNumber: 15,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/ichigo/projects/nextproject/pages/users/[id].js\",\n                            lineNumber: 14,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-body\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: [\n                                        user.id,\n                                        \". \",\n                                        user.first_name,\n                                        \" \",\n                                        user.last_name\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/ichigo/projects/nextproject/pages/users/[id].js\",\n                                    lineNumber: 18,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Email: \",\n                                        user.email\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/ichigo/projects/nextproject/pages/users/[id].js\",\n                                    lineNumber: 21,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/ichigo/projects/nextproject/pages/users/[id].js\",\n                            lineNumber: 17,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ichigo/projects/nextproject/pages/users/[id].js\",\n                    lineNumber: 13,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/ichigo/projects/nextproject/pages/users/[id].js\",\n                lineNumber: 12,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/ichigo/projects/nextproject/pages/users/[id].js\",\n            lineNumber: 11,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/ichigo/projects/nextproject/pages/users/[id].js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, undefined);\n};\n_s(User, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = User;\nUser.getInitialProps = async (ctx)=>{\n    const res = await fetch(\"https://reqres.in/api/users/\".concat(ctx.query.id));\n    const resJSON = await res.json();\n    console.log(resJSON);\n    return {\n        user: resJSON.data\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\nvar _c;\n$RefreshReg$(_c, \"User\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQXNDO0FBQ0M7QUFDWTtBQUVuRCxNQUFNRyxPQUFPLFNBQVk7UUFBWCxFQUFDQyxLQUFJLEVBQUM7O0lBQ2hCLE1BQU1DLFNBQVNKLHNEQUFTQTtJQUN4QixNQUFNLEVBQUNLLEdBQUUsRUFBQyxHQUFHRCxPQUFPRSxLQUFLO0lBRXpCLHFCQUNJLDhEQUFDTCw2REFBU0E7a0JBQ04sNEVBQUNNO1lBQUlDLFdBQVU7c0JBQ1gsNEVBQUNEO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNYLDRFQUFDQztnQ0FBSUMsS0FBS1AsS0FBS1EsTUFBTTtnQ0FBRUMsS0FBS1QsS0FBS1UsVUFBVTtnQ0FBRUMsT0FBTztvQ0FBQ0MsY0FBYztnQ0FBSzs7Ozs7Ozs7Ozs7c0NBRTVFLDhEQUFDUjs0QkFBSUMsV0FBVTs7OENBQ1gsOERBQUNROzt3Q0FDSWIsS0FBS0UsRUFBRTt3Q0FBQzt3Q0FBR0YsS0FBS1UsVUFBVTt3Q0FBQzt3Q0FBRVYsS0FBS2MsU0FBUzs7Ozs7Ozs4Q0FFaEQsOERBQUNDOzt3Q0FBRTt3Q0FDU2YsS0FBS2dCLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRbEQ7R0F6Qk1qQjs7UUFDYUYsa0RBQVNBOzs7S0FEdEJFO0FBMkJOQSxLQUFLa0IsZUFBZSxHQUFHLE9BQU9DLE1BQVE7SUFDbEMsTUFBTUMsTUFBTSxNQUFNQyxNQUFNLCtCQUE0QyxPQUFiRixJQUFJZixLQUFLLENBQUNELEVBQUU7SUFDbkUsTUFBTW1CLFVBQVUsTUFBTUYsSUFBSUcsSUFBSTtJQUM5QkMsUUFBUUMsR0FBRyxDQUFDSDtJQUNaLE9BQU07UUFBQ3JCLE1BQU1xQixRQUFRSSxJQUFJO0lBQUE7QUFDN0I7QUFFQSwrREFBZTFCLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMvW2lkXS5qcz8xNzg0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtZmV0Y2hcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NvbnRhaW5lclwiO1xuXG5jb25zdCBVc2VyID0gKHt1c2VyfSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2Zmc2V0LW1kM1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dXNlci5hdmF0YXJ9IGFsdD17dXNlci5maXJzdF9uYW1lfSBzdHlsZT17e2JvcmRlclJhZGl1czogJzUwJSd9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlci5pZH0uIHt1c2VyLmZpcnN0X25hbWV9IHt1c2VyLmxhc3RfbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbWFpbDoge3VzZXIuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbn1cblxuVXNlci5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vcmVxcmVzLmluL2FwaS91c2Vycy8ke2N0eC5xdWVyeS5pZH1gKVxuICAgIGNvbnN0IHJlc0pTT04gPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHJlc0pTT04pO1xuICAgIHJldHVybnt1c2VyOiByZXNKU09OLmRhdGF9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXIiXSwibmFtZXMiOlsiX2ZldGNoIiwidXNlUm91dGVyIiwiQ29udGFpbmVyIiwiVXNlciIsInVzZXIiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYXZhdGFyIiwiYWx0IiwiZmlyc3RfbmFtZSIsInN0eWxlIiwiYm9yZGVyUmFkaXVzIiwiaDMiLCJsYXN0X25hbWUiLCJwIiwiZW1haWwiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJyZXMiLCJmZXRjaCIsInJlc0pTT04iLCJqc29uIiwiY29uc29sZSIsImxvZyIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n"));

/***/ })

});