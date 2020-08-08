// 中间件可以在客户端和服务端都执行
export default function ({store, redirect}) {
  if (!store.state.user) {
    redirect('/login')
  }
}
