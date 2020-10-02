import styled from 'styled-components';
import { COLOR, SERVICE_COLOR } from '../../constants';
export const StyledButton = styled.button.attrs((props) => {
    const variant = props.variant || 'default';
    const service = props.service || props.theme.service || 'default';
    if (variant === 'default') {
        return Object.assign(Object.assign({}, defaultProps), { borderColorFocus: service !== 'default' ? SERVICE_COLOR[service.toUpperCase()].secondary : COLOR.ORANGE[700] });
    }
    if (variant === 'secondary') {
        return Object.assign(Object.assign({}, secondaryProps), { borderColorFocus: service !== 'default' ? SERVICE_COLOR[service.toUpperCase()].secondary : COLOR.ORANGE[700] });
    }
    if (variant === 'primary') {
        const primaryProps = {
            backgroundColor: SERVICE_COLOR[service.toUpperCase()].primary,
            color: '#fff',
            hoverBackgroundColor: SERVICE_COLOR[service.toUpperCase()].secondary,
            borderColorFocus: service !== 'default' ? SERVICE_COLOR[service.toUpperCase()].secondary : COLOR.ORANGE[700],
            colorDisable: COLOR.BLUE_GRAY[500],
            backgroundColorDisable: COLOR.BLUE_GRAY[50],
        };
        return primaryProps;
    }
    if (variant === 'alert') {
        return Object.assign(Object.assign({}, alertProps), { borderColorFocus: service !== 'default' ? SERVICE_COLOR[service.toUpperCase()].secondary : COLOR.ORANGE[700] });
    }
    if (variant === 'link') {
        return Object.assign(Object.assign({}, linkProps), { borderColorFocus: service !== 'default' ? SERVICE_COLOR[service.toUpperCase()].secondary : COLOR.ORANGE[700] });
    }
}) `
  display: inline-flex;
  align-items: center;
  height: 32px;
  border-radius: 4px;
  border: 1.5px solid transparent;
  outline: none;
  padding: 8px 16px;
  transition: 0.4s;
  font-weight: 600;
  cursor: pointer;
  background: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};

  &:hover {
    background: ${(props) => props.hoverBackgroundColor};
  }

  &:focus {
    border: ${(props) => `1.5px solid ${props.borderColorFocus}`};
  }
`;
const defaultProps = {
    backgroundColor: COLOR.BLUE_GRAY[50],
    color: COLOR.BLUE_GRAY[800],
    hoverBackgroundColor: COLOR.BLUE_GRAY[100],
    borderColorFocus: COLOR.ORANGE[700],
    colorDisable: COLOR.BLUE_GRAY[500],
    backgroundColorDisable: COLOR.BLUE_GRAY[50],
};
const secondaryProps = {
    backgroundColor: '#fff',
    color: COLOR.BLUE_GRAY[800],
    hoverBackgroundColor: COLOR.BLUE_GRAY[50],
    borderColorFocus: COLOR.ORANGE[700],
    colorDisable: COLOR.BLUE_GRAY[500],
    backgroundColorDisable: COLOR.BLUE_GRAY[50],
};
const alertProps = {
    backgroundColor: COLOR.RED[700],
    color: '#fff',
    hoverBackgroundColor: COLOR.RED[600],
    borderColorFocus: COLOR.ORANGE[700],
    colorDisable: COLOR.BLUE_GRAY[500],
    backgroundColorDisable: COLOR.BLUE_GRAY[50],
};
const linkProps = {
    backgroundColor: '#fff',
    color: COLOR.BLUE[700],
    hoverBackgroundColor: COLOR.BLUE_GRAY[50],
    borderColorFocus: COLOR.ORANGE[700],
    colorDisable: COLOR.BLUE_GRAY[500],
    backgroundColorDisable: COLOR.BLUE_GRAY[50],
};
