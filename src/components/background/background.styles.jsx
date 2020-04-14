import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 90px;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

export const BackgroundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 35px;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(180, 212, 123, 1) 100%
  );
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
  }
`;

export const BigImgContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 35px 0;
`;

const getAdditionalStyle = (props) => {
  if (props.left)
    return css`
      justify-content: flex-start;
      padding-left: 0;
      padding-right: 25px;
    `;
};

export const TriangleContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-left: 25px;

  .mirrored {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
  ${getAdditionalStyle}
`;
