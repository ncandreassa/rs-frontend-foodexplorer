import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 114px;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  display: flex;
  justify-content: space-between;
  padding: 56px 24px;
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
