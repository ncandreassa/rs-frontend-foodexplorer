import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  display: flex;
  align-items: flex-end;
`;

export const Content = styled.div`
  width: 100%;
  height: 7.7rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  > img {
    height: 1.8rem;
  }

  > p {
    font-family: "Roboto", serif;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }

  @media ${({ theme }) => theme.MEDIA.sm} {
    justify-content: space-between;
    padding: 0 12.3rem;

    > img {
      height: 2.4rem;
    }

    > p {
      font-size: 1.4rem;
    }
  }
`;
