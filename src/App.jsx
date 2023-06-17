import { CartProvider } from './context/cartContext'
import Footer from './layout/Footer'
import Header from './layout/Header'
import Home from './pages/Home/Index'

function App() {

  return (
    <CartProvider>
      <Header />
      <Home></Home>
      <Footer />
    </CartProvider>
  )
}

export default App
