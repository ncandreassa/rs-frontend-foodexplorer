import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: 0.8rem;
  padding: 1.6rem;
  width: 21rem;
  height: 29.2rem;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  justify-content: ${({ isUser }) => (isUser ? "flex-start" : "center")};
  cursor: pointer;

  @media ${({ theme }) => theme.MEDIA.sm} {
    width: 30.4rem;
    height: 46.2rem;
    gap: 1.6rem;
    padding: 2.4rem;
  }
`;

export const Icon = styled.button`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  cursor: pointer;
`;

export const Image = styled.img`
  width: 8.8rem;
  height: 8.8rem;

  @media ${({ theme }) => theme.MEDIA.sm} {
    width: 17.6rem;
    height: 17.6rem;
  }
`;

export const Title = styled.h3`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  text-align: center;

  @media ${({ theme }) => theme.MEDIA.sm} {
    font-size: 2.4rem;
  }
`;

export const Description = styled.p`
  display: none;

  @media ${({ theme }) => theme.MEDIA.sm} {
    display: block;
    font-size: 1.4rem;
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    text-align: center;
    line-height: 1.2;
  }
`;

export const Price = styled.p`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.COLORS.CAKE_200};

  @media ${({ theme }) => theme.MEDIA.sm} {
    font-size: 3.2rem;
  }
`;

export const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${({ theme }) => theme.MEDIA.sm} {
    flex-direction: row;
    gap: 1.6rem;
  }
`;
