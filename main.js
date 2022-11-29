const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = `<h1>Hello Veracity!</h1>
              <br>
              <img src="https://media.tenor.com/21qGFVTL5NoAAAAC/ok-mario.gif" alt="Mario waves ok" width="314" height="270"></img>`;
});

app.listen(3000);