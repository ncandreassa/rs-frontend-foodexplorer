import styled, { keyframes, css } from 'styled-components';
import { FiPlus, FiX } from 'react-icons/fi';

export const Container = styled.div`
  width: ${({ $width }) => $width || '100%'};

  > label {
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;

export const TagInputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  padding: 6px 8px;
  border-radius: 8px;
  background: ${({ theme }) => theme.COLORS.DARK_800};
  min-height: 48px;
  margin-top: 8px;
  border: none;
`;

export const Tag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  border-radius: 8px;
  height: 32px;
  background: ${({ theme }) => theme.COLORS.LIGHT_600};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 16px;
  white-space: nowrap;
`;

export const TagLabel = styled.span``;

export const RemoveIcon = styled(FiX)`
  cursor: pointer;
  font-size: 14px;
`;

export const DashedButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px dashed ${({ theme }) => theme.COLORS.LIGHT_500};
  height: 32px;
  background: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_500};
  font-size: 16px;
  font-family: 'Roboto', serif;
  cursor: pointer;
  transition: border-color 0.2s;

  ${({ $editing }) =>
    $editing &&
    css`
      display: none;
    `}
`;

export const PlusIcon = styled(FiPlus)`
  font-size: 14px;
`;

const expand = keyframes`
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: 120px;
    opacity: 1;
  }
`;

export const AddInput = styled.input`
  height: 32px;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px dashed ${({ theme }) => theme.COLORS.LIGHT_500};
  background: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_500};
  font-size: 16px;
  outline: none;
  animation: ${expand} 180ms ease-out forwards;
`;