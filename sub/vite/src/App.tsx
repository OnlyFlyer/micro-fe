import reactLogo from './assets/react.svg'
import { Routes, Route, Link } from 'react-router-dom';
import viteLogo from '/vite.svg'
import './App.css'

import Home from './pages/vite_home';
import User from './pages/vite_user';
import PageA from './pages/vite_a';
import NotFound from './pages/404/index';

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='user' element={<User />} />
          <Route path='a' element={<PageA />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <h1>Vite</h1>
        <Link to="/home">去 home 页</Link>
        <Link to="/user">去 user 页</Link>
        <Link to="/a">去 a 页</Link>
    </>
  )
}

export default App
