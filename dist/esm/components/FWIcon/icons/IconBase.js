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
import React from 'react';
const IconBase = (_a) => {
    var { size, style, viewBox, disabled } = _a, props = __rest(_a, ["size", "style", "viewBox", "disabled"]);
    return (React.createElement("svg", Object.assign({ fill: "currentColor", preserveAspectRatio: "xMidYMid meet", viewBox: viewBox, height: size, width: size, style: Object.assign(Object.assign({}, style), { opacity: disabled ? '0.2' : '1', cursor: disabled ? 'not-allowed' : 'pointer' }) }, props), props.children));
};
export default IconBase;
