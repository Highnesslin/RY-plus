var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { createContext } from 'react';
var AliveContext = createContext(null);
// 高阶组件，将子组件作为 AliveContext 的消费者使用
export var withALive = function (Comp) { return function (props) { return (React.createElement(AliveContext.Consumer, null, function (saveCache) { return React.createElement(Comp, __assign({}, props, { saveCache: saveCache })); })); }; };
export default AliveContext;
