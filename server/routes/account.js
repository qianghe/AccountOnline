const data = require('../data/index.js');
const router = require('koa-router')()
const accountContoller = require('../controller/account');

router.prefix('/account')

router.get('/list', function (ctx, next) {
  ctx.body = data.accountItems;
});

router.get('/tags', function (ctx, next) {
  ctx.body = data.tagList;
});

router.post('/add', accountContoller.createAccount);

router.get('/chartData', function (ctx, next) {
  console.log('type:', ctx.query.type);
  ctx.body = data[ctx.query.type];
});

module.exports = router;
