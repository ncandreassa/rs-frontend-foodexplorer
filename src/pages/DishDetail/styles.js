import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  @media ${({ theme }) => theme.MEDIA.sm} {
    padding: 4rem 12.2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 1000px;

  @media ${({ theme }) => theme.MEDIA.sm} {
    flex-direction: row;
    text-align: start;
    align-items: flex-start;
    justify-content: space-between;
    gap: 4.8rem; 
    margin: 8rem auto;
  }
`;

export const Image = styled.img`
  width: 70%;
  max-width: 39rem; 
  height: auto;

  @media ${({ theme }) => theme.MEDIA.sm} {
    width: 39rem;
    height: 39rem;
  }
`;

export const Info = styled.div`
  margin-top: 1.6rem; 

  h1 {
    font-size: 2.7rem; 
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    @media ${({ theme }) => theme.MEDIA.sm} {
      font-size: 4rem; 
    }
  }

  p {
    font-family: "Poppins", sans-serif;
    font-size: 1.6rem; 
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    margin-top: 0.8rem; 

    @media ${({ theme }) => theme.MEDIA.sm} {
      font-size: 2.4rem; 
      margin-top: 1.2rem; 
    }
  }

  @media ${({ theme }) => theme.MEDIA.sm} {
    width: 50%;
    }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem; 
  gap: 1rem; 
`;

export const ControlsButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem; 
  margin-top: 4.8rem; 

  @media ${({ theme }) => theme.MEDIA.sm} {
    justify-content: flex-start;
    gap: 3.2rem; 
  }
`;
