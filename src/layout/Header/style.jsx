import styled from "styled-components";

export const Container = styled.header`
display: flex;
height: 60px;
width: 100vw;
margin: 0;
background-color:#0F52BA ;
align-items: center;
justify-content: space-around;
gap: 20%;
`;

export const Logo = styled.div`
display: flex;
height: 30px;
width: 200px;
display: flex;
align-items: flex-end;
justify-content: center;


h1{
  font-size:27px;
  font-family: montserrat;
  font-weight: 700;
  color: white;
}

.logodetail{
  text-align: end;
  font-size:16px;
  font-weight: 300;
  margin:0 5px 4px
}
`

export const ContainerBtn = styled.button`
display:flex;
align-items: center;
justify-content: space-evenly;
width: 5em;
height: 2.5em;
background-color: #ffffff;
border: none;
padding: 5px;
border-radius:8px;
cursor: pointer;

img{
  max-width: 20px;
padding-top:6px;
}

span{
font-family: Montserrat;
font-weight:700;
font-size: 17px;
color: black;
padding-right: 14px;
}
`