import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    padding: 40px 122px;
  }
`;


export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 1000px;
 

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: start;
    justify-content: space-between;
    gap: 48px;
    margin: 8rem auto;
  }
`;

export const Image = styled.img`
  width: 70%;
  max-width: 390px;
  height: auto;

  @media (min-width: 768px) {
    width: 390px;
    height: 390px;
  }
`;

export const Info = styled.div`
  margin-top: 16px;

  h1 {
    font-size: 27px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    @media (min-width: 768px) {
      font-size: 40px;
    }
  }

  p {
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    margin-top: 8px;

    @media (min-width: 768px) {
      font-size: 24px;
      margin-top: 12px;
    }
  }
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  gap: 10px;
`;

export const ControlsButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 48px;

  @media (min-width: 768px) {
    justify-content: flex-start;
    gap: 32px;
  }
`;
