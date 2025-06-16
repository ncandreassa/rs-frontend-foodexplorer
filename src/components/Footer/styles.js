import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
`;

export const Div = styled.div`
  width: 100%;
  height: 77px;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    height: 18px;
  }

  > p {
    font-family: "DM Sans", sans-serif;
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }

  @media (min-width: 768px) {
    justify-content: space-between;
    padding: 0 123px;

    > img {
      height: 24px;
    } 
    
    > p {
        font-size: 14px;
      }
  }
`;
