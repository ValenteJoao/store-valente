import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Função para adicionar um produto ao carrinho
  function addToCart(product) {
    // Verifica se o item já existe no carrinho com base no seu id
    const itemExists = cartItems.some(item => item.id === product.id);

    if (itemExists) {
      // Se o item já existe, atualiza sua quantidade no carrinho
      setCartItems(prevCartItems =>
        prevCartItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // Se o item ainda não existe, adiciona-o ao carrinho com quantidade 1
      setCartItems(prevCartItems => [...prevCartItems, { ...product, quantity: 1 }]);
    }
  }

  // Função para alterar a quantidade de um item no carrinho
  function changeQuantityItems(productId, change) {
    setCartItems(prevCartItems =>
      prevCartItems.map(item =>
        item.id === productId
          ? {
            ...item,
            quantity: item.quantity + (change === 'decrement' ? -1 : 1),
          }
          : item
      ).filter(item => item.quantity > 0)
    );
  }

  // Função para remover um item do carrinho
  function removeFromCart(productId) {
    setCartItems(prevCartItems =>
      prevCartItems.filter(item => item.id !== productId)
    );
  }

  // Função para calcular o valor total do carrinho
  function calculateTotal() {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  // Função para calcular a quantidade total de itens no carrinho
  function totalQuantity() {
    return cartItems.reduce((sum, cart) => sum + cart.quantity, 0);
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, changeQuantityItems, removeFromCart, calculateTotal, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
