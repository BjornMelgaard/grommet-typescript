"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Accordion_1 = require('grommet/components/Accordion');
var AccordionPanel_1 = require('grommet/components/AccordionPanel');
var App_1 = require('grommet/components/App');
var Paragraph_1 = require('grommet/components/Paragraph');
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.render = function () {
        return (<App_1["default"] centered inline>
        <Accordion_1["default"]>
          <AccordionPanel_1["default"] heading="First Title">
            <Paragraph_1["default"]>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </Paragraph_1["default"]>
          </AccordionPanel_1["default"]>
          <AccordionPanel_1["default"] heading="Second Title">
            <Paragraph_1["default"]>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </Paragraph_1["default"]>
          </AccordionPanel_1["default"]>
          <AccordionPanel_1["default"] heading="Third Title">
            <Paragraph_1["default"]>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </Paragraph_1["default"]>
          </AccordionPanel_1["default"]>
        </Accordion_1["default"]>
      </App_1["default"]>);
    };
    return App;
}(React.Component));
