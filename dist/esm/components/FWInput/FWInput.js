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
import { StyledInput, StyledWrapper, StyledRequiredIcon, StyledTextArea } from './FWInput.styles';
import { FWText } from '../FWText';
const FWInput = (_a) => {
    var { label, placeholder, value, onChange, multiline, rows, service, required } = _a, props = __rest(_a, ["label", "placeholder", "value", "onChange", "multiline", "rows", "service", "required"]);
    return (React.createElement(StyledWrapper, null,
        label ? (React.createElement(React.Fragment, null,
            React.createElement(FWText, { variant: "important", text: label }),
            required ? React.createElement(StyledRequiredIcon, null, "\u00A0*") : null)) : null,
        multiline ? (React.createElement(StyledTextArea, Object.assign({}, props, { service: service, rows: rows || 5, placeholder: placeholder, value: value, onChange: onChange }))) : (React.createElement(StyledInput, Object.assign({}, props, { service: service, placeholder: placeholder, value: value, onChange: onChange })))));
};
export default FWInput;
