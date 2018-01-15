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

const tagList = {
  respCode: 10001,
  respMsg: 'success',
  respData: [{
    id: 1,
    text: '餐饮',
  }, {
    id: 2,
    text: '网购',
  }, {
    id: 3,
    text: '娱乐',
  }, {
    id: 4,
    text: '旅行',
  }, {
    id: 5,
    text: '礼尚往来'
  }, {
    id: 6,
    text: '美容',
  }, {
    id: 7,
    text: '健身',
  }, {
    id: 8,
    text: '零食',
  }],
};

const pie = {
  respCode: 10001,
  respMsg: 'success',
  respData: [{
    tag: '餐饮',
    cost: 12,
  }, {
    tag: '娱乐',
    cost: 80,
  }, {
    tag: '旅行',
    cost: 110,
  }, {
    tag: '零食',
    cost: 21,
  }],
};

module.exports = {
  accountItems,
  tagList,
  pie,
};
