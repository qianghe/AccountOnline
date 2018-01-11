const data = require('../data/index.js');
const router = require('koa-router')()

router.prefix('/account')

router.get('/list', function (ctx, next) {
  ctx.body = data.accountItems;
});

module.exports = router;
