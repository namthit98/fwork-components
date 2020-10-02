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
import { FWBox } from '../FWBox';
import { StyledModalWrapper } from './FWModal.styles';
import { FWText } from '../FWText';
import { FWIcon } from '../FWIcon';
const FWModal = (_a) => {
    var { size, content, actions, title, onClose, isOpen } = _a, props = __rest(_a, ["size", "content", "actions", "title", "onClose", "isOpen"]);
    return (React.createElement(StyledModalWrapper, { onClick: onClose, isOpen: isOpen },
        React.createElement(FWBox, { size: size, onClick: (e) => {
                e.stopPropagation();
                e.preventDefault();
            } },
            React.createElement("header", { className: "fwc-flex fwc-justify-between fwc-items-center" },
                title ? React.createElement(FWText, { variant: "h3", text: title }) : null,
                React.createElement(FWIcon, { name: "trash", className: "fwc-cursor-pointer", onClick: onClose })),
            React.createElement("main", null, content),
            actions ? React.createElement("footer", { className: "fwc-flex fwc-justify-end" }, actions) : null)));
};
export default FWModal;
