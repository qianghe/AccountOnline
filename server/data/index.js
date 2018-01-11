const accountItems = {
  respCode: 10001,
  repMsg: 'success',
  respData: [{
    id: 2,
    time: 1515340800,
    total: 92,
    lists: [{
      name: '餐饮',
      cost: 12,
      mark: '',
    }, {
      name: '娱乐',
      cost: 80,
      mark: '和盆友看电影',
    }],
  }, {
    id: 3,
    time: 1515168000,
    total: 131,
    lists: [{
      name: '餐饮',
      cost: 110,
      mark: '同学聚会哦',
    }, {
      name: '餐饮',
      cost: 21,
      mark: '采购蔬菜',
    }],
  }]
};

module.exports = {
  accountItems,
};
