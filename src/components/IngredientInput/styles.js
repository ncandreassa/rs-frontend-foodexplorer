import styled, { keyframes, css } from "styled-components";
import { FiPlus, FiX } from "react-icons/fi";

export const Container = styled.div`
  width: ${({ $width }) => $width || "100%"};

  > label {
    font-size: 1.6rem; 
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;

export const TagInputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 0.8rem; 
  width: 100%;
  padding: 0.6rem 0.8rem; 
  border-radius: 0.8rem; 
  background: ${({ theme }) => theme.COLORS.DARK_800};
  min-height: 4.8rem; 
  margin-top: 0.8rem; 
  border: none;
`;

export const Tag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem; 
  padding: 0.8rem 1.6rem; 
  border-radius: 0.8rem; 
  height: 3.2rem; 
  background: ${({ theme }) => theme.COLORS.LIGHT_600};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 1.6rem; 
  white-space: nowrap;
`;

export const TagLabel = styled.span``;

export const RemoveIcon = styled(FiX)`
  cursor: pointer;
  font-size: 1.4rem;
`;

export const DashedButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem; 
  padding: 0.8rem 1.6rem; 
  border-radius: 0.8rem;
  border: 0.1rem dashed ${({ theme }) => theme.COLORS.LIGHT_500};
  height: 3.2rem; 
  background: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_500};
  font-size: 1.6rem; 
  font-family: "Roboto", serif;
  cursor: pointer;
  transition: border-color 0.2s;

  ${({ $editing }) =>
    $editing &&
    css`
      display: none;
    `}
`;

export const PlusIcon = styled(FiPlus)`
  font-size: 1.4rem; 
`;

const expand = keyframes`
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: 12rem; 
    opacity: 1;
  }
`;

export const AddInput = styled.input`
  height: 3.2rem; 
  padding: 0.8rem 1.6rem; 
  border-radius: 0.8rem; 
  border: 0.1rem dashed ${({ theme }) => theme.COLORS.LIGHT_500};
  background: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_500};
  font-size: 1.6rem; 
  outline: none;
  animation: ${expand} 180ms ease-out forwards;
`;

