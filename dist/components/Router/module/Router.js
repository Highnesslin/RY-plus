var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React, { PureComponent } from 'react';
import { RouterContext } from './RouterContext';
var Router = /** @class */ (function (_super) {
    __extends(Router, _super);
    function Router(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            pageName: _this.props.initialPath,
        };
        _this.navigate = _this.navigate.bind(_this);
        return _this;
    }
    Router.prototype.navigate = function (pageName) {
        this.setState({
            pageName: pageName,
        });
    };
    Router.prototype.render = function () {
        return (React.createElement(RouterContext.Provider, { value: {
                pageName: this.state.pageName,
                navigate: this.navigate,
            } }, this.props.children));
    };
    return Router;
}(PureComponent));
export default Router;
