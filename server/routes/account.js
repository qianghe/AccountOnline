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

module.exports = router;
