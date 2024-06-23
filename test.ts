// 提供了一个数组结构的 data，要求实现一个 query 方法，返回一个新
// 的数组，query 方法内部有 过滤、排序、分组 等操作，并且支持链式调
// 用，调用最终的 execute 方法返回结果：

// const result = query(list)
//   .where(item => item.age > 18)
//   .sortBy('id')
//   .groupBy('name')
//   .execute();

// console.log(result);

// function query<T = any>(l: T[]) {
//   this.data = l;
//   const that = this;
//   this.where = function(cb) {
//     this.data = this.data.filter(cb);
//     return this;
//   };
//   this.sortBy = function(key) {
//     this.data = this.data.sort((a, b) => a[key] - b[key]);
//     return this;
//   }
//   this.groupBy = function(key) {
//     const groups = {};
//     this.data.forEach(item => {
//       if (Object.keys(item as any).includes(key)) {
//         if (Object.keys(groups).includes(key)) {
//           groups[key].push(item);
//         } else {
//           groups[key] = [];
//         }
//       }
//     });
//     this.data = groups;
//     return this;
//   }
//   this.execute = function () {
//     return this.data;
//   }
//   // function where(cb: (value: T, index: number, array: T[]) => boolean) {
//   //   l = l.filter(cb);
//   //   return that;
//   // };
//   // function sortBy(key) {};
//   // function groupBy(key) {};
//   // function execute() {};
//   // return {
//   //   where,
//   //   sortBy,
//   //   groupBy,
//   //   execute,
//   // };
// }

// query([1,2,3]);

class Query<T = any> {
  data: T[] | { [key: string]: any[] };
  constructor(l) {
    this.data = l;
  };
  where(cb: (value: T, index: number, array: T[]) => boolean) {
    if (this.data instanceof Array) {
      this.data = this.data.filter(cb);
    }
    return this;
  };
  sortBy(key) {
    if (this.data instanceof Array) {
      this.data = this.data.sort((a, b) => a[key] - b[key]);
    }
    return this;
  };
  groupBy(key) {
    const groups = {};
    if (this.data instanceof Array) {
      this.data.forEach(item => {
        if (Object.keys(item as any).includes(key)) {
          if (Object.keys(groups).includes(key)) {
            groups[key].push(item);
          } else {
            groups[key] = [];
          }
        }
      });
      this.data = groups;
    }
    return this;
  };
  execute() {
    return this.data;
  };
};


function query(l) {
  this.data = l;
};

query.prototype.where = function(cb) {
  this.data = this.data.filter(cb);
  return this;
};
query.prototype.sortBy = function(key) {}

query.prototype.groupBy = function(key) {}

query.prototype.execute = function() {
  return this.data;
}
// //     where,
// //     sortBy,
// //     groupBy,
// //     execute,

// query([1,2,3]).sort()
const a = new query([1,2,3]);
