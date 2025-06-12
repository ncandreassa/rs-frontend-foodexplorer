import styled from "styled-components";

export const Container = styled.div`
  width: 86%;
  height: 120px;
  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
  margin-top: 52px;
  margin-left: 36px;
  position: relative;
  border-radius: 3px;

  display: flex;
  align-items: flex-end;
  justify-content: end;
  padding-left: 80px;
  gap: 20px;

  > img {
    position: absolute;
    top: -29px;
    left: -29px;
  }
`;

export const TextContent = styled.div`
  width: 208px;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  margin-bottom: 22px;

  > h1 {
    font-size: 18px;
    font-weight: 600;
    margin: 0;
  }

  > p {
    font-size: 12px;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
  }
`;