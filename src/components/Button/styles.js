import styled from "styled-components";

export const Container = styled.button`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "4.8rem"};
  font-size: ${({ fontSize }) => fontSize || "1.4rem"};
  margin-top: ${({ marginTop }) => marginTop || "1.6rem"};

  background-color: ${({ theme, background }) =>
    background || theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border: none;
  padding: 0 1.6rem;
  border-radius: 0.5rem;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  cursor: pointer;

  svg {
    flex-shrink: 0;
  }

  .button-image {
    width: 2rem;
    height: 2rem;
    object-fit: contain;
  }
`;
