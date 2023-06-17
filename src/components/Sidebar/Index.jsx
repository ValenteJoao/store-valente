import { useContext } from 'react';
import { Container, Content, Btn, ContainerTotal, ContentProducts } from './style';
import ProductsCart from '../ProductsCart';
import { CartContext } from '../../context/cartContext';
import close from '../../assets/icon/close.svg';

function Sidebar({ active }) {
  const { cartItems, calculateTotal } = useContext(CartContext);

  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container>
      <Content>
        <p>Carrinho de compras</p>
        <img src={close} alt="Close" onClick={closeSidebar} />
      </Content>
      <ContentProducts>
        {cartItems.length === 0 ? (
          <p>Sem produtos no carrinho!</p>
        ) : (
          cartItems.map((product) => (
            <ProductsCart
              id={product.id}
              key={product.id}
              img={product.photo}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))
        )}
      </ContentProducts>
      <ContainerTotal>
        <p>Total:</p>
        <p>
          {calculateTotal().toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
      </ContainerTotal>
      <Btn>
        <p>Finalizar Compra</p>
      </Btn>
    </Container>
  );
}

export default Sidebar;
