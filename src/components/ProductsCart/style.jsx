import styled from "styled-components";

export const Container = styled.div`
position:relative;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
background-color: white;
width: 330px;
height: 70px;
border-radius:8px;
margin-bottom: 10px;
border: solid 1px black;

div{
  display: flex;
  align-items: center;
}
div>img{
  margin: 7px;
  max-width: 45px;
}
p{
  font-size: 12px;
  color: black;
  width: 83px;
}

.priceProduct{
  text-align:right;
  font-size: 14px;
  font-weight: 700;
  color: black;
  width:27%;
  margin-right: 15px;
}
`;

export const Btnclose = styled.img`
  position: absolute;
  cursor: pointer;
  max-width: 20px;
  right: -9px;
  top: -9px;
  z-index: 99;
`

export const ContentAmount = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 70px;

>p{
  font-size: 9px;
  font-weight: 400;
  color: black;
  width: 50px;
  margin-bottom: 2px;
}

>div{
display: flex;
flex-direction: row;
border-radius: 5px;
gap:2px;
border: 1px solid #444444;
border-radius: 5px;
padding:2px;

span,button{
  text-align:center;
  color: black;
  font-size: 10px;
  background-color: white;
}

span{
width:17px;
border-right:1px solid #444444;
border-left:1px solid #444444;
}

button{
  width: 15px;
  cursor: pointer;
  border:none;
}

}


.detailbtn{
border: none;
}

.btnCursor{
  cursor: default;
}
`