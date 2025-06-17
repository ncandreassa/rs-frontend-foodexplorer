import styled from "styled-components";

export const Container = styled.div`
  width: 100%;


  @media (min-width: 768px) {
    padding: 40px 122px;
  }
  
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
    width: 100%;
  }

  @media (min-width: 768px) {
    margin: 2rem auto;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 24px;
    justify-content: space-between;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 32px;

  @media (min-width: 768px) {
    width: 100%;
    justify-content: flex-end;
  }
`;
