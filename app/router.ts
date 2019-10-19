import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router,io } = app;

  router.get('/', controller.home.index);
  io.of('/chat').route('chat',io.controller.chat.index);
  
}; 
