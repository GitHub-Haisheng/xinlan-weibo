const router = require('koa-router')();

router.get('/', async (ctx, next) => {
  // ctx.render 渲染引擎模板
  // await 等待模板文件的数据返回再渲染
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    msg: '你好',
    isMe: false,
    blogList: [
      { id: 1, title: 'aaa' },
      { id: 2, title: 'aaa' },
      { id: 3, title: 'aaa' },
    ],
  });
});

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json',
  };
});

module.exports = router;
