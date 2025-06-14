import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Form = styled.form`
margin: 12px 32px 32px;
display: flex;
flex-direction: column;
gap: 10px;
  > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-weight: 400;
    margin-bottom: 24px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 32px;
`;
