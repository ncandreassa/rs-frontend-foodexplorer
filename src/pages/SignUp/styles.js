import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 64px 32px;
  align-items: center;
  justify-content: center;
  gap: 32px;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0 10%;
    gap: 0;
  }
`;

export const LogoWrapper = styled.div`
  width: 100%;
  text-align: center;

  > img {
    height: 48px;
  }

  @media (min-width: 768px) {
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 48px;
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  height: 70%;

  @media (min-width: 768px) {
    width: 476px;
    height: 621px;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    padding: 64px;
    border-radius: 16px;
  }

  > h1 {
    display: none;

    @media (min-width: 768px) {
      display: block;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 32px;
      font-weight: 500;
      margin-bottom: 32px;
      text-align: center;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 768px) {
    gap: 20px;
  }

  > a {
    margin-top: 32px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    @media (min-width: 768px) {
      margin-top: 10px;
    }
  }
`;
