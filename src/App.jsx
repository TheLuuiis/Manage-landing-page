import './css/globals.css';
import Header from './components/Header';
import Product from './components/Product';
import Manage from './components/Manage';

function App() {

  return (
    <div className="container">
      <Header />
      <div className="app">
        <main className="main">
          <Product />
          <Manage />
        </main>
      </div>
    </div>
  )
}

export default App;