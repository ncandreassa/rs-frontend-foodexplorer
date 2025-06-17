import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 6.4rem 3.2rem;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;

  @media ${({ theme }) => theme.MEDIA.sm} {
    flex-direction: row;
    padding: 0 10rem;
    gap: 0;
  }
`;

export const LogoWrapper = styled.div`
  width: 100%;
  text-align: center;

  > img {
    height: 4.8rem;
  }

  @media ${({ theme }) => theme.MEDIA.sm} {
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 4.8rem;
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  height: 70%;

  @media ${({ theme }) => theme.MEDIA.sm} {
    width: 47.6rem;
    height: 54rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    padding: 6.4rem;
    border-radius: 1.6rem;
  }

  > h1 {
    display: none;

    @media ${({ theme }) => theme.MEDIA.sm} {
      display: block;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 3.2rem;
      font-weight: 500;
      margin-bottom: 3.2rem;
      text-align: center;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media ${({ theme }) => theme.MEDIA.sm} {
    gap: 2rem;
  }

  > a {
    margin-top: 3.2rem;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    @media ${({ theme }) => theme.MEDIA.sm} {
      margin-top: 1rem;
      text-align: center;
    }
  }
`;
