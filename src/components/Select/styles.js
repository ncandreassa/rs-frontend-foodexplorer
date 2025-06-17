import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";

export const Container = styled.div`
  position: relative;
  width: ${({ $width }) => $width || "100%"};

  > label {
    font-size: 1.6rem;  
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;

export const StyledSelect = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  margin-top: 0.8rem;  

  width: 100%;
  height: 4.8rem; 

  padding: 0 4rem 0 1.2rem; 
  border: none;
  border-radius: 0.8rem; 

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  font-size: 1.4rem; 
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: none;
  }
`;

export const ChevronIcon = styled(FiChevronDown)`
  position: absolute;
  top: 70%;
  right: 1.2rem; 
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 2rem; 
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
`;
