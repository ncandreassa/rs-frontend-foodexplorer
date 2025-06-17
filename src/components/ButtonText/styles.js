import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background: none;
  border: none;
  padding: 1rem;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  font-size: ${({ fontSize }) => fontSize || "2.4rem"};
  font-weight: ${({ fontWeight }) => fontWeight || "400"};

  border-bottom: ${({ underline, theme }) =>
    underline ? `1px solid ${theme.COLORS.DARK_1000}` : "none"};
`;
