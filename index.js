const Koa = require('koa')
const app = new Koa()
const router = require('@koa/router')()
const bodyParser = require("koa-bodyparser")
const dishRoutes = require('./src/routes/dishRoutes')

app.use(bodyParser());

router.get('/echo', (ctx) => {
  ctx.body = 'hello'
  //ctx.body = ctx.request.query.message
})

router.use((ctx, next) => {
  console.log('middleware', ctx.request)
  return next()
})

router.post('/dish', dishRoutes.updateDish)

app.use(router.routes())

app.listen(1800)