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
import React, { Component } from 'react';
import { RouterContext } from './RouterContext';
var Route = /** @class */ (function (_super) {
    __extends(Route, _super);
    function Route(props) {
        var _this = _super.call(this, props) || this;
        _this.hasMount = false; // 是否已挂载过
        return _this;
    }
    Route.prototype.isMatch = function () {
        return this.props.path !== undefined ? this.context.pageName === this.props.path : true;
    };
    // 渲染默认子节点
    Route.prototype.renderDefaultChild = function () {
        if (!this.props.component)
            return null;
        // 当前路由匹配
        var match = this.isMatch();
        // return match ? this.props.component : null;
        if (match || (this.props.exitUnDestory && this.hasMount)) {
            this.hasMount = true;
            return this.props.component;
        }
        return null;
    };
    // 渲染接收 Context value 的 Consumer 子节点
    Route.prototype.renderContextChild = function () {
        var _this = this;
        // 当前路由匹配
        var match = this.isMatch();
        return (React.createElement(RouterContext.Consumer, null, function (value) {
            if (match || (_this.props.exitUnDestory && _this.hasMount)) {
                _this.hasMount = true;
                return _this.props.render && _this.props.render(value);
            }
            return null;
        }));
    };
    Route.prototype.render = function () {
        return this.props.render ? this.renderContextChild() : this.renderDefaultChild();
    };
    return Route;
}(Component));
Route.contextType = RouterContext;
export default Route;
