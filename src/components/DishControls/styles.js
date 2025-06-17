import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  .quantity {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    button {
      background: none;
      border: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      cursor: pointer;
    }

    span {
      font-size: ${({ fontSize }) => fontSize};
      font-weight: ${({ fontWeight }) => fontWeight};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`;
