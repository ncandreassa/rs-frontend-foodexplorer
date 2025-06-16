import styled from "styled-components";

export const Container = styled.div`
  width: 94%;
  height: 120px;
  background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
  margin-top: 52px;
  margin-left: 20px;
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

  .desktop {
    display: none;
  }

  @media (min-width: 768px) {
    height: 260px;
    width: 100%;
    margin-left: 0;
    margin-top: 130px;

    align-items: center;

    border-radius: 8px;

    .mobile {
      display: none;
    }

    .desktop {
      display: block;
    }

    > img {
      position: absolute;
      top: -139px;
      left: -72px;
    }
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
    font-family: "Poppins", sans-serif;
  }

  @media (min-width: 768px) {
    width: 50%;

    > h1 {
      font-size: 40px;
      font-weight: 500;
    }

    > p {
      font-size: 16px;
      font-weight: 400;
      font-family: "Roboto", serif;
    }
  }
`;
