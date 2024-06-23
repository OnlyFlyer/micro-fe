# 微前端 demo 用于学习交流

主应用：Webpack + react ✅
  1. 端口：2001

子应用：

  1. Webpack + react ✅
     1. port: 5001
  2. vite + react ✅
     1. port: 3001
     2. 最开始报错 outside module，通过 https://juejin.cn/post/7263457589810708537#heading-36 解决问题，能够正常启动
  3. swc + vue ✅
     1. port: 4001
  5. vite + vue ✅
     1. port: 6001
     2. 报错同 vite + react，解决方式也一样，通过 vite-plugin-qiankun 解决


# 运行

## 主应用

```bash

$ cd main/
$ npm run dev

```

## 子应用

```bash

## react 子应用
$ cd sub/react
$ npm run dev

## vite 子应用
$ cd sub/vite
$ npm run dev


## swc 子应用
$ cd sub/swc
$ npm run dev

## vue 子应用
$ cd sub/vue
$ npm run dev

```

主应用 路由: /main
子应用 路由: /main/react 、/main/vue、/main/swc、/main/vite
