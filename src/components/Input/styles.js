import styled from "styled-components";

export const Container = styled.div`
    width: ${({ $width }) => $width || '100%'};

  > label {
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;

export const InputWrapper = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
 


  background: ${({ theme, bg }) => bg || theme.COLORS.DARK_900};
  border-radius: 8px;
  padding: 0 14px;
  height: 48px;

  > svg {
    margin-right: 12px;
    margin-left: ${({ $marginLeftSvg = '0' }) => $marginLeftSvg};
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    flex-shrink: 0;
  }

  > input {
    flex: 1;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    font-size: 16px; 

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    outline: none;
  }
`;
