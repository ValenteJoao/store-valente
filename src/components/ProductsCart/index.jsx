import { useContext } from 'react';
import { Container, Btnclose, ContentAmount } from './style'
import { CartContext } from '../../context/cartContext';
import close from '../../assets/icon/close.svg'

function ProductsCart({ id, img, name, price, quantity }) {
  const { changeQuantityItems, removeFromCart } = useContext(CartContext);

  const totalPrice = price * quantity;

  const handleDecrement = () => {
    changeQuantityItems(id, 'decrement');
  };

  const handleIncrement = () => {
    changeQuantityItems(id, 'increment');
  };

  return (
    <Container>
      <Btnclose onClick={() => removeFromCart(id)} src={close} />
      <div>
        <img src={img} alt={name} />
        <p>{name}</p>
      </div>
      <ContentAmount>
        <p>Qtd:</p>
        <div>
          <button onClick={handleDecrement}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
      </ContentAmount>
      <p className='priceProduct'>
        {totalPrice.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}
      </p>
    </Container>
  );
}

export default ProductsCart;