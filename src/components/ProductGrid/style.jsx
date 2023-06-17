import styled from "styled-components";

export const ContainerProducts = styled.div`
 display: flex;
  height: 60vh;
  width: 85vw;
  overflow: hidden;
  scroll-behavior: smooth;

  @media screen and (max-width: 850px) {
    overflow: visible;
    overflow-x: scroll;
    overflow-y: hidden;
    height: 65vh;
  }

  div{
    display: flex;
    column-gap:10px;
  }
  `
export const Container = styled.main`
width: 78vw;
display: flex;
flex-direction: row;
align-items: center;
justify-items: center;
gap: 20px;

@media screen and (max-width: 850px) {
  width: 80vw;
  }

.btn {
  @media screen and (max-width: 850px) {
    display: none;
  }
}

.arrow{
cursor: pointer;
}

`