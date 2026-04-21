import './css/globals.css';
import Header from './components/Header';
import Product from './components/Product';
import Manage from './components/Manage';
import Works from './components/Works';
import Footer from './components/Footer';
import Carrusel from './components/Carrusel';

function App() {

  return (
    <>
      <Header />
      <div className="app">
        <main className="main">
          <Product />
          <Manage />
          <Carrusel />
        </main>
      </div>
      <Works />
      <Footer />
    </>
  )
}

export default App;