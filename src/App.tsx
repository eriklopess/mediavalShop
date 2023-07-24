import { useState } from 'react';

import { Routes, Route } from 'react-router-dom'
import InitialPage from './pages/initialPage/InitialPage'
import Header from './components/header/Header'
import LoginPage from './pages/loginPage/LoginPage';
import Register from './components/loginComponents/Register';
import Swords from './components/ShopComponents/swords/Swords';
import Helmets from './components/ShopComponents/helmets/Helmets';
import Greaves from './components/ShopComponents/greaves/Greaves';
import Daggers from './components/ShopComponents/daggers/Daggers';
import Armors from './components/ShopComponents/armors/Armors';
import Cart from './components/cart/Cart';

import './App.css';
function App() {

  const [cartOn, setCartOn] = useState<boolean>(false)

  return (
    <div>
      <Header />
      <Cart />
      <Routes>
        <Route path='/' element={<InitialPage />}/>
        <Route path='/Login' element={<LoginPage />}/>
        <Route path='/Login/Register' element={<Register />}/>
        <Route path='/category/:category' element={<Category />} />
      </Routes>
    </div>
  )
}

export default App
