import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";

export const Container = styled.div`
  position: relative;
  width: 100%;

  > label {
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;

export const StyledSelect = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  margin-top: 8px;

  width: 100%;
  height: 48px;

  padding: 0 40px 0 12px;
  border: none;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  font-size: 14px;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: none;
  }
`;

export const ChevronIcon = styled(FiChevronDown)`
  position: absolute;
  top: 70%;
  right: 12px;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 20px;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
`;
