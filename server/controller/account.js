module.exports = {
  async createAccount (ctx) {
    const { time, cost, tagId, mark } = ctx.request.body;

    ctx.body = {
      respCode: 10001,
      respMsg: 'success',
      respData: {
        id: 5,
      },
    };
  }
};
