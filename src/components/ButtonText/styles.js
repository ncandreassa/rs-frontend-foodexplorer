import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background: none;
  border: none;
  padding: 10px;

  display: flex;
  align-items: center;
  gap: 8px;

  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: ${({ $fontWeight }) => $fontWeight};

  border-bottom: ${({ $underline, theme }) =>
    $underline ? `1px solid ${theme.COLORS.DARK_1000}` : "none"};
`;
