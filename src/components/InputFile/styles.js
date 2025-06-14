import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

 > span {
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: "Roboto", serif;
    font-weight: 400;
  }
`;

export const StyledLabel = styled.label`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;

  display: inline-flex;
  align-items: center;
  margin-top: 8px;
  gap: 8px;
  background: ${({ theme }) => theme.COLORS.DARK_800};
  height: 48px;
  color: white;
  padding: 8px 32px;
  border-radius: 8px;
  cursor: pointer;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    flex-shrink: 0;
  }
`;

export const HiddenInput = styled.input`
  display: none;
`;
