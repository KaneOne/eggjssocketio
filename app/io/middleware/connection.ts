import { Context } from 'egg';

// 这里是你自定义的中间件
export default function connectionMiddleware(): any {
  return async (ctx: Context, next: () => Promise<any>) => {
    // 你可以获取 config 的配置：
    // const config = ctx.app.config;
    // config.xxx....
    ctx.socket.emit('res', 'connected!');
    await next();
    console.log('disconnection!');
  };
}