import styled from 'styled-components';
import { SERVICE_COLOR, COLOR } from '../../constants';
export const StyledInput = styled.input.attrs((props) => {
    const service = props.service || props.theme.service || 'default';
    return Object.assign(Object.assign({}, props), { outlineColor: service !== 'default' ? SERVICE_COLOR[service.toUpperCase()].secondary : COLOR.BLUE_GRAY[700] });
}) `
  border-radius: 0.4rem;
  border: solid 1px #d0d4db;
  background-color: #ffffff;
  color: #172b4d;
  font-size: 14px;
  padding: 0.8rem 1.2rem;
  outline-color: transparent;
  transition: 0.4s;
  width: 100%;
  margin-top: 8px;

  &::-webkit-input-placeholder {
    color: #8a94a5;
  }

  &:focus {
    outline-color: ${(props) => props.outlineColor};
  }
}
`;
export const StyledTextArea = styled.textarea.attrs((props) => {
    const service = props.service || props.theme.service || 'default';
    return {
        // ...props,
        outlineColor: service !== 'default' ? SERVICE_COLOR[service.toUpperCase()].secondary : COLOR.BLUE_GRAY[700],
    };
}) `
  border-radius: 0.4rem;
  border: solid 1px #d0d4db;
  background-color: #ffffff;
  color: #172b4d;
  font-size: 14px;
  padding: 0.8rem 1.2rem;
  outline-color: transparent;
  transition: 0.4s;
  width: 100%;
  margin-top: 8px;
  resize: none;

  &::-webkit-input-placeholder {
    color: #8a94a5;
  }

  &:focus {
    outline-color: ${(props) => props.outlineColor};
  }
}
`;
export const StyledWrapper = styled.div.attrs((props) => {
    return Object.assign({}, props);
}) ``;
export const StyledRequiredIcon = styled.span.attrs((props) => {
    return Object.assign({}, props);
}) `
  vertical-align: top;
  color: #d32f2f;
  font-size: 12px;
`;
