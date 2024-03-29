import { Link } from 'react-router-dom';

const Page = () => {
  return <div>
    <h1>这是 vite-app 的 viteHome 页面</h1>
    <Link to="/user">去 viteUser 页</Link>
  </div>
};

export default Page;
