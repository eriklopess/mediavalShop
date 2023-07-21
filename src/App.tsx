import './App.css';

import { Routes, Route } from 'react-router-dom'
import InitialPage from './pages/initialPage/InitialPage'
import Shop from './pages/shop/Shop';
import Header from './components/header/Header'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<InitialPage />}/>
        <Route path='/Shop' element={<Shop />}/>
      </Routes>
    </div>
  )
}

export default App
