import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: 8px;
  padding: 16px;
  width: 210px;
  height: 292px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  justify-content: ${({ $isUser }) => ($isUser ? "flex-start" : "center")};

  cursor: pointer;

  @media (min-width: 768px) {
    width: 304px;
    height: 462px;
    gap: 16px;
    padding: 24px;
  }
`;

export const Icon = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  cursor: pointer;
`;

export const Image = styled.img`
  width: 88px;
  height: 88px;

  @media (min-width: 768px) {
    width: 176px;
    height: 176px;
  }
`;

export const Title = styled.h3`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  text-align: center;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const Description = styled.p`
  display: none;

  @media (min-width: 768px) {
    display: block;
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    text-align: center;
    line-height: 1.2;
  }
`;

export const Price = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.CAKE_200};

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

export const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 16px;
  }
`;
