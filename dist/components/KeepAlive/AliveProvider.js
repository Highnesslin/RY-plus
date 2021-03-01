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
import AliveContext from './context';
import './AliveProvider.css';
var AliveProvider = /** @class */ (function (_super) {
    __extends(AliveProvider, _super);
    function AliveProvider(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        _this.saveCache = _this.saveCache.bind(_this);
        _this.container = {};
        return _this;
    }
    AliveProvider.prototype.saveCache = function (id, component) {
        var _this = this;
        return new Promise(function (resolve) {
            var _a;
            _this.setState((_a = {},
                _a[id] = {
                    id: id,
                    component: component,
                },
                _a), function () {
                resolve(_this.container[id]);
            });
        });
    };
    AliveProvider.prototype.render = function () {
        var _this = this;
        return (React.createElement(AliveContext.Provider, { value: this.saveCache },
            this.props.children,
            Object.values(this.state).map(function (item) {
                return (React.createElement("div", { key: item.id, className: "alive-item", ref: function (node) {
                        _this.container[item.id] = node;
                    } }, item.component));
            })));
    };
    return AliveProvider;
}(PureComponent));
export default AliveProvider;
