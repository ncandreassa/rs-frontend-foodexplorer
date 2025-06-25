import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  @media ${({ theme }) => theme.MEDIA.md} {
    padding: 0 8rem;
  }

`;

export const Main = styled.main`
  padding: 1.6rem; 

  @media ${({ theme }) => theme.MEDIA.sm} {
    margin-bottom: 6rem; 
    padding: 4rem; 
  }
`;

export const BannerWrapper = styled.div`
  margin-bottom: 6.2rem; 
`;
