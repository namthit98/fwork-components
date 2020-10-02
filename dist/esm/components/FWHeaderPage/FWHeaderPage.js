import React from 'react';
import { StringHelper } from './../../helper';
import { StyledHeaderPage, StyledTitle, StyledAction } from './FWHeaderPage.styles';
import { FWText } from '../FWText';
const FWHeaderPage = ({ content, actions }) => {
    return (React.createElement(StyledHeaderPage, null,
        React.createElement(StyledTitle, null, StringHelper.isString(content) ? (React.createElement(FWText, { text: content, variant: "h2", className: "fwc-truncate" })) : (content)),
        React.createElement(StyledAction, null, actions)));
};
export default FWHeaderPage;
