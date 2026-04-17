import './css/globals.css';
import Header from './components/Header';
import Product from './components/Product';
import Manage from './components/Manage';

function App() {

  return (
    <div className="app">
      <Header />
      <main className="main">
        <Product />
        <Manage />
      </main>
    </div>
  )
}

export default App;