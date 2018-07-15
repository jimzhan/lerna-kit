import Koa from 'koa'

const app = new Koa()

app.use(async (ctx) => {
  ctx.body = 'lerna-api'
})

app.listen(9394)
