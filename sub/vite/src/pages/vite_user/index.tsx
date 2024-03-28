import { Link } from 'react-router-dom';

const Page = () => {
  return <div>
    <h1>这是 vite-app 的 user 页面</h1>
    <Link to="/home">去 home 页</Link>
  </div>
};

export default Page;
