import { Link } from 'react-router-dom';

const Page = () => {
  return <div>
    <h1>这是 vite-app 的 home 页面</h1>
    <Link to="/user">去 user 页</Link>
  </div>
};

export default Page;
