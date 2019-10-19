import { Controller } from 'egg';

export default class chatController extends Controller {
  public async index() {
    const {ctx} = this;
    const message = ctx.args[0];
    await ctx.socket.emit('res', `Hi! I've got your message: ${message}`);
  }
}
