/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/wordnet-db";
exports.ids = ["vendor-chunks/wordnet-db"];
exports.modules = {

/***/ "(rsc)/./node_modules/wordnet-db/index.js":
/*!******************************************!*\
  !*** ./node_modules/wordnet-db/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.libVersion = __webpack_require__(/*! ./package.json */ \"(rsc)/./node_modules/wordnet-db/package.json\").version;\r\nexports.version = '3.1';\t// this is the WordNet DB version\r\nexports.path = (__webpack_require__(/*! path */ \"path\").join)(__dirname, 'dict');\r\ntry{\r\nexports.files = (__webpack_require__(/*! fs */ \"fs\").readdirSync)(exports.path);\r\n} catch(e) {\r\n  console.log(e.message);\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvd29yZG5ldC1kYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLHNIQUFzRDtBQUN0RCxlQUFlLFVBQVU7QUFDekIsWUFBWSxHQUFHLDhDQUFvQjtBQUNuQztBQUNBLGFBQWEsR0FBRyxpREFBeUI7QUFDekMsRUFBRTtBQUNGO0FBQ0EiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2l5YW1cXERvY3VtZW50c1xcQUktUG93ZXJlZC1DaGF0Ym90XFxub2RlX21vZHVsZXNcXHdvcmRuZXQtZGJcXGluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnRzLmxpYlZlcnNpb24gPSByZXF1aXJlKCcuL3BhY2thZ2UuanNvbicpLnZlcnNpb247XHJcbmV4cG9ydHMudmVyc2lvbiA9ICczLjEnO1x0Ly8gdGhpcyBpcyB0aGUgV29yZE5ldCBEQiB2ZXJzaW9uXHJcbmV4cG9ydHMucGF0aCA9IHJlcXVpcmUoJ3BhdGgnKS5qb2luKF9fZGlybmFtZSwgJ2RpY3QnKTtcclxudHJ5e1xyXG5leHBvcnRzLmZpbGVzID0gcmVxdWlyZSgnZnMnKS5yZWFkZGlyU3luYyhleHBvcnRzLnBhdGgpO1xyXG59IGNhdGNoKGUpIHtcclxuICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/wordnet-db/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/wordnet-db/package.json":
/*!**********************************************!*\
  !*** ./node_modules/wordnet-db/package.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"wordnet-db","version":"3.1.14","description":"WordNet 3.1 Database files","author":"Moos <mooster@42at.com>","keywords":["WordNet","wordpos","natural","pos"],"homepage":"http://wordnet.princeton.edu/","license":"MIT","repository":{"type":"git","url":"git://github.com/moos/wordnet-db.git"},"dependencies":{},"devDependencies":{"detect-newline":"^3.1.0"},"engines":{"node":">=0.6.0"},"scripts":{"test":"node test.js","prepublish":"npm test"}}');

/***/ })

};
;