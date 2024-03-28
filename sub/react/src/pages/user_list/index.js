import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';
import { Avatar, List, Skeleton } from 'antd';

function getUserList(count) {
  return fetch(`https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`)
  .then((res) => res.json())
  .then(res => res.results);
};

const Page = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const init = async () => {
    setLoading(true);
    const _list = await getUserList(20);
    setList(_list);
    setLoading(false);
  };

  useEffect(() => {
    init();
  }, []);
  console.log(list, '--23');

  return (
    <Spin spinning={loading}>
      <h1>这是 react-app 的 UserList 页面</h1>
      <List
        dataSource={list}
        renderItem={(item) => {
          return (
            <List.Item
                actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
              >
                <Skeleton avatar title={false} loading={item.loading} active>
                  <List.Item.Meta
                    avatar={<Avatar src={item.picture.large} />}
                    title={<a href="https://ant.design">{item.name?.last}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                  <div>content</div>
                </Skeleton>
              </List.Item>
          );
        }}
      />
    </Spin>
  );
};

export default Page;
