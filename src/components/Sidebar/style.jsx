import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
position: fixed;
background-color:#0F52BA ;
top: 0;
right: 0;
width: 400px;
height: 100vh;
z-index: 99;
box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

`

export const Content = styled.div`
display: flex;
align-items: flex-start;
justify-content: space-between;
width: 340px;
margin-top: 30px;

>p{
  font-size: 25px;
  font-weight: 700;
}

>img{
  max-width:30px;
}

.closeButton{
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover{
    scale:90%
  }
}
`

export const Btn = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: black ;
width: 100%;
height: 70px;
cursor: pointer;

>p{
  font-size: 20px;
  font-weight: 700;
}
`

export const ContainerTotal = styled.div`
font-size: 20px;
font-weight: 700;
display: flex;
justify-content:space-between;
align-items: center;
width: 340px;
padding-top: 60px;
`

export const ContentProducts = styled.div`
display: flex;
flex-direction: column;
height: 320px;
padding-top: 10px;
width: 350px;
margin: 10px 0 0 20px;
overflow-y: auto;
overflow-x: hidden;

::-webkit-scrollbar {
    width: 4px;
  }
::-webkit-scrollbar-track {
    background: #ababab;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    border-radius: 5px;
  }
`