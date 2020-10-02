var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
/* eslint-disable */
import React from 'react';
import * as AllIcon from './icons';
const keys = Object.keys(AllIcon);
const iconMaps = keys.reduce((result, current, index) => {
    const text = current.replace('Icon', '').toLowerCase();
    result[text] = (props) => {
        const Component = AllIcon[current];
        return React.createElement(Component, Object.assign({}, props));
    };
    return result;
}, {});
const FWIcon = (_a) => {
    var { name, color = '#5c6a82', size = 16, disabled } = _a, props = __rest(_a, ["name", "color", "size", "disabled"]);
    const Component = iconMaps[name] ? iconMaps[name](Object.assign({ name, color, size, disabled }, props)) : React.createElement("p", null, "Icon not found");
    return Component;
};
export default React.memo(FWIcon);
