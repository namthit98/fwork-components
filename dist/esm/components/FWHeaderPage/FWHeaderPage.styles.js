import styled from 'styled-components';
export const StyledHeaderPage = styled.div.attrs((props) => {
    return {
    // ...props,
    };
}) `
  display: flex;
  align-items: center;
  padding: 0 2.4rem;
  width: 100%;
  height: 8rem;
  box-shadow: 0 2px 8px 0 rgba(9, 30, 66, 0.08);
`;
export const StyledTitle = styled.div.attrs((props) => {
    return {
    // ...props,
    };
}) `
  width: 60%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
export const StyledAction = styled.div.attrs((props) => {
    return {
    // ...props,
    };
}) `
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
