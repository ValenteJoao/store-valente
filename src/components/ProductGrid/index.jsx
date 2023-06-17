import { useEffect, useState } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { supabase } from '../../services/api';
import { Container, ContainerProducts } from './style';
import Products from '../Products';

function ProductGrid() {
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const { data } = await supabase.from('store').select();
      if (data) {
        setListProducts(data);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  const slideLeft = () => {
    const slider = document.getElementById('slider');
    if (slider) {
      slider.scrollLeft -= 290;
    }
  };

  const slideRight = () => {
    const slider = document.getElementById('slider');
    if (slider) {
      slider.scrollLeft += 290;
    }
  };

  return (
    <Container>
      <button className='btn' style={{ backgroundColor: 'transparent', border: 'none' }}>
        <BsFillArrowLeftCircleFill onClick={slideLeft} className="arrow" fill="black" size={25} />
      </button>
      <ContainerProducts id="slider">
      <div>
        {listProducts.map((product) => (
          <Products
            product={product}
            key={product.id}
            photo={product.photo}
            name={product.name}
            price={Number(product.price)}
            description={product.description}
          />
        ))}
        </div>
      </ContainerProducts>
      <button className='btn' style={{ backgroundColor: 'transparent', border: 'none' }}>
        <BsFillArrowRightCircleFill onClick={slideRight} className="arrow" fill="black" size={25} />
      </button>
    </Container>
  );
}

export default ProductGrid;