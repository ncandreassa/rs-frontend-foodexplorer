import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 114px;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  display: flex;
  justify-content: space-between;
  padding: 56px 24px;

  @media (min-width: 768px) {
    align-items: center;
    padding: 0 123px;

    > img {
      height: 26px;
      cursor: pointer;
    }
  }
`;

export const Div = styled.div`
  text-align: center;

  > img {
    height: 26px;
  }

  &:first-of-type > img {
    height: 16px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  > img {
    height: 26px;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-size: 12px;
    font-weight: 400;
    margin: 0;
  }

  @media (min-width: 768px) {
    flex-direction: column;
    gap: 0;
    align-items: end;
  }

`;

export const NotificationWrapper = styled.div`
  width: 100%;
  text-align: center;
  position: relative;

  > img {
    height: 26px;
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: -6px;
  right: calc(50% - 18px);
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: white;
  font-size: 12px;
  border-radius: 50%;
  min-width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export const InputWrapper = styled.div`
  width: 581px;
`;

export const Orders = styled.div`
  width: 216px;
  height: 48px;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;

  > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 500;
  }
`;
