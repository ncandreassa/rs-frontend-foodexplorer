import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > label {
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;

export const TextAreaWrapper = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;

  background: ${({ theme, bg }) => bg || theme.COLORS.DARK_900};
  border-radius: 8px;
  padding: 14px;
  height: 172px;

  > textarea {
    flex: 1;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    font-size: 16px;
    resize: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    outline: none;
    width: 100%;
    height: 100%;
  }
`;