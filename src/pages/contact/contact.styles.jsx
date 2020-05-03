import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  height: 100vh;
  overflow: hidden;

  & .background {
    position: absolute;
    z-index: -2;
  }
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  padding: 120px;
  width: 100%;
  height: 100%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;

  span {
    font-weight: bold;
    font-size: calc(15px + 1vw);
  }
`;

export const BHContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: start;
  font-weight: bold;

  & > * {
    flex-grow: 1;
  }
`;

export const Row = styled.div`
  display: flex;
  margin-bottom: 5px;
  & :nth-child(2) {
    width: 85%;
  }
`;

export const RowHeader = styled.span`
  display: inline-block;
  flex: 1;
  margin-right: 5px;
`;

export const ImgContainer = styled.div`
  width: 500px;
  height: auto;
  margin-bottom: 50px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.35);
  }
`;

export const Wrapper = styled.div`
  display: inline-flex;
  & > * {
    margin-right: 15px;
  }
`;
