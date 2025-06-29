import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 11.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  display: flex;
  justify-content: space-between;
  padding: 5.6rem 2.4rem;

  @media ${({ theme }) => theme.MEDIA.sm} {
    align-items: center;
    padding: 0 3rem;
    gap: 1rem;
  }

  @media ${({ theme }) => theme.MEDIA.md} {
    padding: 0 6rem;
    gap: 1rem;
  }

  @media ${({ theme }) => theme.MEDIA.lg} {
    padding: 0 12.3rem;
  }

  > img {
    height: 2.6rem;
    cursor: pointer;
    margin-top: 0.8rem;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Div = styled.div`
  text-align: center;

  > img {
    height: 2.6rem;
  }

  &:first-of-type > img {
    height: 1.6rem;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;

  > img {
    height: 2.6rem;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-size: 1.2rem;
    font-weight: 400;
    margin: 0;
  }

  @media ${({ theme }) => theme.MEDIA.sm} {
    flex-direction: column;
    gap: 0;
    align-items: flex-end;
    margin-top: 0.8rem;
  }
`;

export const NotificationWrapper = styled.div`
  width: 100%;
  text-align: center;
  position: relative;

  > img {
    height: 2.6rem;
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: -0.6rem;
  right: calc(50% - 1.8rem);
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: white;
  font-size: 1.2rem;
  border-radius: 50%;
  min-width: 1.8rem;
  height: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export const InputWrapper = styled.div`
  @media ${({ theme }) => theme.MEDIA.sm} {
    width: 32rem;
  }

  @media ${({ theme }) => theme.MEDIA.md} {
    width: 38rem;
  }

  @media ${({ theme }) => theme.MEDIA.lg} {
    width: 52rem;
  }
`;

export const Orders = styled.div`
  height: 4.8rem;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  cursor: pointer;
  margin-top: 0.8rem;

  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  @media ${({ theme }) => theme.MEDIA.sm} {
    width: 14rem;
  }

  @media ${({ theme }) => theme.MEDIA.lg} {
    width: 21.6rem;
  }

  > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: "Poppins", sans-serif;
    font-size: 1.4rem;
    font-weight: 500;
  }
`;
