"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var myNav = _react.default.createElement("div", {
  id: "nav_wrapper",
  class: "section"
}, _react.default.createElement("div", {
  class: "container"
}, _react.default.createElement("div", {
  class: "row"
}, _react.default.createElement("div", {
  class: "twelve column"
}, _react.default.createElement("hr", {
  style: "border: 1px solid #ff6c40;"
}))), _react.default.createElement("div", {
  class: "row"
}, _react.default.createElement("div", {
  id: "jcd_logo_wrapper",
  class: "one-third column"
}, _react.default.createElement("a", {
  href: "index.html"
}, _react.default.createElement("img", {
  src: "images/jc_logo_new.png",
  style: "width: 40%;"
}))), _react.default.createElement("div", {
  id: "nav_ul_wrapper",
  class: "two-thirds column"
}, _react.default.createElement("ul", {
  id: "nav_ul"
}, _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "index.html"
}, "HOME")), _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "about.html"
}, "ABOUT")))))));

_reactDom.default.render(myNav, document.getElementById('contain_header'));