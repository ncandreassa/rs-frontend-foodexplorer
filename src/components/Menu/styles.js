import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
`;

export const Header = styled.div`
  width: 100%;
  height: 11.4rem;  
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  display: flex;
  padding: 5.6rem 2.4rem;  
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`;

export const Div = styled.div`
  text-align: center;
  margin-right: 1.6rem; 

  > img {
    height: 1.6rem;  
  }
`;

export const Content = styled.div`
  padding: 2.8rem; 
`;

export const ButtonWrapper = styled.div`
  margin-top: 3.6rem; 
`;
