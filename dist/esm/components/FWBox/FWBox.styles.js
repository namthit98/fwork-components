import styled from 'styled-components';
export const StyledBox = styled.div.attrs((props) => {
    const size = props.size;
    if (props.width && props.height) {
        return {
            width: props.width,
            height: props.height,
        };
    }
    if (size === 'small') {
        return {
            width: props.width || '40rem',
        };
    }
    if (size === 'medium') {
        return {
            width: props.width || '60rem',
        };
    }
    if (size === 'large') {
        return {
            width: props.width || '80rem',
        };
    }
    return Object.assign({}, props);
}) `
  width: ${(props) => props.width};
  height: ${(props) => props.height || 'auto'};
  min-height: 16rem;
  border-radius: 4px;
  box-shadow: 0 2px 8px 0 rgba(9, 30, 66, 0.2);
  background-color: #fff;
`;
