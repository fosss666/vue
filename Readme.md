



* > 1.所被Vue管理的函数，最好写成普通函数，这样this的指向才是vm 或 组件实例对象。
  >
  > ​              2.所有不被Vue所管理的函数（定时器的回调函数、ajax的回调函数等、Promise的回调函数），最好写成箭头函数，
  >
  > ​                这样this的指向才是vm 或 组件实例对象。

