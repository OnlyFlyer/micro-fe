import { Routes, Link, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import PageA from './pages/a';
import PageB from './pages/b';
import PageC from './pages/c';
import Home from './pages/home';
import User from './pages/user';
import NotFound from './pages/404';

function Temp() {
  return <></>
};

function App() {
  return (
    <div className="App">
      <h1>Hello, React Router!</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='user' element={<User />} />
          <Route path='a' element={<PageA />} />
          <Route path='b' element={<PageB />} />
          <Route path='c' element={<PageC />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <h1>App</h1>
        <Link to="/home">去 home 页</Link>
        <Link to="/user">去 user 页</Link>
        <Link to="/a">去 a 页</Link>
        <Link to="/b">去 b 页</Link>
        <Link to="/c">去 c 页</Link>
      </header>
    </div>
  );
}

export default App;
