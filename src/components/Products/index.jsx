import { useContext } from 'react';
import { Container, ContainerPrice, Description, ContainerInfo, BtnContainer } from './style';

import shopping_bag from '../../assets/icon/shopping_bag.svg';
import { CartContext } from '../../context/cartContext';

function Products({ photo, name, price, description, product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <Container>
      <img src={photo} alt={name} />

      <ContainerInfo>
        <strong>{name}</strong>
        <Description>{description}</Description>
      </ContainerInfo>

      <ContainerPrice>
        <span>{price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
      </ContainerPrice>

      <BtnContainer onClick={() => addToCart(product)}>
        <img src={shopping_bag} alt="Sacola de compra" />
        <span>Adicionar ao carrinho</span>
      </BtnContainer>
    </Container>
  );
}

export default Products;