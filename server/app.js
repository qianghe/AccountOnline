const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const cors = require('koa-cors');
const logger = require('koa-logger')

const index = require('./routes/index')
const users = require('./routes/users')
const account = require('./routes/account')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))
app.use(cors({
  origin: function(ctx) {
    if (ctx.header.origin.indexOf('hqiswonder') !== -1) {
      return ctx.header.origin;
    }
    return '*';
  },
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE', 'OPTION'],
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(account.routes(), account.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
