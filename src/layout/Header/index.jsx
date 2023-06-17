import { useContext, useState } from 'react';
import cart_icon from '../../assets/icon/cart_icon.svg';
import { Container, Logo, ContainerBtn } from './style';
import Sidebar from '../../components/Sidebar/Index';
import { CartContext } from '../../context/cartContext';

function Header() {
  const [sidebar, setSidebar] = useState(false);
  const { totalQuantity } = useContext(CartContext);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <Container>
      <Logo>
        <h1>VALENTE</h1>
        <h1 className='logodetail'>SHOP</h1>
      </Logo>
      <ContainerBtn onClick={showSidebar}>
        <img src={cart_icon} alt='Cart Icon' />
        <span>{totalQuantity()}</span>
      </ContainerBtn>
      {sidebar && <Sidebar active={setSidebar} />}
    </Container>
  );
}

export default Header;