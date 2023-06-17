import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
align-content: center;
justify-content: space-between;
background-color: #ffffff;
width:280px;
height:60vh;
padding-top: 10px;
border-radius:8px;
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);

img{
  max-width: 120px;
}
`
export const Description = styled.span`
font-family: Montserrat;
text-align: center;
  font-size: 0.6em;
  font-weight: 300;
  color: #2C2C2C;
  `

export const ContainerInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 90%;
gap: 3px;

strong{
  text-align: center;
  font-size: 0.9em;
  font-weight: 500;
  font-family: Montserrat;
  color: #2C2C2C;
}
`
export const ContainerPrice = styled.div`
background-color:#373737;
padding: 5px;
border-radius: 6px;
margin: 0 0 6px 5px;

span{
  font-size: 0.9em;
  font-weight: 700;
  color: #ffffff;
}
`

export const BtnContainer = styled.button`
display: flex;
align-items: center;
justify-content: center;
background-color: #0F52BA;
width: 100%;
height: 25px;
border-radius:0 0 8px 8px;
border: none;
cursor: pointer;

span{
font-size:14px;
font-family: Montserrat;
font-weight: 600;
margin-left: 8px;
color: #ffffff;
}

img{
  max-width: 12px;
  margin-bottom: 4px;
}
`